import { ChangeDetectorRef, Component } from '@angular/core';
import { Subject } from 'rxjs';
import { scan, startWith } from 'rxjs/operators';

import { ReactiveComponent } from '../reactive';

@Component({
  templateUrl: './zone-tests.component.html',
  styleUrls: ['./zone-tests.component.scss'],
})
export class ZoneTestsComponent extends ReactiveComponent {
  counter = 0;

  #values$ = new Subject<number>();
  state = this.connect({
    count: this.#values$.pipe(
      startWith(0),
      scan((count, next) => count + next, 0)
    ),
  });

  constructor(private cdr: ChangeDetectorRef) {
    super();
  }

  pushValue(value: number) {
    this.#values$.next(value);
  }

  removeClick() {
    this.counter -= 1;
    console.log(this.counter);
  }

  addClick() {
    this.counter += 1;
    console.log(this.counter);
    this.cdr.detectChanges();
  }

}
