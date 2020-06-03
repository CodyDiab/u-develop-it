const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./db/database');
const apiRoutes = require('./routes/apiRoutes');
// const inputCheck = require('./utils/inputCheck');
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// add /api to routes
app.use('/api', apiRoutes)











//default response for any other request not found catch all
app.use((req,res) => {
    res.status(404).end();
});






//start serever after DB connect
db.on('open', ()=> {
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});