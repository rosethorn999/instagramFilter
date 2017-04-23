import { Component, OnInit, Output } from '@angular/core';
import { DataService } from "./../data.service";

@Component({
  selector: 'app-photo-viewer',
  templateUrl: './photo-viewer.component.html',
  styleUrls: ['./photo-viewer.component.css']
})
export class PhotoViewerComponent implements OnInit {

  constructor(private DataService: DataService) { }

  silderData: {} = this.DataService.silderData;
  filterSelected: string = this.DataService.filterSelected;


  ngOnInit() {
    this.DataService.dataString$.subscribe(
      data => {
        this.filterSelected = data;
      });
      this.figureChange();
  }

  figureChange(){
    let image = document.querySelector('.fi');
    debugger;
    image[1].style.filter = "";
    //image.style.backgroundColor = "green";
  }




}