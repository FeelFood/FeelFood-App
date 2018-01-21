import { NgModule } from '@angular/core';
import { EurosPipe } from './euros/euros';
@NgModule({
	declarations: [EurosPipe],
	imports: [],
	exports: [EurosPipe]
})
export class PipesModule {}
