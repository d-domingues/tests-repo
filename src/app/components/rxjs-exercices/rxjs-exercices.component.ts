import { Component } from '@angular/core';
import { merge, Subject, timer } from 'rxjs';
import { map, mapTo } from 'rxjs/operators';

@Component({
  templateUrl: './rxjs-exercices.component.html',
  styleUrls: ['./rxjs-exercices.component.scss'],
})
export class RxjsExercicesComponent {
  onClick = new Subject();

  counter = 0;

  source = merge(this.onClick.pipe(mapTo(-1)), timer(0, 1000)).pipe(
    map((x) => {
      return {
        value: 3 - ((this.counter = x === -1 ? 3 : ++this.counter) % 4),
      };
    })
  );

  getClass({ value }) {
    return {
      'countdown-frame': true,
      light: value === 0,
    };
  }
}
