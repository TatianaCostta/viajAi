import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// CORREÇÃO: Importando do arquivo 'menu-nav' (nome curto)
import { MenuNavComponent } from '../../components/menu-nav/menu-nav';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [
    CommonModule, 
    MenuNavComponent // Isso permite usar <app-menu-nav> no HTML
  ],
  templateUrl: './perfil.html',
  styleUrls: ['./perfil.css']
})
export class PerfilComponent { }