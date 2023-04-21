import {readdirSync, readFileSync} from 'fs';
import {extname, join} from 'path';

export function getAllJsonFromDataDirectory(dir: string) {
  let response: {
    id: number
  }[] = [];
  const jsonsInDir = readdirSync(`./app/_data/${dir}`).filter(file => extname(file) === '.json');

  jsonsInDir.forEach(file => {
    const fileData = readFileSync(join(`./app/_data/${dir}`, file));
    response.push(JSON.parse(fileData.toString()));
  });

  response.sort((a,b) => a.id - b.id);

  return response;
}
