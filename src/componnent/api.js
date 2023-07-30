const Api = async (url) => {
    // const url = 'https://youtube138.p.rapidapi.com/video/details/?id=kJQP7kiw5Fk&hl=en&gl=US';
    const options = {
        method: 'GET',
        headers: {

            'X-RapidAPI-Key': 'YOUR_API_KEY',
            'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        // console.log(result);
        return result;
    } catch (error) {
        // console.error(error);
    }
}

export default Api;