import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-tile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-tile.component.html',
  styleUrl: './input-tile.component.scss'
})
export class InputTileComponent {
  @Input() title!: string;
  @Input() type!: string;
  value = '';
  @Output() inputEmitter = new EventEmitter<string>();
  constructor(){
  }
  onInput(event: Event){
    this.value= (<HTMLInputElement>event.target).value
  }
  emitInput(){
    this.inputEmitter.emit(this.value);
  }
}
