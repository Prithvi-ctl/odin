async function weather(location){
    try{
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=S4UPCPLSA6PSJZGWA74SG9JTL`);
   const data = await response.json();
   console.log(data);
    return {         location: data.address,
            timezone: data.timezone,
            description: data.description,
            temp: data.currentConditions.temp,
            humidity: data.currentConditions.humidity,
            windspeed: data.currentConditions.windspeed,
            icon: data.currentConditions.icon
    };
    }catch(error){
        console.error('Error fetching weather data:', error);
        return error;
        
    }
}

export default weather;     

