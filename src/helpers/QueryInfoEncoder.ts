import QueryInfo from "../models/QueryInfo.ts";
import {Base64} from "js-base64";

export function EncodeQuery(query: QueryInfo) {
    return Base64.encodeURI(JSON.stringify(query))
}

export function DecodeQuery(params: string) {
    return JSON.parse(Base64.decode(params)) as QueryInfo
}