import { TestBed } from '@angular/core/testing';

import { DragDropService } from './drag-drop.service';
import { ListItem } from '../models/list-item';

describe('DragDropService', () => {
  let service: DragDropService<ListItem>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DragDropService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
