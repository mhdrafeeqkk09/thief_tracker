import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainService } from '../main.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  @ViewChild('videoElement', { static: false }) videoElement: any;
  thiefName: string = "";
  isAdmin = true;

  constructor(private service: MainService, private router: Router) {}

  ngOnInit() {
    this.service.userName.subscribe(res => {
      if(res === 'admin') {
        this.isAdmin = true;
        setTimeout(() => {
          alert('Hey Welcome Admin');
        }, 0);
      } else {
        this.isAdmin = false;
        setTimeout(() => {
          alert('Hey Welcome ' + res);
        }, 0);
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
