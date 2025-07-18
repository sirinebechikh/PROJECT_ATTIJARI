// Angular Import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { BajajChartComponent } from 'src/app/theme/shared/components/apexchart/bajaj-chart/bajaj-chart.component';
import { BarChartComponent } from 'src/app/theme/shared/components/apexchart/bar-chart/bar-chart.component';
import { ChartDataMonthComponent } from 'src/app/theme/shared/components/apexchart/chart-data-month/chart-data-month.component';

@Component({
  selector: 'app-default',
  imports: [CommonModule, BajajChartComponent, BarChartComponent, ChartDataMonthComponent, SharedModule],
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent {
  // public method
  ListGroup = [
    {
      name: 'Fichier 006',
      status: 'En attente',
      info: 'Type : Chèque',
      amount: '3 000 DT',
      bgColor: 'bg-light-warning',
      icon: 'ti ti-clock',
      color: 'text-warning'
    },
    {
      name: 'Fichier 007',
      status: 'En attente',
      info: 'Type : Virement',
      amount: '1 500 DT',
      bgColor: 'bg-light-warning',
      icon: 'ti ti-clock',
      color: 'text-warning'
    },
    {
      name: 'Fichier 001',
      status: 'Émis',
      info: 'Type : Chèque',
      amount: '10 000 DT',
      bgColor: 'bg-light-success',
      icon: 'ti ti-arrow-up',
      color: 'text-success'
    },
    {
      name: 'Fichier 002',
      status: 'Rejeté',
      info: 'Type : Prélèvement',
      amount: '2 500 DT',
      bgColor: 'bg-light-danger',
      icon: 'ti ti-x',
      color: 'text-danger'
    },
    {
      name: 'Fichier 003',
      status: 'Émis',
      info: 'Type : Virement',
      amount: '5 000 DT',
      bgColor: 'bg-light-success',
      icon: 'ti ti-arrow-up',
      color: 'text-success'
    },
    {
      name: 'Fichier 004',
      status: 'Rejeté',
      info: 'Type : Effet',
      amount: '1 200 DT',
      bgColor: 'bg-light-danger',
      icon: 'ti ti-x',
      color: 'text-danger'
    },
    {
      name: 'Fichier 005',
      status: 'Émis',
      info: 'Type : Chèque',
      amount: '7 800 DT',
      bgColor: 'bg-light-success',
      icon: 'ti ti-arrow-up',
      color: 'text-success',
      space: 'pb-0'
    },
    {
      name: 'Fichier 008',
      status: 'En attente',
      info: 'Type : Effet',
      amount: '2 200 DT',
      bgColor: 'bg-light-warning',
      icon: 'ti ti-clock',
      color: 'text-warning'
    },
    {
      name: 'Fichier 009',
      status: 'En attente',
      info: 'Type : Prélèvement',
      amount: '4 800 DT',
      bgColor: 'bg-light-warning',
      icon: 'ti ti-clock',
      color: 'text-warning'
    },
    {
      name: 'Fichier 010',
      status: 'En attente',
      info: 'Type : Chèque',
      amount: '6 000 DT',
      bgColor: 'bg-light-warning',
      icon: 'ti ti-clock',
      color: 'text-warning'
    }
  ];

  profileCard = [
    {
      style: 'bg-primary-dark text-white',
      background: 'bg-primary',
      value: '203k €',
      text: 'Bénéfice net',
      color: 'text-white',
      value_color: 'text-white'
    },
    {
      background: 'bg-warning',
      avatar_background: 'bg-light-warning',
      value: '550k €',
      text: 'Revenu total',
      color: 'text-warning'
    }
  ];

  totalFichiers: number = 350; // valeur exemple, à remplacer par la vraie valeur
  fichiersEmis: number = 280;
  fichiersRejetes: number = 70;
  tauxRejet: string = ((this.fichiersRejetes / this.totalFichiers) * 100).toFixed(1) + ' %';

  montantTotal: string = '550k DT';
  revenuTotal: string = '1 200k DT';

  pourcentageJour: number = 12; // exemple, à remplacer par la vraie valeur
  pourcentageMois: number = 38; // exemple, à remplacer par la vraie valeur
  pourcentageEmisJour: number = 85; // exemple, à remplacer par la vraie valeur
  pourcentageEmisMois: number = 92; // exemple, à remplacer par la vraie valeur
  pourcentageRejeteJour: number = 15; // exemple, à remplacer par la vraie valeur
  pourcentageRejeteMois: number = 8; // exemple, à remplacer par la vraie valeur
  montantJour: number = 12000; // exemple, à remplacer par la vraie valeur
  montantMois: number = 350000; // exemple, à remplacer par la vraie valeur

  remisCount: number = 120;
  recuCount: number = 95;
  reprisCount: number = 15;
  renduCount: number = 8;

  // pie-chart.component.ts
  chartOptions = {
    series: [120, 80, 60, 40], // Chèque, Prélèvement, Virement, Effet
    chart: {
      type: 'pie',
      width: 380
    },
    labels: ['Chèque', 'Prélèvement', 'Virement', 'Effet'],
    colors: ['#2196f3', '#43a047', '#e53935', '#fbb034'],
    title: {
      text: 'Répartition des fichiers par type',
      align: 'left',
      style: { fontSize: '1.2rem', fontWeight: 'bold', color: '#222' }
    }
  };

  getTotalEmis(): string {
    // Additionne les montants des fichiers émis
    const total = this.ListGroup
      .filter(f => f.status === 'Émis')
      .map(f => Number(f.amount.replace(/\s|€|DT|,/g, '')))
      .reduce((a, b) => a + b, 0);
    // Formate le total avec séparateur de milliers et le symbole DT
    return total.toLocaleString('fr-FR') + ' DT';
  }

  get pendingFiles() {
    return this.ListGroup.filter(l => l.status === 'En attente');
  }
}
