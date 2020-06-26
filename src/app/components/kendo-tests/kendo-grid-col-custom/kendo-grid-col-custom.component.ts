import { Component, forwardRef, ViewChild } from '@angular/core';
import { CellTemplateDirective, ColumnBase } from '@progress/kendo-angular-grid';

@Component({
  selector: 'kendo-grid-col-custom',
  template: `<ng-template kendoGridCellTemplate let-dataItem>
    {{ dataItem.QuantityPerUnit }}
  </ng-template>`,
  providers: [
    {
      provide: ColumnBase,
      useExisting: forwardRef(() => KendoGridColCustomComponent),
    },
  ],
})
export class KendoGridColCustomComponent extends ColumnBase {
  @ViewChild(CellTemplateDirective, { static: true })
  template: CellTemplateDirective;

  constructor() {
    super();
    this.title = 'Title Example';
  }

  get templateRef() {
    return this.template ? this.template.templateRef : undefined;
  }
}

