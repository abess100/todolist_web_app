const multer = require('multer')
const path = require('path')


// configuration de multer 
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Public/taskImg/");
  },
  filename:  (req, file, cb) => {
    let ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

const upload = multer({
  storage: storage,
  // fileFilter: (req, file, cb) => {
  //   if (
  //     file.mimetype == "image/png" ||
  //     file.mimetype == "image/jpg" ||
  //     file.mimetype == "image/jpeg"
  //   ) {
  //     cb(null, true);
  //   } else {
  //     cb(null, false);
  //     throw new Error("Votre image doit être au format png et jpeg");
  //   }
  // },
  // limits: { fileSize: 1024 * 1024 * 5 },
});

module.exports = upload