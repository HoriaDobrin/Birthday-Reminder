import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {


  constructor(public dialogRef: MatDialogRef<AddUserComponent>) {}

  newUser : User ={
    id: 0,
    email: '',
    first_name: '',
    last_name: '',
    telefon: '',
    oras: '',
    password: '',
    dateOfBirth:''
  };
  ngOnInit(): void {}

  add() {
    this.dialogRef.close(this.newUser);
  }

  cancel() {
    this.dialogRef.close();
  }

}
