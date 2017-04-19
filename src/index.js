/* @flow */

type HulkOptions = {
  name: string;
  version: string;
  commitHash: string;
  repository: string;
};

export default function hulk({ name, version, commitHash, repository }: HulkOptions): string {
  const time = new Date();

  return `/*
  ${name} v${version}
  ${time.toString()} - commit ${commitHash}

  ${repository}

  Released under the MIT License.
*/`;
}
