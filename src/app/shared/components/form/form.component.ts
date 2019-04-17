import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  @Output() changeViewToSubjects = new EventEmitter<boolean>();
  change(value: boolean) {
    this.changeViewToSubjects.emit(value);
  }

  constructor() {}

  ngOnInit() {}
}
