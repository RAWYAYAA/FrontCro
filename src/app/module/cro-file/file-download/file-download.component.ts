import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {saveAs} from "file-saver";

@Component({
  selector: 'app-file-download',
  templateUrl: './file-download.component.html',
  styleUrls: ['./file-download.component.css']
})
export class FileDownloadComponent implements OnInit {

 data: string[] = [];
   API='http://localhost:8081/cro-files/';
   currentPage = 1;
   pageSize = 10;

   constructor(private http: HttpClient) { }

   ngOnInit(): void {
     this.getList();
   }
   getList():void {
     this.http.get<string[]>(this.API+`022.000.001.031.MAD?page=${this.currentPage}&pageSize=${this.pageSize}`).subscribe(
       (response) => {
         this.data = response;
       },
       (error) => {
         console.error('Erreur lors de la récupération des données :', error);
       }
     );
   }
   downloadPdf(): void {
     const pdfUrl = 'http://localhost:8081/cro-files/generate-pdf/022.000.001.031.MAD?page=1&pageSize=10';
     const filename = 'data.pdf';

     this.http.get(pdfUrl, { responseType: 'arraybuffer' }).subscribe(
       (response) => {
         const blob = new Blob([response], { type: 'application/pdf' });
         saveAs(blob, filename);
       },
       (error) => {
         console.error('Erreur lors du téléchargement du PDF :', error);
       }
     );
   }

}
