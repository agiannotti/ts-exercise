import { CoursesService } from './app/courses.service';
import { Component } from '@angular/core';

// declarator function
// directive, always prefix with asterisk when it modifies the dom

@Component({
  selector: 'courses',
  //   template: `
  //     <div>
  //       <button
  //         (click)="onSave($event)"
  //         [style.backgroundColor]="isActive ? 'blue' : 'white'"
  //         class="btn btn-primary"
  //         [class.active]="isActive"
  //       >
  //         Save
  //       </button>
  //     </div>
  // *** template variable expression ***
  //     <div><input #email (keyup.enter)="onKeyUp(email.value)" /></div>
  //   `,
  template: `
    <div>
      <button
        (click)="onSave($event)"
        [style.backgroundColor]="isActive ? 'blue' : 'white'"
        class="btn btn-primary"
        [class.active]="isActive"
      >
        Save
      </button>
    </div>
    <div>
      <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
    </div>
    {{ course.title | uppercase | lowercase }} <br />
    {{ course.students | number }} <br />
    {{ course.rating | number: '2.1-1' }} <br />
    {{ course.price | currency: 'USD':true:'3.2-2' }} <br />
    {{ course.releaseDate | date: 'shortDate' }}

    {{ text | summary: 10 }}
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
    $event.stopPropagation(); // angulars version of preventing *** event bubbling ***
    console.log('click!', $event);
  }

  onDivClicked() {
    console.log('Div clicked!');
  }

  // *** two-way binding ***
  //
  // instead of property binding:
  // <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()" />
  // *** two way ng binding syntax***: banana in box
  // [(ngModel)]="" ; built-in directive

  email = 'me@example.com'; // <<---- encapsulates data
  onKeyUp() {
    // *** event filter *** line 20 keyup.enter reduces $event usage
    // *** template variables *** line 20 #email allows email.value; passing value by using identifier
    // helps to simplify code!
    // passing parameters around should be avoided, the objects encapsulate data and behavior
    // i.e. procedural programming vs OOP
    // declare field in class (line 43), and bind with this
    // and bind value in input element
    console.log(this.email);
  }

  course = {
    title: 'Everything Forever',
    rating: 20.2546,
    students: 20000,
    price: 90.99,
    releaseDate: new Date(2020, 3, 1),
  };

  text =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiamolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam';

  constructor(service: CoursesService) {
    // this.courses = service.getCourses();
  }

  // logic for calling http service could go here
  // issue #1. this logic will closely couple this component to http endpoint
  // issue #2. this would not be DRY coding
  // issue #3. component should not include any logic other than presentation view
}
