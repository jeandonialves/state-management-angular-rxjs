import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksStartedComponent } from './tasks-started.component';

describe('TasksStartedComponent', () => {
  let component: TasksStartedComponent;
  let fixture: ComponentFixture<TasksStartedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksStartedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
