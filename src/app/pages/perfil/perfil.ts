import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <--- Importante para inputs funcionarem
import { MenuNavComponent } from '../../components/menu-nav/menu-nav';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, MenuNavComponent, FormsModule], // <--- Adicione FormsModule aqui
  templateUrl: './perfil.html',
  styleUrls: ['./perfil.css']
})
export class PerfilComponent { 
  
  // DADOS DO PERFIL (Agora são variáveis)
  usuario = 'henrifiora';
  nome = 'Henrique Fioravante';
  bio1 = '✈️ Viajante por paixão, não por ostentação';
  bio2 = '🌱 Viajar é crescer - e pode ser acessível';
  bio3 = '📍 Culturas, conexões e caminhos reais';

  // Controle do Modal de Edição
  modalAberto = false;

  abrirEdicao() {
    this.modalAberto = true;
  }

  salvarEdicao() {
    this.modalAberto = false;
    // Aqui no futuro você salvaria no banco de dados
  }

  compartilharPerfil() {
    // Mesma função que fizemos antes
    const link = 'https://viajai.com/' + this.usuario;
    if (navigator.share) {
      navigator.share({ title: 'ViajAí', url: link }).catch(err => console.log(err));
    } else {
      navigator.clipboard.writeText(link).then(() => alert('Link copiado!'));
    }
  }
}