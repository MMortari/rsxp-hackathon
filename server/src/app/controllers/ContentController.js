import Content from '../models/Content';
import Subject from '../models/Subject';

class ContentController {
  async list(req, res) {
    const id = req.params.subjectId;

    const hasSubject = await Subject.findByPk(id);

    if (!hasSubject) return res.json({ msg: 'Matéria não existe' });

    const response = await Content.findAll({
      where: { subject_id: id },
    });

    return res.json(response);
  }
}

export default new ContentController();
