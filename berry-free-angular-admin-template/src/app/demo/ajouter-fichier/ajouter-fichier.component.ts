import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AjouterFichierService } from './ajouter-fichier.service';

@Component({
  selector: 'app-ajouter-fichier',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ajouter-fichier.component.html',
  styleUrls: ['./ajouter-fichier.component.scss']
})
export class AjouterFichierComponent implements OnInit, OnDestroy {
  isOpen: boolean = false;
  private subscription: Subscription = new Subscription();

  // Propriétés du formulaire
  typeFichier: string = '';
  codeFichier: string = '';
  sens: string = '';
  codeEnregistrement: string = '';
  formatFichier: string = '';
  nomFichier: string = '';

  // Options pour les champs
  typesFichier = [
    { value: 'cheque', label: 'Chèque', icon: 'ti ti-currency-dollar' },
    { value: 'effet', label: 'Effet', icon: 'ti ti-file-invoice' },
    { value: 'prelevement', label: 'Prélèvement', icon: 'ti ti-credit-card' },
    { value: 'virement', label: 'Virement', icon: 'ti ti-arrows-double-ne-sw' }
  ];

  codesFichier: { [key: string]: Array<{value: string, label: string}> } = {
    cheque: [
      { value: '30', label: '30' },
      { value: '31', label: '31' },
      { value: '32', label: '32' },
      { value: '33', label: '33' }
    ],
    effet: [
      { value: '40', label: '40' },
      { value: '41', label: '41' }
    ],
    prelevement: [
      { value: '20', label: '20' }
    ],
    virement: [
      { value: '10', label: '10' }
    ]
  };

  sensOptions = [
    { value: 'emis', label: 'Émis', icon: 'ti ti-arrow-up' },
    { value: 'recu', label: 'Reçu', icon: 'ti ti-arrow-down' }
  ];

  codeEnregistrementOptions = [
    { value: '21', label: '21 - Présentation', icon: 'ti ti-check' },
    { value: '22', label: '22 - Rejet', icon: 'ti ti-x' }
  ];

  formatFichierOptions = [
    { value: 'env', label: '.ENV', icon: 'ti ti-file' },
    { value: 'rcp', label: '.RCP', icon: 'ti ti-file' }
  ];

  constructor(private ajouterFichierService: AjouterFichierService) {}

  ngOnInit() {
    this.subscription = this.ajouterFichierService.isModalOpen$.subscribe(
      isOpen => this.isOpen = isOpen
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // Méthode pour obtenir les codes selon le type sélectionné
  getCodesDisponibles() {
    if (this.typeFichier && this.codesFichier[this.typeFichier]) {
      return this.codesFichier[this.typeFichier];
    }
    return [];
  }

  // Méthode pour fermer le modal
  onClose() {
    this.ajouterFichierService.closeModal();
  }

  // Méthode pour fermer en cliquant sur l'arrière-plan
  onBackdropClick(event: Event) {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }

  // Méthode pour soumettre le formulaire
  onSubmit() {
    const nomFichierValide = /^[a-zA-Z0-9_-]{5,}$/.test(this.nomFichier);
    if (!nomFichierValide) {
      alert('Le nom du fichier doit comporter au moins 5 caractères (lettres, chiffres, tirets ou underscores).');
      return;
    }
    const fichierData = {
      type: this.typeFichier,
      code: this.codeFichier,
      sens: this.sens,
      codeEnregistrement: this.codeEnregistrement,
      format: this.formatFichier,
      nom: this.nomFichier
    };
    
    console.log('Données du fichier:', fichierData);
    // Ici vous pouvez ajouter la logique pour envoyer les données au serveur
    
    // Réinitialiser le formulaire et fermer le modal
    this.resetForm();
    this.onClose();
  }

  // Méthode pour réinitialiser le formulaire
  resetForm() {
    this.typeFichier = '';
    this.codeFichier = '';
    this.sens = '';
    this.codeEnregistrement = '';
    this.formatFichier = '';
    this.nomFichier = '';
  }
} 