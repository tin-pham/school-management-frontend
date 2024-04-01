export class PostAttachmentBulkStoreDTO {
  files: File[];
  postId: number;
}

export class PostAttachmentBulkDeleteDTO {
  attachmentIds: number[];
}
