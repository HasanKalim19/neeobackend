const DefaultResponse = (res) => ({ message = 'success', statusCode = 200, response = {} }) => {
	return res.status(200).json({
		message,
		statusCode,
		response
	});
};

const ErrorResponse = (res) => ({ message = 'something went wrong', statusCode = 400, response = {} }) => {
	return res.status(200).json({
		message,
		statusCode,
		response
	});
};

module.exports = {
	ErrorResponse,
	DefaultResponse
};
