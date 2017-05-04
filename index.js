module.exports = {
  router: (router) => {
    router.get('/_health', (req, res) => {
      res.sendStatus(204);
    });
  }
}
