import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { WebService } from 'src/app/service/web.service';

@Component({
  selector: 'app-book-listing',
  templateUrl: './book-listing.component.html',
  styleUrls: ['./book-listing.component.css']
})
export class BookListingComponent implements OnInit {
  bookForGet: any;
  booksForForGetAll: Book[] = [];
  bookForCreate: any;
  bookForUpdate: any;

  showCreateComponent: boolean = false;
  id: any;
  title: any;
  price: any;
  releaseDate: any;

  constructor(public webService: WebService){}  

  ngOnInit(): void {
    this.webService.getAll().subscribe(data => {
      this.booksForForGetAll = data;
    });
  }

  searchBook(searchText: any) {
    let bookTitle = new String(searchText);
    this.booksForForGetAll = this.booksForForGetAll.filter(book => book.title.match(bookTitle));
  }

  deleteElem(book: Book){
    console.log('chiamata metodo cancellazione per ');
    console.log(book);
    this.webService.delete(book.id).subscribe(data =>{
      console.log('canncelato dal db.');
    });
  }

  updateElem(book: Book) {
    //this.bookForUpdate = new Book({});
    this.webService.update(this.bookForUpdate.id,this.bookForUpdate)
      .subscribe(data => {
        this.bookForCreate = data;
        console.log(this.bookForUpdate);
      });
  }

  getElem(bookId: string) {
    this.webService.get(bookId).subscribe(data => {
      this.bookForGet = data;
      console.log(this.bookForGet);
    });
  }

  createBook(): void {
    this.showCreateComponent = !this.showCreateComponent;
  }

}