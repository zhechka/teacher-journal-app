import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appButtonOrderHide]'
})
export class ButtonOrderHideDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  @HostListener('mouseenter') onMouseEnter() {
    console.log('mouseOn');
    this.changeOpacity(1);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeOpacity(0);
  }
  private changeOpacity(n: number) {
    this.renderer.setStyle(
      this.element.nativeElement.querySelector('.table__button'),
      'opacity',
      n
    );
  }
}
