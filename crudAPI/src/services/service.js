module.exports = class Service {
    constructor(model) {
        this.model = model
        this.getAll = this.getAll.bind(this)
        this.create = this.create.bind(this)
        this.delete = this.delete.bind(this)
    }

    async getAll(_, res) {
        try {
            const data = await this.model.findAll()
            if (!data || data.length === 0) return res.status(404).send({ error: "No Data Found" })
            res.send(data)
        } catch (e) {
            res.sendStatus(500)
        }
    }
    async create(req, res) {
        try {
            const data = await this.model.create(req.body)
            if (!data) res.status(422).send({ error: "Data validation failed." })
            res.send(data)
        } catch (e) {
            res.send(e)
        }
    }

    async delete(req, res) {
        const id = req.query.id
        try {
            const deletedData = await this.model.destroy({
                where: {
                    id,
                },
            })

            if (!deletedData) return res.send({ error: "Data not found" })
            res.send({ message: "Data deleted" }, deletedData)
        } catch (e) {
            res.sendStatus(500)
        }
    }
}
