# Node API With Express

## middleware

中间件是函数或函数的集合，在 Controller 之前按顺序执行，可以用于鉴权、转换数据、错误处理等。

```javascript
// 多个middleware从左至右依次执行
app.post('/', [middleWare01, middleWare02], (req, res) => {
  res.send(200)
})
```

## route

route匹配和顺序有关，相同的route(不应存在)，上面的route会获得处理权。除非上面的route没有返回结果而进行了`next()`调用，否则下面的route不会被触发。


