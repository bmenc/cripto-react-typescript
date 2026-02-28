import { create } from 'zustand'
import axios from 'axios'

async function getCryptos() {
  const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit20&tsym=USD'
  const { data: { Data } } = await axios(url)
  console.log(Data);

}

export const useCryptoStore = create(() => ({
  fetchCryptos: () => {
    console.log('Desde FetchCryptos');
    getCryptos()
  }
}))