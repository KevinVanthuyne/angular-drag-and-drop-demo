import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ListItem } from '../../models/list-item';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragMove,
  CdkDragRelease,
  CdkDropList,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { DragDropService } from '../../services/drag-drop.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements AfterViewInit {
  @Input() listItem?: ListItem;
  @ViewChild(CdkDropList) dropList?: CdkDropList;

  allowDropPredicate = (drag: CdkDrag, drop: CdkDropList) => {
    return this.isDropAllowed(drag, drop);
  };

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

  isDropAllowed(drag: CdkDrag, drop: CdkDropList) {
    return true;

    if (this.dndService.currentHoverDropListId == null) {
      return true;
    }

    return drop.id === this.dndService.currentHoverDropListId;
  }

  dragMoved(event: CdkDragMove<ListItem>) {
    this.dndService.dragMoved(event);
  }

  dragReleased(event: CdkDragRelease) {
    this.dndService.dragReleased(event);
  }
}
