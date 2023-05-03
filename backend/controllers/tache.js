const tacheModel = require('../models/tache');

// Create and Save a new tache
exports.create = async (req, res) => {
    const { title, description,completed,catégories ,priorité,createdAt } = req.body;
    
    if (!title) {
        res.status(400).send({ message: "tache name can not be empty!" });
        return;
    }
    
    const tache = new tacheModel({
        title,
        description,
        completed,
        catégories ,
        priorité,
        createdAt

    });
    
    try {
        const savedtache = await tache.save();
        res.status(201).json({
            message:"tache created successfully!!",
            tache: savedtache
        });
    } catch(error) {
        res.status(500).json({ message: error.message || "Some error occurred while creating tache" });
    }
};

// Retrieve all categories from the database.
exports.findAll = async (req, res) => {
    try {
        const tache = await tacheModel.find();
        res.status(200).json(tache);
    } catch(error) {
        res.status(500).json({ message: error.message || "Some error occurred while retrieving tacha" });
    }
};

// Find a single tache with an id
exports.findOne = async (req, res) => {
    const id = req.params.id;
    
    try {
        const tache = await tacheModel.findById(id);
        if (tache) {
            res.status(200).json(tache);
        } else {
            res.status(404).json({ message: "tache not found" });
        }
    } catch(error) {
        res.status(500).json({ message: error.message || "Some error occurred while retrieving tache" });
    }
};

// Update a tache by the id in the request
exports.update = async (req, res) => {
    if(!req.body) {
        res.status(400).send({ message: "Data to update can not be empty!" });
        return;
    }
    
    const id = req.params.id;
    
    try {
        const updatedtache = await tacheModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false, new: true });
        if (updatedtache) {
            res.status(200).json({ message: "tache updated successfully", tache: updatedtache });
        } else {
            res.status(404).json({ message: "tache not found" });
        }
    } catch(error) {
        res.status(500).json({ message: error.message || "Some error occurred while updating tache" });
    }
};

// Delete a tache with the specified id in the request
exports.destroy = async (req, res) => {
    const id = req.params.id;
    
    try {
        const deletedtache = await tacheModel.findByIdAndRemove(id);
        if (deletedtache) {
            res.status(200).json({ message: "tache deleted successfully" });
        } else {
            res.status(404).json({ message: "tache not found" });
        }
    } catch(error) {
        res.status(500).json({ message: error.message || "Some error occurred while deleting tache" });
    }
};
// Rechercher des tache en fonction des critères spécifiés
exports.searchtache = async (req, res) => {
    const { catégories, priorité } = req.query;
    const searchCriteria = {};
    if (catégories) {
      searchCriteria.catégories = catégories;
    }
    if (priorité) {
      searchCriteria.priorité = priorité;
    }
    const tache = await tacheModel.find(searchCriteria);
    res.send(tache);
  };