import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Worker} from '../../interfaces/worker';

@Component({
  selector: 'app-list-component',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() workers: Worker[];
  @Output() selectedWorker = new EventEmitter<Worker>();
  activeIndex = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  selectWorker(worker: Worker, index: number) {
    this.activeIndex = index;
    this.selectedWorker.emit(worker);
  }
}
