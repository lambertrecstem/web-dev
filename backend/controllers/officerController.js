const Officer = require("../model/Officer"); // officer is basically a different type of user...

const getOfficers = async (req, res) => {
  try {
    const officers = await Officer.find({});
    return res.json(officers);
  } catch (err) {
    res.status(500).send("Trouble fetching the publications...");
  }
};

const editOfficer = async (req, res) => {
  try {
    const officerID = req.params.id;
    const updatedOfficer = req.body;
    const saveOfficer = await Officer.updateOne(
      { _id: officerID },
      updatedOfficer
    );

    res.send(saveOfficer);
  } catch (err) {
    res.send(err);
  }
};

const deleteOfficer = async (req, res) => {
  try {
    const officerID = req.params.id;
    const saveOfficer = await Officer.deleteOne({ _id: officerID });
    res.send(saveOfficer);
  } catch (err) {
    res.send(err);
  }
};

const postOfficer = async (req, res) => {
  // console.log(req.body);
  const newOfficer = new Officer(req.body);
  const saveOfficer = newOfficer.save();
  if (saveOfficer) res.send("Officer saved!");
  res.end();
};

module.exports = {
  getOfficers,
  postOfficer,
  editOfficer,
  deleteOfficer,
};
