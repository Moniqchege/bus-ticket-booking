import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { User } from '../../../core/models/user.model'; // Adjust path as needed

@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class RegisterComponent {
  registerForm: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      userName: ['', Validators.required],
      fullName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['User'],
      projectName: ['BusBooking']
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) return;

    const now = new Date().toISOString();
    const formValues = this.registerForm.value;

    const formData: User = {
      userId: 0,
      userName: formValues.userName || '',
      emailId: formValues.emailId || '',
      fullName: formValues.fullName || '',
      password: formValues.password || '',
      role: formValues.role || 'User',
      projectName: formValues.projectName || 'BusBooking',
      createdDate: now,
      refreshToken: '',
      refreshTokenExpiryTime: now
    };

    this.authService.register(formData).subscribe({
      next: () => {
        alert('Registration successful!');
        this.router.navigate(['/login']);
      },
      error: (err) => alert('Error: ' + err.message)
    });
  }
}
