# Intro to Mongodb
Made by Viktor Kim Christiansen

## Overview
Simple Typescript project with mongoose with a couple of functions to answer the questions:

1. How many Twitter users are in the database?
2. Which Twitter users link the most to other Twitter users? (Provide the top ten.)
3. Who is are the most mentioned Twitter users? (Provide the top five.)
4. Who are the most active Twitter users (top ten)?
5. Who are the five most grumpy (most negative tweets) and the most happy (most positive tweets)?

Either check answers folder, or run it and try out the paths below

### Paths Available:
1. /amountUsers
2. /userLinksMost
3. /topMostMentioned (not done)
4. /topMostActive
5. /topMostGrumpy (not done)

## Try it out
### Run Locally
* Clone repo -> Install NodeJS & typescript-> run
* Right now i have it hosted, otherwise host the data yourself(http://cs.stanford.edu/people/alecmgo/trainingandtestdata.zip), and point to the server
* MONGOURL=mongodb://viter.dk/social_net npm start
* Open Insomnia/Postman/Your browser and go to localhost:3000

## Run With Docker
* Have docker and build the container
* docker build -t simpledb2 .
* docker run --rm -p 3000:3000 simpledb2
* Open Insomnia/Postman/Your browser and go to localhost:3000
