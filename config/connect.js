mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/test_db', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);