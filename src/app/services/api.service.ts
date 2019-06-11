import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

const BASE_URL = environment.apiBaseUrl;

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    params: {
        '_method': 'patch'
    };

    constructor(private httpClient: HttpClient) {
    }

    public get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
        return this.httpClient
            .get(BASE_URL + path, {params})
            .pipe(catchError(this.formatErrors));
    }

    public post(path: string, body: object = {}): Observable<any> {
        return this.httpClient
            .post(BASE_URL + path, body)
            .pipe(catchError(this.formatErrors));
    }

    private formatErrors(error: any): Observable<any> {
        return throwError(error);
    }
}
