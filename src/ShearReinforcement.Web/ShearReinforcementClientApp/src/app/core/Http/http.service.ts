import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { InputData } from '../data/input-data';
import { OutputData } from '../data/output-data';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getResults(input: InputData): Observable<OutputData> {
    const result = this.http.post<OutputData>(environment.api, input);
    return result;
  }
}
