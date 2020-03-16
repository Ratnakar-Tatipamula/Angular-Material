import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';


@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.css']
})
export class MyDashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Account Overview', cols: 1, rows: 1 },
          { title: 'Summary', cols: 1, rows: 1 },
          { title: 'Recent Updates', cols: 1, rows: 1 },
          { title: 'Analysis', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Account Overview', cols: 2, rows: 1, content: 'Accouting updates...' },
        { title: 'Summary', cols: 1, rows: 1, content: 'Summary updates...'  },
        { title: 'Recent Updates', cols: 1, rows: 2, content: 'Recent updates...'  },
        { title: 'Analysis', cols: 1, rows: 1, content: 'Analysis updates...'  }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
