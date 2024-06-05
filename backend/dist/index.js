import express from "express";
const app = express();
// GET - to get data
// PUT - Update data
// POST - send data
// DELETE - del 
app.get("/hello", (req, res, next) => {
    return res.send("Hello Purvika");
});
// app.post("/hello", (req, res, next) => {
//   return res.send("Hello Purvika");
// });
// sirf sedn se nai hota so use app.use
app.use(express.json());
app.post("/hello", (req, res, next) => {
    console.log(req.body.name);
    return res.send("Hello Purvika");
});
app.put("/hello", (req, res, next) => {
    console.log(req.body.name);
    return res.send("Hello Purvika");
});
// /hello is only static. If you want dynamic then:
// Created the user id which helps to dynamically get it 
app.delete("/user/:id", (req, res, next) => {
    console.log(req.params.id);
    return res.send("Hello Purvika");
});
app.listen(5000, () => console.log("Server Open"));
//# sourceMappingURL=index.js.map