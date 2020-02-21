const path = require('path')

exports.respondSiteJPGImages = /**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
 function respondSiteJPGImages(req, res) {
  const options = {
    root: path.join('public', 'assets', 'images', 'portfolio', 'site'),
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }

  const fileName = req.params.name

  res.sendFile(`${fileName}.jpg`, options, (err) => {
    if (err) {
      console.log(err)
      return
    }
    console.log('Sent:', fileName)
  })
};

exports.respondGIFImage = /**
* @param {import('express').Request} req
* @param {import('express').Response} res
*/
function respondGIFImage(req, res) {
  const options = {
    root: path.join('public', 'assets', 'images', 'portfolio', 'banner'),
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

exports.respondVideoMP4 = /**
* @param {import('express').Request} req
* @param {import('express').Response} res
*/
function respondVideoMP4(req, res) {
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

