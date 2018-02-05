import * as transforms from './transforms';

import {
  Car,
} from './transforms';

import {
  Item,
} from './item/Item';

import {
  Category,
} from './category/Category';

let mockCar: Car;
let mockItem: Item;
let mockCategory: Category;

describe('transforms', () => {
  beforeEach(() => {
    mockCar = {
      name: '',
      mpg: 0,
      cyl: 0,
      dsp: 0,
      hp: 0,
      lbs: 0,
      acc: 0,
      year: 0,
      origin: 0,
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
    mockItem = {
      text: '',
      attributes: [{ name: '', value: 0}]
    };
  });

  describe('#carsToItems', () => {
    it('should return cars to items', () => {
      mockItem.attributes = [
        {name: 'mpg', value: 0},
        {name: 'cyl', value: 0},
        {name: 'dsp', value: 0},
        {name: 'hp', value: 0},
        {name: 'lbs', value: 0},
        {name: 'acc', value: 0},
        {name: 'year', value: 0},
        {name: 'origin', value: 0},
      ];
      expect(transforms.carsToItems([mockCar])).toEqual([mockItem]);
    });
  });

  describe('#carToAttributes', () => {
    it('should return a array of car attributes', () => {
      expect(transforms.carToAttributes(mockCar)).toEqual([
        {name: 'mpg', value: 0},
        {name: 'cyl', value: 0},
        {name: 'dsp', value: 0},
        {name: 'hp', value: 0},
        {name: 'lbs', value: 0},
        {name: 'acc', value: 0},
        {name: 'year', value: 0},
        {name: 'origin', value: 0},
      ]);
    });
  });

  describe('#carsToCategories', () => {
    it('should return cars to categories', () => {
      expect(transforms.carsToCategories([mockCar], 1)).toEqual([
        {
          title: 'mpg',
          max: 0,
          min: 0,
          stats: {
            aggregates: [{
              count: 1,
              min: 0,
              max: 0,
              isFiltered: false,
            }],
            count: {0: 1}
          }
        },
        {
          title: 'cyl',
          max: 0,
          min: 0,
          stats: {
            aggregates: [{
              count: 1,
              min: 0,
              max: 0,
              isFiltered: false,
            }],
            count: {0: 1}
          }
        },
        {
          title: 'dsp',
          max: 0,
          min: 0,
          stats: {
            aggregates: [{
              count: 1,
              min: 0,
              max: 0,
              isFiltered: false,
            }],
            count: {0: 1}
          }
        },
        {
          title: 'hp',
          max: 0,
          min: 0,
          stats: {
            aggregates: [{
              count: 1,
              min: 0,
              max: 0,
              isFiltered: false,
            }],
            count: {0: 1}
          }
        },
        {
          title: 'lbs',
          max: 0,
          min: 0,
          stats: {
            aggregates: [{
              count: 1,
              min: 0,
              max: 0,
              isFiltered: false,
            }],
            count: {0: 1}
          }
        },
        {
          title: 'acc',
          max: 0,
          min: 0,
          stats: {
            aggregates: [{
              count: 1,
              min: 0,
              max: 0,
              isFiltered: false,
            }],
            count: {0: 1}
          }
        },
        {
          title: 'year',
          max: 0,
          min: 0,
          stats: {
            aggregates: [{
              count: 1,
              min: 0,
              max: 0,
              isFiltered: false,
            }],
            count: {0: 1}
          }
        },
        {
          title: 'origin',
          max: 0,
          min: 0,
          stats: {
            aggregates: [{
              count: 1,
              min: 0,
              max: 0,
              isFiltered: false,
            }],
            count: {0: 1}
          }
        }
      ]);
    });
  });
});
