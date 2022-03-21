import 'dotenv/config';

const WEATHER_KEY = process.env.WEATHER_KEY;

export async function post({ request }) {

	const body = await request.json();

	if (!body?.cityName) {
		return {
			body: {
				message: 'nobody'
			}
		};
	}

    const {cityName} = body;

	const res = await fetch(
		`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${WEATHER_KEY}&units=metric`
	);
	const res2 = await fetch(
		`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${WEATHER_KEY}&units=metric`
	);

	const weather = await res.json();
	const forecast = await res2.json();

	/* console.log('weather', weather);
	console.log('forecast', forecast); */

	console.log('weather', weather.main)

	const item = forecast.list[1];
	console.log('main', item.main)
	console.log('weather', item.weather)
	console.log('sys', item.sys)

    // return error if city not found , i.e. meteo.cod !== 200

	return {
		body: {
			message: 'ok',
			weather,
            forecast
		}
	};
}
