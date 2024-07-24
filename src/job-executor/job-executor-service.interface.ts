import { JobType } from '../job-processor/job.type';

export interface IJobExecutorService {
  execute(jobType: JobType): void;
}
