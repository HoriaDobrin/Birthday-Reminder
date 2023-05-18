import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public user: User, public dialog:MatDialogRef<User>) {}

  cancel() {
    this.dialog.close();
  }
}
