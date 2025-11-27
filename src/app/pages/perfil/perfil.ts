import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuNavComponent } from '../../components/menu-nav/menu-nav';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, MenuNavComponent],
  templateUrl: './perfil.html',
  styleUrls: ['./perfil.css']
})
export class PerfilComponent { 
  
  compartilharPerfil() {
    // Link fictício para simular o site real (ou use window.location.href para o link atual)
    const linkPerfil = 'https://viajai.com/perfil/henrifiora';

    // Tenta usar o compartilhamento nativo do celular (Android/iOS)
    if (navigator.share) {
      navigator.share({
        title: 'Perfil ViajAí',
        text: 'Confira minhas viagens no ViajAí!',
        url: linkPerfil
      })
      .catch((error) => console.log('Erro ao compartilhar', error));
    } else {
      // Se estiver no PC e não tiver menu de compartilhar, copia para o Ctrl+C
      navigator.clipboard.writeText(linkPerfil).then(() => {
        alert('🔗 Link do perfil copiado para a área de transferência!');
      });
    }
  }

}