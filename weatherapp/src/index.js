import "./styles.css";
import weather from "./api.js";

function domManager(){
    const temp = document.getElementsByClassName("temperature")[0];
    const desc = document.getElementsByClassName("description")[0];
    const timezone = document.getElementsByClassName("timezone")[0];
    const windspeed = document.getElementsByClassName("windspeed")[0];

    const btn = document.getElementsByClassName("btn")[0];
    const input = document.getElementsByClassName("input")[0];
    const errorDiv = document.createElement("div");
    errorDiv.classList.add("error");
    document.body.appendChild(errorDiv);

    btn.addEventListener("click", function(){
        weather(input.value).then((data)=>{
            temp.textContent = `Temperature: ${data.temp}°C`;
            desc.textContent = `Description: ${data.description}`;
            timezone.textContent = `Timezone: ${data.timezone}`;
            windspeed.textContent = `Windspeed: ${data.windspeed} km/h`;
        }).catch((err)=>{
            console.error('Error:', err);
            errorDiv.textContent = "Error fetching weather data.";
        });
    });
}

domManager();