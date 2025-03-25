import express from 'express'
import router from './router.js'

const app = express();
const PORT = 3000

app.use(router);

app.listen(PORT, function(err) {
    if (err) console.log(err);
    console.log("Server is listening on PORT", PORT);
})
