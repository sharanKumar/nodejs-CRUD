const tutorialModel = require('../model/tutorials.model.js')


// Create and Save a new Tutorial
exports.create = async (req, res) => {
    if(!req.body.title){
        res.status(400).send({message : 'content cannot be empty'})
        return;
    }

    const tutorial = new tutorialModel({
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    })

    await tutorialModel
            .create(tutorial)
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.status(500).send({
                    'message': err.message | "Some error occurred while creating the Tutorial."
                })
            })

  
};

// Retrieve all Tutorials from the database.
exports.findAll = async (req, res) => {      
      await tutorialModel
            .find({})
            .then(data => {
                res.send(data)
             })
            .catch(err => {
                res.status(500).send({
                    'message': err.message | "Some error occurred while findinf all Tutorial."
                })
             })
};

// Find a single Tutorial with an id
exports.findOne = async (req, res) => {
    const id = req.params.id

    await tutorialModel
           .findById(id)
           .then(data => {
            if(!data){
                res.status(404).send('Not Found tutorial with id ' + id)
            }else{
                res.send(data)
            }            
            })
            .catch(err => {
               res.status(500).send({
                message: err.message | 'Not Found tutorial with id ' + id
               })
            })
  
};

// Update a Tutorial by the id in the request
exports.update = async (req, res) => {
    const id = req.params.id
    await tutorialModel
           .findByIdAndUpdate(id,req.body,{ useFindAndModify: false })
           .then(data => {
            if (!data) {
                res.status(404).send({
                  message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
                });
              } else res.send({ message: "Tutorial was updated successfully." });
           })
           .catch(err => {
            res.status(500).send({
              message: err.message | "Error updating Tutorial with id=" + id
            });
        });
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = async (req, res) => {
    const id = req.params.id
    await tutorialModel
           .findByIdAndDelete(id)
           .then(data => {
            if (!data) {
              res.status(404).send({
                message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
              });
            } else {
              res.send({
                message: "Tutorial was deleted successfully!"
              });
            }
          })
            .catch(err => {
                res.status(500).send({
                  message: err.message | "Could not delete Tutorial with id=" + id
                });
              })
};

// Delete all Tutorials from the database.
exports.deleteAll = async (req, res) => {
    await tutorialModel.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Tutorials were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};

// Find all published Tutorials
exports.findAllPublished = async (req, res) => {
    await tutorialModel.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
