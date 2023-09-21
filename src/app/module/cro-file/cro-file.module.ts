import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CroListComponent } from './cro-list/cro-list.component';
import { FileDownloadComponent } from './file-download/file-download.component';

@NgModule({
  declarations: [
  CroListComponent,
   FileDownloadComponent
   ],
  imports: [
    CommonModule,
  ]
})
export class CroFileModule { }
