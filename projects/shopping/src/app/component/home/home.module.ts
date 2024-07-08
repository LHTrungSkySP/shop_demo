import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { GalleryModule } from './gallery/gallery.module';
import { GalleriaModule } from 'primeng/galleria';
import { AvatarModule } from 'primeng/avatar';
import { MenubarModule } from 'primeng/menubar';
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
    GalleryModule,
    GalleriaModule,

    RouterModule.forChild([
      {
        path: "",
        component: HomeComponent,
      }
    ])
  ],
})
export class HomeModule { }
