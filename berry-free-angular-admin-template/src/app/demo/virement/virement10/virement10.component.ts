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
  selector: 'app-virement10',
  templateUrl: './virement10.html',
  styleUrl: './virement10.scss',
  standalone: true,
  imports: [CommonModule],
})
export class Virement10Component {
  fichiers: Fichier[] = [
    {
      COD_EN: '10',
      CODE_VALEUR: 'VIR0010',
      CREATED_AT: '16/08/07 15:00:00',
      NATURE_FICHIER: 'VIREMENT',
      NOM_FICHIER: 'virement_100001.RCP',
      SENS: 'E',
      TYPE_FICHIER: 'text/plain',
      UPDATED_AT: '16/08/07 15:10:00',
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
