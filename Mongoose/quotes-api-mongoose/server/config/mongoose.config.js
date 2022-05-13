const mongoose = require('mongoose');


// Mongoose connection
mongoose.connect('mongodb+srv://root:root@cluster0.wbljv.mongodb.net/quotesdb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));