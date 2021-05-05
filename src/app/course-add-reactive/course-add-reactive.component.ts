import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-add-reactive',
  templateUrl: './course-add-reactive.component.html',
  styleUrls: ['./course-add-reactive.component.css']
})
export class CourseAddReactiveComponent implements OnInit {

  courseAddForm: FormGroup;
  priceFormControl: FormControl = new FormControl(null, [Validators.required, this.minPrice(10)]);
  constructor() { }

  ngOnInit() {
    this.courseAddForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      price: this.priceFormControl,
      url: new FormControl(null)
    });

    /*this.courseAddForm.valueChanges
      .subscribe(value => console.log("LOG OBSERVABLE",value));*/
      
      /*this.priceFormControl.valueChanges
      .subscribe(value => console.log("LOG OBSERVABLE",value));*/
  }

  onSubmit(){
    console.log('SUBMIT', this.courseAddForm);
  }

  get price() {
    return this.courseAddForm.get('price');
  }

  minPrice(minPrice: number): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      if(control.value !== undefined && control.value <= minPrice) {
        return {
          minPrice: true
        }
      } else {
        return null;
      }
    }
  }

}
