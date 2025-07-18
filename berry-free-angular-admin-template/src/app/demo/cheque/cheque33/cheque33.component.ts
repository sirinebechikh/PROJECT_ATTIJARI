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
  selector: 'app-cheque33',
  templateUrl: './cheque33.html',
  styleUrl: './cheque33.scss',
  standalone: true,
  imports: [CommonModule],
})
export class Cheque33Component {
  fichiers: Fichier[] = [
    {
      COD_EN: '33',
      CODE_VALEUR: 'CHQ0033',
      CREATED_AT: '16/08/03 14:00:00',
      NATURE_FICHIER: 'PRELEVEMENT',
      NOM_FICHIER: 'cheques_330001.RCP',
      SENS: 'E',
      TYPE_FICHIER: 'text/plain',
      UPDATED_AT: '16/08/03 14:10:00',
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
