import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FavoriteService {
  private baseUrl = 'https://orgfoodbe-production.up.railway.app';

  constructor(private http: HttpClient) {}

  addBundleToFavorites(userId: string, bundleId: string): Observable<any> {
    return this.http.put(
      `${this.baseUrl}/users/${userId}/favorite/bundle/${bundleId}`,
      {},
      { withCredentials: true }
    );
  }

  removeBundleFromFavorites(userId: string, bundleId: string): Observable<any> {
    return this.http.delete(
      `${this.baseUrl}/users/${userId}/favorite/bundle/${bundleId}`,
      { withCredentials: true }
    );
  }
}
