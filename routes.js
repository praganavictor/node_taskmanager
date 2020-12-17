const routes = require("express").Router();
const auth = require("./middlewares/auth");

const taskController = require("./controllers/taskController");
const authController = require("./controllers/authController");

routes.get("/tasks", taskController.index);
routes.get("/tasks/:id", taskController.show);
routes.post("/tasks", auth, taskController.store);
routes.put("/tasks/:id", auth, taskController.update);
routes.delete("/tasks/:id", auth, taskController.destroy);

routes.post("/register", authController.register);
routes.post("/authenticate", authController.authenticate);

module.exports = routes;
