import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { GalleryModule } from './gallery/gallery.module';
import { GalleriaModule } from 'primeng/galleria';
import { PanelMenuModule } from 'primeng/panelmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
    GalleryModule,
    GalleriaModule,
    PanelMenuModule,
    // NoopAnimationsModule,
    RouterModule.forChild([
      {
        path: "",
        component: HomeComponent,
      }
    ])
  ],
})
export class HomeModule { }
