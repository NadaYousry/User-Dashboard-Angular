import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() buttonText: string = 'See More';
  @Input() className: string = '';
  @Input() theme?:
    | 'button-secondary'
    | 'button-gray'
    | 'button-primary'
    | 'button-orange' = 'button-primary';
  @Input() value: any;
  @Output() handleClick = new EventEmitter();
  onClick(e: Event) {
    this.handleClick.emit(this.value ? this.value : e);
  }
}
