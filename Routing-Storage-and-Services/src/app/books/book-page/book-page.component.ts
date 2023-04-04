import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../books.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {

  book?: Book;

  constructor(private bookService: BookService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const isbn = params['isbn'];
      this.book = this.bookService.getBookByISBN(isbn);
      if (!this.book) {
        this.router.navigate(['/books']);
      }
    });
  }
}
