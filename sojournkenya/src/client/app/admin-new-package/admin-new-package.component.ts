import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Package} from '../shared/admin-package'
import {PackageService} from '../services/package.service'


@Component({
  selector: 'app-admin-new-package',
  templateUrl: './admin-new-package.component.html',
  styleUrls: ['./admin-new-package.component.css']
})
export class AdminNewPackageComponent implements OnInit {

  package: Package [];
  packageCopy = null;
  packageForm: FormGroup

  constructor(public dialogRef: MatDialogRef<AdminNewPackageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder ,private packageService : PackageService) {  this.createForm()}

  createForm(){
    console.log("form created");
    this.packageForm = this.fb.group({
      Title: '',
      MenuLink:'',
      Featured: false,
      Image:'',
      Description:'',
      Price:''
    })
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log("saved ", this.packageForm.value)
  this.packageService.postPackages(this.packageForm.value)
  this.dialogRef.close()
 // location.reload();
  

  }

}
