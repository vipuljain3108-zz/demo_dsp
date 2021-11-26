import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { AllMenusComponent } from './all-menus/all-menus.component';
import { DemoMaterialModule } from '../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AllMenusComponent
  ],
  imports: [
    CommonModule,DemoMaterialModule,
    MenuRoutingModule,FormsModule, ReactiveFormsModule
  ]
})
export class MenuModule { }
