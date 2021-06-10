/// <reference types="next" />
/// <reference types="next/types/global" />

declare module "*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGAElementEleme>>;
    export default content;
}
