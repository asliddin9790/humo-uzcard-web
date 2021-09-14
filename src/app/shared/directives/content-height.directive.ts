import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appContentHeight]'
})
export class ContentHeightDirective {


  constructor(private el: ElementRef) {

  }

  ngOnInit() {
    var viewportOffset = this.el.nativeElement.getBoundingClientRect();
    // these are relative to the viewport, i.e. the window
    var top = viewportOffset.top;
    const windowHeight = window.innerHeight;
    const footerHeight = 5;
    this.el.nativeElement.setAttribute('style', 'height: ' + (windowHeight - top - footerHeight) + 'px');
  }

}
