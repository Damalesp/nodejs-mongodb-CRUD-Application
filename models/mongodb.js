const mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost:27017/CoursesDB', {useNewUrlParser: true}, (err) => {
if (!err) {
console.log('Successfully Connection with MongoDB')
}
else {
console.log('Failed to Connection with MongoDB with Error: '+ err)
}
});
 
//Connecting Node and MongoDB
require('./course.model');