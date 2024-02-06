export class CourseStoreDTO {
  name: string;
  description?: string;
  imageUrl?: string;
  categoryIds?: number[];

  constructor(data?: CourseStoreDTO) {
    Object.assign(this, data);
  }
}

export class CourseUpdateDTO {
  name?: string;
  description?: string;
  imageUrl?: string;
  constructor(data?: CourseUpdateDTO) {
    Object.assign(this, data);
  }
}
