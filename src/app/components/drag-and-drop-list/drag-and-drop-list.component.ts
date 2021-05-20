import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragMove,
  CdkDragRelease,
  CdkDropList,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { ListItem } from '../../models/list-item';
import { DragDropService } from '../../services/drag-drop.service';

@Component({
  selector: 'app-drag-and-drop-list',
  templateUrl: './drag-and-drop-list.component.html',
  styleUrls: ['./drag-and-drop-list.component.scss'],
})
export class DragAndDropListComponent implements AfterViewInit {
  @Input() listItem?: ListItem;
  @ViewChild(CdkDropList) dropList?: CdkDropList;

  constructor(private dndService: DragDropService<ListItem>) {}

  get connectedDropLists(): CdkDropList<ListItem>[] {
    return this.dndService.dropLists;
  }

  ngAfterViewInit(): void {
    if (this.dropList) {
      this.dndService.register(this.dropList);
    }
  }

  dropped(event: CdkDragDrop<ListItem[]>) {
    console.log('dropped', event);

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  dragMoved(event: CdkDragMove<ListItem>) {
    this.dndService.dragMoved(event);
  }

  dragReleased(event: CdkDragRelease) {
    this.dndService.dragReleased(event);
  }
}
