import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestion-utilisateur',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gestion-utilisateur.component.html',
  styleUrls: ['./gestion-utilisateur.component.scss']
})
export class GestionUtilisateurComponent {
  utilisateurs = [
    { id: 1, nom: 'Dupont', prenom: 'Jean', email: 'jean.dupont@email.com', actif: true },
    { id: 2, nom: 'Martin', prenom: 'Sophie', email: 'sophie.martin@email.com', actif: false }
  ];

  supprimerUtilisateur(id: number) {
    this.utilisateurs = this.utilisateurs.filter(u => u.id !== id);
  }

  // Modal d'ajout
  isModalOpen = false;
  newUser = { nom: '', prenom: '', email: '', password: '' };
  errorMsg = '';

  ouvrirModal() {
    this.isModalOpen = true;
    this.newUser = { nom: '', prenom: '', email: '', password: '' };
    this.errorMsg = '';
  }

  fermerModal() {
    this.isModalOpen = false;
  }

  ajouterUtilisateur() {
    // Validation simple
    if (!this.newUser.nom || !this.newUser.email || !this.newUser.password) {
      this.errorMsg = 'Tous les champs sont obligatoires.';
      return;
    }
    // Email simple regex
    if (!/^\S+@\S+\.\S+$/.test(this.newUser.email)) {
      this.errorMsg = 'Email invalide.';
      return;
    }
    this.utilisateurs.push({
      id: Date.now(),
      nom: this.newUser.nom,
      prenom: this.newUser.prenom,
      email: this.newUser.email,
      actif: true
    });
    this.fermerModal();
  }

  activerUtilisateur(id: number) {
    const user = this.utilisateurs.find(u => u.id === id);
    if (user) user.actif = true;
  }

  desactiverUtilisateur(id: number) {
    const user = this.utilisateurs.find(u => u.id === id);
    if (user) user.actif = false;
  }
} 