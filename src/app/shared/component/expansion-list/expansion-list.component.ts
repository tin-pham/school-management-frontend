import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expansion-list',
  styleUrls: ['./expansion-list.component.scss'],
  templateUrl: './expansion-list.component.html',
})
export class ExpansionListComponent {
  @Input() title: string;
  @Input() items: string[] = [];
  @Input() editRoute: string;
  toggle: boolean;
}
