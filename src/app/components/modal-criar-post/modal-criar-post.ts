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
  @Output() fechar = new EventEmitter<void>();

  fecharModal() {
    this.fechar.emit();
  }

  
  aoSelecionarArquivo(event: any) {
    const arquivo = event.target.files[0];
    
    if (arquivo) {
      console.log("Arquivo selecionado:", arquivo.name);
      
      alert(`Você selecionou: ${arquivo.name}`); 
    }
  }
}