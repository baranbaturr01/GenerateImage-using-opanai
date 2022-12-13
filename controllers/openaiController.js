const { Configuration, OpenAIApi } = require('openai')
const isEmpty = require('is-empty')

const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_KEY
})
const openAi = new OpenAIApi(configuration)

module.exports = async (req, res, next) => {

    const { prompt, size } = req.body

    if (isEmpty(prompt)) {
        return res.status(400).json({ error: 'Please blank prompt' })
    }
    const imageSize = size == 'small' ? '256x256' : size == 'medium' ? '512x512' : '1024x1024'

    try {
        const response = await openAi.createImage({
            prompt: 'sahabe walking in the desert',
            n: 1,
            size: imageSize
        })

        const imageUrl = response.data.data[0].url

        return res.status(200).json({
            success: true,
            image_url: imageUrl
        })

    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
        res.status(400).json({
            success: false,
            error: 'error' + error
        })
    }

}