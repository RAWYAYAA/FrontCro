import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
 {
    path:'',
    component:CroListComponent,
    children: [{
      path:'',
      redirectTo:'list',
      pathMatch:'full'
    },
      {
      path:'list',
      //loadChildren: './module/cro-file/cro-file.module#CroFileModule',
    },
      {
        path:'Download',
        component:FileDownloadComponent,
        //loadChildren:'./module/cro-file/cro-file.module#CroFileModule',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
