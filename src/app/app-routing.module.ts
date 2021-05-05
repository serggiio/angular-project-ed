import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseAddComponent } from './course-add/course-add.component';
import { CourseAddReactiveComponent } from './course-add-reactive/course-add-reactive.component';

const routes: Routes = [
  //{ path: 'heroes', component: HeroesComponent }
  { 
    path: '', redirectTo: 'courses', pathMatch: 'full'
  },
  { 
    path: 'dashboard', component: DashboardComponent 
  },
  { 
    path: 'navbar', component: NavbarComponent 
  },
  { 
    path: 'sidenav', component: SidenavComponent 
  },
  { 
    path: 'courses', component: CoursesComponent 
  },
  { 
    path: 'course/edit/:id', component: CourseEditComponent 
  },
  { 
    path: 'course/add', component: CourseAddComponent 
  },
  { 
    path: 'course/add-reactive', component: CourseAddReactiveComponent 
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
