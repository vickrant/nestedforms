import { Component, OnInit, forwardRef } from '@angular/core';
import { FormArray, FormBuilder, ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormGroup, Validator, Validators, AbstractControl, ValidationErrors } from "@angular/forms";

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DescriptionComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DescriptionComponent),
      multi: true
    }
  ]
})
export class DescriptionComponent implements OnInit, ControlValueAccessor, Validator {

  descriptionInfoForm: any;




  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.descriptionInfoForm = this.fb.group({
      descriptions: this.fb.array([

      ])
    })


  }
  get f() {
    return this.descriptionInfoForm.controls

  }


  get descriptions() {
    return this.descriptionInfoForm.get('descriptions') as FormArray;
  }

  addDescriptions(value) {
    if (value == 1) {
      this.descriptions.push(this.fb.control(''));
    }


  }
  deleteDescriptions(value, i) {

    this.descriptions.removeAt(i);

  }


  public onTouched: () => void = () => { };

  writeValue(val: any): void {
    val && this.descriptionInfoForm.setValue(val, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    console.log("-----------------on change description");
    this.descriptionInfoForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    console.log("-------------------on blur description");
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.descriptionInfoForm.disable() : this.descriptionInfoForm.enable();
  }

  validate(c: AbstractControl): ValidationErrors | null {
    console.log("----------------------description Info validation", c);
    return this.descriptionInfoForm.valid ? null : { invalidForm: { valid: false, message: "---------------------description fields are invalid" } };
  }
}