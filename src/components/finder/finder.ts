import { Component } from '@angular/core';

/**
 * Generated class for the FinderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'finder',
  templateUrl: 'finder.html'
})
export class FinderComponent {

  text: string;

  constructor() {
    console.log('Hello FinderComponent Component');
    this.text = 'Hello World';
  }

}
