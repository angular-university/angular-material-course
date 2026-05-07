
## Angular Material Course

This repository contains the code of the [Angular Material In Depth](https://angular-university.io/course/angular-material-course) video course.

This course repository is updated to Angular 21:

![Angular Material In Depth](https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-material-course-1.jpg)

You can find the starting point of the course in the [1-start branch](https://github.com/angular-university/angular-material-course/tree/1-start).

This master branch contains the *final version of the course code*, that you can use as a reference if you choose to code along.

# Installation pre-requisites

IMPORTANT: Please use Node 22 LTS (Long Term Support version).

# Installing the Angular CLI

With the following command the angular-cli will be installed globally in your machine:

    npm install -g @angular/cli 

# How To install this repository

We can install the master branch using the following commands:

    git clone https://github.com/angular-university/angular-material-course.git

    cd angular-material-course
    npm ci

Note: **We recommend using npm ci, instead of npm install**. This will ensure that you use the exact dependency versions set on package-lock.json, unlike npm install which might potentially change those versions.

# To Run the Development Backend Server

Our Angular frontend connects to a simple Node server, running also in your local development machine.

We can start the sample application backend with the following command:

    npm run server

# To run the Development UI Server

Once the backend server is up and running, we can now run our frontend server. 

To run the frontend part of our code, we will use the Angular CLI:

    npm start 

The application is visible at port 4200: [http://localhost:4200](http://localhost:4200)

Note: **make sure to use command npm start and not ng serve, as npm start adds a couple extra options that are needed for our project **

# Angular University Courses

Here is a list of all the courses of the Angular University.

## Angular For Beginners

[Angular For Beginners](https://angular-university.io/course/getting-started-with-angular2) — Establish a solid layer of fundamentals, learn what's under the hood of Angular.

<img src="https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners-small-v2.png" width="400" alt="Angular For Beginners">

## Angular AI In Depth (with Cursor and Claude Code)

[Angular AI In Depth](https://angular-university.io/course/angular-ai-in-depth-course) — Build modern full-stack Angular applications with signals, standalone components, zoneless architecture, and OpenAI integration using Claude Code.

<img src="https://d3vigmphadbn9b.cloudfront.net/course-images/large-images/angular-ai-in-depth.jpg" width="400" alt="Angular AI In Depth">

## Angular Testing In Depth (Signals Edition)

[Angular Testing In Depth](https://angular-university.io/course/angular-testing-in-depth) — Write robust, maintainable tests for modern signal-based Angular applications.

<img src="https://d3vigmphadbn9b.cloudfront.net/course-images/large-images/angular-testing-In-depth.jpg" width="400" alt="Angular Testing In Depth">

## Angular Core Deep Dive

[Angular Core Deep Dive](https://angular-university.io/course/angular-course) — A detailed walk-through of the most important part of Angular - the Core and Common modules.

<img src="https://d3vigmphadbn9b.cloudfront.net/course-images/large-images/angular-core-deep-dive-new-2.jpg" width="400" alt="Angular Core Deep Dive">

## Modern Angular With Signals

[Modern Angular With Signals](https://angular-university.io/course/angular-signals-course) — Learn signals in depth. Build a modern signal-based application with async/await, standalone components and optional RxJs.

<img src="https://d3vigmphadbn9b.cloudfront.net/course-images/large-images/angular-signals-course.jpg" width="400" alt="Modern Angular With Signals">

## Typescript: The Ultimate Bootcamp

[Typescript: The Ultimate Bootcamp](https://angular-university.io/course/typescript-bootcamp) — Learn in-depth all the language fundamentals. Practice by building practical projects in Node, React and Angular.

<img src="https://angular-university.s3-us-west-1.amazonaws.com/course-images/typescript-bootcamp-2.jpg" width="400" alt="Typescript: The Ultimate Bootcamp">

## RxJs In Practice

[RxJs In Practice](https://angular-university.io/course/rxjs-course) — Understand the RxJs Observable pattern, learn the RxJs Operators via practical examples.

<img src="https://s3-us-west-1.amazonaws.com/angular-university/course-images/rxjs-in-practice-course.png" width="400" alt="RxJs In Practice">

## Angular Forms In Depth

[Angular Forms In Depth](https://angular-university.io/course/angular-forms-course) — Build complex enterprise data forms with the powerful Angular Forms module.

<img src="https://angular-university.s3-us-west-1.amazonaws.com/course-images/angular-forms-course-small.jpg" width="400" alt="Angular Forms In Depth">

## Angular Router In Depth

[Angular Router In Depth](https://angular-university.io/course/angular-router-course) — Build large-scale Single Page Applications with the powerful Angular Router.

<img src="https://angular-university.s3-us-west-1.amazonaws.com/course-images/angular-router-course.jpg" width="400" alt="Angular Router In Depth">

## Reactive Angular Course

[Reactive Angular Course](https://angular-university.io/course/reactive-angular-course) — How to build Angular applications in Reactive style using plain RxJs - patterns, anti-patterns, lightweight state management.

<img src="https://angular-university.s3-us-west-1.amazonaws.com/course-images/reactive-angular-course.jpg" width="400" alt="Reactive Angular Course">

## NgRx (with NgRx Data) - The Complete Guide

[NgRx (with NgRx Data) - The Complete Guide](https://angular-university.io/course/ngrx-course) — Learn the modern NgRx Ecosystem, including NgRx Data, Store, Effects, Router Store, NgRx Entity, and DevTools.

<img src="https://angular-university.s3-us-west-1.amazonaws.com/course-images/ngrx-v2.png" width="400" alt="NgRx Complete Guide">

## Angular Testing Course

[Angular Testing Course](https://angular-university.io/course/angular-testing-course) — A complete guide to Angular Unit Testing and E2E Testing, including Testing best practices and continuous integration.

<img src="https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-testing-small.png" width="400" alt="Angular Testing Course">

## Angular Security Course - Web Security Fundamentals

[Angular Security Course](https://angular-university.io/course/angular-security-course) — Learn Web Security Fundamentals and apply them to defend an Angular / Node Application from multiple types of attacks.

<img src="https://s3-us-west-1.amazonaws.com/angular-university/course-images/security-cover-small-v2.png" width="400" alt="Angular Security Course">

## Angular Material In Depth

[Angular Material In Depth](https://angular-university.io/course/angular-material-course) — Learn in depth some of the most advanced components of the Angular Material UI widget library.

<img src="https://angular-university.s3-us-west-1.amazonaws.com/course-images/angular-material-course-1.jpg" width="400" alt="Angular Material In Depth">

## Angular SSR In Depth

[Angular SSR In Depth](https://angular-university.io/course/angular-universal-course) — Use Angular on the server too! Learn Angular Server-Side Rendering.

<img src="https://angular-university.s3-us-west-1.amazonaws.com/course-images/angular-universal-course.jpg" width="400" alt="Angular SSR In Depth">

## Angular Progressive Web Apps (PWA) Course

[Angular PWA Course](https://angular-university.io/course/angular-pwa-course) — Learn Angular Progressive Web Applications, build the future of the Web Today.

<img src="https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-pwa-course.png" width="400" alt="Angular PWA Course">

## Firebase & AngularFire In Depth

[Firebase & AngularFire In Depth](https://angular-university.io/course/angularfire-course) — Full stack Development with Angular, Firestore, Firebase Storage & Hosting, Firebase Cloud Functions & AngularFire.

<img src="https://angular-university.s3-us-west-1.amazonaws.com/course-images/firebase-course-1.jpg" width="400" alt="Firebase & AngularFire In Depth">

## NestJs In Practice (with MongoDB)

[NestJs In Practice](https://angular-university.io/course/nestjs-course) — Build a modern REST backend using Typescript and the familiar Angular API.

<img src="https://angular-university.s3-us-west-1.amazonaws.com/course-images/nestjs-v2.png" width="400" alt="NestJs In Practice">

## Stripe Payments In Practice

[Stripe Payments In Practice](https://angular-university.io/course/stripe-course) — Build your own online eCommerce store and subscription membership website with Stripe, Firebase, Node & Express.

<img src="https://angular-university.s3-us-west-1.amazonaws.com/course-images/stripe-course.jpg" width="400" alt="Stripe Payments In Practice">

## Angular Advanced Library Laboratory: Build Your Own Library

[Angular Advanced Library Laboratory](https://angular-university.io/course/angular-advanced-course) — Learn Advanced Angular functionality typically used in Library Development. Advanced Components, Directives, Testing, Npm.

<img src="https://angular-academy.s3.amazonaws.com/thumbnails/advanced_angular-small-v3.png" width="400" alt="Angular Advanced Library Laboratory">

## Angular University Extra Tutorials

[Angular University Extra Tutorials](https://angular-university.io/course/angular-extra-tutorials) — Extra tutorials covering developer preview features or isolated topics.

<img src="https://d3vigmphadbn9b.cloudfront.net/course-images/large-images/angular-tutorials.jpg" width="400" alt="Angular University Extra Tutorials">

# Archived Courses

These courses are archived and replaced with newer versions, but are still accessible to subscribers.

## NgRx In Depth (Archived)

[NgRx In Depth](https://angular-university.io/course/angular-ngrx-course) — Learn the modern NgRx Ecosystem, including Store, Effects, Router Store, NgRx Entity, Dev Tools and Schematics.

<img src="https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-ngrx-course.png" width="400" alt="NgRx In Depth">

## Serverless Angular with Firebase & AngularFire (Archived)

[Serverless Angular with Firebase](https://angular-university.io/course/firebase-course) — Full stack Development with Angular, Firestore, Firebase Storage & Hosting, Firebase Cloud Functions & AngularFire.

<img src="https://s3-us-west-1.amazonaws.com/angular-university/course-images/serverless-angular-small.png" width="400" alt="Serverless Angular with Firebase">

## RxJs and Reactive Patterns Angular Architecture Course (Archived)

[RxJs and Reactive Patterns Angular Architecture Course](https://angular-university.io/course/reactive-angular-architecture-course) — Learn the core RxJs Observable Pattern and many other Design Patterns for building Reactive Angular Applications.

<img src="https://s3-us-west-1.amazonaws.com/angular-academy/blog/images/rxjs-reactive-patterns-small.png" width="400" alt="RxJs and Reactive Patterns Angular Architecture Course">

## Angular Material Course (Archived)

[Angular Material Course](https://angular-university.io/course/angular-material-course-v1) — Jumpstart your Application with a complete set of Material Design UI Widgets.

<img src="https://s3-us-west-1.amazonaws.com/angular-university/course-images/material_design.png" width="400" alt="Angular Material Course">

## Build a Web App with Angular and Firebase (Archived)

[Build a Web App with Angular and Firebase](https://angular-university.io/course/build-an-application-with-angular2) — Put all the concepts together to build a fully running Angular application using Firebase as the database.

<img src="https://angular-academy.s3.amazonaws.com/thumbnails/angular_app-firebase-small-v2.png" width="400" alt="Build a Web App with Angular and Firebase">

## Angular NgRx Store Reactive Extensions Architecture Course (Archived)

[Angular NgRx Store Reactive Extensions Architecture Course](https://angular-university.io/course/angular2-ngrx) — Learn how to use the Angular NgRx Reactive Extensions and its Tooling to build a complete application.

<img src="https://angular-academy.s3.amazonaws.com/thumbnails/ngrx-angular.png" width="400" alt="Angular NgRx Store Architecture Course">

## Angular RxJs Jumpstart (Archived)

[Angular RxJs Jumpstart](https://angular-university.io/course/angular2-http) — Learn RxJs quickly, apply it to learn how to use the HTTP module effectively.

<img src="https://angular-academy.s3.amazonaws.com/thumbnails/angular-http-v2.png" width="400" alt="Angular RxJs Jumpstart">

## Angular Router (Archived)

[Angular Router](https://angular-university.io/course/angular2-routing) — Build Single Page Applications with Angular and its powerful Router.

<img src="https://angular-academy.s3.amazonaws.com/thumbnails/angular2-routing-small-v2.png" width="400" alt="Angular Router">

## Angular Universal Course (Archived)

[Angular Universal Course](https://angular-university.io/course/angular-universal-course-v1-archived) — Use Angular on the server too! Learn Angular Server-Side Rendering.

<img src="https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-universal-small.png" width="400" alt="Angular Universal Course">

## Angular Forms (Archived)

[Angular Forms](https://angular-university.io/course/angular2-forms) — Learn how to build validatable and user-friendly data Forms effectively.

<img src="https://angular-academy.s3.amazonaws.com/thumbnails/angular-forms-small-v2.png" width="400" alt="Angular Forms">

## The Complete Typescript Course (Archived)

[The Complete Typescript Course](https://angular-university.io/course/typescript-2-tutorial) — Complete Guide to Typescript From Scratch: Learn the language in-depth and use it to build a Node REST API.

<img src="https://angular-academy.s3.amazonaws.com/thumbnails/typescript-2-small.png" width="400" alt="The Complete Typescript Course">

