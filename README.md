# ts-dev-logger

[![Package Version][package-image]][package-url]
<img src="https://img.shields.io/badge/platform-node-lightgrey.svg?style=flat" alt="platform">
<img src="https://img.shields.io/badge/license-Apache2-blue.svg?style=flat" alt="Apache 2">

[package-image]: https://badge.fury.io/js/typescript-template.svg
[package-url]: https://www.npmjs.com/package/ts-dev-logger

## Installation
```bash
npm i ts-dev-logger
```
or

```bash
yarn add ts-dev-logger
```

---

### Quick Guide

#### Basic Usage
```js
export const logger = new Logger({dateType: 'UTCDate'})
const fileLogger = new FileLogger()
const consoleLogger = new ConsoleLogger()

logger.constructLogger(fileLogger)
logger.constructLogger(consoleLogger)

logger.log({message: 'Lorem Ipsum is simply dummy text', type: 'ERROR'})
logger.log({message: 'Lorem Ipsum is simply dummy text', type: 'WARNING'})
logger.log({message: 'Lorem Ipsum is simply dummy text', type: 'INFO'})
logger.log({message: 'Lorem Ipsum is simply dummy text', type: 'NOTICE'})
logger.log({message: 'Lorem Ipsum is simply dummy text', type: 'OK'})
logger.log({message: 'Lorem Ipsum is simply dummy text', type: 'CRIT'})
```
