import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  
  constructor(private formBuilder: FormBuilder,  
    private router: Router, 
    private userService : UserService) { }
 
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      remember: [false]
    });
    

  }

  onLoginSubmit() {

    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      const foundUser = this.userService.checkUser(password,email);
      if (foundUser) {
        console.log('Authentication successful');
        this.router.navigate(['/dashboard']);
      } else {
        console.log('Credențiale incorecte');
      }
    } else {
      console.log('Formularul nu este valid');
    }
  }

  onRegisterButtonClick() {
    this.router.navigate(['/register']);
  }
  
}
