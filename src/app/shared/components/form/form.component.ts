import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { StorageService } from '../../../common/services/storage.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  @Output() changeViewToSubjects: EventEmitter<boolean> = new EventEmitter();

  constructor(private storageService: StorageService) {}

  change(value: boolean) {
    this.changeViewToSubjects.emit(value);
  }

  saveToLocalStorage(event: any, key: string): void {
    this.storageService.set(key, event.target.value);
  }

  getLastInputValue(key: string): string {
    return this.storageService.get(key) ? this.storageService.get(key) : '';
  }

  ngOnInit() {}
}
