import { Inject, Injectable } from '@nestjs/common';
import { JobType } from '../job-processor/job.type';
import { IJobExecutorService } from './job-executor-service.interface';
import { AbstractProcessor } from 'src/job-processor/processor.interface';

@Injectable()
export class JobExecutorService implements IJobExecutorService {
  constructor(@Inject('ProcessorFactory') private readonly processorFactory: Map<JobType, AbstractProcessor>) {}

  execute(jobType: JobType) {
    console.log(`${this.constructor.name} execute`, jobType);
    this.processorFactory.get(jobType).process();
  }
}
