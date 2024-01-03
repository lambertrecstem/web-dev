const Publication = require("../model/Publication");

const getPublications = async (req, res) => {
  try {
    const publications = await Publication.find({});
    return res.json(publications);
  } catch (err) {
    res.status(500).send("Trouble fetching the publications...");
  }
};

const editPublications = async (req, res) => {
  try {
    const publicationID = req.params.id;
    const updatedPublication = req.body;
    const savePublication = await Publication.updateOne(
      { _id: publicationID },
      updatedPublication
    );

    res.send(savePublication);
  } catch (err) {
    res.send(err);
  }
};

const deletePublications = async (req, res) => {
  try {
    const publicationID = req.params.id;
    const savePublication = await Publication.deleteOne({ _id: publicationID });
    res.send(savePublication);
  } catch (err) {
    res.send(err);
  }
};

const postPublications = async (req, res) => {
  const newPublication = new Publication(req.body);
  const savePublication = newPublication.save();
  if (savePublication) res.send("Publication saved!");
  res.end();
};

module.exports = {
  getPublications,
  postPublications,
  editPublications,
  deletePublications,
};
