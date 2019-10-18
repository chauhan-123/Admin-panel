import { Directive, HostListener, Renderer2, AfterViewInit, HostBinding, ElementRef } from '@angular/core';
import { LayoutService } from '../../layout/layout.service';

@Directive({
  selector: '[appCollespe]'
})
export class CollespeDirective implements AfterViewInit {
  
  humburger: boolean;
  ham: any;

  constructor( private layoutService:LayoutService ,
                private rd:Renderer2,
                private elem: ElementRef) { }

  ngAfterViewInit(): void {
    this.onResize();    
  }


    // @HostListener('click', ['$event'])
  @HostBinding('class.open') class;
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    if(window.innerWidth > 1025) {
      // this.rd.setStyle()
      this.class = { width: '0px' };
      this.layoutService.changeMenuState(true);
 
    } else {
      this.rd.removeClass(this.elem.nativeElement, 'open')
      this.class = null;
      this.layoutService.changeMenuState(false);
    }
      
  }
}
