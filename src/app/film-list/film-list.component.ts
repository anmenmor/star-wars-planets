import { Component, OnInit } from '@angular/core';
import { Film } from '../film';
const axios = require('axios');

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  films: [Film];
  selectedFilm: Film;

  constructor() { }

  ngOnInit(): void {
    this.getFilms();
  }

  onSelect(film: Film): void {
    this.selectedFilm = film;
  }

  async getFilms() {
    const response = await axios.get('https://swapi.dev/api/films')
    this.films = response.data.results;
  }

}
