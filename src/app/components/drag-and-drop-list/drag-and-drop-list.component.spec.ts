import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragAndDropListComponent } from './drag-and-drop-list.component';

describe('DragAndDropListComponent', () => {
  let component: DragAndDropListComponent;
  let fixture: ComponentFixture<DragAndDropListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragAndDropListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragAndDropListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
