import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { LoginComponent } from './pages/login/login';
import { PerfilComponent } from './pages/perfil/perfil';

export const routes: Routes = [
  // Se o usuário entrar apenas em "meusite.com", joga ele para "meusite.com/home"
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // Agora sim a rota 'home' existe para o menu funcionar
  { path: 'home', component: HomeComponent },
  
  { path: 'login', component: LoginComponent },
  { path: 'perfil', component: PerfilComponent }
];