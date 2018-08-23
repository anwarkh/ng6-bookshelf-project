import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {PagerComponent} from "./pager/pager.component";
import {LibraryComponent} from "./library/library.component";
import {SearchComponent} from "./search/search.component";
import {BookListComponent} from "./book-list/book-list.component";
import {BookComponent} from "./book/book.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', redirectTo: 'search', pathMatch: 'full'},
  { path: "search", component: SearchComponent },
  { path: 'library', component: BookListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookComponent,
    BookListComponent,
    SearchComponent,
    LibraryComponent,
    PagerComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
