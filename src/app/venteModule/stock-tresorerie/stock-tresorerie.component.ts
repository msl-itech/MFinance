import { Component, OnDestroy, OnInit } from '@angular/core';
import { ContactFormConfig } from '../../shared/contact-form-layout/contact-form-layout.component';

@Component({
  selector: 'app-stock-tresorerie',
  templateUrl: './stock-tresorerie.component.html',
  styleUrl: './stock-tresorerie.component.css',
})
export class StockTresorerieComponent implements OnInit, OnDestroy {
  // Popup properties
  showPopup = false;
  popupTimer: any;

  // Form properties
  currentStep = 1;
  totalSteps = 5;
  formSubmitted = false;
  showAutreDefi = false;
  showAutreSecteur = false;
  showTypesProduits = false;

  // Form data
  formData = {
    gere_stock: '',
    defi_principal: '',
    defi_autre: '',
    nom: '',
    email: '',
    telephone: '',
    chiffre_affaires: '',
    secteur_activite: '',
    secteur_autre: '',
    types_produits: '',
  };

  // Form configuration
  formConfig: ContactFormConfig = {
    // Texte à gauche
    eyebrow: '📦 Gestion de Stock & Trésorerie',
    title:
      "Trop de stock ? Pas assez de cash ? Vérifiez l'équilibre en 3 minutes.",
    description:
      "Découvrez comment transformer votre stock en véritable levier de trésorerie. Un stock mal géré peut bloquer des milliers d'euros de liquidités.",
    phoneButton: 'Appeler maintenant',
    contactButton: 'Faire mon diagnostic',

    // En-tête du formulaire
    formTitle: 'Diagnostic Stock Express',
    formDescription: 'Formulaire rapide : 5 étapes – Moins de 3 minutes',
    badge: 'Gratuit & Confidentiel',

    // Boutons et messages
    submitButton: 'Recevoir mon analyse',
    successTitle: '🎉 Merci pour votre demande !',
    successMessage:
      'Un conseiller MFINANCES vous contactera très bientôt pour vous aider à transformer votre stock en véritable levier de trésorerie.',
    successNote: "L'échange est gratuit, confidentiel et sans engagement.",
    resetButton: 'Faire une nouvelle demande',
  };

  constructor() {}

  ngOnInit() {
    // Démarrer le timer pour le popup
    this.startPopupTimer();
  }

  ngOnDestroy() {
    if (this.popupTimer) {
      clearTimeout(this.popupTimer);
    }
  }

  // Popup methods
  startPopupTimer() {
    this.popupTimer = setTimeout(() => {
      this.showPopup = true;
    }, 30000); // 30 secondes
  }

  closePopup() {
    this.showPopup = false;
  }

  openFormFromPopup() {
    this.closePopup();
    this.scrollToSection('contactSection');
  }

  // Navigation methods
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Form methods
  onGereStockChange(value: string) {
    this.formData.gere_stock = value;
  }

  onDefiChange(value: string) {
    this.formData.defi_principal = value;
    this.showAutreDefi = value === 'autre';
    if (value !== 'autre') {
      this.formData.defi_autre = '';
    }
  }

  onSecteurChange(value: string) {
    this.formData.secteur_activite = value;
    this.showAutreSecteur = value === 'autre';
    this.showTypesProduits = [
      'commerce-detail',
      'commerce-gros',
      'ecommerce',
      'production',
    ].includes(value);

    if (value !== 'autre') {
      this.formData.secteur_autre = '';
    }
    if (!this.showTypesProduits) {
      this.formData.types_produits = '';
    }
  }

  isStepValid(): boolean {
    switch (this.currentStep) {
      case 1:
        return !!this.formData.gere_stock;
      case 2:
        // Si pas de stock, on passe directement à la fin
        if (this.formData.gere_stock === 'non') {
          return true;
        }
        return (
          !!this.formData.defi_principal &&
          (this.formData.defi_principal !== 'autre' ||
            !!this.formData.defi_autre)
        );
      case 3:
        return (
          !!this.formData.nom &&
          !!this.formData.email &&
          !!this.formData.telephone
        );
      case 4:
        return !!this.formData.chiffre_affaires;
      case 5:
        return (
          !!this.formData.secteur_activite &&
          (this.formData.secteur_activite !== 'autre' ||
            !!this.formData.secteur_autre)
        );
      default:
        return false;
    }
  }

  isFormValid(): boolean {
    // Si pas de stock, le formulaire est valide après les coordonnées et CA
    if (this.formData.gere_stock === 'non') {
      return (
        this.formData.nom !== '' &&
        this.formData.email !== '' &&
        this.formData.telephone !== '' &&
        this.formData.chiffre_affaires !== ''
      );
    }

    // Si stock présent, validation complète
    return (
      this.formData.gere_stock !== '' &&
      this.formData.defi_principal !== '' &&
      (this.formData.defi_principal !== 'autre' ||
        this.formData.defi_autre !== '') &&
      this.formData.nom !== '' &&
      this.formData.email !== '' &&
      this.formData.telephone !== '' &&
      this.formData.chiffre_affaires !== '' &&
      this.formData.secteur_activite !== '' &&
      (this.formData.secteur_activite !== 'autre' ||
        this.formData.secteur_autre !== '')
    );
  }

  onNextStep() {
    if (this.isStepValid()) {
      // Si pas de stock à l'étape 1, on passe directement à l'étape 3 (coordonnées)
      if (this.currentStep === 1 && this.formData.gere_stock === 'non') {
        this.currentStep = 3;
      } else if (this.currentStep < this.totalSteps) {
        this.currentStep++;
      }
    }
  }

  onPreviousStep() {
    if (this.currentStep > 1) {
      // Si on revient de l'étape 3 et qu'on n'a pas de stock, on retourne à l'étape 1
      if (this.currentStep === 3 && this.formData.gere_stock === 'non') {
        this.currentStep = 1;
      } else {
        this.currentStep--;
      }
    }
  }

  onSubmit() {
    if (this.isFormValid()) {
      console.log('Form submitted:', this.formData);
      this.formSubmitted = true;
      // Ici vous pouvez ajouter la logique d'envoi des données
    }
  }

  onReset() {
    this.formData = {
      gere_stock: '',
      defi_principal: '',
      defi_autre: '',
      nom: '',
      email: '',
      telephone: '',
      chiffre_affaires: '',
      secteur_activite: '',
      secteur_autre: '',
      types_produits: '',
    };
    this.currentStep = 1;
    this.formSubmitted = false;
    this.showAutreDefi = false;
    this.showAutreSecteur = false;
    this.showTypesProduits = false;
  }
}
