import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from '../book';
import { BookService } from '../books.service';

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent {

  constructor(private bookService: BookService){}

  addBook(form: NgForm) {
    const title = form.value.title;
    const author = form.value.author;
    const isbn = form.value.isbn;
    const blurb = form.value.blurb;
    const book = new Book(title, author, isbn, blurb);

    this.bookService.addBook(book);


  }
}
