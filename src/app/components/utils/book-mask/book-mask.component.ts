import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { INITIAL_CONFIG } from '@angular/platform-server';


@Component({
  selector: 'app-book-mask',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './book-mask.component.html',
  styleUrl: './book-mask.component.scss'
})
export class BookMaskComponent {
  @Input() title !: string
  @Input() author !: string
  @Input() name !: string
  @Input() genre !: string
  constructor(){}
}
