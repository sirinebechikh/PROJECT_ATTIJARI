import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface User {
  id?: number;
  username: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8081/api/users'; // adapte selon ton backend

  constructor(private http: HttpClient) {}

  register(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}`, user);
  }
  login(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user); // adapte l'endpoint si nécessaire
  }
resetPassword(email: string): Observable<any> {
  return this.http.post(`${this.apiUrl}/reset-password`, { email });
}

resetPasswordConfirm(code: string, newPassword: string): Observable<any> {
  return this.http.post(`${this.apiUrl}/confirm-reset-password`, {
    resetCode: code,
    newPassword: newPassword
  });
}

  
}
