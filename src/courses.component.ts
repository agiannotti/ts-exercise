import { CoursesService } from './app/courses.service';
import { Component } from '@angular/core';

// declarator function
// directive, always prefix with asterisk when it modifies the dom

@Component({
  selector: 'courses',
  template: `
    <div (click)="onDivClicked()">
      <button
        (click)="onSave($event)"
        [style.backgroundColor]="isActive ? 'blue' : 'white'"
        class="btn btn-primary"
        [class.active]="isActive"
      >
        Save
      </button>
    </div>
  `,
})
export class CoursesComponent {
  //if *** class binding *** is true, target class is added to element
  // *** style binding *** line 11, DOM styling object property
  isActive = true;
  // title = 'List of courses';
  // courses;

  // create instance of service
  // use dependency instead of new instance within class, to decouple component from service
  // instruct angular to create instance of service, and pass it to component
  // aka dependency injection; injecting or providing dependencies of class to its constructor

  onSave($event) {
    $event.stopPropagation(); // angulars version of preventing event bubbling
    console.log('click!', $event);
  }

  onDivClicked() {
    console.log('Div clicked!');
  }

  constructor(service: CoursesService) {
    // this.courses = service.getCourses();
  }

  // logic for calling http service could go here
  // issue #1. this logic will closely couple this component to http endpoint
  // issue #2. this would not be DRY coding
  // issue #3. component should not include any logic other than presentation view
}
