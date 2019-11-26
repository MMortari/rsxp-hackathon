import Subject from '../models/Subject';

class SubjectController {
  async list(req, res) {
    const response = await Subject.findAll();

    return res.json(response);
  }

  async listOne(req, res) {
    const response = await Subject.findByPk(req.params.id);

    return res.json(response);
  }
}

export default new SubjectController();
