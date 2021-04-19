import { CoursesService } from './app/courses.service';
import { Component } from '@angular/core';

// declarator function
// directive, always prefix with asterisk when it modifies the dom

@Component({
  selector: 'courses',
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li * ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
  `,
})
export class CoursesComponent {
  title = 'List of courses';
  courses;

  // create instance of service
  constructor() {
    let service = new CoursesService();
    this.courses = service.getCourses();
  }

  // logic for calling http service could go here
  // issue #1. this logic will closely couple this component to http endpoint
  // issue #2. this would not be DRY coding
  // issue #3. component should not include any logic other than presentation view
}
