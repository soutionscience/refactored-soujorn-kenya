import {Routes} from '@angular/router'

import {HomeComponent} from '../home/home.component'
import {ContactComponent } from '../contact/contact.component'
import { AdminComponent} from '../admin/admin.component'
import {PackagesComponent} from '../packages/packages.component'
import {FileUploadComponent} from '../file-upload/file-upload.component';

export const routes: Routes =[
{ path: 'home', 
  loadChildren: './website.module#WebsiteModule'
},

{path:'admin', 
loadChildren: './admin-area.module#AdminAreaModule'
},
{path: 'packages' , component: PackagesComponent},
{path: 'upload', component: FileUploadComponent},
{
	path: '', redirectTo: 'home', pathMatch: 'full'
}
]