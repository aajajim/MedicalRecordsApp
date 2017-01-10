# MeteorAngular2 Web App startup
A bootstrap working application that can be forked and costomized

## Introduction
In first place, this web skelton was intented for my own purpose of having having something to start with each time I want to do something and avoid repeating all the initial steps again and again.
This startup web app is based on Meteor and Angular2, written in TypeScript and using Angular Materials.

## How to start ?
1. Install [Meteor](https://www.meteor.com/) from their website depending on your operating system.
2. Fork this repo and clone it to your machine.
3. run the following command to install all necessary dependencies:
```
meteor npm install
```
4. run this command to lunch the web app:
```
meteor
```
this command start a web server, a MongoDB database and daemon, build the web app a serve it to the web server at your local machine via port 3000. 
So in order to see the result, you just need to start your browser and navigate to http://localhost:3000

## Update dependencies packages
The file updatePackages.cmd is intented to update both Meteor and Npm packages. If your working on Unix machine, then just change the extension to .sh and make the file executable with command ``chmod +x updatePackages.sh``

## Get in touch
If you have any question, remark or suggestion on how to improve this web app startup, please do not hesitate to send me an email at mohammed.aajaji.freelance@gmail.com