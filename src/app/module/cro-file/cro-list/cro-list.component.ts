import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cro-list',
  templateUrl: './cro-list.component.html',
  styleUrls: ['./cro-list.component.css']
})
export class CroListComponent implements OnInit {

   croFiles: Data[] = [];
    API='http://localhost:8081/cro-files/generate-pdf/';
    currentPage = 1;
    pageSize = 10;
    totalPages = 0;
    constructor(private route: ActivatedRoute,private listService: ListServiceService, private http:HttpClient) {}

    ngOnInit() {
      this.list();
    }
    list() : void{
      this.route.paramMap.subscribe(params => {
        const filename = params.get('filename');
        if (filename) {
          this.listService.getList(filename).subscribe(response => {
            this.croFiles = response;
          });
        }
      });
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
    downloadExcel(): void {
      const excelUrl = 'http://localhost:8081/cro-files/downloadExcel/022.000.001.031.MAD';
      const filename = 'data.xlsx';

      this.http.get(excelUrl, { responseType: 'arraybuffer' }).subscribe(
        (response) => {
          const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
          saveAs(blob, filename);
        },
        (error) => {
          console.error('Erreur lors du téléchargement du fichier Excel :', error);
        }
      );
    }
    triggerCleanup() {
      this.http.get('http://localhost:8081/cro-files/triggerCleanup').subscribe(
        (response) => {
          console.log('Nettoyage déclenché :', response);
        },
        (error) => {
          console.error('Erreur lors du déclenchement du nettoyage :', error);
        }
      );
    }
}
