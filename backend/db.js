const mongoose = require('mongoose');

// Connexion à MongoDB
mongoose.connect('mongodb://172.18.0.2:27017,172.18.0.3:27017,172.18.0.4:27017/DBLP?replicaSet=myReplicaSet')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

module.exports = mongoose;


