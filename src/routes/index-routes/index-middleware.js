const splitQuery = require('../../core/splitQuery');

exports.respondIndexPost = function respondIndexPost(req, res) {
  req.on('data', (data) => {
    const [langKey, langValue] = splitQuery(data);

    console.log(langKey, langValue);
    res.redirect('/home');
  });
};
