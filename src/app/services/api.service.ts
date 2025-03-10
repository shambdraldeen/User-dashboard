import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Info } from '../models/model/info';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private cache = new Map<string, any>(); // Updated: Unique keys for cache

  constructor(private http: HttpClient) {}

  getUsers(page: number): Observable<any> {
    const cacheKey = `page-${page}`; // Unique key for page data
    if (this.cache.has(cacheKey)) {
      return of(this.cache.get(cacheKey)); // Return cached data if available
    }
    return this.http.get(`https://reqres.in/api/users?page=${page}`).pipe(
      tap((response) => this.cache.set(cacheKey, response)) // Cache with unique key
    );
  }

  getUserById(id: number): Observable<Info[]> {
    const cacheKey = `user-${id}`; // Unique key for individual user data
    if (this.cache.has(cacheKey)) {
      return of(this.cache.get(cacheKey)); // Return cached data if available
    }
    return this.http.get<Info[]>(`https://reqres.in/api/users/${id}`).pipe(
      tap((response) => this.cache.set(cacheKey, response)) // Cache with unique key
    );
  }
}
