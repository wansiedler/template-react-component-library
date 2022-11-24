const devHosts = [
    "localhost",
    "0.0.0.0",
    "https://UiWiWidget.staging.ippen.space/",
    "https://www.webnachrichten.de/sport/fusball/gruendung-eigener-beraterfirma-rangnick-kein-trainer-mehr-zr-90843715.html",
    "https://merkur.idstg.de/leben/wohnen/hitze-verbannen-kuehlen-zimmerpflanzen-sauerstoff-giesswasser-raum-zr-12860912.html",
    "https://www.merkur.de/leben/genuss/armin-stadler-kochende-kuenstler-76379.html",
    "https://www.merkur.de/bayern/karte-corona-bayern-inzidenz-fallzahlen-neuinfektionen-landkreise-staedte-hotspots-zr-13610678.html",
    "https://www.merkur.de/leben/wohnen/facebook-tiktok-post-immobilie-inserat-viral-grund-unerwartet-soziale-medien-zr-90476167.html"
];
export const hideLogs =
    typeof window !== "undefined" &&
    !devHosts.includes(new URL(window.location.href).hostname) &&
    !devHosts.includes(window.location.href) &&
    !window.location.href.includes("idstg.de");
const env = `${process?.env?.ENVIRONMENT}`;
export const isProduction = `${env}` === "production";
export const getAxCoreQueryAPI = (experimentId) => {
    return `https://public-ax-core-api.${
        isProduction ? "production" : "staging"
    }.ippen.space/v1/experiments/${experimentId}/query`;
};
