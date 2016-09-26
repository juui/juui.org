let Mongoose = require("mongoose");

const Schema = Mongoose.Schema;

const subTopicSchema = new Schema({
  label: {
    type: String, required: true, trim: true
  },
  'juuiId': {
    type: String, required: true, trim: true
  },
  avatar: {
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


function createFunctions() {

  const Topic = Mongoose.model('topic', topicSchema);

  const functionsTopic = new Topic(
    {
      "label": "Funciones",
      "juuiId": "functions",
      "subTopics": [
        {
          "label": "Introducción",
          "juuiId": "introduction",
          "avatar": "https://res.cloudinary.com/duspwfh58/image/upload/v1474663309/juui/avatars/default.svg"
        },
        {
          "label": "Conceptos generales",
          "juuiId": "generalConcepts",
          "avatar": "https://res.cloudinary.com/duspwfh58/image/upload/v1474663309/juui/avatars/default.svg"
        },
        {
          "label": "Cálculo de imágenes",
          "juuiId": "imagesCalculation",
          "avatar": "https://res.cloudinary.com/duspwfh58/image/upload/v1474663309/juui/avatars/default.svg"
        },
        {
          "label": "Cálculo de preimágenes",
          "juuiId": "preImagesCalculation",
          "avatar": "https://res.cloudinary.com/duspwfh58/image/upload/v1474663309/juui/avatars/default.svg"
        },
        {
          "label": "Ámbito o rango",
          "juuiId": "range",
          "avatar": "https://res.cloudinary.com/duspwfh58/image/upload/v1474663309/juui/avatars/default.svg"
        },
        {
          "label": "Máximo dominio real",
          "juuiId": "maxRealDomain",
          "avatar": "https://res.cloudinary.com/duspwfh58/image/upload/v1474663309/juui/avatars/default.svg"
        },
        {
          "label": "Clasificación de funciones",
          "juuiId": "classification",
          "avatar": "https://res.cloudinary.com/duspwfh58/image/upload/v1474663309/juui/avatars/default.svg"
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

}

function createGeometry() {

  const Topic = Mongoose.model('topic', topicSchema);

  const geometryTopic = new Topic(
    {
      "label": "Geometría",
      "juuiId": "geometry",
      "subTopics": [
        {
          "label": "Geometría Analítica I: Circulo y circunferencia",
          "juuiId": "analyticGeometryI",
          "avatar": "https://res.cloudinary.com/duspwfh58/image/upload/v1474663309/juui/avatars/default.svg"
        },
        {
          "label": "Geometría Analítica II",
          "juuiId": "analyticGeometryII",
          "avatar": "https://res.cloudinary.com/duspwfh58/image/upload/v1474663309/juui/avatars/default.svg"
        },
        {
          "label": "Geometría Analítica III: Rectas secantes, tangentes y exteriores",
          "juuiId": "analyticGeometryIII",
          "avatar": "https://res.cloudinary.com/duspwfh58/image/upload/v1474663309/juui/avatars/default.svg"
        },
        {
          "label": "Polígonos regulares",
          "juuiId": "regularPolygons",
          "avatar": "https://res.cloudinary.com/duspwfh58/image/upload/v1474663309/juui/avatars/default.svg"
        },
        {
          "label": "Simetría",
          "juuiId": "symmetry",
          "avatar": "https://res.cloudinary.com/duspwfh58/image/upload/v1474663309/juui/avatars/default.svg"
        },
        {
          "label": "Esfera",
          "juuiId": "sphere",
          "avatar": "https://res.cloudinary.com/duspwfh58/image/upload/v1474663309/juui/avatars/default.svg"
        },
        {
          "label": "Cilindro",
          "juuiId": "cylinder",
          "avatar": "https://res.cloudinary.com/duspwfh58/image/upload/v1474663309/juui/avatars/default.svg"
        },
        {
          "label": "Cono",
          "juuiId": "cone",
          "avatar": "https://res.cloudinary.com/duspwfh58/image/upload/v1474663309/juui/avatars/default.svg"
        },
        {
          "label": "Parábola",
          "juuiId": "parabola",
          "avatar": "https://res.cloudinary.com/duspwfh58/image/upload/v1474663309/juui/avatars/default.svg"
        },
        {
          "label": "Elipse",
          "juuiId": "ellipse",
          "avatar": "https://res.cloudinary.com/duspwfh58/image/upload/v1474663309/juui/avatars/default.svg"
        },
        {
          "label": "Hipérbola",
          "juuiId": "hyperbola",
          "avatar": "https://res.cloudinary.com/duspwfh58/image/upload/v1474663309/juui/avatars/default.svg"
        }
      ]
    }
  );

  let documentName = 'geometryTopic';

  geometryTopic.save(function (error) {
    console.log(`Your ${documentName} has been saved!`);
    if (error) {
      console.error(error);
    }
  });

}

module.exports = {
  createFunctions,
  createGeometry
};