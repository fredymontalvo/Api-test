import express from "express";
import {get, post,del,put} from "./data/controllers/users.controllers.js";

const app = express();

app.get("/users", get);
app.post("/users", post);
app.put("/users", put);
app.delete("/users", del);

app.all("*", (req, res) => {
  res.status(404).json({
    code: 404,
    answer: "Page nicht gefunden",
  });
});

app.listen(3030, () => {
  console.log("Server auf Port 3030 gestartet."); //Server starten
});
