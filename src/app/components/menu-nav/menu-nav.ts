import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
// Importe o modal que acabamos de criar
import { ModalCriarPostComponent } from '../modal-criar-post/modal-criar-post';

@Component({
  selector: 'app-menu-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, ModalCriarPostComponent], // <--- Adicione aqui
  templateUrl: './menu-nav.html',
  styleUrls: ['./menu-nav.css']
})
export class MenuNavComponent {
    // Variável de controle
    mostrarModal = false;

    abrirModal() {
        this.mostrarModal = true;
    }

    fecharModal() {
        this.mostrarModal = false;
    }
}