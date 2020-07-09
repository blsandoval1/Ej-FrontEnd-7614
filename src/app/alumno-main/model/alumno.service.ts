import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Alumno } from './alumno';
import {Observable, of } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';

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
      this.httpOptions)
      .pipe(
        retry(1),
        tap(_ => this.log('Alumno eliminado')),
        catchError(this.handleError<any>('Delete alumno', []))
      );
  }


  list(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.url, this.httpOptions)
      .pipe(
        retry(1),
        tap(_ => this.log('Alumnos descargados')),
        catchError(this.handleError<Alumno[]>('List alumnos', []))
      );
  }



  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  
  private log(message: string) {
    console.log(message);
  }

}
