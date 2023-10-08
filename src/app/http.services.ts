import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: "root",
  })

export class HttpService {
    httpOptions: any;
    constructor(private http: HttpClient) {
    }

    get(path: string, params: any = "") {
        console.log("🚀 ~ file: http.services.ts:17 ~ HttpService ~ get ~ getIndex:", path, params)
        this.httpOptions = {
          headers: new HttpHeaders({
            "Content-Type": "application/json",
          }),
          params,
        };
        console.log("🚀 ~ file: http.services.ts:18 ~ HttpService ~ get ~ this.httpOptions :", this.httpOptions )
        return this.http.get(path, this.httpOptions).pipe(map((res) => res));
      }
}