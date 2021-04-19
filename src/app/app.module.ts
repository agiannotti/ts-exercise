import { CoursesService } from './courses.service';
import { AuthorsService } from './authors.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { CoursesComponent } from 'src/courses.component';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorListComponent,
    CoursesComponent,
    SummaryPipe,
    FavoriteComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [AuthorsService, CoursesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
