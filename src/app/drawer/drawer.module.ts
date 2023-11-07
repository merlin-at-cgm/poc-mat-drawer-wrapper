import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

import { DrawerHostComponent } from './drawer-host/drawer-host.component';
import { DrawerComponent } from './drawer/drawer.component';



@NgModule({
  declarations: [
    DrawerHostComponent,
    DrawerComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
  ],
  exports: [
    DrawerHostComponent,
    DrawerComponent
  ]
})
export class DrawerModule { }
