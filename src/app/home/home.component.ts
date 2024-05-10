import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainService } from '../main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  @ViewChild('videoElement', { static: false }) videoElement: any;
  thiefName: string = "";

  constructor(private service: MainService, private router: Router) {}

  ngOnInit() {
    this.service.userName.subscribe(res => {
      if(res === 'admin') {
        alert('You are logged as a admin...');
      } else if (res === 'user') {
        alert('You are logged as a User...');
      } else {
        this.router.navigateByUrl('/login');
      }
    })
  }

  ngAfterViewInit() {
    // Check if the browser supports getUserMedia
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // Access the webcam
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          // Assign the stream to the video element
          this.videoElement.nativeElement.srcObject = stream;
        })
        .catch((error) => {
          console.error('Error accessing the webcam:', error);
        });
    } else {
      console.error('getUserMedia is not supported in this browser');
    }
  }

  uploadImg() {
    
  }

}
