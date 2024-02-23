import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-comment-textbox',
  styleUrls: ['comment-textbox.component.scss'],
  templateUrl: 'comment-textbox.component.html',
})
export class CommentTextboxComponent {
  @Input() content: string;
  @Output() contentChange = new EventEmitter();

  onContentChange() {
    this.contentChange.emit(this.content);
  }

  @Output() comment = new EventEmitter();
  onComment() {
    this.comment.emit(this.content);
  }

  @Output() cancel = new EventEmitter();
  onCancel() {
    this.cancel.emit();
  }
}
