import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {
  color: string = 'red';
  @HostListener('mouseenter', ['$event'])
  onmouseenter = (event: MouseEvent) => {
    // Optionally, you can use 'event' here if needed
    this.renderer.setStyle(this.element.nativeElement, 'color', 'blue');
  }
  constructor(private element: ElementRef,
    private renderer: Renderer2
  ) {
    // this.element.nativeElement.style.color = this.color
  }
  ngOnInit(): void {
    // this.renderer.setStyle(
    //   this.element.nativeElement, 'color', this.color
    // )

  }
}
