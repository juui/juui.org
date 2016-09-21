let Mongoose = require("mongoose");

const Schema = Mongoose.Schema;

const subTopicSchema = new Schema({
  label: {
    type: String, required: true, trim: true
  },
  key: {
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
  key: {
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
    "key": "functions",
    "subTopics": [
      {
        "label": "Introducción",
        "key": "introduction"
      },
      {
        "label": "Conceptos generales",
        "key": "introduction"
      },
      {
        "label": "Cálculo de imágenes",
        "key": "imagesCalculation"
      },
      {
        "label": "Cálculo de preimágenes",
        "key": "preImagesCalculation"
      },
      {
        "label": "Ámbito o rango",
        "key": "range"
      },
      {
        "label": "Máximo dominio real",
        "key": "maxRealDomain"
      },
      {
        "label": "Clasificación de funciones",
        "key": "classification"
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