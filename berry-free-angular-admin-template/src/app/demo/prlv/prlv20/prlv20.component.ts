import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Fichier {
  COD_EN: string;
  CODE_VALEUR: string;
  CREATED_AT: string;
  NATURE_FICHIER: string;
  NOM_FICHIER: string;
  SENS: string;
  TYPE_FICHIER: string;
  UPDATED_AT: string;
}

@Component({
  selector: 'app-prlv20',
  templateUrl: './prlv20.html',
  styleUrl: './prlv20.scss',
  standalone: true,
  imports: [CommonModule],
})
export class Prlv20Component {
  fichiers: Fichier[] = [
    {
      COD_EN: '20',
      CODE_VALEUR: 'PRL0001',
      CREATED_AT: '16/08/04 10:00:00',
      NATURE_FICHIER: 'PRELEVEMENT',
      NOM_FICHIER: 'prlv_200001.RCP',
      SENS: 'E',
      TYPE_FICHIER: 'text/plain',
      UPDATED_AT: '16/08/04 10:10:00',
    }
  ];

  modifierFichier(fichier: Fichier) {
    alert('Modifier le fichier : ' + fichier.CODE_VALEUR);
  }

  supprimerFichier(fichier: Fichier) {
    if (confirm('Voulez-vous vraiment supprimer ce fichier ?')) {
      this.fichiers = this.fichiers.filter(f => f !== fichier);
    }
  }
}
