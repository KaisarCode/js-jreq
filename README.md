# JSON Request
[browser] JSON HTTP Requests.

### Install
```
npm install kc-jreq
```

### Use
```js
var data = { a: 1, b: 2 };
jreq('POST', 'https://mypage.com', data, function(res, status){
    console.log(res);
    console.log(status);
});
```
