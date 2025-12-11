import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShardeModuleModule } from '../../sharde-module/sharde-module.module';

@Component({
    selector: 'app-departement-comptable-mobile',
    standalone: true,
    imports: [CommonModule, RouterModule, ShardeModuleModule],
    templateUrl: './departement-comptable-mobile.component.html',
    styleUrls: ['./departement-comptable-mobile.component.scss']
})
export class DepartementComptableMobileComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    scrollTo(sectionId: string): void {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

}
