import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private readonly api: HttpClient) { }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.api.get(`${environment.apiUrl}${path}`, {params});
  }

  put(path: string, body: any): Observable<any> {
    return this.api.put(`${environment.apiUrl}${path}`, body);
  }

  patch(path: string, body: any): Observable<any> {
    return this.api.patch(`${environment.apiUrl}${path}`, body);
  }

  post(path: string, body: any, options = {}): Observable<any> {
    // console.log(`${environment.apiUrl}${path}`);
    return this.api.post(`${environment.apiUrl}${path}`, body, options);
  }

  delete(path: string): Observable<any> {
    return this.api.delete(`${environment.apiUrl}${path}`);
  }

  getAsText(path: string, params: HttpParams = new HttpParams()): Observable<string> {
    return this.api.get(`${environment.apiUrl}${path}`, {params, responseType: 'text'});
  }
}
