import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDto } from '../interfaces/user';
import { of } from 'rxjs';

export interface CreateUserDto {
  name: string;
  lastname: string;
  email: string;
  password: string;
  gender: 'Female' | 'Male' | 'Other';
  birthdate?: string;
  phone_number?: string;
  newsletter_subscribed: boolean;
}
export interface LoginDto {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class User {
  private readonly baseUrl = 'https://orgfoodbe-production.up.railway.app';

  constructor(private http: HttpClient) {}

  createUser(data: CreateUserDto): Observable<any> {
    return this.http.post(`${this.baseUrl}/users`, data);
  }

  login(data: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`, data, {
      withCredentials: true,
    });
  }

  getUserById(id: string): Observable<UserDto> {
    return this.http.get<UserDto>(`${this.baseUrl}/users/${id}`, {
      withCredentials: true,
    });
  }

  getUserProfilePicture(id: string): Observable<string> {
    const imageUrl = `${this.baseUrl}/users/${id}/image`;
    return of(imageUrl);
  }

  toggleNewsletter(userId: string): Observable<any> {
    return this.http.put(
      `${this.baseUrl}/users/${userId}/newsletter/toggle`,
      {},
      { withCredentials: true }
    );
  }

  updateUser(
    id: string,
    data: {
      name: string;
      lastname: string;
      gender: 'Male' | 'Female' | 'Other';
      birthdate: string | null;
      phone_number: string | null;
    }
  ): Observable<any> {
    return this.http.put(`${this.baseUrl}/users/${id}`, data, {
      withCredentials: true,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
