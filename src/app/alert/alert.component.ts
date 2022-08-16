import { Component, OnInit } from '@angular/core';
import { AlertService } from '../services/alert.service';

// I implemented this alert component using the following instructions:
// https://ng-bootstrap.github.io/#/components/toast/

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  constructor(public alertService: AlertService) {}

  ngOnInit(): void {}
}
