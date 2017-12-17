import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPackageDetailComponent } from './admin-package-detail.component';

describe('AdminPackageDetailComponent', () => {
  let component: AdminPackageDetailComponent;
  let fixture: ComponentFixture<AdminPackageDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPackageDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPackageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
