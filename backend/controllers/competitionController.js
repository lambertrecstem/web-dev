const Competition = require("../model/Competition");

const getCompetitions = async (req, res) => {
  try {
    const competitions = await Competition.find({});
    return res.json(competitions);
  } catch (err) {
    res.status(500).send("Trouble fetching the competitions...");
  }
};

const editCompetitions = async (req, res) => {
  try {
    const competitionID = req.params.id;
    const updatedCompetition = req.body;
    const saveCompetition = await Competition.updateOne(
      { _id: competitionID },
      updatedCompetition
    );

    res.send(saveCompetition);
  } catch (err) {
    res.send(err);
  }
};

const deleteCompetitions = async (req, res) => {
  try {
    const compeitionID = req.params.id;
    const saveCompetition = await Competition.deleteOne({ _id: compeitionID });
    res.send(saveCompetition);
  } catch (err) {
    res.send(err);
  }
};

const postCompetitions = async (req, res) => {
  const newCompetition = new Competition(req.body);
  const saveCompetition = newCompetition.save();
  if (saveCompetition) res.send("Competition saved!");
  res.end();
};

module.exports = {
  getCompetitions,
  postCompetitions,
  editCompetitions,
  deleteCompetitions,
};
