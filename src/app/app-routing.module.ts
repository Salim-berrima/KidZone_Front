import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {JardinListComponent } from './components/jardin-list/jardin-list.component';
import {CreateJardinComponent } from './components/create-jardin/create-jardin.component';
import {ReclamationJardinComponent } from './components/reclamation-jardin/reclamation-jardin.component';
import { UpdateJardinComponent } from './components/update-jardin/update-jardin.component';
import { CoutComponent } from './components/cout/cout.component';



const routes: Routes = [
{path:"home", component: HomeComponent},
{path: '', redirectTo: '/home', pathMatch: 'full'},
///{path:"event", component: EventComponent},/////
{path:"jardin", component: JardinListComponent},
{path:"add", component: CreateJardinComponent},
{path:"email", component: ReclamationJardinComponent},
{path:"update/:jardin_id", component: UpdateJardinComponent},
{path: "affectercoutjardin/:jardin_id", component: CoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
