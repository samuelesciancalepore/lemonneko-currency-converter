# @lemonneko/currency-converter
A simple api to convert source currency to target currency.

Exchange rate data is from: [prebid](https://github.com/prebid/currency-file)

## Simple use
### Node.js
install by npm
```
npm install @lemonneko/currency-converter
```
or yarn
```
yarn add @lemonneko/currency-converter
```
then, in your javascript file:

```js
import {converter} from "@lemonneko/currency-converter";

await converter.convert({
    to: "USD",
    from: "CNY",
    amont: "1.234"
}).then((ressult) => {
    // get the result
}).catch((err) => {
    // catch the error
})
```

## API Reference
### Functions
```
converter.convert(data: RequestData): Promise<ResultData>
```
### Interfaces
```js
interface ResultData {
    result: string;
    to: string;
    from: string;
    updated: string;
}
interface RequestData {
    amount: string;
    to: string;
    from: string;
}
```
### Errors may produce
This error will produce when currency is not support.

Error message like this:
```
Error: unsupported currency: 
```
This error will produce when the network slow or not connect.

Error message like this:
```
Error: connection timeout
```
#### Other error
Please make an issue.

## Build && Test
build
```
yarn run build
```
test
```
yarn run test
```
