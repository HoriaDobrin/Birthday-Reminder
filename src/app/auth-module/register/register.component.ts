import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router:Router) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), this.passwordValidator]],
      confirmPassword: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      telefon:['',[Validators.required]],
      oras:['',[Validators.required]],
      dateOfBirth:['',[Validators.required]]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(control: AbstractControl): { [key: string]: any } | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
  
    if (password !== confirmPassword) {
      console.log('Parolele dau mis-match');
      return { passwordMismatch: true };
    }
  
    return null;
  }
  
  passwordValidator: ValidatorFn = (control: AbstractControl) => {
    const password = control.value;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[@$!%*?&]/.test(password);
    const valid = hasUppercase && hasLowercase && hasDigit && hasSpecialChar;
  
    if (!valid) {
      
      return { passwordRequirements: true };
    }
  
    return null;
  };
  ngOnInit(): void {
  }

  onRegisterSubmit(): void {
    if (this.registerForm.valid) {
      const newUser: User = {
        id: this.userService.getUsers().length + 1,
        email: this.registerForm.value.email,
        first_name: this.registerForm.value.firstName,
        last_name: this.registerForm.value.lastName,
        password: this.registerForm.value.password,
        telefon: this.registerForm.value.telefon,
        oras: this.registerForm.value.oras,
        dateOfBirth: this.registerForm.value.dateOfBirth
      };

      this.userService.addUser(newUser);

      console.log('Utilizatori:', this.userService.getUsers());
      this.router.navigate(['/login']);
    } else {
      console.log('Ceva nu e bine boss');
    }
  }
}
