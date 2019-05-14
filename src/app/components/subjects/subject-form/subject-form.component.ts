import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StorageService } from '../../../common/services/storage.service';
import { Subject } from '../../../common/entities/subject';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.sass']
})
export class SubjectFormComponent implements OnInit {
  @Input() nameOfInputs;
  @Input() marks;
  @Output() public changeViewToSubjects: EventEmitter<
    boolean
  > = new EventEmitter();

  public newSubject: Subject;

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

  public onSubmit(form: NgForm) {
    console.log('submit!!', form.value);
    this.newSubject = {
      ...form.value,
      marks: {
        '04/02': '',
        '05/02': '',
        '06/02': '',
        '07/02': ''
      }
    };
    console.log('new', this.newSubject);
    this.change(false);
  }
}
