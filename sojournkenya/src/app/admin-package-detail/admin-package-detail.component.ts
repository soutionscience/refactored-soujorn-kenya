import { Component, OnInit , Input} from '@angular/core';
import {Package} from '../shared/admin-package'
@Component({
  selector: 'app-admin-package-detail',
  templateUrl: './admin-package-detail.component.html',
  styleUrls: ['./admin-package-detail.component.css']
})
export class AdminPackageDetailComponent implements OnInit {
 
 @Input() selected:Package;
  constructor() { }

  ngOnInit() {
  }

}
