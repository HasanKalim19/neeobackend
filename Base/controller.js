const { DefaultResponse, ErrorResponse } = require('../Helpers/Response');

class Controller {
	constructor(service) {
		this.service = service;
		this.getAll = this.getAll.bind(this);
		this.insert = this.insert.bind(this);
		this.update = this.update.bind(this);
		this.delete = this.delete.bind(this);
	}

	async getAll(req, res) {
		const all = await this.model.findAll();
		return DefaultResponse(res)({ response: all });
	}

	async insert(req, res) {
		let response = await this.service.insert(req.body);
		if (response.error) return res.status(response.statusCode).send(response);
		return res.status(201).send(response);
	}

	async update(req, res) {
		const { id } = req.params;

		let response = await this.service.update(id, req.body);

		return res.status(response.statusCode).send(response);
	}

	async delete(req, res) {
		const { id } = req.params;

		let response = await this.service.delete(id);

		return res.status(response.statusCode).send(response);
	}
}

module.exports = Controller;
