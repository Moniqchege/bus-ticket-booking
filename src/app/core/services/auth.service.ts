import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  register(user: User): Observable<any> {
    const users = this.getAllUsers();
    const userExists = users.some(u => u.userName === user.userName || u.emailId === user.emailId);

    if (userExists) {
      return throwError(() => new Error('User already exists'));
    }

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    return of({ message: 'User registered successfully' });
  }

  login(credentials: { userName: string; password: string }): Observable<User> {
    const users = this.getAllUsers();
    const found = users.find(
      u => u.userName === credentials.userName && u.password === credentials.password
    );

    if (!found) {
      return throwError(() => new Error('Invalid credentials'));
    }

    // Mock JWT token
    found.refreshToken = 'mock-jwt-token';
    found.refreshTokenExpiryTime = new Date(Date.now() + 3600 * 1000).toISOString();

    return of(found);
  }

  getAllUsers(): User[] {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  }

  isLoggedIn(): boolean {
    return !!(localStorage.getItem('token') || sessionStorage.getItem('token'));
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
  }

  getToken(): string | null {
    return localStorage.getItem('token') || sessionStorage.getItem('token');
  }

  getUser(): User | null {
    const data = localStorage.getItem('user') || sessionStorage.getItem('user');
    return data ? JSON.parse(data) : null;
  }
}
