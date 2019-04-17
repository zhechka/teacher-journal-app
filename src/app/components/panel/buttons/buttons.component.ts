import { Component, OnInit } from '@angular/core';
import { BUTTONS } from '../../../common/constants/panel-buttons';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.sass']
})
export class ButtonsComponent implements OnInit {
  buttons = BUTTONS;
  selectedButton;
  constructor() {}

  ngOnInit() {}

  onSelect(button): void {
    this.selectedButton = button;
  }
}
