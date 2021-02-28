require('dotenv').config();
const Express = require('express');
const app = Express();
const database = require('./database');


app.use(Express.json());
app.use(require('./middleware/headers'));


const aptcontroller = require('./controller/aptcontroller')
app.use('/apt', aptcontroller)

database.sync();
// database.sync({ force: true });

app.listen(process.env.PORT, () => console.log(`the app is live on port ${process.env.PORT}`))
