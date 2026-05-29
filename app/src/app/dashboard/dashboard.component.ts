import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProjectImportPanelComponent } from '../shared/project-import-panel/project-import-panel.component';
import {
  ProjectCarouselComponent,
  type CarouselProject,
} from '../shared/project-carousel/project-carousel.component';
import {
  SidebarComponent,
  type SidebarEntityLink,
  type SidebarNavItem,
} from '../shared/sidebar/sidebar.component';
import { TopbarComponent, type FeedFilter } from '../shared/topbar/topbar.component';

interface ProjectStat {
  value: string;
  label: string;
}

interface ProjectFeedItem {
  title: string;
  owner: string;
  time: string;
  initials: string;
  accent: string;
  banner: string;
  previewTitle: string;
  previewSubtitle: string;
  description: string;
  links: string[];
  stats: ProjectStat[];
  image?: string;
}

interface CompactProject {
  name: string;
  initials: string;
  color: string;
  meta?: string;
  category?: string;
}

interface DashboardEvent {
  day: string;
  title: string;
  meta: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [SidebarComponent, ProjectCarouselComponent, ProjectImportPanelComponent, TopbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  @ViewChild('feedColumn') private feedColumn?: ElementRef<HTMLElement>;

  private readonly emptySpaceIgnoredSelectors =
    '.feed-column, .left-sidebar, .right-panel, .contact-rail, app-topbar, .topbar';

  readonly navItems: SidebarNavItem[] = [
    { label: 'Feed', icon: 'feed', active: true },
    { label: 'Empresas', icon: 'companies' },
    { label: 'Usuários', icon: 'users' },
    { label: 'Projetos', icon: 'projects' },
    { label: 'Marketplace', icon: 'marketplace' },
  ];

  readonly followedEntities: SidebarEntityLink[] = [
    { name: 'FootHub FC', initials: 'FC', color: '#23b26d', news: '12' },
    { name: 'Nexa CRM', initials: 'NX', color: '#2f80ed' },
    { name: 'Ana Beatriz', initials: 'AB', color: '#ef476f', news: '4' },
    { name: 'Web Designer', initials: 'WD', color: '#9b5de5' },
  ];

  readonly featuredProjects: CarouselProject[] = [
    { title: 'FluxoHub Workspace', company: 'FluxoHub', stack: 'Angular', color: '#4f46e5' },
    { title: 'Nexa CRM', company: 'Nexa Labs', stack: 'SaaS', color: '#1473e6' },
    { title: 'Atlas Finance', company: 'Atlas Co.', stack: 'Fintech', color: '#14a38b' },
    { title: 'Orbit Docs', company: 'Orbit', stack: 'Docs', color: '#7c3aed' },
    { title: 'Pulse Health', company: 'Pulse', stack: 'Healthtech', color: '#10b981' },
  ];

  readonly feedFilters: FeedFilter[] = [
    { label: 'Todos', active: true },
    { label: 'Empresas', count: '24' },
    { label: 'Usuários', count: '18' },
    { label: 'Deploys ativos' },
    { label: 'Open source' },
    { label: 'Recentes' },
  ];

  readonly projectFeed: ProjectFeedItem[] = [
    {
      title: 'FluxoHub Workspace',
      owner: 'Equipe FluxoHub',
      time: 'Atualizado agora',
      initials: 'FH',
      accent: '#ff5a1f',
      image: '/fluxohub-banner.png',
      banner: '#fff3eb',
      previewTitle: '',
      previewSubtitle: '',
      description:
        'Um portfólio público com identidade visual, links de navegação e acesso ao sistema rodando dentro do próprio FluxoHub.',
      links: ['Visão geral', 'Roadmap', 'Sistema', 'Equipe'],
      stats: [
        { value: '128', label: 'likes' },
        { value: '34', label: 'comentários' },
        { value: '19', label: 'salvos' },
      ],
    },
    {
      title: 'Nexa CRM',
      owner: 'Ana Beatriz',
      time: 'há 18 min',
      initials: 'NX',
      accent: '#2563eb',
      banner: 'linear-gradient(135deg, #e8f1ff, #d2f7ef)',
      previewTitle: 'Painel comercial conectado',
      previewSubtitle: 'Pipeline, tarefas e relatórios em uma página navegável.',
      description:
        'Projeto SaaS com banner dedicado, logo modular e uma aba para abrir o ambiente de demonstração.',
      links: ['Produto', 'Demo', 'Changelog', 'Contato'],
      stats: [
        { value: '89', label: 'likes' },
        { value: '21', label: 'comentários' },
        { value: '12', label: 'salvos' },
      ],
    },
    {
      title: 'Atlas Finance',
      owner: 'Marcos Lima',
      time: 'há 1 h',
      initials: 'AF',
      accent: '#14a38b',
      banner: 'linear-gradient(135deg, #e6fbf5, #fff1d8)',
      previewTitle: 'Finanças para pequenas equipes',
      previewSubtitle: 'Dashboard, metas e relatórios compartilháveis.',
      description:
        'Portfólio de projeto com navegação por módulos e feed de atualizações para clientes acompanharem a evolução.',
      links: ['Módulos', 'Indicadores', 'App', 'Docs'],
      stats: [
        { value: '64', label: 'likes' },
        { value: '15', label: 'comentários' },
        { value: '9', label: 'salvos' },
      ],
    },
  ];

  readonly highlightedProjects: CompactProject[] = [
    { name: 'Orbit Docs', initials: 'OD', meta: 'Docs interativos', color: '#7c3aed' },
    { name: 'Banco de Ideias', initials: 'BI', meta: 'Produto em beta', color: '#f97316' },
    { name: 'Pulse Health', initials: 'PH', meta: 'Healthtech', color: '#10b981' },
    { name: 'CodeShelf', initials: 'CS', meta: 'Open source', color: '#2563eb' },
  ];

  readonly events: DashboardEvent[] = [
    { day: '10', title: 'Demo day FluxoHub', meta: 'Projetos publicados' },
    { day: '14', title: 'Review de páginas', meta: 'Sessão da comunidade' },
  ];

  readonly suggestedCompanies: CompactProject[] = [
    { name: 'Sebo Studio', initials: 'SS', category: 'Design system', color: '#00b4d8' },
    { name: 'Launch Pad', initials: 'LP', category: 'Go-to-market', color: '#f59e0b' },
  ];

  readonly myCompanies: CompactProject[] = [
    { name: 'Cynthia', initials: 'CY', color: '#ef4444' },
    { name: 'Danny Co.', initials: 'DC', color: '#8b5cf6' },
  ];

  readonly creators: CompactProject[] = [
    { name: 'Morgan', initials: 'MO', color: '#111827' },
    { name: 'Stanley', initials: 'ST', color: '#475569' },
    { name: 'Lucas W.', initials: 'LW', color: '#f97316' },
    { name: 'Joshua', initials: 'JH', color: '#0ea5e9' },
    { name: 'Jimmy', initials: 'JM', color: '#22c55e' },
  ];

  scrollFeedFromEmptySpace(event: WheelEvent): void {
    const target = event.target;
    const feedColumn = this.feedColumn?.nativeElement;

    if (!feedColumn || !(target instanceof Element) || target.closest(this.emptySpaceIgnoredSelectors)) {
      return;
    }

    const deltaY = this.getVerticalWheelDistance(event, feedColumn);

    if (deltaY === 0) {
      return;
    }

    event.preventDefault();
    feedColumn.scrollBy({ top: deltaY });
  }

  private getVerticalWheelDistance(event: WheelEvent, feedColumn: HTMLElement): number {
    if (event.deltaMode === WheelEvent.DOM_DELTA_LINE) {
      return event.deltaY * 16;
    }

    if (event.deltaMode === WheelEvent.DOM_DELTA_PAGE) {
      return event.deltaY * feedColumn.clientHeight;
    }

    return event.deltaY;
  }
}
