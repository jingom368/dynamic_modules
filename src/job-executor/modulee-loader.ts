import { Provider } from '@nestjs/common';
import { readdirSync } from 'fs';
import { join } from 'path';
import { JOB_KEY } from '../job-processor/job.decorator';

export async function loadProcessorsFromDir(
  directory: string,
): Promise<Provider[]> {
  const classes: Provider[] = [];
  const files = readdirSync(directory).filter((file) =>
    file.endsWith('processor.js'),
  );

  for (const file of files) {
    const filepath = join(directory, file);
    const module = await import(filepath);
    Object.keys(module).forEach((key) => {
      const exported = module[key];
      console.log('exported', exported);
      console.log('module', module);
      if (
        typeof exported === 'function' &&
        Reflect.hasMetadata(JOB_KEY, exported)
      ) {
        const jobKey = Reflect.getMetadata(JOB_KEY, exported);
        classes.push({
          provide: `${jobKey}Processor`, // ImageProcessor, VideoProcessor
          useClass: exported,
        });
      }
    });
  }
  return classes;
}
