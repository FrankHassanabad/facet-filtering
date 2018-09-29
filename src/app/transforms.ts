import {
  aggregate,
  reduceCarsToCategories
} from './aggregate';

import {
  Category
} from './category/Category';

import {
  Attribute,
  Item,
} from './item/Item';

export interface Car {
  name: string;
  mpg: number;
  cyl: number;
  dsp: number;
  hp: number;
  lbs: number;
  acc: number;
  year: number;
  origin?: number;
}

export const carToAttributes = (
  car: Car
): Attribute[] => {
  return Object
    .entries(car)
    .filter(([key, value]) =>
      !['name', 'origin'].includes(key)
    )
    .map(([key, value]) => ({
      name: key,
      value
    }));
};

export const carsToItems = (
  cars: Car[]
): Item[] =>
  cars
    .map(car => ({
      text: car.name,
      attributes: carToAttributes(car)
      })
    );

export const toArray = (
  cars: any
): Category[] =>
  Object
  .entries(cars)
  .map(([key, value]) =>
    ({ ...value, title: key})
  );

export const carsToCategories = (
  cars: Car[],
  numberOfCategories: number,
): Category[] => {
  const carCategories = reduceCarsToCategories(cars);
  const carCategoriesArray = toArray(carCategories);
  const carCategoriesAggregate = aggregate(carCategoriesArray, numberOfCategories);
  return carCategoriesAggregate;
};
