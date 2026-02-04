import { useEffect, useState } from 'react'
import { Cloud, Sun, CloudRain, CloudSnow, Wind, Droplets, MapPin } from 'lucide-react'

interface WeatherData {
  temp: number
  condition: string
  humidity: number
  windSpeed: number
  city: string
  icon: string
}

export default function Weather() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const position = await new Promise<GeolocationPosition>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, {
            timeout: 10000,
            enableHighAccuracy: false,
          })
        })

        const { latitude, longitude } = position.coords

        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=auto`
        )

        const data = await response.json()

        let cityName = 'Local'
        try {
          const geoResponse = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          )
          const geoData = await geoResponse.json()
          cityName = geoData.city || geoData.locality || 'Local'
        } catch {
          // ignore
        }

        const weatherCode = data.current.weather_code
        const weatherInfo = getWeatherInfo(weatherCode)

        setWeather({
          temp: Math.round(data.current.temperature_2m),
          condition: weatherInfo.condition,
          humidity: data.current.relative_humidity_2m,
          windSpeed: data.current.wind_speed_10m,
          city: cityName,
          icon: weatherInfo.icon,
        })
      } catch {
        fetchDefaultWeather()
      } finally {
        setLoading(false)
      }
    }

    const fetchDefaultWeather = async () => {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=39.9042&longitude=116.4074&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=auto`
        )
        const data = await response.json()
        const weatherCode = data.current.weather_code
        const weatherInfo = getWeatherInfo(weatherCode)

        setWeather({
          temp: Math.round(data.current.temperature_2m),
          condition: weatherInfo.condition,
          humidity: data.current.relative_humidity_2m,
          windSpeed: data.current.wind_speed_10m,
          city: 'Beijing',
          icon: weatherInfo.icon,
        })
      } catch {
        // ignore
      }
    }

    fetchWeather()
  }, [])

  const getWeatherInfo = (code: number): { condition: string; icon: string } => {
    if (code === 0) return { condition: 'Clear', icon: 'sun' }
    if (code >= 1 && code <= 3) return { condition: 'Cloudy', icon: 'cloud' }
    if (code >= 45 && code <= 48) return { condition: 'Fog', icon: 'cloud' }
    if (code >= 51 && code <= 67) return { condition: 'Rain', icon: 'rain' }
    if (code >= 71 && code <= 77) return { condition: 'Snow', icon: 'snow' }
    if (code >= 80 && code <= 82) return { condition: 'Showers', icon: 'rain' }
    if (code >= 85 && code <= 86) return { condition: 'Snow', icon: 'snow' }
    if (code >= 95 && code <= 99) return { condition: 'Thunderstorm', icon: 'rain' }
    return { condition: 'Cloudy', icon: 'cloud' }
  }

  const getWeatherIcon = (iconType: string) => {
    const iconClass = "w-4 h-4"
    switch (iconType) {
      case 'sun':
        return <Sun className={`${iconClass} text-yellow-500`} />
      case 'rain':
        return <CloudRain className={`${iconClass} text-blue-500`} />
      case 'snow':
        return <CloudSnow className={`${iconClass} text-cyan-500`} />
      default:
        return <Cloud className={`${iconClass} text-gray-500`} />
    }
  }

  return (
    <div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-xl border-b border-white/60 dark:border-slate-700/60 sticky top-16 md:top-20 z-40">
      <div className="max-w-6xl mx-auto px-6 py-2">
        {loading ? (
          <div className="flex items-center justify-end gap-2 text-sm text-slate-500">
            <div className="w-4 h-4 border-2 border-slate-300 border-t-blue-500 rounded-full animate-spin" />
            Loading weather...
          </div>
        ) : weather ? (
          <div className="flex items-center justify-end gap-4 md:gap-6 text-sm">
            <div className="flex items-center gap-1 text-slate-600 dark:text-slate-300">
              <MapPin className="w-4 h-4 text-blue-500" />
              <span className="hidden sm:inline">{weather.city}</span>
            </div>
            
            <div className="flex items-center gap-2 bg-white/60 dark:bg-slate-700/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/40 dark:border-slate-600/40">
              {getWeatherIcon(weather.icon)}
              <span className="font-semibold text-slate-900 dark:text-white">{weather.temp}°C</span>
              <span className="hidden sm:inline text-slate-600 dark:text-slate-300">{weather.condition}</span>
            </div>

            <div className="hidden md:flex items-center gap-1 text-slate-500 dark:text-slate-400">
              <Droplets className="w-4 h-4" />
              {weather.humidity}%
            </div>

            <div className="hidden md:flex items-center gap-1 text-slate-500 dark:text-slate-400">
              <Wind className="w-4 h-4" />
              {weather.windSpeed} km/h
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
