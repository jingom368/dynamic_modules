import { Injectable } from '@nestjs/common';
import { AbstractProcessor } from './processor.interface';
import { JobProcessor } from './job.decorator';
import { JobType } from './job.type';

@Injectable()
@JobProcessor(JobType.JOB_VIDEO_PROCESSING)
export class VideoProcessor implements AbstractProcessor {
  process() {
    console.log('Processing with VideoProcessor');
  }
}
