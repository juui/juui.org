let Mongoose = require("mongoose");

const Schema = Mongoose.Schema;

const subTopicSchema = new Schema({
  label: {
    type: String, required: true, trim: true
  },
  'juuiId': {
    type: String, required: true, trim: true
  },
  dateCreated: {
    type: Date, required: true, default: Date.now
  },
  dateUpdated: {
    type: Date, required: true, default: Date.now
  }
});

const topicSchema = new Schema({
  label: {
    type: String, required: true, trim: true
  },
  'juuiId': {
    type: String, required: true, trim: true
  },
  subTopics: [subTopicSchema],
  dateCreated: {
    type: Date, required: true, default: Date.now
  },
  dateUpdated: {
    type: Date, required: true, default: Date.now
  }
});

const Topic = Mongoose.model('topic', topicSchema);

const functionsTopic = new Topic(
  {
    "label": "Functions",
    "juuiId": "functions",
    "subTopics": [
      {
        "label": "Introducción",
        "juuiId": "introduction"
      },
      {
        "label": "Conceptos generales",
        "juuiId": "generalConcepts"
      },
      {
        "label": "Cálculo de imágenes",
        "juuiId": "imagesCalculation"
      },
      {
        "label": "Cálculo de preimágenes",
        "juuiId": "preImagesCalculation"
      },
      {
        "label": "Ámbito o rango",
        "juuiId": "range"
      },
      {
        "label": "Máximo dominio real",
        "juuiId": "maxRealDomain"
      },
      {
        "label": "Clasificación de funciones",
        "juuiId": "classification"
      }
    ]
  }
);

let documentName = 'functionsTopic';

functionsTopic.save(function (error) {
  console.log(`Your ${documentName} has been saved!`);
  if (error) {
    console.error(error);
  }
});