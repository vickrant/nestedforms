import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from "@angular/forms";
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-billing-info',
  templateUrl: './billing-info.component.html',
  styleUrls: ['./billing-info.component.css']
})
export class BillingInfoComponent implements OnInit {

  // public nestedForm: FormGroup = new FormGroup({
  //   basicInfo: new FormControl(""),
  //   address: new FormControl(""),
  //   aliases:new FormControl("").array([
  //     this.fb.control('')
  //   ])
  // });
  public nestedForm = this.fb.group({
    basicInfo: [''],
    address: [''],
    descriptions: ['']
    // descriptions:[''],
    //   this.fb.control('')

    // ])
    // descriptions:this.fb.array([
    //   this.fb.control('')

    // ])

  });
  get descriptions() {
    return this.nestedForm.get('descriptions') as FormArray;
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  addDescriptions(value) {
    if (value == 1) {
      this.descriptions.push(this.fb.control(''));
    }


  }
  deleteDescriptions(value, i) {

    this.descriptions.removeAt(i);




  }
  public onSubmit() {
    console.log("Val", this.nestedForm.value);
  }
}