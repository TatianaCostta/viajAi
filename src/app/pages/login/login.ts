import { Component } from '@angular/core';
import { InputComponent } from '../../shared/input/input';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  imports: [InputComponent]
})
export class LoginComponent {}
