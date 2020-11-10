/**
 * @author WMXPY
 * @namespace Debug_Log
 * @description Example
 * @override Mock
 */

import { Barktler, RequestDriver } from "@barktler/core";
import { createMockDriver } from "@barktler/driver-mock";

export type ExampleAPIResponse = {

    readonly hello: string;
};

export class ExampleAPI extends Barktler<any, ExampleAPIResponse> {

    protected readonly defaultDriver: RequestDriver | null = createMockDriver();

    private readonly _url: string;

    public constructor(url: string) {

        super();

        this._url = url;
        super._declareResponseDataPattern({
            type: 'map',
            map: {
                hello: {
                    type: 'string',
                },
            },
        });
    }

    public async fetch(): Promise<ExampleAPIResponse> {

        return await this._requestForData({
            url: this._url,
            method: 'GET',
        });
    }
}
