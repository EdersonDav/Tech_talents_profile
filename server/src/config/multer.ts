import multer from 'multer'
import path from 'path'
import crypto from 'crypto'

export default {
  dest: path.resolve(__dirname, "..", "..", 'uploads'),
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, "..", "..", "uploads"));
    },
    filename: function (req, file, cb) {
      crypto.randomBytes(16, (err, hash) => {
        let fileName = ""
        if (!err) {
          fileName = `${hash.toString('hex')}-${file.originalname}`
          cb(null, fileName)
        } else {
          cb(err, fileName)
        }
      })
    }
  }),
  limits: {
    fileSize: 2 * 1024 * 1024
  },
}