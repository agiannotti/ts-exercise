import { CoursesService } from './courses.service';
import { AuthorsService } from './authors.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { CoursesComponent } from 'src/courses.component';

@NgModule({
  declarations: [AppComponent, AuthorListComponent, CoursesComponent],
  imports: [BrowserModule],
  providers: [AuthorsService, CoursesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
