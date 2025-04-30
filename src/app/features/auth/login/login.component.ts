import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { User } from '../../../core/models/user.model';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class LoginComponent implements OnInit {
  loginForm: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) return;
  
    const userName = this.loginForm.get('userName')?.value!;
    const password = this.loginForm.get('password')?.value!;
    const rememberMe = this.loginForm.get('rememberMe')?.value;
  
    this.authService.login({ userName, password }).subscribe({
      next: (user: User) => {
        const token = user.refreshToken;
        const storage = rememberMe ? localStorage : sessionStorage;
  
        storage.setItem('token', token);
        storage.setItem('user', JSON.stringify(user));
  
        alert('Login successful!');
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error(err);
        alert('Login failed. Please check your credentials.');
      }
    });
  }
  
  goToRegister() {
    this.router.navigate(['/register']);
  }
}
