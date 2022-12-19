import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { InsertBookModalComponent } from '../component/insert-book-modal/insert-book-modal.component';

@Component({
  selector: 'app-book-modal',
  templateUrl: './book-modal.component.html',
  styleUrls: ['./book-modal.component.css']
})
export class BookModalComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(InsertBookModalComponent);
  }
}
