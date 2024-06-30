import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionsComponent } from './collections.component';



@NgModule({
  declarations: [
    CollectionsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CollectionsComponent]
})
export class CollectionsModule { }
