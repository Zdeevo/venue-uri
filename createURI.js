/* NPM package 'slug' used to slugify uri strings */
import slug from 'slug';

/* Function to create a URI taking 'town' and 'venue' as arguments */
const createURI = (town, venue) => {
  return '/' + slug(`${town}-events`) + '/' + slug(`${venue}`);
};

/* Logging outputs of different arguments to test basic functionality */

console.log(createURI('Bristol', 'Thekla'));
console.log(createURI('Weston-Super-Mare', 'The Playhouse'));
console.log(createURI('A1!!23 B4??56', 'C7$$89'));

export default createURI;
