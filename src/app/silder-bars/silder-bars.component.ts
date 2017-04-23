import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from "./../data.service";

@Component({
  selector: 'app-silder-bars',
  templateUrl: './silder-bars.component.html',
  styleUrls: ['./silder-bars.component.css']
})
export class SilderBarsComponent implements OnInit {
  bars: object[] = [
    { 'name': 'Contrast', 'value': this.DataService.silderData['Contrast'] },
    { 'name': 'Brightness', 'value': this.DataService.silderData['Brightness'] },
    { 'name': 'Saturate', 'value': this.DataService.silderData['Saturate'] },
    { 'name': 'Sepia', 'value': this.DataService.silderData['Sepia'] },
    { 'name': 'Grayscale', 'value': this.DataService.silderData['Grayscale'] },
    { 'name': 'Invert', 'value': this.DataService.silderData['Invert'] },
    { 'name': 'Hue Rotate', 'value': this.DataService.silderData['Hue Rotate'] },
    { 'name': 'Blur',  'value': this.DataService.silderData['Blur'] }];
    
  constructor(private DataService: DataService) { }

  ngOnInit() {
  }

  silderChange(e) {
    let id = e.target.id
    let val = e.target.value;

    this.DataService.silderData[id] = +val;
    console.log(this.DataService.silderData); //抓到即時資料
  }
}
