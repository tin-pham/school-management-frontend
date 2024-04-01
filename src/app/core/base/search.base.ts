import { Injectable, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { BehaviorSubject, debounceTime, distinctUntilChanged } from 'rxjs';

@Injectable()
export abstract class PaginateComponent implements OnInit {
  abstract page: number;
  abstract itemsPerPage: number;
  abstract totalItems: number;
  search$ = new BehaviorSubject<string>('');

  setSearch(value: string) {
    this.page = 1;
    this.search$.next(value);
  }

  ngOnInit() {
    this.loadData(this.getDto());
    this.search$.pipe(debounceTime(300), distinctUntilChanged()).subscribe(() => this.loadData(this.getDto()));
  }

  abstract getDto(): any;
  abstract loadData(dto: any): void;

  handlePageChange(event: PageEvent) {
    this.page = event.pageIndex + 1;
    this.itemsPerPage = event.pageSize;
    this.loadData(this.getDto());
  }
}
