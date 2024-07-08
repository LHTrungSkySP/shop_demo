import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ProductCategoryService } from './services/product-category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  items: MenuItem[] | undefined;
  listMegaMenu: any[] = [];
  constructor(
    private productCategoryService: ProductCategoryService
  ){}
  ngOnInit() {
    this.getCategory();
  }
  getCategory(){
    this.productCategoryService.filter({}).subscribe({
      next: (res) => {
        this.listMegaMenu = res.items.map((ele: any) => {
          return {
            label: ele.name,
            items: ele.children.length > 0 ? ele.children.map((item:any) => {
              return {
                label: item.name
              }
            }) : []
          }
        }); 
        console.log(this.listMegaMenu);
               
      }
    })
  }
}
