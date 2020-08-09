import * as path from 'path'; // To import the files in relative way
import moduleAlias from 'module-alias';

// list all files from previous directory

const files = path.resolve(__dirname, '../..');

moduleAlias.addAliases({
  '@src': path.join(files, 'src'),
  '@test': path.join(files, 'test'),
});
