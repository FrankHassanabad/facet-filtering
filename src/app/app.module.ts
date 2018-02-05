import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgxUIModule } from '@swimlane/ngx-ui';

import { ItemComponent } from './item/item.component';
import { CategoryComponent } from './category/category.component';
import { FilterDisplayComponent } from './filter-display/filter-display.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    CategoryComponent,
    SubcategoryComponent,
    FilterDisplayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxUIModule,
    FlexLayoutModule
  ],
  exports: [
    AppComponent,
    ItemComponent,
    CategoryComponent,
    SubcategoryComponent,
    FilterDisplayComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
