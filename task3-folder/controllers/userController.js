class UserController {
  async getAll(req, res) {
    try {
      let data = await user.find();
      return res.status(200).json({
        message: "Success",
        data,
      });
    } catch (e) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: e.message,
      });
    }
  }
  async create(req, res) {
    try {
      let data = await user.create(req.body);
      return res.status(201).json({
        message: "Success",
        data,
      });
    } catch (e) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: e.message,
      });
    }
  }

  async update(req, res) {
    try {
      let data = await user.findOneAndUpdate(
        {
          email: req.params.email,
        },
        req.body,
        {
          new: true,
        }
      );

      return res.status(201).json({
        message: "Success",
        data,
      });
    } catch (e) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: e.message,
      });
    }
  }

  async delete(req, res) {
    try {
      await user.delete({ email: req.params.email });

      return res.status(200).json({
        message: "Success",
      });
    } catch (e) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: e.message,
      });
    }
  }
}
