const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

// module.exports = router;


// Matches with "/api/books"
router.route("/")
    .post(booksController.saveBook)
    .get(booksController.findAll);

 router.route("/:id")
     .delete(booksController.deleteBook);

module.exports = router;
