# venue-uri

Challenge:

- Create a function that generates a venue URI by passing 'town' and 'venue' arguments;
- Write a set of tests to confirm various cses work as expected;
- Use GitHub Actions to automate testing when certain GitHub events are triggered.

# CODE TASK

## A. createURI.js

Contains a simple function which creates a URI string using the 'town' and 'venue' arguments in the format `/[town-slug]-events/[venue-slug]`.

The inputs of each argument are first 'slugified' `(converted to lowercase, special characters removed and spaces replaced with hyphens)` then returned as a URI.

I initally carried out some simple manual testing of the function using multiple console logs with different arguments to ensure the correct output was returned for each `(i.e. the function works!)`
As expected:

- `('Bristol', 'Thekla')` logged `/bristol-events/thekla`
- `('Weston-Super-Mare', 'The Playhouse')` logged `/weston-super-mare-events/the-playhouse`
- `('A1!!23 B4??56', 'C7$$89')` logged `('/a123-b456-events/c789')`

Console logs can be un-commented if this level of manual testing is required.

## B. createURI.test.js

Contains a suite of three simple tests to check that the correct URI is returned for various arguments containing uppercase letters, spaces and special characters.

Use the command _'npm test'_ in the terminal to run the test suite.

All tests should **'PASS'** with expected outputs matching those logged in the inital manual testing detailed above.

# DEVOPS TASK

## A. GitHub Actions setup - venue-uri-test.yaml

The unit test suite will run on all `pull requests`, testing on various versions of node.js `**(12.x, 14.x, 16.x)**`.

A pull request was also created with a deliberate mistake in the code to intentionally fail the test. Details of the failed checks can be found in the **'Checks'** tab of the **'Pull requests'** section of the repo.

## B. HTTP POST request
