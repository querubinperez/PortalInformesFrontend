import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

import {AppComponent} from './app.component';
import {PlanoCargaComponent} from './plano-carga/plano-carga.component';
import {InformeSismedComponent} from './informe-sismed/informe-sismed.component';
import {MessagesComponent} from './messages/messages.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {DetalleInformeComponent} from './detalle-informe/detalle-informe.component';

export const routes = [
  {path: 'plano-carga', component: PlanoCargaComponent, label: 'Carga Archivo Plano'},
  {path: 'informe-sismed', component: InformeSismedComponent, label: 'Informes Sismed'},
  {path: 'detalle/:codigo', component: DetalleInformeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    PlanoCargaComponent,
    MessagesComponent,
    InformeSismedComponent,
    TopBarComponent,
    DetalleInformeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
