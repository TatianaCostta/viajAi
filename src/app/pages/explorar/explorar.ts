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
  
  // Índice que controla qual card está no meio (começa no 1, que é a Sofia)
  activeIndex = 1;

  // Lista de Perfis (Aqui você pode adicionar mais depois)
  perfis = [
    {
      nome: 'Lucas Lima',
      bio: 'Mochileiro, viciado em café e sempre buscando o próximo cume. Foco em destinos com natureza selvagem.',
      foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      nome: 'Sofia Oliveira',
      bio: 'Em busca de destinos charmosos e da gastronomia mais requintada. Acredito que viajar é uma arte.',
      foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      nome: 'Camila Santos',
      bio: 'Viajante solo apaixonada por história, arte e mergulhar na vida local. Posto o que a maioria dos guias não mostra.',
      foto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    // --- ADICIONE OS NOVOS PERFIS AQUI ABAIXO ---
    /*
    {
      nome: 'Novo Usuário',
      bio: 'Descrição do novo usuário...',
      foto: 'caminho-da-foto.jpg'
    },
    */
  ];

  // Função para ir para o card anterior
  prev() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    } else {
      // Se estiver no primeiro e clicar pra voltar, vai para o último (efeito infinito opcional)
      this.activeIndex = this.perfis.length - 1;
    }
  }

  // Função para ir para o próximo card
  next() {
    if (this.activeIndex < this.perfis.length - 1) {
      this.activeIndex++;
    } else {
      // Se estiver no último, volta para o primeiro
      this.activeIndex = 0;
    }
  }
}