import { Component } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent {
  isFavorite: boolean;

  onClick(isFavorite) {
    this.isFavorite = !this.isFavorite;
    console.log('toggled!', isFavorite);
  }
}
