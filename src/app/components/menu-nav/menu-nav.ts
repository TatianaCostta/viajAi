import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive], 
  // Atenção: verifique se os arquivos HTML e CSS também estão com nomes curtos na pasta
  templateUrl: './menu-nav.html', 
  styleUrls: ['./menu-nav.css']
})
export class MenuNavComponent { }