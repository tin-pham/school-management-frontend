import { Component, OnInit } from '@angular/core';
import { PostService } from '@core/services/api/post.service';

@Component({
  selector: 'app-course-post-edit',
  styleUrls: ['course-post-edit.component.scss'],
  templateUrl: 'course-post-edit.component.html',
})
export class CoursePostEditComponent implements OnInit {
  constructor(private _postService: PostService) {}

  ngOnInit() {}
}
