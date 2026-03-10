import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="section-title">Indicateurs de Performance</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Excellence et engagement mesurables
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div *ngFor="let stat of stats" class="card text-center">
            <div class="bg-gradient-to-br from-primary-500 to-primary-700 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="stat.icon"/>
              </svg>
            </div>
            <h3 class="text-4xl font-bold text-gray-900 mb-2">{{ stat.value }}</h3>
            <p class="text-gray-600 font-medium">{{ stat.label }}</p>
          </div>
        </div>

        <div class="mt-12 card bg-gradient-to-br from-primary-50 to-primary-100">
          <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">Budget Estimatif</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div *ngFor="let item of budget" class="bg-white rounded-lg p-4 flex justify-between items-center">
              <span class="font-medium text-gray-900">{{ item.category }}</span>
              <span class="text-primary-600 font-bold text-lg">{{ item.amount }} MAD</span>
            </div>
            <div class="bg-primary-600 text-white rounded-lg p-4 flex justify-between items-center md:col-span-2">
              <span class="font-bold text-xl">Total</span>
              <span class="font-bold text-2xl">800 000 MAD</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class StatsComponent {
  stats = [
    {
      value: '95%+',
      label: 'Disponibilité des équipements',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      value: '∞',
      label: 'Projets terminés par an',
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
    }, 
    {
      value: '∞',
      label: 'Publications scientifiques',
      icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
    },
    {
      value: '∞',
      label: 'Collaborations industrielles',
      icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
    }
  ];

  budget = [
    { category: 'Matériel informatique', amount: '400 000' },
    { category: 'Serveurs & réseau', amount: '250 000' },
    { category: 'Logiciels & licences', amount: '100 000' },
    { category: 'Maintenance & consommables', amount: '50 000' }
  ];
}
