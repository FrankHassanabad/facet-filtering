import * as filters from './filters';

import {
  Filter,
} from './filter-display/Filter';

import {
  Subcategory,
} from './subcategory/Subcategory';

import {
  Category,
} from './category/Category';

import {
  Item,
} from './item/Item';

let mockSubcategory: Subcategory;
let mockCategory: Category;
let mockFilter: Filter;
let mockItem: Item;

describe('filters', () => {
  beforeEach(() => {
    mockSubcategory = {
      isFiltered: false,
      count: 0,
      min: 0,
      max: 0
    };
    mockCategory = {
      title: '',
      max: 0,
      min: 0,
      stats: {
        aggregates: [],
        count: {}
      }
    };
    mockFilter = {
      isFiltered: false,
      category: mockCategory,
      subcategory: mockSubcategory,
    };
    mockItem = {
      attributes: [{ name: '', value: 0}]
    };
  });

  describe('#getFiltersFromFilter', () => {
    it('should return 0 filters when the titles equal each other', () => {
      mockFilter.category.title = 'title1';
      expect(filters.getFiltersFromFilter([mockFilter], 'title1')).toEqual([]);
    });

    it('should return 1 filter when 1 title does not equal 1 other', () => {
      mockFilter.category.title = 'title1';
      expect(filters.getFiltersFromFilter([mockFilter], 'title2')).toEqual([mockFilter]);
    });

    it('should return 1 filter when 1 title does not equal 1 other title', () => {
      const mockFilter2 = {...mockFilter, category: {...mockCategory, title: 'title2'} };
      mockFilter.category.title = 'title1';
      expect(filters.getFiltersFromFilter([mockFilter, mockFilter2], 'title2')).toEqual([mockFilter]);
    });
  });

  describe('#getCategoriesFromFilter', () => {
    it('should return isFiltered set to true when the titles do not equal each other', () => {
      mockCategory.title = 'title1';
      mockCategory.stats.aggregates = [{
        isFiltered: true,
        count: 0,
        min: 0,
        max: 0,
      }];
      expect(
        filters.getCategoriesFromFilter([mockCategory], 'title2')[0]
        .stats.aggregates[0].isFiltered
      ).toEqual(true);
    });

    it('should return isFiltered set to false when the titles do not equal each other', () => {
      mockCategory.title = 'title1';
      mockCategory.stats.aggregates = [{
        isFiltered: true,
        count: 0,
        min: 0,
        max: 0,
      }];
      expect(
        filters.getCategoriesFromFilter([mockCategory], 'title1')[0]
        .stats.aggregates[0].isFiltered
      ).toEqual(false);
    });
  });

  describe('#getCategoryFilters', () => {
    it('should return a category filter of its title', () => {
      mockFilter.category.title = 'title1';
      expect(filters.getCategoryFilters([mockFilter])).toEqual(['title1']);
    });

    it('should return two distinct titles when given two distinct titles', () => {
      mockFilter.category.title = 'title1';
      const mockFilter2 = {...mockFilter, category: {
        title : 'title2',
        max: 0,
        min: 0,
        stats: {
          aggregates: [],
          count: {}
        }
      }};
      expect(filters.getCategoryFilters([mockFilter, mockFilter2])).toEqual(['title1', 'title2']);
    });
  });

  describe('#getCurrentFilters', () => {
    it('should remove the filter when isFiltered is equal false', () => {
      expect(filters.getCurrentFilters([mockFilter], mockFilter)).toEqual([]);
    });

    it('should add a new filter when isFiltered is equal true', () => {
      mockFilter.isFiltered = true;
      expect(filters.getCurrentFilters([], mockFilter)).toEqual([mockFilter]);
    });

    it('should add the filter to an existing filter when isFilterred is equal true', () => {
      mockFilter.isFiltered = true;
      expect(filters.getCurrentFilters([mockFilter], mockFilter)).toEqual([mockFilter, mockFilter]);
    });
  });

  describe('#getItemsFromFilter', () => {
    it('should get an item from the filter when their titles equal each other', () => {
      expect(filters.getItemsFromFilter([mockFilter], [mockItem])).toEqual([mockItem]);
    });

    it('should return all the items if the filter is completly empty', () => {
      expect(filters.getItemsFromFilter([], [mockItem])).toEqual([mockItem]);
    });

    it('should return nothing if the values are different', () => {
      mockItem.attributes[0].value = 10;
      expect(filters.getItemsFromFilter([mockFilter], [mockItem])).toEqual([]);
    });

    it('should return the item on >= and <= edge case with middle of the range', () => {
      mockFilter.category.title = 'category1';
      mockFilter.subcategory.min = 1;
      mockFilter.subcategory.max = 3;
      mockItem.attributes[0].name = 'category1';
      mockItem.attributes[0].value = 2;
      expect(filters.getItemsFromFilter([mockFilter], [mockItem])).toEqual([mockItem]);
    });

    it('should return the item on >= edge case with left inclusive side of the range', () => {
      mockFilter.category.title = 'category1';
      mockFilter.subcategory.min = 1;
      mockFilter.subcategory.max = 3;
      mockItem.attributes[0].name = 'category1';
      mockItem.attributes[0].value = 1;
      expect(filters.getItemsFromFilter([mockFilter], [mockItem])).toEqual([mockItem]);
    });

    it('should return the item on <= edge case with right inclusive side of the range', () => {
      mockFilter.category.title = 'category1';
      mockFilter.subcategory.min = 1;
      mockFilter.subcategory.max = 3;
      mockItem.attributes[0].name = 'category1';
      mockItem.attributes[0].value = 3;
      expect(filters.getItemsFromFilter([mockFilter], [mockItem])).toEqual([mockItem]);
    });

    it('should NOT return the item on <= edge case with left side of the off the range by 1', () => {
      mockFilter.category.title = 'category1';
      mockFilter.subcategory.min = 1;
      mockFilter.subcategory.max = 3;
      mockItem.attributes[0].name = 'category1';
      mockItem.attributes[0].value = 0;
      expect(filters.getItemsFromFilter([mockFilter], [mockItem])).toEqual([]);
    });

    it('should NOT return the item on >= edge case with left side of the off the range by 1', () => {
      mockFilter.category.title = 'category1';
      mockFilter.subcategory.min = 1;
      mockFilter.subcategory.max = 3;
      mockItem.attributes[0].name = 'category1';
      mockItem.attributes[0].value = 4;
      expect(filters.getItemsFromFilter([mockFilter], [mockItem])).toEqual([]);
    });
  });

  describe('#shouldGetItemFromFilter', () => {
    it('should return true when the item is on >= and <= edge case with middle of the range', () => {
      mockFilter.category.title = 'category1';
      mockFilter.subcategory.min = 1;
      mockFilter.subcategory.max = 3;
      mockItem.attributes[0].name = 'category1';
      mockItem.attributes[0].value = 2;
      expect(filters.shouldGetItemFromFilter([mockFilter], mockItem)).toEqual(true);
    });

    it('should return true when the item is on >= edge case with left inclusive side of the range', () => {
      mockFilter.category.title = 'category1';
      mockFilter.subcategory.min = 1;
      mockFilter.subcategory.max = 3;
      mockItem.attributes[0].name = 'category1';
      mockItem.attributes[0].value = 1;
      expect(filters.shouldGetItemFromFilter([mockFilter], mockItem)).toEqual(true);
    });

    it('should return true when the item is on <= edge case with right inclusive side of the range', () => {
      mockFilter.category.title = 'category1';
      mockFilter.subcategory.min = 1;
      mockFilter.subcategory.max = 3;
      mockItem.attributes[0].name = 'category1';
      mockItem.attributes[0].value = 3;
      expect(filters.shouldGetItemFromFilter([mockFilter], mockItem)).toEqual(true);
    });

    it('should return false when the item is on <= edge case with left side of the off the range by 1', () => {
      mockFilter.category.title = 'category1';
      mockFilter.subcategory.min = 1;
      mockFilter.subcategory.max = 3;
      mockItem.attributes[0].name = 'category1';
      mockItem.attributes[0].value = 0;
      expect(filters.shouldGetItemFromFilter([mockFilter], mockItem)).toEqual(false);
    });

    it('should NOT return false when the item is on >= edge case with left side of the off the range by 1', () => {
      mockFilter.category.title = 'category1';
      mockFilter.subcategory.min = 1;
      mockFilter.subcategory.max = 3;
      mockItem.attributes[0].name = 'category1';
      mockItem.attributes[0].value = 4;
      expect(filters.shouldGetItemFromFilter([mockFilter], mockItem)).toEqual(false);
    });
  });
});
