const multer = require("multer");

const uploadMedia = (photo) => {
  const multerStorage = multer.memoryStorage();
  return multer({ storage: multerStorage }).single(photo);
};

module.exports = {
  uploadMedia,
};
