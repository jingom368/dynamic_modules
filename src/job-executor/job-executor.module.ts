import { Module } from '@nestjs/common';
import { JobExecutorService } from './job-executor.service';
import { JobExecutorController } from './job-executor.controller';
import { ProcessorModule } from '../processor.module';
import { processorFactoryProvider } from './processor-factory.provider';

@Module({
  imports: [ProcessorModule.forRootAsync()],
  controllers: [JobExecutorController],
  providers: [
    {
      provide: 'JobExecutorService',
      useClass: JobExecutorService,
    },
    processorFactoryProvider,
  ],
})
export class JobExecutorModule {}
