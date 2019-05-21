import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appButtonOrderHide]'
})
export class ButtonOrderHideDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(
      this.element.nativeElement.querySelector('.table__button'),
      'table__button_show-item'
    );
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(
      this.element.nativeElement.querySelector('.table__button'),
      'table__button_show-item'
    );
  }
}
