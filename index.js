const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mailRouter = require("./routes/mail.route")
const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');

require('dotenv').config();

const PORT = process.env.PORT || 3000;
const DB = process.env.DB;

// database coonnection setup
mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err));


app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Server Running' });
});
app.use('/', mailRouter);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})