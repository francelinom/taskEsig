import { Directive, OnInit, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTaskConcluded]'
})
export class TaskConcludedDirective implements OnInit{

  @Input() appTaskConcluded: boolean;
  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    if (this.appTaskConcluded ){
      this.element.nativeElement.style.textDecoration = 'line-through';
    }
  }

}
