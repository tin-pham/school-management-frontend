import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-course-toolbar',
  styleUrls: ['course-toolbar.component.scss'],
  templateUrl: 'course-toolbar.component.html',
})
export class CourseToolbarComponent {
  @Input() categoryId: number;

  @Output() delete = new EventEmitter<void>();
  onDelete() {
    this.delete.emit();
  }
}
