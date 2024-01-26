import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UsersResponseData } from '../interfaces/users';
import {  Support } from '../../users/interfaces/pagination';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  getUsersList(page: number = 1, searchId?: string) {
    return this.http.get<UsersResponseData>(
      `/users?page=${page}${searchId ? '&id=' + searchId : ''}`
    );
  }
  getUserDetails(userId: number) {
    return this.http.get<{ data: User; support?: Support }>(`/users/${userId}`);
  }
}
