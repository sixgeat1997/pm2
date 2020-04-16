let express = require('express')
let app = express()

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    console.log('hello world');
    res.send('hello world')
    // res.render('fruit', { fruits: ['banana', 'apple'], foo: 'bar' })
})

app.get('/crash', (req, res) => {
    console.log("crash");
    res.send('crash')
    process.exit(1)
})

app.listen(process.env.PORT, () => console.log("server is running", process.env.PORT))