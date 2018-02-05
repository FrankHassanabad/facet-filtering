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
}

export const carsToItems = (
  carsToTransform: Car[]
): Item[] =>
  carsToTransform
    .map(car => ({
      text: car.name,
      attributes: carToAttributes(car)
  }));

export const carToAttributes = (
  car: Car
): Attribute[] => {
  return Object
    .entries(car)
    .filter(([key, value]) =>
      key !== 'name'
    )
    .map(([key, value]) => ({
      name: key,
      value
    }));
};

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