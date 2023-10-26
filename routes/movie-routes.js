const express = require("express");
const Movie = require("../models/movie");
const {
    getMovies,
    getMovie,
    deleteMovie,
    addMovie,
    updatMovie,
} = require("../controllers/movie-controller");

const router = express.Router();

const handleError = (res, error) => {
    res.status(500).json({ error });
};

router.get("/movies", getMovies);

router.get("/movies/:id", getMovie);

router.delete("/movies/:id", deleteMovie);

router.post("/movies", addMovie);

router.patch("/movies/:id", updatMovie);

module.exports = router;
