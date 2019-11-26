import User from '../models/User';

class TesteController {
  async list(req, res) {
    const response = await User.findAll();

    return res.json(response);
  }
}

export default new TesteController();
