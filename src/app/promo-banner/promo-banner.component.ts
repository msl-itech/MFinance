import { Component } from '@angular/core';

@Component({
  selector: 'app-promo-banner',
  templateUrl: './promo-banner.component.html',
  styleUrl: './promo-banner.component.css'
})
export class PromoBannerComponent {
  showBanner = true;
  endTime: Date;
  countdownDisplay = '';
  private countdownInterval: any;

  constructor() {
    // La promotion se termine dans 5h 28m 8s
    this.endTime = new Date();
    this.endTime.setHours(this.endTime.getHours() + 5);
    this.endTime.setMinutes(this.endTime.getMinutes() + 28);
    this.endTime.setSeconds(this.endTime.getSeconds() + 8);
  }

  ngOnInit() {
    this.startCountdown();
  }

  ngOnDestroy() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }

  startCountdown() {
    this.countdownInterval = setInterval(() => {
      const now = new Date();
      const difference = this.endTime.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(this.countdownInterval);
        this.countdownDisplay = 'Promotion terminée';
        return;
      }

      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      this.countdownDisplay = `${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
  }

  closeBanner() {
    this.showBanner = false;
  }
}
