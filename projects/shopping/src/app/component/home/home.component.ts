import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  breadcrumbItems: MenuItem[] | undefined;

  home: MenuItem | undefined;

  ngOnInit() {
    this.breadcrumbItems = [
      { icon: 'pi pi-home', route: '/installation' },
      { label: 'Components' },
      { label: 'Form' },
      { label: 'InputText', route: '/inputtext' }
    ];

  }
}
