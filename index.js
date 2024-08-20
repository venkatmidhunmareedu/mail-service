const express = require('express');
const app = express();
const mailRouter = require("./routes/mail.route")
const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');

require('dotenv').config();

// set port
const PORT = process.env.PORT || 3000;

// configure express app
app.use(express.json());

// routes
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Server Running' });
});
app.use('/mail', mailRouter);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})