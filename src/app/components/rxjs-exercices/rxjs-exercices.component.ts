import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { map, repeat, take } from 'rxjs/operators';

@Component({
  templateUrl: './rxjs-exercices.component.html',
  styleUrls: ['./rxjs-exercices.component.scss'],
})
export class RxjsExercicesComponent {
  source = interval(1000).pipe(
    map((next) => 3 - next),
    take(4),
    repeat()
  );
}
