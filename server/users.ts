import { Router } from "express"


const app = Router();

app
  .get("/", (req, res) => {
    res.send([
        {id: 1, name: "Deven", email: "some@example.com"},
        {id: 2, name: "Sunjay", email: "sunjay@example.com"},
        {id: 3, name: "Satyarth", email: "satyarth@example.com"}
    ])
  })
  .get("/:id", (req, res) => {
    const{id} = req.params;
    res.send({id, name: "Deven", email: "some@example.com"});
  })
  .post("/", (req, res) => {
    const {name, email} = req.body;
    res.send({id: 4, name, email});
  })
  .patch("/:id", (req, res) => {
    const {id} = req.params;
    const {name, email} = req.body;
    res.send({id, name, email});
  })
  .delete("/:id", (req, res) => {
    const {id} = req.params;
    res.send({id});
  });

   

export default app;