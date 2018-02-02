import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {MatButtonModule, MatCheckboxModule} from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatIconModule, MatToolbarModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { FileUploadModule } from 'ng2-file-upload';






import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

//import 'hammerjs';
import { ContactComponent } from './contact/contact.component';

import {AppRoutingModule} from './app-routing/app-routing.module';
import { HeaderComponent } from './header/header.component';

import {RestangularModule, Restangular} from 'ngx-restangular';
import {RestangularConfigFactory} from './shared/rest-config';

// services
import{ PackageService} from './services/package.service';
import { AdminNewPackageComponent } from './admin-new-package/admin-new-package.component';
import { PackagesComponent } from './packages/packages.component';
import { FileUploadComponent } from './file-upload/file-upload.component'

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HeaderComponent,
    AdminNewPackageComponent,
    PackagesComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RestangularModule.forRoot(RestangularConfigFactory),
    MatCardModule, MatIconModule, MatButtonModule, MatDialogModule, MatToolbarModule,
    FileUploadModule

  ],
  entryComponents:[
  AdminNewPackageComponent],
  providers: [PackageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
