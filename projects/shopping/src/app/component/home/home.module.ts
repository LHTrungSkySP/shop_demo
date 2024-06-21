import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'primeng/breadcrumb';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
    RouterModule.forChild([
      {
        path: "",
        component: HomeComponent,
      }
    ])
  ],
})
export class HomeModule { }
