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
  selector: 'app-effet42',
  templateUrl: './effet42.html',
  styleUrl: './effet42.scss',
  standalone: true,
  imports: [CommonModule],
})
export class Effet42Component {
  fichiers: Fichier[] = [
    {
      COD_EN: '42',
      CODE_VALEUR: 'EFT0042',
      CREATED_AT: '16/08/06 12:00:00',
      NATURE_FICHIER: 'EFFET',
      NOM_FICHIER: 'effet_420001.RCP',
      SENS: 'E',
      TYPE_FICHIER: 'text/plain',
      UPDATED_AT: '16/08/06 12:10:00',
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
