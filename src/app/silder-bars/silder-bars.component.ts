import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from "./../data.service";

@Component({
  selector: 'app-silder-bars',
  templateUrl: './silder-bars.component.html',
  styleUrls: ['./silder-bars.component.css']
})
export class SilderBarsComponent implements OnInit {
  bars: object[] = [
    { 'name': 'Contrast', 'value': this.DataService.silderData['Contrast'] , 'min':"0", 'max':"200" },
    { 'name': 'Brightness', 'value': this.DataService.silderData['Brightness'], 'min':"0", 'max':"200" },
    { 'name': 'Saturate', 'value': this.DataService.silderData['Saturate'], 'min':"0", 'max':"200" },
    { 'name': 'Sepia', 'value': this.DataService.silderData['Sepia'], 'min':"0", 'max':"100" },
    { 'name': 'Grayscale', 'value': this.DataService.silderData['Grayscale'], 'min':"0", 'max':"100" },
    { 'name': 'Invert', 'value': this.DataService.silderData['Invert'], 'min':"0", 'max':"100" },
    { 'name': 'Hue Rotate', 'value': this.DataService.silderData['Hue Rotate'], 'min':"0", 'max':"360" },
    { 'name': 'Blur', 'value': this.DataService.silderData['Blur'], 'min':"0", 'max':"10" }];

  constructor(private DataService: DataService) { }

  ngOnInit() {
    console.log(this.bars);
  }

  silderChange(name,val) {
    this.DataService.silderData[name] = +val;
    //console.log(this.DataService.silderData); //抓到即時資料
    this.DataService.figureChange();
  }
}
