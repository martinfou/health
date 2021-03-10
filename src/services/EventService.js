import axios from 'axios'

const apiClient = axios.create({
  //baseURL: 'https://account.withings.com/oauth2_user/authorize2?response_type=code&client_id=b693ecf60ad52bd0995becc552a1b22e74c9740cab9d215666543db7529bae06&state=1&scope=user.info,user.metrics,user.activity&redirect_uri=http://localhost:8081/oauth&mode=demo',
  baseURL: '/oauth2_user/authorize2?response_type=code&client_id=b693ecf60ad52bd0995becc552a1b22e74c9740cab9d215666543db7529bae06&state=1&scope=user.info,user.metrics,user.activity&redirect_uri=http://localhost:8081/oauth&mode=demo',
})

export default {
  getEvents() {
    return apiClient.get('')
  }
}