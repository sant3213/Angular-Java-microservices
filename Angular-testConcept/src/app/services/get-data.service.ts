import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }
  dataRetrieve: any;
  
  url=`${environment.url}`;

getData():Observable<any>{
  return this.http.get<any[]>(this.url);
  }
}
