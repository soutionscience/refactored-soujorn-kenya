import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewPackageComponent } from './admin-new-package.component';

describe('AdminNewPackageComponent', () => {
  let component: AdminNewPackageComponent;
  let fixture: ComponentFixture<AdminNewPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNewPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
