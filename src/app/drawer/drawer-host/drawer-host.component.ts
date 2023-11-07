import { ChangeDetectorRef, Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-drawer-host',
  templateUrl: './drawer-host.component.html',
  styleUrls: ['./drawer-host.component.scss'],
})
export class DrawerHostComponent {
  @ViewChild('drawer') drawer: MatDrawer | undefined;

  drawerTemplate$ = new BehaviorSubject<TemplateRef<HTMLElement> | null>(null);

  constructor(private cd: ChangeDetectorRef) { }

  setTemplate(template: TemplateRef<HTMLElement>): void {
    this.drawerTemplate$.next(template);
    this.cd.detectChanges();
  }

  toggle(): void {
    this.drawer?.toggle();
  }
}
