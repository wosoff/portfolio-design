const fs = require('fs');
const util = require('util');
const { TEMPLATE } = require('../../var/PATH');

exports.respondIndexPost = function respondIndexPost(req, res) {
  util.promisify(fs.readFile)(
    TEMPLATE.INDEX,
    // It must use option utf8. if it must not, browser downs page.
    { encoding: 'utf8' },
  )
    .then((template) => {
    // It must respond by res.send(), not res.end()
    // If res.end() respond instead of res.send(),
    // Character except english, such as korean, japanese will be broken!
      res.send(template);
      res.end();
    }).catch((err) => {
      console.log(err);
    });
};
