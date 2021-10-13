import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hotelinfo',
  templateUrl: './hotelinfo.component.html',
  styleUrls: ['./hotelinfo.component.scss']
})
export class HotelinfoComponent implements OnInit {

  @Input() hotelName = '';
  @Input() street = '';
  @Input() city = '';
  @Input() phone = '';
  @Input() email = '';
  @Input() webLink = '';
  @Input() bookingLink = '';
  @Input() info = false;
  @Input() infoText = '';

  constructor() { }

  ngOnInit(): void {
  }

  openWebLink(): void {
    window.open(this.webLink, '_blank');
  }

  openBookingLink(): void {
    window.open(this.bookingLink, '_blank');
  }
}
