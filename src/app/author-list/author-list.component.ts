import { AuthorsService } from './../authors.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css'],
})
export class AuthorListComponent {
  title = 'Author List';
  authors;
  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
  }
}
