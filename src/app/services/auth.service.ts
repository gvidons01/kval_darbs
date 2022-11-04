import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //Urls
  authUrl = 'http://localhost:8000/oauth/token';
  apiUrl = 'http://localhost:8000/api';
  options: any;

  constructor(
    private http: HttpClient
  ) { }
}
