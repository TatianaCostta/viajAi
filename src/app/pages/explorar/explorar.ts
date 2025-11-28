import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-explorar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './explorar.html',
  styleUrls: ['./explorar.css']
})
export class ExplorarComponent { 
  
  activeIndex = 1;

  perfis = [
    {
      nome: 'Lucas Lima',
      bio: 'Mochileiro, viciado em café e sempre buscando o próximo cume.',
      
      foto: 'lucas.jpeg' 
    },
    {
      nome: 'Sofia Oliveira',
      bio: 'Em busca de destinos charmosos e da gastronomia mais requintada.',
      foto: 'sofia.jpeg'
    },
    {
      nome: 'Camila Santos',
      bio: 'Viajante solo apaixonada por história, arte e mergulhar na vida local.',
      foto: 'camila.jpeg'
    },
  ];

  prev() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    } else {
      this.activeIndex = this.perfis.length - 1;
    }
  }

  next() {
    if (this.activeIndex < this.perfis.length - 1) {
      this.activeIndex++;
    } else {
      this.activeIndex = 0;
    }
  }
}