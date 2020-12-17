const Task = require("../model/Task");

module.exports = {
  async index(req, res) {
    try {
      const tasks = await Task.find({});

      return res.json(tasks);
    } catch (error) {
      return res.status(400).send({ error: `Erro ao carregar os tasks ${error}` });
    }
  },

  async show(req, res) {
    try {
      const task = await Task.findById(req.params.id);

      return res.json(task);
    } catch (error) {
      return res.status(400).send({ error: `Erro ao carregar os tasks ${error}` });
    }
  },

  async store(req, res) {
    try {
      const task = await Task.create(req.body);

      return res.json(task);
    } catch (error) {
      return res.status(400).send({ error: `Erro ao carregar os tasks ${error}` });
    }
  },

  async update(req, res) {
    try {
      const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });

      return res.json(task);
    } catch (error) {
      return res.status(400).send({ error: `Erro ao carregar os tasks ${error}` });
    }
  },

  async destroy(req, res) {
    try {
      await Task.findByIdAndDelete(req.params.id);

      return res.send({ alert: "Apagado com sucesso" });
    } catch (error) {
      return res.status(400).send({ error: `Erro ao carregar os tasks ${error}` });
    }
  },
};
