import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../models/trips';

@Injectable({
    providedIn: 'root'
})
export class TripDataService {

    constructor(private http: HttpClient) {}

    url = 'http://localhost:3000/api/trips';
    url2 = 'http://localhost:3000/api/trip';


    getTrips() : Observable<Trip[]> {
        return this.http.get<Trip[]>(this.url);
    }

    addTrip(formData: Trip) : Observable<Trip> {
        return this.http.post<Trip>(this.url, formData);
    }

    getTrip(tripCode: string): Observable<Trip> { // Changed parameter type to `string`
        return this.http.get<Trip>(`${this.url2}/${tripCode}`); // Ensure backend returns a single trip
    }

    updateTrip(tripCode: string, formData: Trip): Observable<Trip> {
        return this.http.put<Trip>(`${this.url2}/${tripCode}`, formData);
    }
}
