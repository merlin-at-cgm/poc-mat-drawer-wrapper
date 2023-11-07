import { Component, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-drawer-host',
  templateUrl: './drawer-host.component.html',
  styleUrls: ['./drawer-host.component.scss']
})
export class DrawerHostComponent {

  drawerTemplate$ = new BehaviorSubject<TemplateRef<HTMLElement> | null>(null);

}
