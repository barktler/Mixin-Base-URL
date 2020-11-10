/**
 * @author WMXPY
 * @namespace Base_URL
 * @description Base URL
 * @override Unit
 */

import { expect } from "chai";
import * as Chance from "chance";
import { createBaseURLMixin } from "../../src";
import { ExampleAPI, ExampleAPIResponse } from "../mock/example";

describe('Given [createBaseURLMixin] function', (): void => {

    const chance: Chance.Chance = new Chance('base-url-base-url');

    it('should be able to modify base url', async (): Promise<void> => {

        const url: string = chance.string();

        const api: ExampleAPI = new ExampleAPI(url);
        api.useMixin(createBaseURLMixin({
            beaeURL: 'https://',
        }));

        const response: ExampleAPIResponse = await api.fetch();

        expect(typeof response.hello).to.be.equal('string');
    });
});
