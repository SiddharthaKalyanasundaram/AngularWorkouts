import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShark]'
})
export class SharkDirective {
  creature = 'Dolphin';

  constructor(elem: ElementRef, renderer: Renderer2) {
    let shark = renderer.createText('shark');
    renderer.appendChild(elem.nativeElement, shark);
  }

}
