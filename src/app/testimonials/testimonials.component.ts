import { Component, OnInit } from '@angular/core';
import { TestimonialService } from '../services/testimonial.service';
import { Testimonial } from '../models/testimonial.interface';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonial[] = [];
  loading = true;
  error: string | null = null;
  currentIndex = 0;
  itemsPerPage = 3;
  isMobile = false;

  constructor(private testimonialService: TestimonialService) {}

  ngOnInit(): void {
    this.checkMobile();
    this.loadTestimonials();
    window.addEventListener('resize', () => this.checkMobile());
  }

  private checkMobile(): void {
    this.isMobile = window.innerWidth < 768;
    this.itemsPerPage = this.isMobile ? 1 : 3;
  }

  loadTestimonials(): void {
    this.testimonialService.getApprovedTestimonials().subscribe({
      next: (data) => {
        this.testimonials = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erreur lors du chargement des témoignages';
        this.loading = false;
        console.error('Error loading testimonials:', err);
      }
    });
  }

  get visibleTestimonials(): Testimonial[] {
    const start = this.currentIndex;
    const end = start + this.itemsPerPage;
    return this.testimonials.slice(start, end);
  }

  get canGoPrevious(): boolean {
    return this.currentIndex > 0;
  }

  get canGoNext(): boolean {
    return this.currentIndex + this.itemsPerPage < this.testimonials.length;
  }

  previousSlide(): void {
    if (this.canGoPrevious) {
      this.currentIndex = Math.max(0, this.currentIndex - this.itemsPerPage);
    }
  }

  nextSlide(): void {
    if (this.canGoNext) {
      this.currentIndex = Math.min(
        this.testimonials.length - this.itemsPerPage,
        this.currentIndex + this.itemsPerPage
      );
    }
  }

  goToSlide(index: number): void {
    this.currentIndex = index * this.itemsPerPage;
  }

  get totalSlides(): number {
    return Math.ceil(this.testimonials.length / this.itemsPerPage);
  }

  getStarArray(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i < rating ? 1 : 0);
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .substring(0, 2);
  }
}