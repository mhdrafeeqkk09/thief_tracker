import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  @ViewChild('videoElement', { static: false }) videoElement: any;

  constructor() {}

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
