import { Component, Input } from '@angular/core';

export interface SidebarNavItem {
  label: string;
  icon: string;
  active?: boolean;
  badge?: string;
}

export interface SidebarEntityLink {
  name: string;
  initials: string;
  color: string;
  news?: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Input() navItems: SidebarNavItem[] = [];
  @Input() followedEntities: SidebarEntityLink[] = [];
  @Input() listTitle = 'Empresas e usuários';
  @Input() profileName = 'Visitante Fluxo';
  @Input() profileSubtitle = '@visitante';
  @Input() profileInitials = 'FH';
}
