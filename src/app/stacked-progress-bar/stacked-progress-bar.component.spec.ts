import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedProgressBarComponent } from './stacked-progress-bar.component';

describe('InfoProgressBarComponent', () => {
  let component: StackedProgressBarComponent;
  let fixture: ComponentFixture<StackedProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackedProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
