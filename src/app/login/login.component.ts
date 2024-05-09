import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username = '';
  password: any;

  constructor (private router: Router) {}

  login() {
    // Add your login logic he

    if(this.username === 'chandran' && this.password === 'test@123') {
      alert("logged in successfully");
      this.router.navigateByUrl('/home');
    } else {
      alert('invalid credential pls try again...')
    }
  }
}
