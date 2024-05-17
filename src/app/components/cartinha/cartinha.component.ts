import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cartinha',
  standalone: true,
  imports: [],
  templateUrl: './cartinha.component.html',
  styleUrl: './cartinha.component.css'
})
export class CartinhaComponent {
  @ViewChild('loveCard') loveCard!: ElementRef;
  
  toggleCard() {
    this.loveCard.nativeElement.classList.toggle('open')
  }
}
