import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appCellColor]'
})
export class CellColorDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  @HostListener('mouseenter') onMouseEnter() {
    this.setBackgroundColor('#3eb4c4');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBackgroundColor('#000');
  }
  private setBackgroundColor(color: string) {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      color
    );
  }
}
