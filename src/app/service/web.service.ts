import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class WebService {
  BOOKS_URL = 'http://localhost:8000/books';
  USER_LOGIN_URL = 'http://localhost:8000/user-login';
  USER_INFO_URL = 'http://localhost:8000/user-info';

  constructor(public http: HttpClient) { }

  getAllUsersLoginInfo(): Observable<any> {
    return this.http.get<any>(this.USER_LOGIN_URL);
  }

  getUserInfo(id:string): Observable<any> {
    return this.http.get<any>(this.USER_INFO_URL + '/' + id);
  }

  getAll(): Observable<Book[]> {
    return this.http.get<any>(this.BOOKS_URL);
  }
  
  get(id:string): Observable<Book> {
    return this.http.get<any>(this.BOOKS_URL + '/' + id);
  }

  create(book: Book) {
    return this.http.post<any>(this.BOOKS_URL, book);
  }
  
  update(id: string, book: Book): Observable<Book> {
    return this.http.put<any>(this.BOOKS_URL + '/' + id, book);
  }

  delete(id: string) {
    return this.http.delete<any>(this.BOOKS_URL + '/' + id);
  }

}