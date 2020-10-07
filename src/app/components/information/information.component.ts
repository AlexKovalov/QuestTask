import {Component, Input, OnInit} from '@angular/core';
import {Flight} from '../../interfaces/flight';

@Component({
  selector: 'app-information-component',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  @Input() flight: Flight;

  constructor() { }

  ngOnInit(): void {
  }

}
