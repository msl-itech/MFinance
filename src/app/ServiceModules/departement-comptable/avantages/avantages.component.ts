import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-avantages',
  templateUrl: './avantages.component.html',
  styleUrl: './avantages.component.css'
})
export class AvantagesComponent {
  @Output() simulatorClick = new EventEmitter<void>();

  onSimulatorClick(): void {
    this.simulatorClick.emit();
  }
}
