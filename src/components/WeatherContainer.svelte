<script>
	import WeatherData from "./WeatherData.svelte";
	export let weather;
	export let forecast;

	let time = 0;

	$: forecastWeatherArray = [...forecast.list];
	$: forecastTime = forecast.list[time].dt_txt;

	let showBefore = false;
	let showAfter = true;	

	const changeTime = (direction) => {
		if (direction === 'up' && time < forecastWeatherArray.length - 1) {
			time += 1;
		} else if (direction === 'down' && time > 0) {
			time -= 1;
		};
	};
</script>

<section class="box mt-6">
	<div class="hero is-primary has-text-centered">
		<p class="title is-3 m-1">{weather.name}</p>
	</div>
	<WeatherData weather={forecastWeatherArray[time].weather[0]} main={forecastWeatherArray[time].main} forecastTime={forecastTime} wind={forecastWeatherArray[time].wind.speed} clouds={forecastWeatherArray[time].clouds.all} />
	<nav class="navpage mt-2">
		<button class="button is-primary is-light m-3" on:click={() => changeTime('down')} disabled={time <= 0}>Previous</button>
  		<button class="button is-primary is-light m-3" on:click={() => changeTime('up')} disabled={time >= forecastWeatherArray.length - 1 }>Next page</button>
	</nav>
</section>

<style>
	.navpage {
		display: flex;
		justify-content: center;
		align-items: stretch;
	}
</style>
