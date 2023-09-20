import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
      //loadChildren: './src/app/module/cro-file/cro-list.module',
    },
      {
        path:'Download',
        component:FileDownloadComponent,
       // loadChildren:'src/app/module/cro-file/cro-list.module',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
