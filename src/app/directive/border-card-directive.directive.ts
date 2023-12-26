import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCardDirective]'
})
export class BorderCardDirectiveDirective {

@Input('appBorderCardDirective') borderColor: string | undefined ;

GREY_COLOR: string = '#f5f5f5'
GREEN_COLOR:string = '#009688'
  constructor(private element : ElementRef) { 
    this.setBorder(this.GREY_COLOR);
    this.setHeight(150);
  }
  private setBorder(color:string):void{
    const border:string='solid 4px ' +color ;
    this.element.nativeElement.style.border = border
  }
  private setHeight(height:number): void{
    this.element.nativeElement.style.height = height + ' px'
  }
  @HostListener('mouseenter') onMouseEnter() : void {
    this.setBorder(this.borderColor || this.GREEN_COLOR)
  }
  @HostListener('mouseleave') onMouseLeave(): void {
    this.setBorder(this.GREY_COLOR)
  }

}
