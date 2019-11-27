import Lesson from '../models/Lesson';
import Content from '../models/Content';

class LessonController {
  async list(req, res) {
    const id = req.params.contentId;

    const hasContent = await Content.findByPk(id);

    if (!hasContent) return res.json({ msg: 'Conteúdo não existe' });

    const response = await Lesson.findAll({
      attributes: ['id', 'name', 'content', 'content_id'],
      include: [{ association: 'answers' }],
      where: { content_id: id },
    });

    return res.json(response);
  }

  async listOne(req, res) {
    const response = await Lesson.findByPk(req.params.id, {
      include: [{ association: 'answers' }],
    });

    return res.json(response);
  }
}

export default new LessonController();
