## Reproduction of lazy compilation issues w/ webpack

This is a very simple Storybook project that uses lazy compilation (see `.storybook/main.js`).

To reproduce the issue:

1. Clear any caches and start storybook:

`rm -rf node_modules/.cache/ && yarn storybook`

2. This will open the storybook in a browser, simply open the console/network tab

3. Now, in another terminal, run the SB test runner:

`yarn test-storybook`

This command will almost certainly fail (due to the lazy compilation, see step 5 below), although this is the not the primary issue.

4. Check the console in the browser. You will see a set of hot updates. There's a good chance (not guaranteed--you might need to run the steps again), that at least one of these updates will 404, causing the browser to reload.

<img width="1293" alt="image" src="https://user-images.githubusercontent.com/132554/158745435-5b73ae5e-9547-4471-bb5a-84e218027f24.png">


5. Run `yarn test-storybook` again. It will succeed as all modules are now compiled.
