import { Component, OnInit, Inject } from '@angular/core';
import { Package } from '../shared/admin-package'
//import {MatCard} from '@angular/material'

import { PackageService} from '../services/package.service'
import {AdminNewPackageComponent} from '../admin-new-package/admin-new-package.component'
import {MatDialog, MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


	packages : Package [ ] ;
	selectedOne:Package;

  constructor(private packageService: PackageService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getPackages()
  }

  getPackages(){
    this.packageService.getPackages()
    .subscribe(pack => this.packages = pack)
  }

  onSelect(pack:Package): void{
 this.selectedOne = pack;
  }
  deletePackage(id: number){
    this.packageService.deletePackage(id)

  }

  addPackages(){
        this.dialog.open(AdminNewPackageComponent, {width: '700px' , height: '450px' })

  }

}
