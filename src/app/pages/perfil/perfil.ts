import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { MenuNavComponent } from '../../components/menu-nav/menu-nav';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, MenuNavComponent, FormsModule],
  templateUrl: './perfil.html',
  styleUrls: ['./perfil.css']
})
export class PerfilComponent { 
  
  
  usuario = 'henrifiora';
  nome = 'Henrique Fioravante';
  bio1 = '✈️ Viajante por paixão, não por ostentação';
  bio2 = '🌱 Viajar é crescer - e pode ser acessível';
  bio3 = '📍 Culturas, conexões e caminhos reais';

  
  modalAberto = false;

  abrirEdicao() {
    this.modalAberto = true;
  }


  fecharEdicao() {
    this.modalAberto = false;
  }

  salvarEdicao() {
    this.modalAberto = false;
    
  }

  compartilharPerfil() {
    const link = 'https://viajai.com/' + this.usuario;
    if (navigator.share) {
      navigator.share({ title: 'ViajAí', url: link }).catch(err => console.log(err));
    } else {
      navigator.clipboard.writeText(link).then(() => alert('Link copiado!'));
    }
  }
}