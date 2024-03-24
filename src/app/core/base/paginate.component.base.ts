import { PaginateDTO } from '@shared/models/dto/paginate.dto';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

export abstract class PaginateComponentBase<T> {
  protected search$ = new BehaviorSubject<string>('');
  itemsPerPage = 5;
  page = 1;

  constructor(protected debounceDuration: number = 300) {
    // Initialize the search functionality
    this.initializeSearch();
  }

  private initializeSearch(): void {
    this.search$
      .pipe(
        debounceTime(this.debounceDuration),
        distinctUntilChanged(),
        switchMap(search => this.fetchData({ search, page: this.page, limit: this.itemsPerPage })),
      )
      .subscribe(data => this.handleData(data));
  }

  // Define fetchData as an abstract method to be implemented by subclasses.
  // The method should return an Observable of a generic type, which will be the data structure used by the subclass.
  protected abstract fetchData(params: PaginateDTO): Observable<T>;

  // Define handleData as an abstract method that subclasses will implement to handle the data once it's fetched.
  protected abstract handleData(data: T): void;

  protected setSearch(search: string): void {
    this.page = 1; // Reset to the first page
    this.search$.next(search);
  }
}
