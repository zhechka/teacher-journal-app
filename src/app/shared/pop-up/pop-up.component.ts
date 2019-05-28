import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.sass']
})
export class PopUpComponent {
  title: string;
  message: string;

  constructor(public bsModalRef: BsModalRef) {}
}
