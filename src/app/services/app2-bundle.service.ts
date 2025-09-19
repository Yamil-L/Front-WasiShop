import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DynamicBundle } from '../interfaces/dynamic-bundle';

@Injectable({
  providedIn: 'root'
})
export class App2BundleService {
  private apiUrl = 'http://157.180.74.224:3000/api/productos'; // API app1

  constructor(private http: HttpClient) {}

  getBundles(): Observable<DynamicBundle[]> {
    return this.http.get<DynamicBundle[]>(this.apiUrl);
  }
}
