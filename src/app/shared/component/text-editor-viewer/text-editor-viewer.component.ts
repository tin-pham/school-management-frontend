import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'app-text-editor-viewer',
  styleUrls: ['text-editor-viewer.component.scss'],
  templateUrl: 'text-editor-viewer.component.html',
})
export class TextEditorViewerComponent implements OnInit, OnDestroy {
  @Input() value: object;
  editor: Editor;

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
