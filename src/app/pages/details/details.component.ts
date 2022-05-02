import { Component, OnInit } from '@angular/core';
import { NasaStore } from '../../shared/store/nasa.store';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: []
})
export class DetailsComponent implements OnInit {

  data:any = [];

  constructor(public nasaStore: NasaStore) { }

  ngOnInit(): void {
    this.data = this.nasaStore.nasaStorage;
  }
}
