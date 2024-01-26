import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() image: string = '';
  @Input() hoverEffect: boolean = true;
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() badge: string | number = '';
  @Input() buttonText?: string = '';
  @Input() linkUrl?: string | Array<string | number>;
  @Input() direction?: 'vertical' | 'horizontal' = 'vertical';
}
