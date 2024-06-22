import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
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
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];
  doneA = ['AAA', 'BBBBBBB', 'CCCCCCCC', 'DDDDD', 'EEEEEE'];

  drop(event: CdkDragDrop<string[]>) {
console.log(event.previousContainer);
console.log(event.container);

    if (event.previousContainer === event.container) { // nếu
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        0,
      );
    }
    console.log(this.todo);
    console.log(this.done);
    console.log(this.doneA);

  }
}
