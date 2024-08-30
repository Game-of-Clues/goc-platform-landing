import * as functions from "firebase-functions";

exports.redirectToLocale = functions.https.onRequest((req, res) => {
  const acceptedLanguages = req.headers["accept-language"];
  const preferredLocale = acceptedLanguages ?
    acceptedLanguages.split(",")[0].split("-")[0] :
    "en";
  const availableLocales = ["en", "bg"];

  const locale = availableLocales.includes(preferredLocale) ?
    preferredLocale :
    "en";
  res.redirect(302, `/${locale}`);
});
