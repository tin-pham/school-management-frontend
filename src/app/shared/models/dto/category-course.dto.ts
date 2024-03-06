export class CategoryCourseDeleteDTO {
  categoryId: number;
  courseId: number;

  constructor(data?: CategoryCourseDeleteDTO) {
    Object.assign(this, data);
  }
}
