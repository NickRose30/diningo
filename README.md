# DININGO

## Getting Started

These are the steps to get the project up and running locally

I only have Mac instructions for now. If you're on PC good luck.

### 1. Clone the repo

Then cd into the client directory

### 2. Install dependencies

```
npm install
```
If you get an error like 

```
npm ERR! Invalid dependency type requested
```
then you will need to install the dependencies with yarn.

You can install yarn (on Mac) by running 

```
brew install yarn
```
and then install the dependencies by running the following

```
yarn install
```
```
npm install @babel/plugin-proposal-class-properties
```

### 3. Run the app

```
npm run start
```
will run the development version of the application. It can be accessed at http://localhost:8080 by default
