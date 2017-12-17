import { Component, OnInit } from '@angular/core';
import {Package} from '../shared/admin-package';
import {PackageService} from '../services/package.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	package: Package[];

  constructor(private packageService : PackageService) { }

  ngOnInit() {
  	this.getPackages()
  }

getPackages(){
	return this.packageService.getPackages().subscribe(pack=> this.package = pack)

}

}
