import axios, {AxiosError, AxiosResponse} from "axios";
import {BigNumber} from "bignumber.js"

interface ResultData {
    result: string
    to: string
    from: string
    updated: string
}

interface RequestData {
    amount: string
    to: string
    from: string
    url?: string
}

const converter = {
    async convert(data: RequestData): Promise<ResultData> {
        let axiosData: undefined | any = undefined;

        let url_get = "https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json";

        if (data.url) {
            url_get = data.url;
        }

        await axios.get(url_get)
            .then((res: AxiosResponse) => {
                if (res.data) {
                    axiosData = res.data
                } else {
                    throw new Error("response data is null.")
                }
            }).catch((err: AxiosError) => {
                throw err
            })
        if (!axiosData.conversions || !axiosData.conversions.USD) {
            throw new Error("response format error")
        }
        if (!axiosData.conversions.USD[data.from]) {
            throw new Error("unsupported currency: " + data.from)
        }
        if (!axiosData.conversions.USD[data.to]) {
            throw new Error("unsupported currency: " + data.to)
        }
        const toUSD = new BigNumber(axiosData.conversions.USD[data.from])
        const toTarget = new BigNumber(axiosData.conversions.USD[data.to])
        const amount = new BigNumber(data.amount)
        return {
            to: data.to,
            from: data.from,
            updated: axiosData.dataAsOf,
            result: amount.div(toUSD).times(toTarget).toFixed(12)
        }
    }
}


const utils = {
    async getAllSupportCurrency(url: string): Promise<Array<string>> {
        let axiosData: undefined | any = undefined;
        let url_get = "https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json";

        if (url) {
            url_get = url;
        }
        await axios.get(url_get)
            .then((res: AxiosResponse) => {
                if (res.data) {
                    axiosData = res.data
                } else {
                    throw new Error("response data is null.")
                }
            }).catch((err: AxiosError) => {
                throw err
            })
        if (!axiosData.conversions || !axiosData.conversions.USD) {
            throw new Error("response format error")
        }
        const currencyList: Array<string> = []
        for (let val in axiosData.conversions.USD) {
            currencyList.push(val)
        }
        return currencyList
    }
}

export {
    ResultData,
    RequestData,
    converter,
    utils
}
