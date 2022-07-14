const mongoose = require("mongoose");

module.exports = async function connection() {
  try {
    const connectionParams = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    };
    await mongoose.connect(process.env.BASE_URL, connectionParams);
    console.log("connected to database.");
  } catch (error) {
    console.log(error, "could not connect to database.");
  }
};
