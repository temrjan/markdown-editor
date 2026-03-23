import type {ExtensionAuto} from '#core';

import {YfmHeadingSpecs, type YfmHeadingSpecsOptions} from './YfmHeadingSpecs';

export {YfmHeadingAttr} from './const';

export type YfmHeadingOptions = YfmHeadingSpecsOptions & {
    h1Key?: string | null;
    h2Key?: string | null;
    h3Key?: string | null;
    h4Key?: string | null;
    h5Key?: string | null;
    h6Key?: string | null;
};

/** YfmHeading extension needs markdown-it-attrs plugin */
export const YfmHeading: ExtensionAuto<YfmHeadingOptions> = (builder, opts) => {
    builder.use(YfmHeadingSpecs, opts);
};
