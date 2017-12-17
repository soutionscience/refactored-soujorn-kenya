import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-admin-new-package',
  templateUrl: './admin-new-package.component.html',
  styleUrls: ['./admin-new-package.component.css']
})
export class AdminNewPackageComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AdminNewPackageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onSubmit(){
  	this.dialogRef.close();
  }

}
