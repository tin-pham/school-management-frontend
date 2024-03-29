import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { AssignmentService } from '@core/services/api/assignment.service';
import { AuthService } from '@core/services/api/auth.service';
import { AssignmentGetListDTO } from '@shared/models/dto/assignment.dto';
import { AssignmentGetListDataRO, AssignmentGetListRO } from '@shared/models/ro/assignment.ro';

@Component({
  selector: 'app-lesson-assignment',
  styleUrls: ['lesson-assignment.component.scss'],
  templateUrl: 'lesson-assignment.component.html',
})
export class LessonAssignmentComponent implements OnInit {
  lessonId: number;
  assignments: AssignmentGetListDataRO[];

  itemsPerPage = 5;
  page = 1;
  totalItems = 0;

  constructor(
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef,
    private _assignmentService: AssignmentService,
    private _authService: AuthService,
  ) {}

  ngOnInit() {
    this.lessonId = +this.route.snapshot.paramMap.get('lessonId');
    this.loadAssignments({
      limit: this.itemsPerPage,
      page: this.page,
      lessonId: this.lessonId,
    });
  }

  handlePageChange(event: PageEvent) {
    this.page = event.pageIndex + 1;
    this.itemsPerPage = event.pageSize;
    this.loadAssignments({
      limit: this.itemsPerPage,
      page: this.page,
      lessonId: this.lessonId,
    });
  }

  loadAssignments(dto: AssignmentGetListDTO) {
    const { limit, page, lessonId } = dto;
    this._assignmentService.getList({ limit, page, lessonId }).subscribe({
      next: (response: AssignmentGetListRO) => {
        this.totalItems = response.meta.totalItems;
        this.assignments = response.data;
        this.cd.markForCheck(); // Prefer markForCheck over detectChanges for performance
      },
    });
  }

  delete(id: number) {
    this._assignmentService.delete(id).subscribe({
      next: () => {
        this.loadAssignments({
          limit: this.itemsPerPage,
          page: this.page,
          lessonId: this.lessonId,
        });
      },
    });
  }

  isStudent() {
    return this._authService.isStudent();
  }
}
