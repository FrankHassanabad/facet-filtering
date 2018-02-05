import { Component } from '@angular/core';

// TODO: Change this to a Angular Service
import { cars } from './mock-cars';

import {
  getCurrentFilters,
  getItemsFromFilter,
  getCategoryFilters,
  getFiltersFromFilter,
  getCategoriesFromFilter,
} from './filters';

import {
  Filter,
} from './filter-display/Filter';

import {
  carsToItems,
  carToAttributes,
  carsToCategories,
  toArray,
} from './transforms';

import {
  Item,
} from './item/Item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Facet Filtering';
  items: Item[] = carsToItems(cars);
  originalItems: Item[] = this.items;
  categories = carsToCategories(cars, 5);
  filters: Filter[] = [];
  categoryFilters: string[] = [];

  filter = (event) => {
    this.filters = getCurrentFilters(this.filters, event);
    this.items = getItemsFromFilter(this.filters, this.originalItems);
    this.categoryFilters = getCategoryFilters(this.filters);
  }

  unfilter = (event) => {
    this.filters = getFiltersFromFilter(this.filters, event.filter);
    this.items = getItemsFromFilter(this.filters, this.originalItems);
    this.categoryFilters = getCategoryFilters(this.filters);
    this.categories = getCategoriesFromFilter(this.categories, event.filter);
  }
}
