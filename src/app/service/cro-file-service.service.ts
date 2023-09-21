import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CroFileServiceService {
   API='http://localhost:8081/cro-files/read-cro-file';
    currentPage = 1;
    pageSize = 10;
    constructor(private http: HttpClient) { }

    getList(filename: string): Observable<any> {
      return this.http.get(`${this.API}?filename=${filename}&page=${this.currentPage}&pageSize=${this.pageSize}`);
    }
}
