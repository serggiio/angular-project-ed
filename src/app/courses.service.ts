import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Curso } from './curso';
import { COURSES } from './data/courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  //Inyeccion de dependencia http
  constructor(private httpClient: HttpClient) { }

  //return the data on file data/courses
  /*getCourses(): Curso[] {
    return COURSES;
  }*/

  getCourses(): Observable<Curso[]> {
    return this.httpClient.get<Curso[]>('assets/api/courses/courses.json')
      .pipe(
        catchError(this.manejarError)
      );
  }
  manejarError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.log('Error de cliente', error.error.message);
    } else {
      //Error en servidor
      console.log('Error status: ', error.status);
      console.log('Error: ', error.error);
    }
    //catch and rethrow
    return throwError('Paso un problema bro, probalo despues');
  }
}
