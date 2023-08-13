const KEY = '261e625a2eed4d4da87145325230403';

const fetchData = async (city) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`

    const fetchResponse = await fetch(url);
    const data = await fetchResponse.json();
    return data;
}

export default fetchData;