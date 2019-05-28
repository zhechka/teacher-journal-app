import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { StudentFormComponent } from './student-form.component';
import { MockTranslatePipe } from './mock-translate.pipe';
describe('Validation of students form', () => {
  let component: StudentFormComponent;
  let fixture: ComponentFixture<StudentFormComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentFormComponent, NgForm, MockTranslatePipe]
    });

    fixture = TestBed.createComponent(StudentFormComponent);
    component = fixture.componentInstance;
    component.nameOfInputs = [
      {
        name: 'name',
        isRequared: true
      },
      {
        name: 'lastName',
        isRequared: true
      },
      {
        name: 'address',
        isRequared: false
      },
      {
        name: 'about',
        isRequared: false
      }
    ];
    fixture.detectChanges();
  });
  it('submit button validity', () => {
    const hostElement = fixture.nativeElement;
    const submitform: HTMLInputElement = hostElement.querySelector('form');
    expect(submitform.checkValidity()).toBeFalsy();
    const nameInput: HTMLInputElement = hostElement.querySelector('#name');
    const lastNameInput: HTMLInputElement = hostElement.querySelector(
      '#lastName'
    );
    nameInput.value = 'Eugen';
    lastNameInput.value = 'Eugen';
    expect(submitform.checkValidity()).toBeTruthy();
  });
  it('name field validity', () => {
    const hostElement = fixture.nativeElement;
    const nameInput: HTMLInputElement = hostElement.querySelector('#name');
    expect(nameInput.validity.valid).toBeFalsy();
    nameInput.value = 'Eugen';
    expect(nameInput.validity.valid).toBeTruthy();
  });
  it('lastName field validity', () => {
    const hostElement = fixture.nativeElement;
    const lastNameInput: HTMLInputElement = hostElement.querySelector(
      '#lastName'
    );
    expect(lastNameInput.validity.valid).toBeFalsy();
    lastNameInput.value = 'Eugen';
    expect(lastNameInput.validity.valid).toBeTruthy();
  });
});
