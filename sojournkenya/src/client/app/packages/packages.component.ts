import { Component, OnInit } from '@angular/core';
import { Package } from '../shared/admin-package';
import {PackageService} from '../services/package.service'

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

	package: Package[];

  constructor(private packageService: PackageService) { }

  ngOnInit() {
   this.getAllPackage();
  }

  getAllPackage(){
  	this.packageService.getPackages().subscribe(mypackage => this.package = mypackage)
  }


}
