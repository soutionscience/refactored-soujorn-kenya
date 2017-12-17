import { Injectable } from '@angular/core';
import {Restangular, RestangularModule} from 'ngx-restangular';
import { Observable} from 'rxjs/Observable';
import{Package } from '../shared/admin-package'


import 'rxjs/add/operator/map';
@Injectable()
export class PackageService {

  constructor(private restangular : Restangular) { }
  getPackages(): Observable<Package[]>{
  	console.log("hitiing service")
  	return this.restangular.all('package').getList()

  }

}
