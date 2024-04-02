export class PostAttachmentBulkStoreDTO {
  files: File[];
  postId: number;
}

export class PostAttachmentBulkDeleteDTO {
  attachmentIds: number[];

  constructor(data?: PostAttachmentBulkDeleteDTO) {
    Object.assign(this, data);
  }
}
