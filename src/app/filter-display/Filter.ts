import {
  Category,
} from '../category/Category';

import {
  Subcategory,
} from '../subcategory/Subcategory';

export interface Filter {
  category: Category;
  isFiltered: boolean;
  subcategory: Subcategory;
}
