import { CoursesService } from './courses.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoursesComponent } from 'src/courses.component';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [AppComponent, CoursesComponent, ListComponent],
  imports: [BrowserModule],
  providers: [CoursesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
