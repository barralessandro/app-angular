import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  fileToUpload = new Array<any>;
  error: any;
  /*
  requiredFileType = ['.pdf', '.txt'];
  aggiungere [accept]="requiredFileType" 
  */

  constructor() { }

  ngOnInit(): void {
  }

  onDragOrOnSelect(event: any, isDrag: any) {
    let file: any;
    if(event.length > 1) {
      this.error = "Non è possibile caricare più di un file";
    } else {
      if(isDrag) {
        file = event[0];
      } else {
        file = event.target.files[0];
      }
      this.checkFile(file);
    }
  }
  
  checkFile(file: File) {
    if (file) {
      let split = file.name.split(".");
      let ext = split[split.length - 1].toLowerCase();
      if(ext != "txt") {
        this.error = "Formato non valido.";
      } else {
        if(file.size > 20000000) {
          this.error = "Il file è troppo grande.";
        } else {
          this.fileToUpload.push(file);
          this.error = null;
        }
      }
    }
  }

}
