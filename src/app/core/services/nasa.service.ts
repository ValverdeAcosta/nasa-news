import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DateFormat } from '../../shared/helpers/date.format';
import { combineLatest, Observable, of } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { API_KEY } from '../../shared/common/globals'

@Injectable()
export class NasaService {

    baseURL: string = "https://api.nasa.gov/planetary/apod?api_key="+API_KEY+"&date=";

    constructor(
        private http: HttpClient,
        private dateFormat: DateFormat
        ) { 
    }

    getRepos(date: string): Observable<any> {
        return this.http.get(this.baseURL + date);
    }

    setInitialCards(): Observable<any> {
        const card1 = this.http.get(this.baseURL+this.dateFormat.current_today)
        const card2 = this.http.get(this.baseURL+this.dateFormat.current_yesterday)
        const card3 = this.http.get(this.baseURL+this.dateFormat.current_yesterday2)
        const card4 = this.http.get(this.baseURL+this.dateFormat.current_yesterday3)
        const card5 = this.http.get(this.baseURL+this.dateFormat.current_yesterday4)
        const card6 = this.http.get(this.baseURL+this.dateFormat.current_yesterday5)

        return combineLatest([
            card1.pipe(
                catchError((err:Observable<null>) => {
                    console.log(err)
                    return of(null)
                })
            ),
            card2.pipe(
                catchError((err:Observable<null>) => {
                    console.log(err)
                    return of(null)
                })
            ),
            card3.pipe(
                catchError((err:Observable<null>) => {
                    console.log(err)
                    return of(null)
                })
            ),
            card4.pipe(
                catchError((err:Observable<null>) => {
                    console.log(err)
                    return of(null)
                })
            ),
            card5.pipe(
                catchError((err:Observable<null>) => {
                    console.log(err)
                    return of(null)
                })
            ),
            card6.pipe(
                catchError((err:Observable<null>) => {
                    console.log(err)
                    return of(null)
                })
            ),
        ])
    }
}