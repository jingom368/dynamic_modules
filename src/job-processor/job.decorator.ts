import { SetMetadata } from '@nestjs/common';
import { JobType } from './job.type';

export const JOB_KEY = 'JOB_KEY';

export const JobProcessor = (key: JobType) => SetMetadata(JOB_KEY, key);
