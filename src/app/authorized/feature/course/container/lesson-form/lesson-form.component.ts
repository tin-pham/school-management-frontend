import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lesson-form',
  styleUrls: ['lesson-form.component.scss'],
  templateUrl: 'lesson-form.component.html',
})
export class LessonFormComponent {
  @Input() title: string;
  @Output() titleChange = new EventEmitter<string>();
  onTitleChange(title: string) {
    this.titleChange.emit(title);
  }

  @Input() body: string;
  @Output() bodyChange = new EventEmitter<string>();
  onBodyChange(text: string) {
    this.bodyChange.emit(text);
  }

  @Input() videoUrl: string;
  @Output() videoUrlChange = new EventEmitter<string>();
  onVideoUrlChange(url: string) {
    this.videoUrlChange.emit(url);
  }

  @Input() buttonAction: string;
  sectionId: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sectionId = this.route.snapshot.params['sectionId'];
  }

  @Output() onSubmit = new EventEmitter();
  submit() {
    this.onSubmit.emit();
  }
}
