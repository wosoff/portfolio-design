const path = require('path')

exports.respondStandAloneHTML = /**
* @param {import('express').Request} req
* @param {import('express').Response} res
*/
function respondStandAloneHTML(req, res) {
  console.log(req.url)
}

exports.respondSiteJPGImages = /**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
 function respondSiteJPGImages(req, res) {
  const options = {
    root: path.join('public', 'portfolio', 'site'),
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
    root: path.join('public', 'portfolio', 'banner'),
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
    root: path.join('public', 'portfolio', 'videos'),
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

