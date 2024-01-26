import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  searchKeyWord: string = '';
  @Output() search = new EventEmitter();
  @Input() label:string='';
  handleChange(event: Event) {
    this.search.emit(this.searchKeyWord);
  }
}
