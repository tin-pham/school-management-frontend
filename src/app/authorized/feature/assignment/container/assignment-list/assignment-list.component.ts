import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { AssignmentService } from '@core/services/api/assignment.service';
import { AuthService } from '@core/services/api/auth.service';
import { AssignmentGetListDTO } from '@shared/models/dto/assignment.dto';
import { AssignmentGetListDataRO, AssignmentGetListRO } from '@shared/models/ro/assignment.ro';

@Component({
  selector: 'app-assignment-list',
  styleUrls: ['assignment-list.component.scss'],
  templateUrl: 'assignment-list.component.html',
})
export class AssignmentListComponent implements OnInit {
  @Input() courseId: number;
  @Input() assignments: AssignmentGetListDataRO[];

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
    this.courseId = +this.route.snapshot.paramMap.get('id');
    this.loadAssignments({
      limit: this.itemsPerPage,
      page: this.page,
      courseId: this.courseId,
    });
  }

  handlePageChange(event: PageEvent) {
    this.page = event.pageIndex + 1;
    this.itemsPerPage = event.pageSize;
    this.loadAssignments({
      limit: this.itemsPerPage,
      page: this.page,
      courseId: this.courseId,
    });
  }

  loadAssignments(dto: AssignmentGetListDTO) {
    if (this.isStudent()) {
      dto.withSubmission = true;
    }

    this._assignmentService.getList(dto).subscribe({
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
          courseId: this.courseId,
        });
      },
    });
  }

  isStudent() {
    return this._authService.isStudent();
  }
}
