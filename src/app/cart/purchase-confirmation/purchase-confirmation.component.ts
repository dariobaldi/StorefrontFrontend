import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-confirmation',
  templateUrl: './purchase-confirmation.component.html',
  styleUrls: ['./purchase-confirmation.component.css']
})
export class PurchaseConfirmationComponent implements OnInit {
  fullName: string = '';
  address: string = '';
  totalPayment: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
