import * as faceapi from 'face-api.js';

export default async function masify() {
    await Promise.all([
        faceapi.loadMtcnnModel('/meme-me/models'),
        faceapi.loadFaceLandmarkModel('/meme-me/models'),
        faceapi.loadFaceRecognitionModel('/meme-me/models'),
        faceapi.loadFaceExpressionModel('/meme-me/models'), 
        faceapi.loadSsdMobilenetv1Model('/meme-me/models'), 
        faceapi.loadTinyFaceDetectorModel('/meme-me/models'),
        faceapi.loadFaceLandmarkTinyModel('/meme-me/models'),
 
    ]).then((err) => {
        console.log('Loaded');
    })
        .catch((err) => {
        console.error(err);
    });

    const items = document.querySelectorAll('.masify');
}
