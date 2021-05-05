import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Curso } from '../curso';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {

  //nombre: string;
  model: Curso = {};

  @ViewChild('formAdd', {static: false})
  form: FormControl;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log('Submit click: ', this.form);
    if(this.form.valid){
      console.log('Enviar formulario: ', this.model);
      //enviar y reiniciar el formulario
      this.form.reset();
    }
  }

}
