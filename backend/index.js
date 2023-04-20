const express = require("express");
const { connection } = require("./utils/db");
const cors = require("cors");
const { authRoutes } = require("./routes/auth.route");
const { userRoutes } = require("./routes/user.route");
const { videoRoutes } = require("./routes/video.route");
const { commentRoutes } = require("./routes/comment.route");
const cookieParser = require("cookie-parser");
const app = express();

// config cors
app.use(cors());

// middlewares
app.use(cookieParser());
app.use(express.json());
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/videos", videoRoutes);
app.use("/api/v1/comments", commentRoutes);

//error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("connected to mongodb");
  } catch (error) {
    console.log(error);
  }
  console.log(`server at the ${process.env.PORT} port`);
});
