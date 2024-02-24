export class Assignment {
  dueDate: string;
  attachment: { createdAt: string };

  constructor(dueDate: string, createdAt: string) {
    this.dueDate = dueDate;
    this.attachment = { createdAt: createdAt };
  }

  isMissing(): boolean {
    const dueDate = new Date(this.dueDate);
    const createdAt = new Date(this.attachment.createdAt);
    return createdAt > dueDate;
  }

  getMissingDurationMessage(): string {
    if (!this.isMissing()) {
      return 'Chưa trễ hạn';
    }

    const dueDate = new Date(this.dueDate);
    const createdAt = new Date(this.attachment.createdAt);

    // Calculate the difference in milliseconds
    const difference = createdAt.getTime() - dueDate.getTime();

    // Convert the difference to a more readable format
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);

    return `Trễ: ${days} ngày, ${hours} giờ, và ${minutes} phút.`;
  }
}
