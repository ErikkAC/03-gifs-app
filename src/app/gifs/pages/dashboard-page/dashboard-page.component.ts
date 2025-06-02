import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuHeaderComponent } from '../../components/gifs/side-menu/side-menu-header/side-menu-header.component';
import { SideMenuOptionsComponent } from '../../components/gifs/side-menu/side-menu-options/side-menu-options.component';
import { SideMenuComponent } from '../../components/gifs/side-menu/gifs-side-menu.component';

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet, SideMenuComponent],
  templateUrl: './dashboard-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardPageComponent { }
