import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../film';
import { Planet } from '../planet';
const axios = require('axios');

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {
  @Input() film: Film;
  selectedPlanet: Planet;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(planet: Planet): void {
    this.selectedPlanet = planet;
  }

  ngOnChanges() {
    if (this.film) {
      let planetsInfo = [];
      this.film.planets.forEach(v => {
        this.getPlanet(v)
          .then(response => {
            planetsInfo.push(response)
          })
      })
      this.film.planets_info = planetsInfo;
      this.selectedPlanet = null;
    } 
  }

  async getPlanet(url: string): Promise<Planet> {
    const response = await axios.get(url);
    return response.data;
  }

}
