import {Component, inject, signal, ViewChild} from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import { ViewportScroller } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {map} from 'rxjs';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private scroller = inject(ViewportScroller);

  private bp = inject(BreakpointObserver);

  @ViewChild('drawer') drawer!: MatSidenav;

  themeIcon = signal('dark_mode');
  isHandset = false;
  drawerMode: 'over' | 'side' = 'over';

  constructor() {



    this.bp.observe([Breakpoints.Handset])
      .pipe(
        takeUntilDestroyed(),
        map(state => state.matches)
      )
      .subscribe(isHandset => {
        this.isHandset = isHandset;
        this.drawerMode = isHandset ? 'over' : 'over'; // хочешь на десктопе 'side'? поставь 'side'
        if (!isHandset && this.drawer?.opened && this.drawerMode === 'over') {

          this.drawer.close();
        }
      });


  }

  jump(id: string) {
    const yOffset = 72;
    const el = document.getElementById(id);
    if (!el) return;
    const { top } = el.getBoundingClientRect();
    window.scrollTo({ top: window.scrollY + top - yOffset, behavior: 'smooth' });
  }

  jumpTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }



  onSidenavClosed() {
    queueMicrotask(() => {
      const btn: HTMLButtonElement | null = document.querySelector('.menu-btn');
      btn?.focus();
    });
  }
}
