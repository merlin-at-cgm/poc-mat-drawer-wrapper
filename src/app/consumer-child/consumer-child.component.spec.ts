import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerChildComponent } from './consumer-child.component';

describe('ConsumerChildComponent', () => {
  let component: ConsumerChildComponent;
  let fixture: ComponentFixture<ConsumerChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsumerChildComponent]
    });
    fixture = TestBed.createComponent(ConsumerChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
