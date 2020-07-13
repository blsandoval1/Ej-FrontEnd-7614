import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Alumno } from '../models/alumno';
import {Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  url : string = "https://localhost:44344/api/Alumno";

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'      
    })
  };

  constructor(private http:HttpClient) { }

  delete(a: Alumno) : Observable<any> {
    return this.http.delete<Alumno[]>(this.url + '/' + a.idalumno, 
      this.httpOptions);
  }

  list(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.url, this.httpOptions)
      .pipe(
        retry(1)   
      );
  } 
}
