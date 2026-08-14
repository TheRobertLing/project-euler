import { exec } from 'node:child_process';
import fs from 'node:fs'

const problemNumber = Number(fs.readFileSync('./data.txt', 'utf8').trim())
const folderName = `problem-${problemNumber}`

exec(`node ./${folderName}/solution.js`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Execution error: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }

  console.log(`Script Output:\n${stdout}`);
});
