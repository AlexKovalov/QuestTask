import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const BASE_URL = 'https://interview-mock.herokuapp.com/api/workers/';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http: HttpClient) {
  }

  getWorkers() {
    return this.http.get(BASE_URL);
  }

  getFlights(workerId) {
    return this.http.get(BASE_URL + workerId);
  }

}
