import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Flight} from '../../interfaces/flight';


@Component({
  selector: 'app-flights-table-component',
  templateUrl: './flights-table.component.html',
  styleUrls: ['./flights-table.component.scss']
})
export class FlightsTableComponent implements OnInit, OnChanges {
  @Input() flights: Flight[];
  @Output() selectedFlight = new EventEmitter<Flight>();
  activeIndex = 0;

  COLUMNS_TITLE = ['Flight Number', 'Origin', 'Origin Date', 'Destination', 'Destination Date'];

  constructor() {
  }

  ngOnInit(): void {
  }


  ngOnChanges() {
    this.activeIndex = 0;
  }

  selectFlight(flight: Flight, index: number) {
    this.activeIndex = index;
    this.selectedFlight.emit(flight);
  }
}
