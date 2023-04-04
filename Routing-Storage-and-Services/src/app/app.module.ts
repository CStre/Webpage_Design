import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookPageComponent } from './books/book-page/book-page.component';
import { BookEntryComponent } from './books/book-entry/book-entry.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { AngularMaterialModule } from './angular-material';
import { AngularRoutingModule } from './angular-routing';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BookListComponent,
    BookPageComponent,
    BookEntryComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularMaterialModule,
    AngularRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
