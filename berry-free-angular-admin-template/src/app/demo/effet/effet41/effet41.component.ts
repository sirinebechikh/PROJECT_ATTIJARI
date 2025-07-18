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
  selector: 'app-effet41',
  templateUrl: './effet41.html',
  styleUrl: './effet41.scss',
  standalone: true,
  imports: [CommonModule],
})
export class Effet41Component {
  fichiers: Fichier[] = [
    {
      COD_EN: '41',
      CODE_VALEUR: 'EFT0041',
      CREATED_AT: '16/08/05 11:00:00',
      NATURE_FICHIER: 'EFFET',
      NOM_FICHIER: 'effet_410001.RCP',
      SENS: 'E',
      TYPE_FICHIER: 'text/plain',
      UPDATED_AT: '16/08/05 11:10:00',
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
