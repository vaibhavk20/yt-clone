const express = require("express");
const {
  addVideo,
  getVideo,
  addView,
  trend,
  random,
  sub,
  getByTag,
  search,
} = require("../controller/video.controller");
const { verifyToken } = require("../verifyToken");

const videoRoutes = express.Router();

videoRoutes.post("/", verifyToken, addVideo);
videoRoutes.put("/:id", verifyToken, addVideo);
videoRoutes.delete("/:id", verifyToken, addVideo);
videoRoutes.get("/find/:id", getVideo);
videoRoutes.put("/view/:id", addView);
videoRoutes.get("/trend", trend);
videoRoutes.get("/random", random);
videoRoutes.get("/sub", verifyToken, sub);
videoRoutes.get("/tags", getByTag);
videoRoutes.get("/search", search);

module.exports = {
  videoRoutes,
};
