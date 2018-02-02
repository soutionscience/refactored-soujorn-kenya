import { Component, OnInit , Input} from '@angular/core';
import {Package} from '../shared/admin-package'
import { PackageService} from '../services/package.service'
@Component({
  selector: 'app-admin-package-detail',
  templateUrl: './admin-package-detail.component.html',
  styleUrls: ['./admin-package-detail.component.css']
})
export class AdminPackageDetailComponent implements OnInit {
 
 @Input() selected:Package;
  constructor(private packageService: PackageService) { }

  ngOnInit() {
  }

  deletePackage(id:number){
    console.log("package  with id deleted ", id)
     this.packageService.deletePackage(id);
     location.reload();

  }

}
