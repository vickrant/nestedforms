import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BillingInfoComponent } from './billing-info/billing-info.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { AddressInfoComponent } from './address-info/address-info.component';
import { DescriptionComponent } from './description/description.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { ThingComponent } from './thing/thing.component';

@NgModule({
  declarations: [
    AppComponent,
    BillingInfoComponent,
    BasicInfoComponent,
    AddressInfoComponent,
    DescriptionComponent,
    FormArrayComponent,
    ThingComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
