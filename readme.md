# Log of #100DaysOfCode - in 2019

## Day 1: July 17, Wednesday

**Today's Progress:** Spent time creating an chrome extension to remove GIFs on anime website

**Thoughts:** Feel good in the end, but I should find somehow to remove GIFs before page rendering.

**Link to work:** [Anti GIFs - waiting for publishing](https://github.com/gapgag55/100-days-challenge/tree/master/anti-gif-chrome-extenstion)

## Day 2: July 18, Thursday

**Today's Progress:** Develop an automated certification for people who joined the design your dream camp 2019 

**Thoughts:** Learning how to download the canvas as an image with custom fillText inserting. However, DPI's background in canvas is not quite worked well when rendering on webpage. It was blurred. I decided to remove canvas from DOM and give it created when download button trigged.

**Link to work:** [Design Your Dream Certificate](https://design-your-dream-certificate.firebaseapp.com/)

## Day 3: July 19, Friday

**Today's Progress:** Installing and testing Libra

**Thoughts:**  In general, I tried to install Libra on ubuntu on docker in my Macbook. It should be worked on my computer but the disk is full. I decided to create an ubuntu droplet in DigitalOcean. In my opinion, Testnet is a libra network similar to libra swarm which is a local validator node for Libra core. The transaction's Libra is still not working on Testnet when transferring money from one account to another account whereas Libra swarm is worked. There are many problems when installing the libra core. However, the final solution is here  [Official Tutorial](https://developers.libra.org/docs/my-first-transaction) and [Libra Swarm](https://github.com/libra/libra/issues/201#issuecomment-504784229)

**Link to work:** -

## Day 4: July 20, Saturday

**Today's Progress:** Making microservice with Go kit

**Thoughts:**  Following on stringsvc tutorial on gokit website. It made me a dirty hand because it is quite difficult. There are a few steps to think of when developing microservice with Go kit. 
1. Concern transport server
2. Create endpoints of particular service
3. Create type of Request and Response for each endpoint
4. Implement business logic to endpoint

In conclusion, Go kit can do for logging, instrumenting, service discovery, circuitebreaker, ratelimit, load balancing, and more...

**Link to work:** [Stringsvc - Microservice](https://github.com/gapgag55/100-days-challenge/tree/master/stringsvc)