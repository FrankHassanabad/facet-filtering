import {
  Attribute,
  Item,
} from './item/Item';

import {
  Subcategory,
} from './subcategory/Subcategory';

import {
  Category,
} from './category/Category';

import {
  Filter,
} from './filter-display/Filter';

export const getFiltersFromFilter = (
  filters: Filter[],
  filter: string
): Filter[] =>
  filters.filter(({ category : { title } }) => title !== filter);

export const getCategoriesFromFilter = (
  categories: Category[],
  filter: string
): Category[] =>
  categories.map(category => {
    if (category.title === filter) {
      category.stats.aggregates = category.stats.aggregates.map(singleAggregate => {
        singleAggregate.isFiltered = false;
        return singleAggregate;
      });
    }
    return category;
  });

export const getCategoryFilters = (
  filters: Filter[]
): string[] =>
  filters.reduce((accum, filter) => {
    if (!accum.some(item => item === filter.category.title)) {
      accum = accum.concat(filter.category.title);
    }
    return accum;
  }, []);

export const getCurrentFilters = (
  filters: Filter[],
  newFilter: Filter
): Filter[] => {
  if (newFilter.isFiltered) {
    return filters.concat(newFilter);
  } else {
    return filters.filter(({ subcategory }) => subcategory !== newFilter.subcategory);
  }
};

export const shouldGetItemFromFilter = (
  filters: Filter[],
  item: Item
): boolean =>
  filters.some(({ category, subcategory }) => {
    const attribute = item.attributes.find(({name}) => name === category.title);
    return attribute.value >= subcategory.min && attribute.value <= subcategory.max;
  });

export const getItemsFromFilter = (
  filters: Filter[],
  items: Item[]
): Item[] => {
  if (filters.length === 0) {
    return items;
  } else {
    return items.filter(item => shouldGetItemFromFilter(filters, item));
  }
};
