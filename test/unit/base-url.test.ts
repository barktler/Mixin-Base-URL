/**
 * @author WMXPY
 * @namespace Base_URL
 * @description Base URL
 * @override Unit
 */

import { IRequestConfig } from "@barktler/core";
import { expect } from "chai";
import * as Chance from "chance";
import { createBaseURLMixin } from "../../src";
import { ExampleAPI, ExampleAPIResponse } from "../mock/example";

describe('Given [createBaseURLMixin] function', (): void => {

    const chance: Chance.Chance = new Chance('base-url-base-url');

    it('should be able to modify base url', async (): Promise<void> => {

        let requestUrl: string | undefined;
        const url: string = chance.string();

        const api: ExampleAPI = new ExampleAPI(url);
        api.useMixin(createBaseURLMixin({
            beaeURL: 'https://',
        }));

        api.preHook.sideEffect.add((data: IRequestConfig) => {
            requestUrl = data.url;
        });

        const response: ExampleAPIResponse = await api.fetch();

        expect(typeof response.hello).to.be.equal('string');
        expect(requestUrl).to.be.equal(`https://${url}`);
    });
});
