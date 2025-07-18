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
  selector: 'app-cheque31',
  templateUrl: './cheque31.html',
  styleUrl: './cheque31.scss',
  standalone: true,
  imports: [CommonModule],
})
export class Cheque31Component {
  fichiers: Fichier[] = [
    {
      COD_EN: '31',
      CODE_VALEUR: 'CHQ0031',
      CREATED_AT: '16/08/01 09:15:00',
      NATURE_FICHIER: 'PRELEVEMENT',
      NOM_FICHIER: 'cheques_310001.RCP',
      SENS: 'E',
      TYPE_FICHIER: 'text/plain',
      UPDATED_AT: '16/08/01 09:20:00',
    },
    {
      COD_EN: '32',
      CODE_VALEUR: 'CHQ0032',
      CREATED_AT: '16/08/01 10:00:00',
      NATURE_FICHIER: 'VIREMENT',
      NOM_FICHIER: 'cheques_310002.RCP',
      SENS: 'R',
      TYPE_FICHIER: 'text/plain',
      UPDATED_AT: '16/08/01 10:05:00',
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
