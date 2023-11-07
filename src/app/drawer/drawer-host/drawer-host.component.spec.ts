import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerHostComponent } from './drawer-host.component';

describe('DrawerHostComponent', () => {
  let component: DrawerHostComponent;
  let fixture: ComponentFixture<DrawerHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrawerHostComponent]
    });
    fixture = TestBed.createComponent(DrawerHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
