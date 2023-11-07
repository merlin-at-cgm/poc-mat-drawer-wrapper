import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerHostComponent } from './drawer-host/drawer-host.component';



@NgModule({
  declarations: [
    DrawerHostComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DrawerHostComponent
  ]
})
export class DrawerModule { }
