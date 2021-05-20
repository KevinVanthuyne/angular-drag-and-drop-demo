import { Component } from '@angular/core';
import { ListItem } from '../../models/list-item';
import { DragDropService } from '../../services/drag-drop.service';
import { CdkDropList } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-and-drop-list',
  templateUrl: './drag-and-drop-list.component.html',
  styleUrls: ['./drag-and-drop-list.component.scss'],
})
export class DragAndDropListComponent {
  availableItemsId = AVAILABLE_ITEMS_ID;
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

  constructor(private dndService: DragDropService<ListItem>) {}

  get connectedDropLists(): CdkDropList<ListItem>[] {
    return this.dndService.dropLists;
  }

  save() {
    console.log(this.rootItem);
  }
}

export const AVAILABLE_ITEMS_ID = 'available-items';
