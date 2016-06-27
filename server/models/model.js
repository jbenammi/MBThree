var UsersSchema = new mongoose.Schema({
	name: {type: String, required: true},
	_answers: [{type: mongoose.Schema.Types.ObjectId, ref: 'answers'}]
}, {timestamps: true});

var QuestionSchema = new mongoose.Schema({
	question: {type: String, required: true, minlength: 10},
	description: {type: String},
	_answers: [{type: mongoose.Schema.Types.ObjectId, ref: 'answers'}]
}, {timestamps: true});

var AnswerSchema = new mongoose.Schema({
	answer: {type: String, required: true, minlength: 5},
	description: {type: String},
	likes: {type: Number, default: 0},
	user: {type: String},
	_question: {type: mongoose.Schema.Types.ObjectId, ref: 'questions'}
}, {timestamps: true});

mongoose.model('users', UsersSchema);
mongoose.model('questions', QuestionSchema);
mongoose.model('answers', AnswerSchema);