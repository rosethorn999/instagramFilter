import { Component, OnInit } from '@angular/core';
import { DataService } from "./../data.service";

@Component({
  selector: 'app-filter-selector',
  templateUrl: './filter-selector.component.html',
  styleUrls: ['./filter-selector.component.css']
})
export class FilterSelectorComponent implements OnInit {

  constructor(private DataService: DataService) { }

  filterBoxs: object[] = [
    { src: './images/img_1963.png', name: '1977' },
    { src: './images/img_1963.png', name: 'Aden' },
    { src: './images/img_1963.png', name: 'Brooklyn' },
    { src: './images/img_1963.png', name: 'Gingham' },
    { src: './images/img_1963.png', name: 'Earlybird' }
  ];

  ngOnInit() {
  }

  applyFilter(e) {
    let selected: string = e.target.id;
    console.log(selected);
    this.DataService.insertData(selected);
  }
}
