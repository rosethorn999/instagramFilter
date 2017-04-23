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
    { src: 'http://placehold.it/100x100', name: '1977' },
    { src: 'http://placehold.it/100x100', name: 'Aden' },
    { src: 'http://placehold.it/100x100', name: 'Brooklyn' },
    { src: 'http://placehold.it/100x100', name: 'Gingham' },
    { src: 'http://placehold.it/100x100', name: 'Earlybird' },
    { src: 'http://placehold.it/100x100', name: 'Hudson' },
    { src: 'http://placehold.it/100x100', name: 'Inkwell' }
  ];

  ngOnInit() {
  }

  applyFilter(e) {
    let selected: string = e.target.id;
    console.log(selected);
    this.DataService.insertData(selected);
  }
}
