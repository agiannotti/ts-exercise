import { AuthorsService } from './../authors.service';
import { Component } from '@angular/core';

//property binding attr if html property not found in the DOM
@Component({
  selector: 'author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css'],
})
export class AuthorListComponent {
  imageUrl = 'https://loremflickr.com/320/240';
  title = ' Authors';
  colSpan = 2;
  count: Number;
  authors;
  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
    this.count = service.getCount();
  }
}
