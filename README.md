<div align="center">
<h1>ts-dev-logger</h1>

[![Package Version][package-image]][package-url]
<img src="https://img.shields.io/badge/platform-node-lightgrey.svg?style=flat" alt="platform">
<img src="https://img.shields.io/badge/license-Apache2-blue.svg?style=flat" alt="Apache 2">

[package-image]: https://badge.fury.io/js/typescript-template.svg
[package-url]: https://www.npmjs.com/package/ts-dev-logger

<p>A development tool that allows you to log data to the console and to the file.</p>
</br>
<p>
    <a href="#installation"><strong>Installation</strong></a> ·
    <a href="#logger---params"><strong>Params</strong></a> ·
    <a href="#quick-guide---console"><strong>Quick Guide</strong></a> ·
    <a href="#license"><strong>License</strong></a>
 </p>
</div>

## Installation
```bash
npm i ts-dev-logger
```
or

```bash
yarn add ts-dev-logger
```
---

## Logger - params

---

## Quick Guide - console

#### -- Basic Usage --
```js
export const logger = new Logger({dateType: 'Time'})
const consoleLogger = new ConsoleLogger()

logger.constructLogger(consoleLogger)

logger.log({message: 'Lorem Ipsum is simply dummy text', type: 'ERROR'})
logger.log({message: 'Lorem Ipsum is simply dummy text', type: 'WARNING'})
logger.log({message: 'Lorem Ipsum is simply dummy text', type: 'INFO'})
logger.log({message: 'Lorem Ipsum is simply dummy text', type: 'NOTICE'})
logger.log({message: 'Lorem Ipsum is simply dummy text', type: 'OK'})
logger.log({message: 'Lorem Ipsum is simply dummy text', type: 'CRIT'})
```
#### -- Result --
![Alt text](./images/log_console.png)

---

## Quick Guide - file

#### -- Basic Usage --
```js
export const logger = new Logger({dateType: 'Time'})
const fileLogger = new FileLogger()

logger.constructLogger(fileLogger)

logger.log({message: 'Lorem Ipsum is simply dummy text', type: 'ERROR'})
logger.log({message: 'Lorem Ipsum is simply dummy text', type: 'WARNING'})
logger.log({message: 'Lorem Ipsum is simply dummy text', type: 'INFO'})
logger.log({message: 'Lorem Ipsum is simply dummy text', type: 'NOTICE'})
logger.log({message: 'Lorem Ipsum is simply dummy text', type: 'OK'})
logger.log({message: 'Lorem Ipsum is simply dummy text', type: 'CRIT'})
```
#### -- Result --
![Alt text](./images/log_file.png)

---

## License

ts-dev-logger is licensed under the Apache License, Version 2.0.
