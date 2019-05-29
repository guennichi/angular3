import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
  })
  export class ApiService {
  
    constructor(private http: HttpClient) { }
  
    getUsers() {
      return this.http.get('https://jsonp.afeld.me/?url=https://api.myglamapp.pl/api/categories?language=EN')
    }
  }