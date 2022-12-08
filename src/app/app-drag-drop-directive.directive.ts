import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appDragDropDirective]'
})
export class AppDragDropDirective {

  @Output() onFileDropped = new EventEmitter<any>();

  constructor() { }

  @HostListener('dragover', ['$event']) onDragOver(event:any) {
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('dragleave', ['$event']) onDragLeave(event:any) {
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('drop', ['$event']) ondrop(event:any) {
    event.preventDefault();
    event.stopPropagation();
    let files = event.dataTransfer.files;
    if(files.length > 0) {
      this.onFileDropped.emit(files);
    }
  }

}
