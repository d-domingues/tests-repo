import { OnDestroy, OnInit, ɵmarkDirty as markDirty } from '@angular/core';
import { concat, from, Observable, ReplaySubject } from 'rxjs';
import { mergeMap, takeUntil, tap } from 'rxjs/operators';

type ObservableDictionary<T> = {
  [P in keyof T]: Observable<T[P]>;
};

const OnInitSubject = Symbol('OnInitSubject');
const OnDestroySubject = Symbol('OnDestroySubject');

export abstract class ReactiveComponent implements OnInit, OnDestroy {
  // start: angular lifecycle hook callback functions are turned into observables
  private [OnInitSubject] = new ReplaySubject<true>(1);
  private [OnDestroySubject] = new ReplaySubject<true>(1);

  get onInit$() {
    return this[OnInitSubject].asObservable();
  }

  get onDestroy$() {
    return this[OnDestroySubject].asObservable();
  }

  ngOnInit() {
    this[OnInitSubject].next(true);
    this[OnInitSubject].complete();
  }

  ngOnDestroy() {
    this[OnDestroySubject].next(true);
    this[OnDestroySubject].complete();
  }
  // end

  connect<T>(sources: ObservableDictionary<T>): T {
    const sink = {} as T;
    const sourceKeys = Object.keys(sources) as (keyof T)[];
    const updateSink$ = from(sourceKeys).pipe(
      mergeMap((sourceKey) => {
        const source$ = sources[sourceKey];

        return source$.pipe(
          tap((sinkValue: any) => {
            sink[sourceKey] = sinkValue;
          })
        );
      })
    );

    // markDirty can only be called after this component inicialization
    concat(this.onInit$, updateSink$)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => markDirty(this));

    return sink;
  }
}
