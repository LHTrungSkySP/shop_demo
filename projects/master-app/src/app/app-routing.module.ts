import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
const routes: Routes = [
  {
    path: "",
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: environment.remoteEntryUrl1,
      exposedModule: './Module'
    }).then(m => m.AppModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
