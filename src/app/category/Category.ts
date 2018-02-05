import { Subcategory } from '../subcategory/Subcategory';

export interface Category {
  title: string;
  max: number;
  min: number;
  stats: {
    aggregates: Subcategory[],
    count: {}
  };
}
