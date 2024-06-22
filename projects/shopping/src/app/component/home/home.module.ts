import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CdkDropListGroup, CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
    CdkDropListGroup, CdkDropList, CdkDrag,
    RouterModule.forChild([
      {
        path: "",
        component: HomeComponent,
      }
    ])
  ],
})
export class HomeModule { }
