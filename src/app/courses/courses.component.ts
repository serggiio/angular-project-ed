import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { CoursesService } from '../courses.service';
import { Curso } from '../curso';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, AfterViewInit {

  titulo: string = 'Lista de cursos';
  imageWidth: string = '40px';
  fecha: string = '2020-10-08'
  
  @ViewChild('filtro', {static: false})
  filtro: ElementRef;

  //al cargarse la pagina el texto se inicializa con este valor
  private _textoFiltro: string = '';
  
  set textoFiltro(t: string){
    console.log('text de filtro, ', t);
    this._textoFiltro = t;
    this.filtrarCursos(t);
    //filtrar cursos
    //this.cursos = t? this.filtrarCursos(t): this.cursosService.getCourses();
    
  }

  get textoFiltro(){
    return this._textoFiltro;
  }

  cursos: Curso[] = [];
  cursosFilter: Curso[];
  messageError: any;

  constructor(private router: Router, private cursosService: CoursesService) { 
    //this.cursos = this.cursosService.getCourses();
    
    //this.eliminarCursos();
  }

  ngOnInit() {
    /*this.cursos = this.cursosService.getCourses();

    setTimeout(() => {
      this.textoFiltro = 'php';
    }, 1000);*/

    this.getCursos();


  }

  getCursos(){
    this.cursosService.getCourses()
    .pipe(
      tap(cursos => console.log('Cursos', cursos)),
      catchError(error => {
        this.messageError = error;
        //return of([]);
        //catch and replace
        return EMPTY;
      })
    )
      .subscribe((cursos: Curso[]) =>  {
        this.cursos = cursos;
        this.cursosFilter = cursos;
      });
  }

  ngAfterViewInit() {
    //this.filtro.nativeElement.value = 'Angular';
  }

  filtrarCursos(t: string) {
    this.cursosFilter =  this.cursos.filter((curso: Curso) => curso.name.toLowerCase().indexOf(t.toLowerCase()) >= 0);
    
  }

  eliminarCursos(){
    setTimeout(() => {
      this.cursos = [];  
    }, 5000);
    
  }

  onEditCurso(curso: Curso) {
    console.log('parent component courses , action edit', curso);
    //redireccion course/{curso.id}
    this.router.navigate(['course/edit/'+curso.id]);
  }

  onDeleteCurso(curso: Curso) {
    console.log('parent component courses , action delete', curso);
    this.cursos = this.cursos.filter((c: Curso)=>{
      return c.id !== curso.id;
    });
  }
}
