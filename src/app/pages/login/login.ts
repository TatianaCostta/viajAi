import { Component } from '@angular/core';
import { Router } from '@angular/router'; // <--- 1. Importar o Router
import { CommonModule } from '@angular/common';
// Se você tiver um componente AppInput, importe ele aqui também, ex:
// import { AppInputComponent } from '../../components/app-input/app-input';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule], // Adicione o AppInputComponent aqui se estiver usando
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  // 2. Injetar o Router no construtor para poder usar a navegação
  constructor(private router: Router) {}

  // 3. Criar a função que será chamada pelo botão
  fazerLogin() {
    // Aqui você poderia colocar validações (ex: verificar se email e senha estão preenchidos)
    console.log("Botão clicado! Indo para o perfil...");
    
    // Comando que muda a página
    this.router.navigate(['/perfil']);
  }
}