import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-accompagnement',
  templateUrl: './accompagnement.component.html',
  styleUrl: './accompagnement.component.css'
})
export class AccompagnementComponent {
  @ViewChild('container') container!: ElementRef;
  
  mouseX: number = 0;
  mouseY: number = 0;
  bounds: DOMRect | null = null;
  cardPositions: Map<number, { x: number, y: number, rotate: number }> = new Map();
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  defis: any[] = [
    {
      icon: 'fa-coins',
      title: 'Manque de liquidités',
      description: 'Vous constatez des difficultés à maintenir une trésorerie suffisante pour couvrir vos besoins opérationnels.',
      speed: 0.3
    },
    {
      icon: 'fa-money-bill-wave',
      title: 'Financement complexe',
      description: 'Vous avez du mal à choisir les meilleures options de financement pour soutenir votre croissance.',
      speed: 0.5
    },
    {
      icon: 'fa-boxes',
      title: 'Gestion de stock inefficace',
      description: 'Votre stock immobilise une partie importante de vos ressources, impactant vos flux de trésorerie.',
      speed: 0.4
    },
    {
      icon: 'fa-chess',
      title: 'Concurrence agressive',
      description: "L'environnement concurrentiel exige une rapidité de réaction, mais vos ressources limitées freinent votre croissance.",
      speed: 0.6
    },
    {
      icon: 'fa-bullseye',
      title: 'Stratégie commerciale inefficace',
      description: 'Vous souhaitez développer une approche qui fidélise vos clients actuels et en attire de nouveaux.',
      speed: 0.45
    },
    {
      icon: 'fa-chart-bar',
      title: 'Difficulté à planifier',
      description: 'Vous peinez à mettre en place un tableau de trésorerie dynamique et flexible.',
      speed: 0.35
    }
  ];

  constructor(private meta: Meta, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Accompagnement en Trésorerie - MFinances');
    this.meta.addTags([
      { name: 'description', content: 'Nous vous accompagnons dans la gestion de votre trésorerie.' },
      { name: 'keywords', content: 'accompagnement, trésorerie, MFinances, expert comptable' },
      { name: 'author', content: 'MIKA MUSUNGAYI' }
    ]);
    this.defis.forEach((_, index) => {
      this.cardPositions.set(index, { x: 0, y: 0, rotate: 0 });
    });
  }

  ngAfterViewInit(): void {
    this.updateBounds();
  }

  @HostListener('window:resize')
  @HostListener('window:scroll')
  updateBounds(): void {
    this.bounds = this.container.nativeElement.getBoundingClientRect();
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.bounds) return;

    this.mouseX = event.clientX - this.bounds.left;
    this.mouseY = event.clientY - this.bounds.top;

    const cards = this.container.nativeElement.querySelectorAll('.defi-card');
    cards.forEach((card: HTMLElement, index: number) => {
      const rect = card.getBoundingClientRect();
      const cardX = rect.left + rect.width / 2 - this.bounds!.left;
      const cardY = rect.top + rect.height / 2 - this.bounds!.top;

      const deltaX = this.mouseX - cardX;
      const deltaY = this.mouseY - cardY;

      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const speed = parseFloat(card.getAttribute('data-speed') || '0.4');

      if (distance < 300) {
        const angle = Math.atan2(deltaY, deltaX);
        const force = (1 - distance / 300) * speed;

        const moveX = Math.cos(angle + Math.PI) * force * 50;
        const moveY = Math.sin(angle + Math.PI) * force * 50;
        const rotate = deltaX * 0.05 * force;

        this.cardPositions.set(index, { x: moveX, y: moveY, rotate: rotate });
      } else {
        this.cardPositions.set(index, { x: 0, y: 0, rotate: 0 });
      }
    });
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.defis.forEach((_, index) => {
      this.cardPositions.set(index, { x: 0, y: 0, rotate: 0 });
    });
  }

  getCardStyle(defi: any): any {
    const index = this.defis.indexOf(defi);
    const position = this.cardPositions.get(index);
    if (!position) return {};

    return {
      transform: `translate(${position.x}px, ${position.y}px) rotate(${position.rotate}deg)`
    };
  }
}
