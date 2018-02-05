import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Filter } from './Filter';

@Component({
  selector: 'app-filter-display',
  templateUrl: './filter-display.component.html',
  styleUrls: ['./filter-display.component.css']
})

export class FilterDisplayComponent {
  @Input() filter: Filter;
  @Output() unfiltered = new EventEmitter();

  unfilter($event) {
    this.unfiltered.emit({
      filter: this.filter,
      $event
    });
  }
}
