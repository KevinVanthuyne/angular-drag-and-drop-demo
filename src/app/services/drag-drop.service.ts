import { Inject, Injectable } from '@angular/core';
import {
  CdkDragMove,
  CdkDragRelease,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { DOCUMENT } from '@angular/common';

/**
 * Service to support nested CdkDropLists as CdkDropListGroups don't have correct handling for them.
 *
 * See https://github.com/angular/components/issues/16671
 */
@Injectable({
  providedIn: 'root',
})
export class DragDropService<T> {
  dropLists: CdkDropList[] = [];
  currentHoverDropListId?: string;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  register(dropList: CdkDropList) {
    this.dropLists.push(dropList);
  }

  /**
   * Determines the correct CdkDropList beneath the mouse pointer.
   */
  dragMoved(event: CdkDragMove<T>) {
    const elementFromPoint = this.document.elementFromPoint(
      event.pointerPosition.x,
      event.pointerPosition.y
    );

    if (!elementFromPoint) {
      this.currentHoverDropListId = undefined;
      return;
    }

    const dropList = elementFromPoint.classList.contains('cdk-drop-list')
      ? elementFromPoint
      : elementFromPoint.closest('.cdk-drop-list');

    if (!dropList) {
      this.currentHoverDropListId = undefined;
      return;
    }

    this.currentHoverDropListId = dropList.id;
  }

  dragReleased(event: CdkDragRelease) {
    this.currentHoverDropListId = undefined;
  }
}
