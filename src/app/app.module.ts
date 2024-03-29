import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AlertModule, BsDropdownModule} from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
import { LibraryMainComponent } from './library-main/library-main.component';
import { ReadingBookComponent } from './reading-book/reading-book.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditingBookComponent } from './editing-book/editing-book.component';

@NgModule({
  declarations: [
    AppComponent,
    LibraryMainComponent,
    ReadingBookComponent,
    UserProfileComponent,
    EditingBookComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    BsDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
