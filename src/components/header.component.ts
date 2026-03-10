import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="bg-white shadow-md sticky top-0 z-50">
      <nav class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div class="bg-primary-600 text-white p-2 rounded-lg">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <div>
              <h1 class="text-xl font-bold text-gray-900">LABO ENSABM</h1>
              <p class="text-xs text-gray-600">Laboratoire d'Informatique et Technologies Avancées</p>
            </div>
          </div>

          <button
            (click)="toggleMenu()"
            class="md:hidden text-gray-700 focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                [attr.d]="mobileMenuOpen() ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"/>
            </svg>
          </button>

          <ul class="hidden md:flex space-x-8">
            <li *ngFor="let item of menuItems" >
              <a [href]="'#' + item.id"
                 class="text-gray-700 hover:text-primary-600 transition-colors font-medium">
                {{ item.label }}
              </a>
            </li>
          </ul>
        </div>

        <ul *ngIf="mobileMenuOpen()" class="md:hidden mt-4 space-y-2 pb-2">
          <li *ngFor="let item of menuItems">
            <a [href]="'#' + item.id"
               (click)="toggleMenu()"
               class="block py-2 text-gray-700 hover:text-primary-600 transition-colors font-medium">
              {{ item.label }}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  `
})
export class HeaderComponent {
  mobileMenuOpen = signal(false);

  menuItems = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'domaines', label: 'Domaines' },
    { id: 'equipements', label: 'Équipements' },
    { id: 'services', label: 'Services' },
    { id: 'equipe', label: 'Équipe' },
    { id: 'contact', label: 'Contact' }
  ];

  toggleMenu() {
    this.mobileMenuOpen.set(!this.mobileMenuOpen());
  }
}
