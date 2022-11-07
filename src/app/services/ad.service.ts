import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  url:string = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  listAds(){
    return this.http.get<any>(this.url+`/api/ads`)
    .pipe(catchError(
      (error) => {
        console.log(error);
        return throwError('Error: shit hit the fan!');
      }));
  }
}
