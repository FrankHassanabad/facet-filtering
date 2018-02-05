import {
  Car,
} from './transforms';

import {
  Category,
} from './category/Category';

import {
  Subcategory,
} from './subcategory/Subcategory';

// TODO: Handle -1 as a valid filter
export const reduceCarsToCategories = (
  cars: Car[]
): any =>
  cars.reduce((accum, car) => {
    Object
      .entries(car)
      .filter(([key, value]) =>
        typeof value === 'number' && value !== -1 && key !== 'origin')
      .map(([key, value]) => {
        accum[key] = createCategory(accum[key], value);
      });
    return accum;
  }, {} as any);

export const createCategory = (
  category: Category,
  value: number
): Category => {
  if (category == null) {
    return {
      title: '',
      min: value,
      max: value,
      stats: {
        aggregates: [],
        count: {
          [value]: 1
        }
      }
    };
  } else {
    category.min = Math.min(category.min, value);
    category.max = Math.max(category.max, value);
    category.stats.count[value] = incrementCount(category, value);
    return category;
  }
};

export const incrementCount = (
  category: Category,
  value: number
): number =>
  category.stats.count[value] != null ? category.stats.count[value] + 1 : 1;

export const aggregate = (
  categories: Category[],
  buckets: number
): Category[] =>
  categories.map(category => {
    const sortedKeys = Object.keys(category.stats.count).sort((a, b) => parseFloat(a) - parseFloat(b));
    const boundary = getBoundary(sortedKeys.length, buckets);
    const aggregates = Array(buckets).fill(null).map((_, i) => {
      const aggregateCount = aggregateCounts(sortedKeys.slice(boundary * i, boundary * (i + 1)), category.stats.count);
      return aggregateCount;
    });
    category.stats.aggregates = aggregates;
    return category;
  });

export const aggregateCounts = (
  sortedKeys: string[],
  counts: {}
): Subcategory =>
  sortedKeys.reduce((subcategory, key) => {
    const keyAsNum = parseInt(key, 10);
    subcategory.count = subcategory.count ? subcategory.count + counts[key] : counts[key];
    subcategory.min = subcategory.min ? Math.min(subcategory.min, keyAsNum) : keyAsNum;
    subcategory.max = subcategory.max ? Math.max(subcategory.max, keyAsNum) : keyAsNum;
    subcategory.isFiltered = false;
    return subcategory;
  }, {} as any);

export const getBoundary = (
  length: number,
  slices: number,
): number => {
  const boundary = Math.floor(length / slices);
  if (boundary === 0 ) {
    return 1;
  } else {
    return boundary;
  }
};
