const Api = async (url) => {
    // const url = 'https://youtube138.p.rapidapi.com/video/details/?id=kJQP7kiw5Fk&hl=en&gl=US';
    const options = {
        method: 'GET',
        headers: {
            // 89fdae862amsh2dfee50e62e6d2ep1e327cjsn4f11a08b9a48
            //f0fc9f94c0msh157922b23854ec6p109ad4jsne37266475397
            //6162fb09d2msh373573371aa17e9p1b9acfjsn0871fe26b207
            // f0fc9f94c0msh157922b23854ec6p109ad4jsne37266475397
            'X-RapidAPI-Key': '9ff6d793f6msh845e2fb244133f3p185f31jsn1a3f5a3f61bb',
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