# App Technical Test

You will build a tiny Yego Mobile app with React Native and Expo. The objective will be to test your technical skills and knowledge of this language and followings stack. You will be evaluated on the code structure and graphical structure of your application. The goal is to have a complete overview of your skills.

**Please, try to aim for a maximum of 3-5 hours of work. We are not looking for a perfect solution, but a good one that is scalable, and surely we will have time to discuss it.**

| Please fork this repository and give back your fork link. This repository is for read-only purpose.

Feel free to ask me questions if needed, by email at <erwan.leprado@rideyego.com>

Good luck and have fun! :)

## Introduction

This is a simple mobile application that allows you to test your mobile skills.
The goal is to create a mini Yego to display and book vehicles.

The features are simple:

- Connect to the WS backend,
- Display the vehicles according to the types or status,
- and being able to book a vehicle.

The stack we are aiming to use is:

- Bun
- React
- Socket IO
- Typescript
- Mapbox (through RNMapbox)

## Installation

```bash
bun install
```

## Usage of backend

In order to simulate the backend, you will need to run this command in another terminal.

```bash
bun run run:backend
```

## Usage of web app

In order to run the apps, you will need specific setup.
The simplest is actually Android (as quick start) but feel free to use iOS.

```bash
bunx expo prebuild --clean
bun run ios # for ios
bun run android # for android
```

## How to connect to the WS backend

The WS engine is based on Socket IO.

The backend will be simulated by a bun script that will send an initial payload and updates.
It is allowed to use the type definition of the backend directly in the frontend (exposed by TS or zod).

## Subject

Please find what we are going to review in your project :

- The app should display our scooters on a map using Mapbox, represented by points.
- The app should handle connection and update from WS to an internal state (a simple pattern is already set),
- The app should display an orange marker if the scooter status is available (feel free to find any assets you want),
- The app should NOT display a marker if the scooter status is something else than available,
- The app should be able to let the user select a scooter and display the information of the scooter,
- The app should be able to handle the booking feature (a simple pattern is already set),
- The app should let the user know if he booked a vehicle,
- The app should be able to handle the unbooking feature,

We do not provide a design to follow. Feel free to show us your skills!

## Specifications

### Mapbox API keys

API Keys are provided in the email.

