import { TabsCompComponent } from './../tabs-comp/tabs-comp.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { MytripsPageRoutingModule } from './mytrips-routing.module';

import { MytripsPage } from './mytrips.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MytripsPageRoutingModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  declarations: [MytripsPage, TabsCompComponent]
})
export class MytripsPageModule {}
