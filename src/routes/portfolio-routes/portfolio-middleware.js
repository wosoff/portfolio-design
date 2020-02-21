const fs = require('fs');
const util = require('util');
const path = require('path')
// const { TEMPLATE } = require('../../var/PATH');

exports.respondGIFImage = function respondGIFImage(req, res) {
  const options = {
    root: path.join('public', 'assets', 'images', 'portfolio'),
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }

  const fileName = req.params.name

  res.sendFile(`${fileName}.gif`, options, (err) => {
    if (err) {
      console.log(err)
      return
    }
    console.log('Sent:', fileName)
  })
};

exports.respondVideoMP4 = function respondVideoMP4(req, res) {
  const options = {
    root: path.join('public', 'assets', 'videos'),
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }

  const fileName = req.params.name

  res.sendFile(`${fileName}.mp4`, options, (err) => {
    if (err) {
      console.log(err)
      return
    }
    console.log('Sent:', fileName)
  })
};

