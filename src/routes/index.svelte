<script>
	import WeatherContainer from '../components/WeatherContainer.svelte';

	let city = '';
	let weather = {};
	let forecast = {};

	async function checkCity(cityName) {
		if (!cityName) return;

		const res = await fetch('check', {
			method: 'POST',
			body: JSON.stringify({ cityName }),
			headers: { 'content-type': 'application/json;charset=utf-8' }
		});
		const data = await res.json();

		if (data?.message === 'ok' && data?.weather && data?.forecast) {
			weather = { ...data.weather };
			forecast = { ...data.forecast };
			errorMessage = '';
			return;
		}
		weather = {};
		forecast = {};
		errorMessage = data?.message ?? "Une erreur s'est produite, merci de réessayer ultérieurement.";
		return;
	}
</script>

<header class="hero is-primary">
	<div class="hero-body">
		<h1 class="title">❄️ ZenWeather</h1>
	</div>
</header>
<main class="container">
	<section class="mt-6 box is-flex is-justify-content-center mx-1">
		<div class="field has-addons">
			<div class="control">
				<input class="input" type="text" placeholder="Ville" bind:value={city} name="city" />
			</div>
			<div class="control">
				<button class="button is-link" on:click={() => checkCity(city)} disabled={!city}
					>Météo !</button
				>
			</div>
		</div>
	</section>

	{#if weather?.name && forecast?.cod}
		<WeatherContainer {forecast} {weather} />
	{/if}

	<footer class="footer">
		<div class="content has-text-centered">
			<p>
			  <strong>ZenWeather</strong> by <a href="https://zentown.dev" target="_blank" rel="noopener">ZenTown</a>.
			</p>
			<p>Built with Svelte Kit and Bulma. Hosted on Vercel.</p>
		  </div>
	</footer>
</main>
