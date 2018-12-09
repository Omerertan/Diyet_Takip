import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchFoodPage } from './search-food';

@NgModule({
  declarations: [
    SearchFoodPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchFoodPage),
  ],
})
export class SearchFoodPageModule {}
