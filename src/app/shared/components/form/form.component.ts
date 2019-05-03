import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { StorageService } from '../../../common/services/storage.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  @Output() public changeViewToSubjects: EventEmitter<
    boolean
  > = new EventEmitter();

  constructor(private storageService: StorageService) {}

  public ngOnInit() {}

  public change(value: boolean) {
    this.changeViewToSubjects.emit(value);
  }

  public saveToLocalStorage(event: any, key: string): void {
    this.storageService.setItemToLocalStorage(
      key,
      JSON.stringify(event.target.value)
    );
  }

  public getLastInputValue(key: string): string {
    return JSON.parse(this.storageService.getItemFromLocalStorage(key)) || '';
  }
}
