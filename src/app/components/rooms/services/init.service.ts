import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InitService {
  config: any;
  constructor(private http:HttpClient) { }

  init(){
    return this.http.get('/assets/config.json')
    .pipe((config) => (this.config = config))
}
}
