import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

export enum ColorSkeletonCardDirective {
  roxo = 'roxo',
  amarelo = 'amarelo',
  vermelho = 'vermelho',
  branco = 'branco',
  laranja = 'laranja',
  preto = 'preto',
}

@Directive({
  selector: '[appSkeletonCard]',
})
export class SkeletonCardDirective implements OnInit {
  @Input() appSkeletonCard: ColorSkeletonCardDirective =
    ColorSkeletonCardDirective.roxo;

  backgroundColors = {
    roxo: 'purple',
    amarelo: 'yellow',
    vermelho: 'red',
    branco: '#ffffff',
    laranja: 'orange',
    preto: '#333333',
  };
  textColors = {
    roxo: '#ffffff',
    amarelo: '#333333',
    vermelho: '#ffffff',
    branco: '#333333',
    laranja: '#333333',
    preto: '#333333',
  };

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'background-color',
      this.backgroundColors[this.appSkeletonCard]
    );
    this.renderer.setStyle(
      this.el.nativeElement,
      'color',
      this.textColors[this.appSkeletonCard]
    );
    this.renderer.addClass(this.el.nativeElement, 'directive__skeleton-card');
  }
}
