import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  center: google.maps.LatLngLiteral = {
    lat: 35.681162843979585, lng: 139.76662332460555
  };
  zoom = 14;
  display: google.maps.LatLngLiteral;

  moveMap(event: google.maps.MouseEvent) {
    this.center = (event.latLng.toJSON());
  }

  move(event: google.maps.MouseEvent) {
    this.display = event.latLng.toJSON();
  }
}
