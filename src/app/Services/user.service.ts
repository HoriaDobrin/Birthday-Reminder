import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of, throwError } from 'rxjs';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private users: User[] = [];

constructor() {
    this.users.push(
        { id: 1, email: 'john@example.com', first_name: 'John', last_name: 'Doe', password: 'john123' , telefon: '0773289101', oras: 'Brasov', dateOfBirth : '2001-10-07'},
        { id: 2, email: 'jane@example.com', first_name: 'Jane', last_name: 'Smith', password: 'jane456' ,telefon: '0773289101', oras: 'Brasov',dateOfBirth : '2001-10-07'},
        { id: 3, email: 'mark@example.com', first_name: 'Mark', last_name: 'Johnson', password: 'mark789' ,telefon: '0773289101', oras: 'Brasov',dateOfBirth : '2001-10-07'},
        { id: 4, email: 'sarah@example.com', first_name: 'Sarah', last_name: 'Williams', password: 'sarah321' ,telefon: '0773289101', oras: 'Brasov',dateOfBirth : '2001-10-07'},
        { id: 5, email: 'michael@example.com', first_name: 'Michael', last_name: 'Brown', password: 'michael654' ,telefon: '0773289101', oras: 'Brasov',dateOfBirth : '2001-10-07'}
      );
}
getUsers(): User[] {
    return this.users;
  }

addUser(user: User): void {
    this.users.push(user);
}

checkUser(password : string, email : string) {
    return this.users.find(user => user.email === email && user.password === password);
}

updateUser(user: User){
  let userToUpdate = this.users.find(x => x.id === user.id);
  userToUpdate = user;
}

}
