const { uploadMedia } = require('../helper/multer')

const initUserCreateAvatar = (req, res) => {
	uploadMedia('avatar')(req, res, async (error) => {
		console.log(req.file)
	})
}

module.exports = {
	initUserCreateAvatar,
}
