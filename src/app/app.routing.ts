import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from "./home/home.component";

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },

];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES);
