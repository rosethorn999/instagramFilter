import { Injectable, OnInit } from '@angular/core';
import { Subject } from "rxjs/Subject";

@Injectable()
export class DataService {

  constructor() { }

  public silderData: {} = {
    'Contrast': 100,
    'Brightness': 100,
    'Saturate': 100,
    'Sepia': 100,
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

}
