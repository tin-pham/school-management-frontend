export class S3UploadDataRO {
  url: string;
  name: string;
  type: string;
  size: string;
}

export class S3UploadRO {
  data: S3UploadDataRO[];
}
