const express = require("express");
const app = express();

const cors = require('cors');
app.use(cors());

const router = require("./startup/routes");
router(app);


const port = process.env.PORT || 2000;

const server = app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}/`);
    }
);

module.exports = server;
