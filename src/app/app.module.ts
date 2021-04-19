import { AuthorsService } from './authors.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthorListComponent } from './author-list/author-list.component';

@NgModule({
  declarations: [AppComponent, AuthorListComponent],
  imports: [BrowserModule],
  providers: [AuthorsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
