import {Router, RouterModule, Routes} from "@angular/router";
import {CroFileListComponent} from "./cro-file-list.component";
import {NgModule} from "@angular/core";

const routes: Routes = [{
  path: '',
  component:CroFileListComponent,
  children:[],
}];
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class CroFileFrontRoutingModule{}
