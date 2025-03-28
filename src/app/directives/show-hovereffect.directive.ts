import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShowHovereffect]',
})
export class ShowHovereffectDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.transform = 'scale(1.05)';
  }
  @HostListener('mouseout') onMouseOut() {
    this.element.nativeElement.style.transform = 'scale(1)';
  }
}
