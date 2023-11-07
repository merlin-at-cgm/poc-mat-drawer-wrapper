import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-drawer-host',
  templateUrl: './drawer-host.component.html',
  styleUrls: ['./drawer-host.component.scss'],
  providers: [{
    provide: DrawerHostComponent,
    useExisting: DrawerHostComponent,
  }]
})
export class DrawerHostComponent {

  drawerTemplate$ = new BehaviorSubject<TemplateRef<HTMLElement> | null>(null);

  @ViewChild('drawer') drawer: MatDrawer | undefined;

  setTemplate(template: TemplateRef<HTMLElement>): void {
    this.drawerTemplate$.next(template);
  }

  toggle(): void {
    this.drawer?.toggle();
  }
}
