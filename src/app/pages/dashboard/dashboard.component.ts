import { Component, OnInit } from '@angular/core';
import { NasaService } from '../../core/services/nasa.service'
import { NasaStore } from '../../shared/store/nasa.store';
import { Router } from '@angular/router';
import { INasaNews } from 'src/app/interfaces/nasa.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: []
})
export class DashboardComponent implements OnInit {

  cards:INasaNews | any

  constructor(
    private nasaService: NasaService,
    public nasaStore: NasaStore,
    private route: Router,
  ) { }

  async goToDetails(data:string) {
    this.nasaService.getRepos(data).subscribe(
      (response: INasaNews[]) => {
        this.nasaStore.nasaStorage = response,
          this.route.navigate(['/details']);
      }
    );
  }

  async initialCards() {
    this.nasaService.setInitialCards().subscribe(
      (response: INasaNews[]) => this.cards = response
    )
  }

  ngOnInit(): void {
    this.initialCards()
  }
}
