import {Routes} from '@angular/router'

import {HomeComponent} from '../home/home.component'
import {ContactComponent } from '../contact/contact.component'
import { AdminComponent} from '../admin/admin.component'

export const routes: Routes =[
{ path: 'home', component: HomeComponent},
{ path: 'contactus', component: ContactComponent},
{path:'admin', component: AdminComponent},
{
	path: '', redirectTo: '/home', pathMatch: 'full'
}
]