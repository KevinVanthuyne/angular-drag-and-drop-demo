import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { DragAndDropListComponent } from './components/drag-and-drop-list/drag-and-drop-list.component';

@NgModule({
  declarations: [AppComponent, DragAndDropListComponent],
  imports: [BrowserModule, DragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
