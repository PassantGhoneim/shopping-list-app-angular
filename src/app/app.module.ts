import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {DropdownDirective} from './header/dropdown.directive'
import { RouterModule, Routes } from '@angular/router';
import { DetailViewComponent } from './detail-view/detail-view.component';
import {ShoppingListService} from './shared/shopping-list.service';
import { SubmitFormComponent } from './submit-form/submit-form.component';

import { CartComponent } from './cart/cart.component'
import { SelectedProducts } from './shared/selected-products.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon'
import { FormsModule } from '@angular/forms';
import { FilterPipePipe } from './filter-pipe.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



const appRoutes : Routes = [
  {path:'' , component : HomeComponent},
  {path:'detailView/:id/:category/:name' , component : DetailViewComponent},
  {path:'submitForm' , component : SubmitFormComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DropdownDirective,
    DetailViewComponent,
    SubmitFormComponent,
    CartComponent,
    FilterPipePipe,

   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    NgbModule
  ],
  providers: [ShoppingListService,SelectedProducts],
  bootstrap: [AppComponent]
})
export class AppModule { }
