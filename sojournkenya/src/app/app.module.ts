import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {MatButtonModule, MatCheckboxModule} from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatIconModule, MatToolbarModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';






import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

import 'hammerjs';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

import {AppRoutingModule} from './app-routing/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { AdminPackageDetailComponent } from './admin-package-detail/admin-package-detail.component'

import {RestangularModule, Restangular} from 'ngx-restangular';
import {RestangularConfigFactory} from './shared/rest-config';

// services
import{ PackageService} from './services/package.service';
import { AdminNewPackageComponent } from './admin-new-package/admin-new-package.component';
import { PackagesComponent } from './packages/packages.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    AdminComponent,
    AdminPackageDetailComponent,
    AdminNewPackageComponent,
    PackagesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RestangularModule.forRoot(RestangularConfigFactory),
    MatCardModule, MatIconModule, MatButtonModule, MatDialogModule, MatToolbarModule

  ],
  entryComponents:[
  AdminNewPackageComponent],
  providers: [PackageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
