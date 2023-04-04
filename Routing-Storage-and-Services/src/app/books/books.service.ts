import { Injectable } from '@angular/core';
import { Book } from "./book";
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})

export class BookService {

  constructor(private router: Router) { }

  addBook(book: Book): void {
    let bookList: Book[] = [];
    const booksString = localStorage.getItem('books');
    if (booksString !== null){
      bookList = JSON.parse(booksString);
    }
    bookList.push(book);
    localStorage.setItem("books", JSON.stringify(bookList));
    this.router.navigate(['/books']);
  }

  getBooks(): Book[] {
    const booksString = localStorage.getItem('books');
    if (booksString !== null) {
      return JSON.parse(booksString);
    }
    return [];
  }

  getBookByISBN(isbn: string): Book | undefined{
    const booksString = localStorage.getItem('books');
  if (booksString !== null) {
    const books: Book[] = JSON.parse(booksString);
    return books.find(book => book.isbn === isbn);
  }
  return undefined;
  }
}
