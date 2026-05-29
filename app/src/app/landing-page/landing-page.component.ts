import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

type WorkflowKey = 'catalog' | 'demo' | 'share';

interface Workflow {
  key: WorkflowKey;
  label: string;
  title: string;
  description: string;
  metric: string;
  steps: string[];
}

@Component({
  selector: 'app-landing-page',
  imports: [RouterLink],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  protected readonly activeWorkflow = signal<WorkflowKey>('catalog');
  protected readonly openFaq = signal(0);

  protected readonly metrics = [
    { value: '32', label: 'projetos prontos para apresentar' },
    { value: '08', label: 'demos temporárias ativas' },
    { value: '91%', label: 'menos tempo preparando showcase' },
  ];

  protected readonly marqueeItems = [
    'Angular',
    'Node.js',
    'PostgreSQL',
    'GitHub',
    'GitLab',
    'Docker',
    'Preview links',
    'Demo sessions',
  ];

  protected readonly features = [
    {
      title: 'Portfólio operacional',
      description:
        'Organize projetos em andamento com status, descrição, links, instruções e contexto de apresentação.',
    },
    {
      title: 'Demonstrações temporárias',
      description:
        'Prepare sessões controladas para mostrar projetos locais sem transformar cada experimento em deploy permanente.',
    },
    {
      title: 'Mapa de maturidade',
      description:
        'Separe ideias, protótipos, MVPs e produtos em produção com sinais claros para quem está avaliando.',
    },
    {
      title: 'Hub privado primeiro',
      description:
        'Fluxo pensado para uso pessoal e seguro, com caminhos futuros para páginas públicas e descoberta de projetos.',
    },
  ];

  protected readonly projects = [
    {
      name: 'Invoice Pulse',
      status: 'MVP validado',
      accent: 'accent-carmine',
      meta: 'API + dashboard',
    },
    {
      name: 'Local Runner',
      status: 'Demo local',
      accent: 'accent-wine',
      meta: 'Container preview',
    },
    {
      name: 'Repo Atlas',
      status: 'Em evolução',
      accent: 'accent-graphite',
      meta: 'GitHub sync',
    },
  ];

  protected readonly workflows: Workflow[] = [
    {
      key: 'catalog',
      label: 'Catalogar',
      title: 'Transforme projetos soltos em uma vitrine navegável.',
      description:
        'Cadastre repositórios, descreva o objetivo, marque o estágio e registre instruções para qualquer pessoa entender o que está sendo mostrado.',
      metric: '3 min',
      steps: ['Descrição clara', 'Links de repositório', 'Status de evolução'],
    },
    {
      key: 'demo',
      label: 'Demonstrar',
      title: 'Abra demos temporárias com contexto suficiente.',
      description:
        'Centralize preview links, comandos locais e observações para reduzir o atrito antes de uma apresentação técnica.',
      metric: '1 link',
      steps: ['Preview externo', 'Notas de execução', 'Sessão controlada'],
    },
    {
      key: 'share',
      label: 'Compartilhar',
      title: 'Mostre progresso sem prometer produção.',
      description:
        'Apresente o que está vivo, o que está experimental e o que precisa de validação com uma narrativa honesta e bonita.',
      metric: '100%',
      steps: ['Página do projeto', 'Sinais de confiança', 'Próximos passos'],
    },
  ];

  protected readonly faqs = [
    {
      question: 'O FluxoHub substitui um deploy tradicional?',
      answer:
        'Não. A ideia é organizar e apresentar projetos antes, durante ou depois do deploy, principalmente quando eles ainda vivem em ambiente local.',
    },
    {
      question: 'Dá para usar com projetos privados?',
      answer:
        'Sim. A visão inicial é justamente um hub privado para catalogar, testar e demonstrar projetos com controle sobre o que aparece.',
    },
    {
      question: 'A página pública entra no roadmap?',
      answer:
        'Sim. O README já aponta evolução para páginas públicas ou privadas, previews temporários e uma experiência mais próxima de SaaS.',
    },
  ];

  protected readonly activeWorkflowDetails = computed(
    () =>
      this.workflows.find((workflow) => workflow.key === this.activeWorkflow()) ??
      this.workflows[0],
  );

  protected setWorkflow(workflow: WorkflowKey): void {
    this.activeWorkflow.set(workflow);
  }

  protected toggleFaq(index: number): void {
    this.openFaq.update((current) => (current === index ? -1 : index));
  }
}
