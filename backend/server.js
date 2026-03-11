require('dotenv').config()
const app = require('./src/app')
const { connectToDB } = require('./src/config/database')
const { resume, selfDescription, jobDescription } = require('./src/services/temp')
const {generateInterviewReport} = require('./src/services/ai.service')

connectToDB()
// invokeGeminiAi()
generateInterviewReport({ resume, selfDescription, jobDescription })

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})