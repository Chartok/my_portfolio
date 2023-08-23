const mongoose = require('mongoose');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, options);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Failed to connect to MongoDB server', error);
        console.log('Attempting to connect to locally...');

        try {
            await mongoose.connect('mongodb+srv://admin:CZ7NNp8as4SpzLD@portfolio.jz7fbyj.mongodb.net/', options);
            console.log('Connected to local MongoDB');
        } catch (localError) {
            console.log('Failed to connect to locally...');
            throw localError;
        }
    }
};

connectToMongoDB();

module.exports = mongoose;