import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashbordsComponent } from './admin-dashbords.component';

describe('AdminDashbordsComponent', () => {
  let component: AdminDashbordsComponent;
  let fixture: ComponentFixture<AdminDashbordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashbordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDashbordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
