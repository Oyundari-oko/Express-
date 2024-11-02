const express = require("express");
const app = express();
app.use(express.json());
const users = require("./mockData.json");
const userAdding = users;
app.get("/users", function (req, res) {
  res.send(users);
});

app.post("/login", (req, res) => {
  const body = req.body;
  const id = body.id;
  console.log(id);
  console.log(users);
  const usersid = users.find((user) => {
    return user.id === Number(id);
  });

  if (usersid) {
    res.send(usersid);
  } else {
    res.send({ message: "user not found" });
  }
});

app.post("/signUp", (req, res) => {
  const body = req.body;
  const userAdd = {
    id: users.length + 1,
    ...body,
  };
  console.log(userAdd);
  userAdding.push(userAdd);

  if (userAdd) {
    res.send({ message: "done" });
  } else {
    res.send({ message: "user not found" });
  }
});

app.delete("/deleteUser", (req, res) => {
  const body = req.body;
  const id = body.id;
  const deletingUser = users.find((user) => {
    return user.id === Number(id);
  });

  if (deletingUser) {
    res.send({ message: "user deleted" });
  } else {
    res.send({ message: "user is not delete" });
  }
});

app.listen(3000);
