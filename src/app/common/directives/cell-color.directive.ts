import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appCellColor]'
})
export class CellColorDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(
      this.element.nativeElement,
      'table_cell_background_aqua'
    );
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(
      this.element.nativeElement,
      'table_cell_background_aqua'
    );
  }
}
