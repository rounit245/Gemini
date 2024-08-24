import { GoogleGenerativeAI } from "@google/generative-ai"



console.log(r.response.text())

async function generateAnswer(question) {
    const genAi = new GoogleGenerativeAI("AIzaSyDzqS3Tf8WzQIOiiJKApd97kvPTxU1FzEA");

    const model = genAi.getGenerativeModel({
        model: "gemini-1.5-pro"
    })

    const r = await model.generateContent(question);

    return r.response.text()
}

