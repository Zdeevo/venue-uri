import createURI from './createURI';

/* Test to check if output is correct when 'Bristol' and 'Thekla' are passed as arguments to the createURI function */
test('expect when "town" is "Bristol" and "venue" is "Thekla" result will be "/bristol-events/thekla"', () => {
  expect(createURI('Bristol', 'Thekla')).toBe('/bristol-events/thekla');
});

/* Test to check if output is correct when 'Weston-Super-Mare' and 'The Playhouse' are passed as arguments to the createURI function */
test('expect when "town" is "Weston-Super-Mare" and "venue" is "The Playhouse" result will be "/weston-super-mare-events/the-playhouse"', () => {
  expect(createURI('Weston-Super-Mare', 'The Playhouse')).toBe(
    '/weston-super-mare-events/the-playhouse'
  );
});

/* Test using a mix of characters to test if non-alphanumeric characters are removed */
test('expect when "town" is "A1!!23 B4??56" and "venue" is "C7$$89" result will be "/a123-b456-events/c789"', () => {
  expect(createURI('A1!!23 B4??56', 'C7$$89')).toBe('/a123-b456-events/c789');
});
