import { Component } from '@angular/core';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/user.service';
import { NzTableComponent } from 'ng-zorro-antd/table';
import { MatDialog } from '@angular/material/dialog';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  users:User[]=[];
  //basicTable: NzTableComponent<User> | undefined;
  constructor(private userService:UserService, private dialog:MatDialog){}

  ngOnInit(): void {
    this.users=this.userService.getUsers();
  }

   onUpdateUser(user: User) {
   const dialogRef = this.dialog.open(UpdateUserComponent, { data: user });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.users = [...this.users];
       }
    });
   }

  onDeleteUser(user: User) {
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
      this.users = [...this.users];
      console.log('User deleted successfully');
    }
  }

  addUser(){
    
      const dialogRef = this.dialog.open(AddUserComponent, { data: { title: 'Add User' } });
    
      dialogRef.afterClosed().subscribe((newUser: User) => {
        if (newUser) {
          if (newUser.first_name && newUser.last_name && newUser.oras && newUser.email && newUser.telefon && newUser.dateOfBirth) {
            newUser.id = this.users.length + 1;
            this.users.push(newUser);
            this.users = [...this.users];
            console.log('Succes.');

          } else {
            console.log('Please fill in all the fields.');

          }
        }
      });
    
  }

  openUser(user: User) {
    const dialogRef = this.dialog.open(UserDetailsComponent, {
      data: user,
      width: '500px'
    });
  
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  
}
