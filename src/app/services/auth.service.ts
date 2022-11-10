import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient, public router: Router) { }

  login(username: string, password: string): Observable<boolean>{
    return this.http.post<{token: string}>(this.baseUrl+'/login', {email: username, password: password})
    .pipe(
      map(result=>{
        localStorage.setItem('access_token', result.token);
        return true;
      })
    );
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  logout(){
    let removeToken = localStorage.removeItem('access_token');

    if(removeToken == null){
      this.router.navigate(['login']);
    }
  }

  public get isLoggedIn(): boolean {
    //TODO: Check token expiry and other security checks
    return (localStorage.getItem('access_token') !== null);
  }
  
}
