import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// IMPORTANTE: Verifique se o arquivo do menu se chama 'menu-nav.component.ts' ou apenas 'menu-nav.ts'
// Se der erro nesta linha, tente tirar o '.component' do final do caminho.
import { MenuNavComponent } from '../../components/menu-nav/menu-nav.component'; 

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [
    CommonModule, 
    MenuNavComponent // <--- Isso resolve o erro "app-menu-nav is not a known element"
  ], 
  templateUrl: './perfil.html',
  styleUrls: ['./perfil.css']
})
export class PerfilComponent { } 
// ^^^ Isso resolve o erro "has no exported member 'PerfilComponent'"
// O 'export class' precisa ter EXATAMENTE esse nome.