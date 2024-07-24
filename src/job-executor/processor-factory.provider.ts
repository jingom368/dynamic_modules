import { Provider } from '@nestjs/common';
import { AbstractProcessor } from 'src/job-processor/processor.interface';
import { JOB_KEY } from '../job-processor/job.decorator';
import { JobType } from '../job-processor/job.type';

export const processorFactoryProvider: Provider = {
  provide: 'ProcessorFactory',
  useFactory: (...processors: AbstractProcessor[]) => {
    const processorMap = new Map<JobType, AbstractProcessor>();
    processors.forEach(processor => {
      const jobType = Reflect.getMetadata(JOB_KEY, processor.constructor) as JobType;
      processorMap.set(jobType, processor);
      console.log('processor', processor);
    });
    return processorMap;
  },
  // useFacotry의 인자로 포함됨
  inject: [...Object.values(JobType).map(jobType => `${jobType}Processor`)],
};
