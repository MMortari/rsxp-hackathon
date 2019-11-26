import Lesson from '../models/Lesson';
import Content from '../models/Content';

class LessonController {
  async list(req, res) {
    const response = await Lesson.findAll();

    return res.json(response);
  }

  async listOne(req, res) {
    const { id } = req.params;

    const hasContent = await Content.findByPk(id);

    if (!hasContent) return res.json({ msg: 'Conteúdo não existe' });

    const response = await Lesson.findAll({
      where: { content_id: id },
    });

    return res.json(response);
  }
}

export default new LessonController();
