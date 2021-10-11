import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Output()
  link = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  emitMenuItem(link: string): void {
    this.link.emit(link);
  }

}
