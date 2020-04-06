import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.setFontSize('20px');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setFontSize('16px');
  }

  private setFontSize(val: string) {
    this.renderer.setStyle(this.elRef.nativeElement, 'font-size', val);
  }
}
