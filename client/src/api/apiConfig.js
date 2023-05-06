const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '0cb137cde2a807017a0bdc050fcb3be9',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;