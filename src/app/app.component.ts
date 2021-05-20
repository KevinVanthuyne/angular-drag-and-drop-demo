import { Component } from '@angular/core';
import { ListItem } from './models/list-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-drag-and-drop-demo';

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

  save() {
    console.log(this.rootItem);
  }
}
