import { Injectable, OnInit } from '@angular/core';
import { Subject } from "rxjs/Subject";

@Injectable()
export class DataService {

  constructor() { }

  public silderData: {} = {
    'Contrast': 100,
    'Brightness': 100,
    'Saturate': 100,
    'Sepia': 0,
    'Grayscale': 0,
    'Invert': 0,
    'Hue Rotate': 0,
    'Blur': 0
  };
  public filterSelected: string = "f";


  // Observable string source
  private dataStringSource = new Subject<string>();
  // Observable string stream
  dataString$ = this.dataStringSource.asObservable();
  // Service message commands
  insertData(data: string) {
    this.dataStringSource.next(data);
  }

  figureChange(){
    let cssStr :string= "";
    cssStr += "contrast(" + this.silderData['Contrast'] + "%) " ;
    cssStr += "brightness(" + this.silderData['Brightness'] + "%) " ;
    cssStr += "saturate(" + this.silderData['Saturate'] + "%) " ;
    cssStr += "sepia(" + this.silderData['Sepia'] + "%) " ;
    cssStr += "grayscale(" + this.silderData['Grayscale'] + "%) " ;
    cssStr += "invert(" + this.silderData['Invert'] + "%) " ;
    cssStr += "hue-rotate(" + this.silderData['Hue Rotate'] + "deg) " ;
    cssStr += "blur(" + this.silderData['Blur'] + "px)" ;
    let image :any = document.querySelector('.fi');
    image.style.filter = cssStr;
  }

}
