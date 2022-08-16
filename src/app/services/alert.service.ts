import { Injectable, TemplateRef } from '@angular/core';
import { Alert } from '../models/alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  alerts: Alert[] = [];

  constructor() {}

  show(message: string | TemplateRef<any>, alertClass: string) {
    this.alerts.push({ message, alertClass });
  }

  remove(alert: any) {
    this.alerts = this.alerts.filter((t) => t !== alert);
  }

  clear() {
    this.alerts.splice(0, this.alerts.length);
  }
}
