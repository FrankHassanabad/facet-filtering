import { Component, EventEmitter, Input, Output } from '@angular/core';

import {
  Subcategory,
} from './Subcategory';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})

export class SubcategoryComponent {
  @Input() subcategory: Subcategory;
  @Output() filtered = new EventEmitter<{}>();

  filter(isFiltered) {
    this.subcategory.isFiltered = isFiltered;
    this.filtered.emit({
      subcategory: this.subcategory,
      isFiltered,
    });
  }
}
