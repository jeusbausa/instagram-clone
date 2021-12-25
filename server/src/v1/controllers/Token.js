const jwt = require('jsonwebtoken')
var rp = require('request-promise')

const setAccessToken = async (req, res) => {
	const { token } = req.body

	try {
		const response = await rp('https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com')
		const publicKeys = JSON.parse(response)
		const tokenHeader64 = token.split('.')[0]
		const header = JSON.parse(Buffer.from(tokenHeader64, 'base64').toString('ascii'))
		const decoded = jwt.verify(token, publicKeys[header.kid], { algorithms: ['RS256'] })

		return res
			.cookie('fb_token', token, { maxAge: decoded.exp, httpOnly: true, sameSite: 'strict' })
			.status(200)
			.send({ response: { code: 200, message: decoded } })
	} catch (error) {
		return res.status(400).send({ error: { code: 400, message: error.message } })
	}
}

module.exports = {
	setAccessToken,
}
