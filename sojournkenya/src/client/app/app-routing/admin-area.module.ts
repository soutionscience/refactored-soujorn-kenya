import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { MatIconModule, MatCardModule } from '@angular/material';
import { AdminPackageDetailComponent } from '../admin-package-detail/admin-package-detail.component';

const routes: Routes =[
  {path:'', component: AdminComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule, MatCardModule

  ],
  declarations: [AdminComponent, AdminPackageDetailComponent],
  exports: [ RouterModule]
})
export class AdminAreaModule { }
