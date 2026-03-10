import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="accueil" class="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Laboratoire d'Informatique et Technologies Avancées
          </h1>
          <p class="text-xl md:text-2xl mb-4 text-primary-100">ENSABM - École Nationale des Sciences Appliquées - Beni mellal</p>
          <p class="text-lg md:text-xl mb-8 text-primary-50">
            Un environnement moderne pour l'enseignement et la recherche en informatique
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Découvrir nos services
            </a>
            <a href="#contact" class="btn-secondary border-white text-white hover:bg-primary-600">
              Nous contacter
            </a>
          </div>

          <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="text-4xl font-bold mb-2">5</div>
              <div class="text-primary-100">Domaines de recherche</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold mb-2">30+</div>
              <div class="text-primary-100">Postes informatiques</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold mb-2">3</div>
              <div class="text-primary-100">Serveurs haute performance</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold mb-2">95%</div>
              <div class="text-primary-100">Disponibilité</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {}
