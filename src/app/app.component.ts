import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProductBoard';

  // User setting/preference API - will fetch the saved value (in a real application)
  isDarkTheme = false;

  toggleTheme(){
    this.isDarkTheme = !this.isDarkTheme;
  }

}
