import PF_Service from '@/services/programframesservice.js'
import W_Service from '@/services/sampleweatherservice.js'
import Clock_Service from '@/services/serverclockservice.js'

export default {
    getData() {
      return PF_Service().get()
    },
    getWeatherData() {
      return W_Service().get()
    },
    getServerTime() {
      return Clock_Service().get()
    }
  }