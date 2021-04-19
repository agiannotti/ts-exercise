import { AuthorsService } from './../authors.service';
import { Component } from '@angular/core';

@Component({
  selector: 'author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css'],
})
export class AuthorListComponent {
  title = ' Authors';
  count: Number;
  authors;
  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
    this.count = service.getCount();
  }
}
