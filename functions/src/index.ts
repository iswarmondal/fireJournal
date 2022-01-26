import * as functions from "firebase-functions";
import {addEntry} from "./entryController";
import * as express from "express";

const app = express();

app.post("/entries", addEntry);
app.get("/", (req, res) => {
  res.status(200).send("Hello there");
});

exports.app = functions.https.onRequest(app);
