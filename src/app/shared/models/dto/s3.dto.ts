export class S3UploadDTO {
  files: File[];
  directoryPath?: string;
}

export class S3DeleteDTO {
  urls: string[];
}
