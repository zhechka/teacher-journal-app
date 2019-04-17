import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.sass']
})
export class ButtonsComponent implements OnInit {
  selectedButton;
  constructor() {}

  ngOnInit() {}

  onSelect(button): void {
    this.selectedButton = button;
  }
}
