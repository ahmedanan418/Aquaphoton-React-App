const express = require('express');
const app = express();
const cors = require('cors');
const multer = require('multer');
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const corsOrigin = 'http://localhost:3000';
app.use(cors({
  origin: [corsOrigin],
  methods: ['GET', 'POST'],
  credentials: true
}));

const imageUploadPath = 'C:/Users/Extra/React/thirdone/thirdone/Uploaded';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, imageUploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, `${file.fieldname}_dateVal_${Date.now()}_${file.originalname}`);
  }
});

const imageUpload = multer({ storage: storage });

app.post('/upload-frame', imageUpload.single('frame'), (req, res) => {
  console.log('POST request received to /upload-frame.');
  console.log('Uploaded file: ', req.file);

  if (req.file) {
    res.status(200).json({
      message: 'Frame uploaded successfully',
      filename: req.file.filename
    });
  } else {
    res.status(400).json({
      error: 'No file uploaded'
    });
  }
});

const port = 4040;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



