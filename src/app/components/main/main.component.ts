import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {Subscription} from 'rxjs';
import {Flight} from '../../interfaces/flight';
import {Worker} from '../../interfaces/worker';
import {interval} from 'rxjs';

@Component({
  selector: 'app-main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  private subscriptionsArray: Subscription[] = [];
  workers: Worker[];
  flights: Flight[];
  currentWorker: Worker;
  currentFlight: Flight;
  isLoading = true;

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.loadWorkers();
    this.updateCurrentFlight();
  }

  loadWorkers() {
    this.subscriptionsArray.push(
      this.httpService.getWorkers().subscribe(
        (res: Worker[]) => {
          if (res.length) {
            this.workers = res;
            this.currentWorker = this.workers[0];
            this.loadFlights(this.currentWorker);
            this.isLoading = false;
          }
        }
      )
    );
  }

  loadFlights(selectedWorker: Worker) {
    if (selectedWorker) {
      this.currentWorker = selectedWorker;
      this.isLoading = true;
      this.subscriptionsArray.push(
        this.httpService.getFlights(selectedWorker.id).subscribe(
          (res: Flight[]) => {
            if (res.length) {
              this.flights = res;
              this.currentFlight = this.flights[0];
              this.isLoading = false;
            }
          }
        )
      );
    }
  }

  updateCurrentFlight() {
    this.subscriptionsArray.push(
      interval(15000).subscribe(
        (res) => {
          this.httpService.getFlights(this.currentWorker.id).subscribe(
            (flights: Flight[]) => {
              const updatedFlight = flights.find(el => this.currentFlight.num === el.num);
              this.getInfo(updatedFlight ? updatedFlight : this.currentFlight);

              // To see that the data was updated
              console.log('Updated');
            }
          );
        }
      )
    );
  }

  ngOnDestroy() {
    this.subscriptionsArray.forEach((subs) => subs.unsubscribe());
  }

  getInfo(selectedFlight: Flight) {
    this.currentFlight = selectedFlight;
    
    // To see that the data was updated
    // this.currentFlight =  {
    // ...selectedFlight,
    //   duration: Math.random() * 1000
    // };
  }
}
