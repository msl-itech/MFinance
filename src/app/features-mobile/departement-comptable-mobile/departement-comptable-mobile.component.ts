import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShardeModuleModule } from '../../sharde-module/sharde-module.module';
import { ZoneContactMobileComponent } from "../../zone-contact-mobile/zone-contact-mobile.component";

@Component({
    selector: 'app-departement-comptable-mobile',
    standalone: true,
    imports: [CommonModule, RouterModule, ShardeModuleModule, ZoneContactMobileComponent],
    templateUrl: './departement-comptable-mobile.component.html',
    styleUrls: ['./departement-comptable-mobile.component.scss']
})
export class DepartementComptableMobileComponent implements OnInit {

    isModalOpen = false;

    constructor() { }

    ngOnInit(): void {
    }

    scrollTo(sectionId: string): void {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    openHybridModal(): void {
        this.isModalOpen = true;
        document.body.style.overflow = 'hidden';
    }

    closeHybridModal(): void {
        this.isModalOpen = false;
        document.body.style.overflow = '';
    }

}
