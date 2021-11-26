import { NgModule } from "@angular/core";

import {MatTableModule} from '@angular/material/table'
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
    exports : [MatTableModule,MatSelectModule,MatSlideToggleModule]
})

export class DemoMaterialModule {}