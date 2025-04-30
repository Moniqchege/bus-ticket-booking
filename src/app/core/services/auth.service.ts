import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://projectapi.gerasim.in/api/BusBooking';

  constructor(private http: HttpClient) {}

  register(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/AddNewUser`, user);
  }

  login(credentials: { userName: string; password: string }): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/Authenticate`, credentials);
  }

  isLoggedIn(): boolean {
    return !!(localStorage.getItem('token') || sessionStorage.getItem('token'));
  }

  logout() {
    localStorage.clear();
    sessionStorage.clear();
  }

  getToken(): string | null {
    return localStorage.getItem('token') || sessionStorage.getItem('token');
  }

  getUser(): User | null {
    const data = localStorage.getItem('user') || sessionStorage.getItem('user');
    return data ? JSON.parse(data) : null;
  }
}
