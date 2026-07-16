import { afterRender, input, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDestaqueValorNumerico]',
})
export class DestaqueValorNumericoDirective {
  appDestaqueValorNumerico = input.required<number>();

  valorPositivo = input('var(--destaque-receita)');
  valorNegativo = input('var(--destaque-despesa)');

  constructor(element: ElementRef<HTMLElement>) {
    afterRender(() => {
      if (this.appDestaqueValorNumerico() > 0) {
        element.nativeElement.style.color = this.valorPositivo();
      } else if (this.appDestaqueValorNumerico() < 0) {
        element.nativeElement.style.color = this.valorNegativo();
      }
    });
  }
}
