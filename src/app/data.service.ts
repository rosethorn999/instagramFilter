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
    this.figureChange(data);
  }

  figureChange(filterName:String){
    this.setValByFilterSelector(filterName) ;

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

  setValByFilterSelector(filterName:String){
switch (filterName) {
  case "1977":
  this.silderData= {
    'Contrast': 110,
    'Brightness': 110,
    'Saturate': 130,
    'Sepia': 130,
    'Grayscale': 0,
    'Invert': 0,
    'Hue Rotate': 0,
    'Blur': 0
  };
    break; 
    case "Aden":
    this.silderData= {
      'Contrast': 90,
      'Brightness': 120,
      'Saturate': 85,
      'Sepia': 85,
      'Grayscale': 0,
      'Invert': 0,
      'Hue Rotate': 20,
      'Blur': 0
    };break; case "Brooklyn":
    this.silderData= {
      'Contrast': 90,
      'Brightness': 120,
      'Saturate': 85,
      'Sepia': 85,
      'Grayscale': 0,
      'Invert': 0,
      'Hue Rotate': 20,
      'Blur': 0
    };break; case "Gingham":
    this.silderData= {
      'Contrast': 100,
      'Brightness': 105,
      'Saturate': 100,
      'Sepia': 0,
      'Grayscale': 0,
      'Invert': 0,
      'Hue Rotate': 350,
      'Blur': 0
    };break; case "Earlybird":
    this.silderData= {
      'Contrast': 100,
      'Brightness': 100,
      'Saturate': 0,
      'Sepia': 0,
      'Grayscale': 0,
      'Invert': 0,
      'Hue Rotate': 0,
      'Blur': 0
    };break;
  default:
    break;
}
  }

}
