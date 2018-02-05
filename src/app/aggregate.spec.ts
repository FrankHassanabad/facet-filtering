
import * as aggregate from './aggregate';

import {
  Car,
} from './transforms';

import {
  Category,
} from './category/Category';

import {
  Subcategory,
} from './subcategory/Subcategory';

let mockCar: Car;
let mockCategory: Category;
let mockSubcategory: Subcategory;

describe('aggregate', () => {
  beforeEach(() => {
    mockCar = {
      name: '',
      mpg: 0,
      cyl: 0,
      dsp: 0,
      hp: 0,
      lbs: 0,
      acc: 0
    };
    mockCategory = {
      title: '',
      max: 0,
      min: 0,
      stats: {
        aggregates: [],
        count: { 0: 1}
      }
    };
    mockSubcategory = {
      isFiltered: false,
      count: 0,
      min: 0,
      max: 0
    };
  });

  describe('#reduceCarsToCategories', () => {
    it('should reduce 1 car to a set of categories', () => {
      expect(aggregate.reduceCarsToCategories([mockCar])).toEqual({
        mpg: mockCategory,
        cyl: mockCategory,
        dsp: mockCategory,
        hp: mockCategory,
        lbs: mockCategory,
        acc: mockCategory,
      });
    });
  });

  describe('#createCategory', () => {
    it('should create a category and increase its count by 1', () => {
      expect(aggregate.createCategory(mockCategory, 0)).toEqual({
        title: '',
        max: 0,
        min: 0,
        stats: { aggregates: [], count: { 0: 2 }}
      });
    });
  });

  describe('#incrementCount', () => {
    it('should increment a count of a category that exists', () => {
      expect(aggregate.incrementCount(mockCategory, 0)).toEqual(2);
    });

    it('should start a count of 1 on a category that does not exist', () => {
      expect(aggregate.incrementCount(mockCategory, 1)).toEqual(1);
    });
  });

  describe('#aggregate', () => {
    it('should return a aggregate category', () => {
      expect(aggregate.aggregate([mockCategory], 5)).toEqual([mockCategory]);
    });

    it('should return a aggregate category that has more details', () => {
      mockCategory.max = 0;
      mockCategory.stats.count = {
        0: 1,
        1: 5,
        2: 4,
      };
      expect(aggregate.aggregate([mockCategory], 5)).toEqual([{
        title: '',
        max: 0,
        min: 0,
        stats: {
          aggregates: [{
            count: 1, min: 0, max: 0, isFiltered: false
          }, {
            count: 5, min: 1, max: 1, isFiltered: false
          }, {
            count: 4, min: 2, max: 2, isFiltered: false
          }, {
            // intentionally blank as this is a valid empty category
          }, {
            // itentionally blank as this is a valid empty category
          }],
          count: {
            0: 1,
            1: 5,
            2: 4,
          }
        }
      }]);
    });
  });
});
