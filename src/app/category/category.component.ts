import { Component, EventEmitter, Input, Output } from '@angular/core';

import {
  Category,
} from './Category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent {
  @Input() category: Category;
  @Output() filtered = new EventEmitter();

  filter($event) {
    this.filtered.emit({ ...$event, category: this.category });
  }
}
