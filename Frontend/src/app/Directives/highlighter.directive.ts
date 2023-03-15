import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlighter]',
  standalone: true
})
export class HighlighterDirective implements OnInit {

  constructor( private elementRef:ElementRef) { }
  
  ngOnInit(): void {
   this.elementRef.nativeElement.style.color='blue'
  }



}
