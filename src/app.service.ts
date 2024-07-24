import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // constructor(@Inject('') private readonly executorFactory: ExecutorFactory) {}
  async execute(JobType: string): Promise<string> {
    // this.executorFactory.get(JobType).execute();
    // executeJob(JobType);

    return `${JobType} executed successfully!`;
  }
}
