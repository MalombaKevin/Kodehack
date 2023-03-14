import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appTitleColor]',
  standalone: true
})
export class TitleColorDirective implements OnInit {

  constructor( private elementRef:ElementRef) { }
  ngOnInit(): void {
  this.elementRef.nativeElement.style.color='black'

  }

  @HostListener('mouseenter')mouseenter(){ 
    this.elementRef.nativeElement.style.color='blue'
  }

  @HostListener('mouseleave')mouseleave(){ 
    this.elementRef.nativeElement.style.color='green'
  }

}
