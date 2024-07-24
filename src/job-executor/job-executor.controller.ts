import { Controller, Get, Inject, Param } from '@nestjs/common';
import { IJobExecutorService } from './job-executor-service.interface';
import { JobType } from '../job-processor/job.type';

@Controller()
export class JobExecutorController {
  constructor(
    @Inject('JobExecutorService')
    private readonly jobExecutorService: IJobExecutorService
  ) {}

  @Get('execute/:jobType')
  execute(@Param('jobType') jobType: JobType) {
    console.log(`${this.constructor.name} excute`, jobType);
    return this.jobExecutorService.execute(jobType);
  }
}
