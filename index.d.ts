interface ResultData {
    result: string;
    to: string;
    from: string;
    updated: string;
}
interface RequestData {
    amount: string;
    to: string;
    from: string;
    url?: string;
}
declare const converter: {
    convert(data: RequestData): Promise<ResultData>;
};
declare const utils: {
    getAllSupportCurrency(url: string): Promise<Array<string>>;
};
export { ResultData, RequestData, converter, utils };
