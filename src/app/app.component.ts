import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hochzeit';

  scroll(id: string): void {
    const el = document.getElementById(id);
    if (el === null) {
      return;
    }
    el.scrollIntoView({behavior: 'smooth'});
  }

  navigateToLink(link: string): void {
    this.scroll(link);
  }
}
