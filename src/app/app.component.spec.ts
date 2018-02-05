import { TestBed, async } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

import { ItemComponent } from './item/item.component';
import { CategoryComponent } from './category/category.component';
import { FilterDisplayComponent } from './filter-display/filter-display.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { NgxUIModule } from '@swimlane/ngx-ui';

describe('AppComponent', () => {
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

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Facet Filtering'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Facet Filtering');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Facet Filtering');
  }));
});
