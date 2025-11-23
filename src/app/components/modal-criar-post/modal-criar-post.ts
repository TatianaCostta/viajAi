import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-criar-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-criar-post.html',
  styleUrls: ['./modal-criar-post.css']
})
export class ModalCriarPostComponent {
  // Cria um evento para avisar quem chamou que é hora de fechar
  @Output() fechar = new EventEmitter<void>();

  fecharModal() {
    this.fechar.emit();
  }
}