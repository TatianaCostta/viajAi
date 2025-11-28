import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { LoginComponent } from './pages/login/login';
import { PerfilComponent } from './pages/perfil/perfil';
import { ExplorarComponent } from './pages/explorar/explorar'; 

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'perfil', component: PerfilComponent },
  

  { path: 'explorar', component: ExplorarComponent } 
];