import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  
  constructor(private router: Router) {}

  
  fazerLogin() {
  
    console.log("Botão clicado! Indo para o perfil...");
    
 
    this.router.navigate(['/perfil']);
  }
}