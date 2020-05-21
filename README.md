# Node API With Express

## middleware

中间件是函数或函数的集合，在 Controller 之前按顺序执行，可以用于鉴权、转换数据、错误处理等。

```javascript
// 多个middleware从左至右依次执行
app.post('/', [middleWare01, middleWare02], (req, res) => {
  res.send(200)
})
```
