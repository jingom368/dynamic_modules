import { DynamicModule, Module } from '@nestjs/common';
import { loadProcessorsFromDir } from './job-executor/modulee-loader';

@Module({})
export class ProcessorModule {
  static async forRootAsync(): Promise<DynamicModule> {
    const providers = await loadProcessorsFromDir(__dirname + '/job-processor');
    return {
      module: ProcessorModule,
      imports: [],
      providers: [...providers],
      exports: [...providers],
    };
  }
}
