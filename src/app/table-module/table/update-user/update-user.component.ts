import { Component, OnInit , Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user!: User;

  constructor(
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private dialogRef: MatDialogRef<UpdateUserComponent>
  ) {}

  ngOnInit() {
    this.user = { ...this.data };

  }

editUser()
{
    this.data.last_name = this.user.last_name;
    this.data.first_name = this.user.first_name;
    this.data.oras = this.user.oras;
    this.data.email = this.user.email;
    this.data.telefon = this.user.telefon;
    this.data.dateOfBirth = this.user.dateOfBirth;

    this.userService.updateUser(this.data);
    
    this.dialogRef.close();

}

}
