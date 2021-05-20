import { Component } from '@angular/core';
import { ListItem } from '../../models/list-item';

@Component({
  selector: 'app-drag-and-drop-list',
  templateUrl: './drag-and-drop-list.component.html',
  styleUrls: ['./drag-and-drop-list.component.scss'],
})
export class DragAndDropListComponent {
  rootItem: ListItem = {
    title: 'Root item',
    children: [
      { title: 'Item 1', children: [] },
      {
        title: 'Item 2',
        children: [
          { title: 'Item 2.1', children: [] },
          { title: 'Item 2.2', children: [] },
          { title: 'Item 2.3', children: [] },
        ],
      },
      { title: 'Item 3', children: [] },
      { title: 'Item 4', children: [] },
    ],
  };

  availableItems: ListItem[] = [
    { title: 'Item X', children: [] },
    { title: 'Item Y', children: [] },
    { title: 'Item Z', children: [] },
  ];

  save() {
    console.log(this.rootItem);
  }
}
