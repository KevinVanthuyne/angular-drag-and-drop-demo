import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { DragAndDropListComponent } from './components/drag-and-drop-list/drag-and-drop-list.component';
import { ListItemComponent } from './components/list-item/list-item.component';

@NgModule({
  declarations: [AppComponent, DragAndDropListComponent, ListItemComponent],
  imports: [BrowserModule, DragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
