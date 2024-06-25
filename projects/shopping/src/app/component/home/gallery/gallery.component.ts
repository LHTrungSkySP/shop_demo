import { Component, OnInit } from '@angular/core';

interface Photo {
  id: number;
  title: string;
  url: string;
  description: string;
}
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  photos: Photo[] = [
    {
      id: 1,
      title: 'Sample Photo 1',
      url: 'https://via.placeholder.com/300',
      description: 'This is a sample photo 1'
    },
    {
      id: 2,
      title: 'Sample Photo 2',
      url: 'https://via.placeholder.com/300',
      description: 'This is a sample photo 2'
    },
    {
      id: 3,
      title: 'Sample Photo 3',
      url: 'https://via.placeholder.com/300',
      description: 'This is a sample photo 3'
    }
  ];
}
