import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { MainService } from '../main.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username = '';
  password: any;
  userData = [];

  constructor(private router: Router, private service: MainService, private http: HttpClient) {
    http.get('http://localhost:3000/user').subscribe((res: any) => {
      this.userData = res;
    })
  }

  login() {
    // Add your login logic he

    if (this.username === 'admin' && this.password === '12345' || this.userData.some(obj => Object.values(obj).includes(this.username))) {
      this.router.navigateByUrl('/home');
      this.service.userName.next(this.username);
    }
    else {
      alert('invalid credential pls try again...')
    }
  }
}
