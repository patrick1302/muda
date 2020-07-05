const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/muda", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
