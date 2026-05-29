import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface FeedFilter {
  label: string;
  active?: boolean;
  count?: string;
}

@Component({
  selector: 'app-topbar',
  imports: [RouterLink],
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent {
  @Input() filters: FeedFilter[] = [];

  filterMenuOpen = false;

  toggleFilterMenu(): void {
    this.filterMenuOpen = !this.filterMenuOpen;
  }

  closeFilterMenu(): void {
    this.filterMenuOpen = false;
  }
}
