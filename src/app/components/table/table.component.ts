import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  Input,
  OnInit,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() columns: any;
  @Input() rows: any;

  @ContentChild('tableHeader') header: TemplateRef<any>;
  @ContentChild('tableContent') content: TemplateRef<any>;

  constructor() {}

  ngOnInit() {}
}
