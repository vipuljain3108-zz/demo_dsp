import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMenusComponent } from './all-menus/all-menus.component';

const routes: Routes = [
  {path : '', component : AllMenusComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
