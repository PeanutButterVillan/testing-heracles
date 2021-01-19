<img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Twelve_Labours_Altemps_Inv8642.jpg" height="300px"/>

# Heracles: Pleo's Test Engineer Challenge

We're really happy that you're considering to join us! Here's a challenge that will help us understand your skills and serve as a starting discussion point for the interview.

We're not expecting that everything will be done perfectly as we value your time. You're encouraged to point out possible improvements in your solution and we will discuss them during the interview.

## The challenge: Money Formatting

Given an amount of money as a number, format it as a string. Add associated tests for the functionality and for the user interface. 

```js
formatMoney(2310000.159897); // '2 310 000.16'
formatMoney(1600); // '1 600.00'
```

This needs to be a "fully working application" (you choose the format: web, cli, backend-frontend, mobile app, ...)

*eg: A simple HTML page with an input box*

## Our evaluation criteria:

- How did your structure your code? (*eg: is it structured in a testable way?*)
- What did you test? (*eg: functionality, performance, etc.*) at which level? (*eg: unit, integration, UI, etc.*)
- Which testing technique did you use? why?
- We also care a little about the functionality itself

## What we won't really care: 

- If your UI looking great, 0 line of CSS is quite enough CSS
- You use the latest JS framework of the day
- The programming language (We write a lot of Kotlin & Typescript at Pleo, just in case you want to show off your skills!)

## What would be awesome:

- You use some nice testing techniques, fuzz testing, mutation testing, ... (even if they don't make sense here they'll probably do in your day to day job)
- You handle some stuff to test that we are not even aware of 
  - *eg: You handle funky unicode strings (eg: [big list of naughty strings](https://github.com/minimaxir/big-list-of-naughty-strings))*
- You show us how you run your tests in CI/CD
  
## Instructions:

When you're ready to work on the challenge, clone (and not fork) the repo. We want to see your progression through commits (don’t commit the entire solution in 1 step) and don't forget to create a `README.md` to explain your thought process and also provide instructions on how to run the tests.

When you're ready to submit your challenge, share the link to your repo with us. If you prefer to keep it private, we will provide you with some emails to invite to the repo.

Please let us know how long the challenge takes you. We're not looking for how speedy or lengthy you are. It's just really to give us a clearer idea of what you've produced in the time you decided to take. Feel free to go as big or as small as you want.

Happy testing! 🚀

The unit tests are set up to run using Jest. I ran them from the terminal window in Visual Studio Code using 'yarn test'. There are five unit tests all passing. I added comments for additional unit tests to write

The UI tests were written in cypress and confirm that the button is wired up to return the formatted value. There is one UI test currently. I added comments for other potential tests. The are executed from a terminal window using 'npm run e2e'.

