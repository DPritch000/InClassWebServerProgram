import express from 'express';
import userController from "./users"

const PORT = 3000;
const app = express();
const SERVER = "localhost";

app.get', (req, res) => {
  res.send('Hello World!');
})
.use("/users", userController)

.get("/suny", (req, res) => {
  res.send("The best accident of my life");
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://${SERVER}:${PORT}`)
});

console.log("Listening for requests...");
;
