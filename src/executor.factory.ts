// executor.factory.ts
export class ExecutorFactory {
  get(JobType: string) {
    switch (JobType) {
      case 'pdf':
        return {
          execute: () => console.log('PDF Job executed'),
        };
      case 'pptx':
        return {
          execute: () => console.log('PPTX Job executed'),
        };
      default:
        throw new Error('Unknown JobType');
    }
  }
}
