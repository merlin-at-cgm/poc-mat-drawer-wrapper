import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

import { DrawerHostComponent } from './drawer-host/drawer-host.component';



@NgModule({
  declarations: [
    DrawerHostComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
  ],
  exports: [
    DrawerHostComponent
  ]
})
export class DrawerModule { }
