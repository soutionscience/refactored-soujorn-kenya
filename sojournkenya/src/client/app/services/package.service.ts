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

  postPackages(packages){
  	console.log("sent package with value", packages)
    this.restangular.all('package').post(packages)


  }
  featuredPackages():Observable<Package[]>{
    return this.restangular.all('package').getList({Featured: "true"})
    .map(packages=>packages)
  }


  deletePackage(id: number){
    this.restangular.one('package', id).remove()
  }



}
