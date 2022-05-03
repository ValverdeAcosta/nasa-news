import { Component, OnInit } from '@angular/core';
import { INasaNews } from 'src/app/interfaces/nasa.component';
import { NasaStore } from '../../shared/store/nasa.store';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: []
})
export class DetailsComponent implements OnInit {

  data:INasaNews | any

  constructor(public nasaStore: NasaStore) { }

  ngOnInit(): void {
    this.data = this.nasaStore.nasaStorage;
  }
}
