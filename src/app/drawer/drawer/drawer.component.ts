import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { DrawerHostComponent } from '../drawer-host/drawer-host.component';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements AfterViewInit{


  // drawerHost: DrawerHostComponent | undefined;
  constructor(private drawerHost: DrawerHostComponent) { }

  @ViewChild('drawerTemplate', {static: true}) drawerTemplate: TemplateRef<HTMLElement> | undefined;

  ngAfterViewInit(): void {
    if(!this.drawerTemplate) {
      return;
    }

    this.drawerHost?.setTemplate(this.drawerTemplate);
  }

  toggle(): void{
    this.drawerHost?.toggle();
  }
}
