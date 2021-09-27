# venue-uri

Challenge:

- Create a function that generates a venue URI by passing `town` and `venue` arguments;
- Write a set of tests to confirm various cases work as expected;
- Use GitHub Actions to:
  - automate testing to run on 'pull requests';
  - perform a HTTP request on 'push' events.

# CODE TASK

## A. createURI.js

Contains a simple function which creates a URI string using the `town` and `venue` arguments in the format `/[town-slug]-events/[venue-slug]`.

The inputs of each argument are first 'slugified' (converted to lowercase, special characters removed and spaces replaced with hyphens) then returned as a URI.

The NPM [slug](https://github.com/Trott/slug) package was used to slugify the strings.

I initally carried out some simple manual testing of the function using multiple console logs with different arguments to ensure the correct output was returned for each (i.e. the function works!)
As expected:

- `('Bristol', 'Thekla')` logged `'/bristol-events/thekla'`
- `('Weston-Super-Mare', 'The Playhouse')` logged `/weston-super-mare-events/the-playhouse`
- `('A1!!23 B4??56', 'C7$$89')` logged `'/a123-b456-events/c789'`

Console logs can be un-commented if this level of manual testing is required.

## B. createURI.test.js

Contains a suite of three simple tests to check that the correct URI is returned for various arguments containing uppercase letters, spaces and special characters.

[Jest](https://jestjs.io/) was used for the testing.

Use the command `npm test` in the terminal to run the test suite.

All tests should **'PASS'** with expected outputs matching those logged in the inital manual testing detailed above.

# DEVOPS TASK

## A. GitHub Actions setup - venue-uri-test.yaml

The unit test suite will run on all 'pull requests', testing on various versions of node.js '**(12.x, 14.x, 16.x)**'.

A pull request was also created with a deliberate mistake in the code to intentionally fail the test. Details of the failed checks can be found in the **'Checks'** tab of the **'Pull requests'** section of the repo, or in the **'Actions'** section of the repo, under the **'venue-uri-test'** workflow.

## B. HTTP POST request - http-hash-request.yaml

[HTTP Request Action](https://github.com/fjogeleit/http-request-action) was used for the HTTP POST request.
[Commit Hash](https://github.com/pr-mpt/actions-commit-hash) was used to extract the commit hash.

A GitHub Action to create an empty HTTP POST request using the commit hash of the event that triggered the action, in this case a 'push' to 'main' branch. For each 'push' event the commit hash is extracted, appended to the url and the request sent.

Details of each request run can be found in the **'Actions'** section of the repo, under the **'HTTP POST request with commit hash'** workflow.

# EXTRA TASKS

## A. **'check'** script GET request - venueURI.js

Takes command-line arguments and passes them into a URI string `('https://www.ents24.com/[venue-uri])` for a GET request using the 'HTTPS' module from the default Node library.

This can be run with the command `npm run check [arg1] [arg2]` which runs a GET request and outputs the resulting status code to the console.

### Example:

Running the command `npm run check Bristol Thekla` in the terminal will send a GET request to `https://www.ents24.com/bristol-events/thekla` and should output `200` (OK) to the console.

**N.B.**

- Passing incorrent or mispelled town/venue data will result in the status code `404` (Not Found) being output to the console;
- Only the first 2 arguments will be passed to the GET request, any others will be ignored.
