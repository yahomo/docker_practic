const express = require('express');
const app = express();

const router = express.Router();

//Settingd
app.set('port', process.env.PORT || 3000);

//Listening
app.listen(https://acoustic-treatment-production.up.railway.app);
console.log('server on port', 3000);


//routes
const users = [
    {
        name: 'json',
        age: 27
    },
    {
      name:  'Carlos',
      age: 35
    },
    {
        name: 'pedro',
        age: 25
    }
]

const usersRoute = router.get([users], (req, res) => {
    res.json(users)
});

app.use(express.json());
app.use('/https://acoustic-treatment-production.up.railway.app/', usersRoute);

