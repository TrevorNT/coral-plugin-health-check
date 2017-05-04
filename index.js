module.exports = {
  router: (router) => {
    router.get('/_health', (req, res) => {
      res.status(200).json({status: "ok", name: "coralproject-talk", version: "1.5.4"});
    });
  }
}
