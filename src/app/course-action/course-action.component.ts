import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Curso } from '../curso';

@Component({
  selector: 'app-course-action',
  templateUrl: './course-action.component.html',
  styleUrls: ['./course-action.component.css']
})
export class CourseActionComponent implements OnInit {

  @Input()
  curso: Curso;

  @Output()
  edit: EventEmitter<Curso> = new EventEmitter<Curso>();
  
  @Output()
  delete: EventEmitter<Curso> = new EventEmitter<Curso>();

  constructor() { }

  ngOnInit() {
  }
  
  editarCurso(curso: Curso) {
    console.log('Edit childs, ', curso);
    this.edit.emit(curso);
  }

  eliminarCurso(curso: Curso) {
    console.log('Delete child, ', curso);
    this.delete.emit(curso);
  }

  over(event: any) {
    console.log('mouseOver, ', event);
  }

  onDoubleClick(event: any) {
    console.log('doubleClick, ', event);
  }


}
