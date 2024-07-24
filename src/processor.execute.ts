import * as fs from 'fs';
import * as path from 'path';
import { exec } from 'child_process';

export function executeJob(jobType: string): void {
  const srcPath = path.join(__dirname, '../src'); // Adjust the path to the src folder as needed
  fs.readdir(srcPath, (err, files) => {
    if (err) {
      console.error('Could not list the directory.', err);
      return;
    }
    const jobFile = files.find(file => file.includes(jobType));
    if (jobFile) {
      console.log(`${jobType} process is being executed.`);
      const jobFilePath = path.join(srcPath, jobFile);
      exec(`node ${jobFilePath}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
        if (stderr) {
          console.error(`stderr: ${stderr}`);
        }
      });
    } else {
      console.log(`No job file found for ${jobType}.`);
    }
  });
}

// 의존성을 주입하는 모듈을 작성해야 한다.
//
