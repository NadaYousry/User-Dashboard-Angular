import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective {
  constructor(private el: ElementRef) {}

  @Input() appHover = true;

  @HostListener('mouseenter') onMouseEnter() {
    this.appHover && this.changeBgColor('#ee972a', 1.02);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.appHover && this.changeBgColor('transparent', 1);
  }
  private changeBgColor(color: string, scale: number) {
    this.el.nativeElement.style.borderColor = color;
    this.el.nativeElement.style.transform = `scale(${scale})`;
  }
}
