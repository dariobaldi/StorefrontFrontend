import { TemplateRef } from '@angular/core';

export type Alert = {
  message: string | TemplateRef<any>;
  alertClass: string;
};
