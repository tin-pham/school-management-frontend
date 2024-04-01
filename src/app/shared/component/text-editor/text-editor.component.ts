import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Editor, Toolbar } from 'ngx-editor';

@Component({
  selector: 'app-text-editor',
  styleUrls: ['text-editor.component.scss'],
  templateUrl: 'text-editor.component.html',
})
export class TextEditorComponent implements OnInit, OnDestroy {
  @Input() label: string;
  @Input() required: boolean;
  @Input() icon: string;

  editor: Editor;
  @Input() value: object;
  @Output() valueChange = new EventEmitter();

  @Input() showAttachment = true;

  onValueChange(html: object) {
    this.valueChange.emit(html);
  }

  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  ngOnInit(): void {
    this.editor = new Editor();
    if (this.showAttachment) {
      this.toolbar.push(['link', 'image']);
    }
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
