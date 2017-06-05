/* @flow */

import * as childProcess from 'child_process';

export function getCommitHash(): string {
  return childProcess.execSync('git rev-parse HEAD').toString('utf8').trim();
}

type HulkOptions = {
  name: string;
  version: string;
  commitHash: string;
  repository: string;
};

export function banner({ name, version, commitHash, repository }: HulkOptions): string {
  const time = new Date();

  return `/*
  ${name} v${version}
  ${time.toString()} - commit ${commitHash}

  ${repository}

  Released under the MIT License.
*/`;
}
