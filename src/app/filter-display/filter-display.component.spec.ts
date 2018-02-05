import { TestBed, async } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from '../app.component';

import { ItemComponent } from '../item/item.component';
import { CategoryComponent } from '../category/category.component';
import { FilterDisplayComponent } from '../filter-display/filter-display.component';
import { SubcategoryComponent } from '../subcategory/subcategory.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { NgxUIModule } from '@swimlane/ngx-ui';

describe('FilterDisplayComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ItemComponent,
        CategoryComponent,
        SubcategoryComponent,
        FilterDisplayComponent
      ],
      imports: [
        FormsModule,
        NgxUIModule,
        FlexLayoutModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the component', async(() => {
    const fixture = TestBed.createComponent(FilterDisplayComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
