<script>
    export let weather;
    export let main;
    export let forecastTime;
    export let clouds;
    export let wind;

    const roundToOne = number => {
        return (Math.round(number * 10) / 10);
    };
</script>

<article>
    <header>        
    <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt={weather.description} />
    <p class="date">{forecastTime}</p>
    <p class="subtitle is-link">{weather.description}</p>
    </header>
    <div class="main-container">
        <div class="keys">
            <p>Temperature:</p>
            <p>Feels like:</p>
            <p>Humidity:</p>
            <p>Pressure:</p>
            <p>Clouds:</p>
            <p>Wind:</p>
        </div>
        <div class="values">
            <p class="is-primary">{roundToOne(main.temp)}°C</p>
            <p>{roundToOne(main.feels_like)}°C</p>
            <p>{main.humidity}%</p>
            <p>{main.pressure}hPa</p>
            <p>{clouds}%</p>
            <p>{wind}m/s</p>
        </div>
    </div>
    

</article>

<style>
    header {
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: capitalize;
        flex-direction: column;
    }
    .main-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .date {
        font-weight: 600;
    }
    .keys, .values {
        flex: 1 1 0px;
        margin: 1rem;
    }
    .keys {
        text-align: end;
    }
    .values {
        text-align: start;
        font-weight: 600;
    }

</style>