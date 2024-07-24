// ProcessingExecutorFactory.ts
import { join } from 'path';
import { promises as fs } from 'fs';
// import { ProcessingExecutor } from './ProcessingExecutor';
// import { executeJob } from './processor.execute';
// import { ImageProcessingExecutor } from './job-processor/ImageProcessingExecutor';
// import { VideoProcessingExecutor } from './VideoProcessingExecutor';

// type executorMap = {
//   [key: string]: new () => ProcessingExecutor;
// };

// const executors: executorMap = {
//   Image: ImageProcessingExecutor,
//   Video: VideoProcessingExecutor,
// };

export async function ProcessingExecutorFactory(jobType: string) {
  const basePath = join(__dirname, '');
  const files = await fs.readdir(basePath);
  // const jobTypeValue = executors[jobType];
  const fileName = files.find(file => file.includes(jobType));

  if (!fileName) {
    throw new Error(`Unknown job type: ${jobType}`);
  }

  const modulePath = join(basePath, fileName);
  const module = await import(modulePath);
  const ExecutorClass = module.default; // 가정: 모듈은 클래스를 default로 export 함
  return new ExecutorClass();
}
