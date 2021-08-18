import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient:HttpClient) { }

  api = "http://localhost:8080/book"

  getAll(): Observable<any> {
   return this.httpClient.get("http://localhost:8080/book");
  }

  // addBook(book: string) {
  //   this.httpClient.post(this.api, { book })
  //     .subscribe((response: any) => {
  //       const book = new (response.book)
  //       book.b_id = response.b_id;
  //       book.b_name = response.b_name;
  //       book.author = response.author;
  //     })

  // }

  addBook(book: Object): Observable<Object> {
    return this.httpClient.post("http://localhost:8080/book/add", book);
  }

  deleteBook(b_id: number): Observable<any> {
    return this.httpClient.delete("http://localhost:8080/book/${b_id}");
  }

}
