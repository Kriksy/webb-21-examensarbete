// const addTagToTutorial = function(tutorialId, tag) {
//   return db.Tutorial.findByIdAndUpdate(
//     tutorialId,
//     { $push: { tags: tag._id } },
//     { new: true, useFindAndModify: false }
//   );
// };

// const addTutorialToTag = function(tagId, tutorial) {
//   return db.Tag.findByIdAndUpdate(
//     tagId,
//     { $push: { tutorials: tutorial._id } },
//     { new: true, useFindAndModify: false }
//   );
// };
