import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Book } from 'src/app/model/book';
import { WebService } from 'src/app/service/web.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-insert-book-modal',
  templateUrl: './insert-book-modal.component.html',
  styleUrls: ['./insert-book-modal.component.css']
})
export class InsertBookModalComponent {
  bookFormGroup: FormGroup;

  constructor(public webService: WebService) {}

  ngOnInit(): void {
    this.bookFormGroup = new FormGroup({
      bookTitle : new FormControl(null, [Validators.required]),
      price : new FormControl(null, [Validators.required]), 
      releaseDate: new FormControl(null, null),
      quantity : new FormControl(null, [Validators.required])
    });
  }


  onCreate() {
    let book: Book = new Book('', '', new Date(), 10);
    this.webService.create(book);
  }

}
