import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private BASE_URL = 'http://localhost:1337';

  constructor(
    private http: HttpClient, //
  ) {}

  getToken(): string {
    return localStorage.getItem('token');
  }

  login(email: string, password: string): Observable<any> {
    console.log(email, password);

    const url = `${this.BASE_URL}/login`;
    return this.http.post<User>(url, { email, password });
  }

  signup(email: string, password: string): Observable<User> {
    console.log(email, password);

    const url = `${this.BASE_URL}/register`;
    return this.http.post<User>(url, { email, password });
  }
}
