import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@core/services/api/auth.service';
import { PostService } from '@core/services/api/post.service';
import { PostGetDetailRO } from '@shared/models/ro/post.ro';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-course-post-detail',
  styleUrls: ['course-post-detail.component.scss'],
  templateUrl: 'course-post-detail.component.html',
})
export class CoursePostDetailComponent implements OnInit {
  post: PostGetDetailRO;
  postId: number;

  constructor(
    private route: ActivatedRoute,
    private toast: ToastrService,
    private _postService: PostService,
    private _authService: AuthService,
  ) {}

  ngOnInit() {
    this.postId = Number(this.route.snapshot.paramMap.get('postId'));
    this._postService.getDetail(this.postId).subscribe(response => {
      this.post = response;
    });
  }

  isStudent() {
    return this._authService.isStudent();
  }

  getUserId() {
    return this._authService.getUserId();
  }

  delete() {
    this._postService.delete(this.postId).subscribe(() => {
      this.toast.success('Xóa thành công');
    });
  }
}
