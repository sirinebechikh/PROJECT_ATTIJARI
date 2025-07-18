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
  selector: 'app-cheque30',
  templateUrl: './cheque30.html',
  styleUrl: './cheque30.scss',
  standalone: true,
  imports: [CommonModule],
})
export class Cheque30Component {
  fichiers: Fichier[] = [
    {
      COD_EN: '22',
      CODE_VALEUR: 'CHQ0005',
      CREATED_AT: '16/07/25 12:23:28',
      NATURE_FICHIER: 'PRELEVEMENT',
      NOM_FICHIER: 'cheques_252525.RCP',
      SENS: 'E',
      TYPE_FICHIER: 'text/plain',
      UPDATED_AT: '16/07/25 12:27:01',
    },
    {
      COD_EN: '21',
      CODE_VALEUR: 'CHQ0002',
      CREATED_AT: '16/07/25 12:22:20',
      NATURE_FICHIER: 'PRELEVEMENT',
      NOM_FICHIER: 'cheques_202507.ENV',
      SENS: 'E',
      TYPE_FICHIER: 'text/plain',
      UPDATED_AT: '16/07/25 12:23:57',
    },
    {
      COD_EN: '21',
      CODE_VALEUR: 'CHQ0001',
      CREATED_AT: '16/07/25 11:52:28',
      NATURE_FICHIER: 'VIREMENT',
      NOM_FICHIER: 'cheques_202507.RCP',
      SENS: 'R',
      TYPE_FICHIER: 'text/plain',
      UPDATED_AT: '16/07/25 12:16:53',
    },
    {
      COD_EN: 'EN',
      CODE_VALEUR: 'CHQ0002',
      CREATED_AT: '16/07/25 11:50:07',
      NATURE_FICHIER: 'PRELEVEMENT',
      NOM_FICHIER: 'cheques_202507.RCP',
      SENS: 'R',
      TYPE_FICHIER: 'text/plain',
      UPDATED_AT: '16/07/25 12:20:53',
    },
    {
      COD_EN: '',
      CODE_VALEUR: 'CHQ0005',
      CREATED_AT: '16/07/25 11:12:32',
      NATURE_FICHIER: 'PRELEVEMENT',
      NOM_FICHIER: 'cheques_252525.RCP',
      SENS: '',
      TYPE_FICHIER: 'text/plain',
      UPDATED_AT: '16/07/25 12:27:38',
    },
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
