import slug from 'slug';
import https from 'https';

/* Create a URI path from arguments passed in the command line */
const uriPath =
  '/' + slug(`${process.argv[2]}-events`) + '/' + slug(`${process.argv[3]}`);

/* Make an GET request with the full URI passing the slugified commandline arguments, then output the response status code in the console */
https.get(`https://www.ents24.com/${uriPath}`, (res) => {
  console.log(res.statusCode);
});
