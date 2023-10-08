import { AllIndexesComponent } from './all-indexes/all-indexes.component';
import { FuturesAndOptionsComponent } from './futures-and-options/futures-and-options.component';
import { StocksComponent } from './stocks/stocks.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  { path:'login', component :LoginComponent },
  { path: 'welcome', component:WelcomeComponent },
  { path: 'stocks', component:StocksComponent },
  { path: 'fno', component:FuturesAndOptionsComponent },
  { path: 'index', component:AllIndexesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
