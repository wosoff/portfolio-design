const fs = require('fs');
const util = require('util');
const path = require('path')
// const { TEMPLATE } = require('../../var/PATH');

exports.respondIndexPost = function respondIndexPost(req, res) {
  const options = {
    root: path.join('public', 'assets', 'images', 'portfolio'),
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }

  const fileName = req.params.name
  console.log(fileName)

  res.sendFile(`${fileName}.gif`, options, (err) => {
    if (err) {
      console.log(err)
      res.sendStatus(404)
      return
    }

    console.log('Sent:', fileName)
  })
};
