import { Component, OnInit } from '@angular/core';
import { NasaService } from '../../core/services/nasa.service'
import { NasaStore } from '../../shared/store/nasa.store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: []
})
export class DashboardComponent implements OnInit {

  cards:any;

  constructor(
    private nasaService: NasaService,
    public nasaStore: NasaStore,
    private route: Router,
  ) { }

  async goToDetails(data:string) {
    await this.nasaService.getRepos(data).subscribe(
      (response) => {
        this.nasaStore.nasaStorage = response,
        this.route.navigate(['/details'])
      }
    );
  }

  async initialCards() {
    await this.nasaService.setInitialCards().subscribe(
      (response) => this.cards = response
    )
  }

  ngOnInit(): void {
    this.initialCards()
  }
}
