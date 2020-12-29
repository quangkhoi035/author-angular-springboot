import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Menu} from './menu';

@Injectable({
  providedIn: 'root'
})

export class MenuServices {
  private baseUrl = 'http://localhost:8090/api/menus';

  constructor(private http: HttpClient) { }

  getMenu(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  // tslint:disable-next-line:ban-types
  createMenu(menu: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, menu);
  }

  // tslint:disable-next-line:ban-types
  updateMenu(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteMenu(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  // tslint:disable-next-line:ban-types
  getMenusList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

}
