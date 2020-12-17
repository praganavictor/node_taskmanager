const routes = require("express").Router();
const auth = require("./middlewares/auth");

const taskController = require("./controllers/taskController");
const authController = require("./controllers/authController");

routes.post("/register", authController.register);
routes.post("/authenticate", authController.authenticate);

routes.get("/tasks", auth, taskController.index);
routes.get("/tasks/:id", auth, taskController.show);
routes.post("/tasks", auth, taskController.store);
routes.put("/tasks/:id", auth, taskController.update);
routes.delete("/tasks/:id", auth, taskController.destroy);

module.exports = routes;
