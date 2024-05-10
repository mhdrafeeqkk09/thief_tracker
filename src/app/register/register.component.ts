import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  url = 'http://localhost:3000/user';
  constructor (private http: HttpClient ) {
    
  }
  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value);

    this.http.post(this.url, form.value).subscribe(res => {
      console.log("registraion is done")
    })
  }

} 
