# Formulieren aanzetten

De site staat als losse HTML-bestanden op GitHub. Zulke sites kunnen zelf geen
mail versturen en niets opslaan, dus de twee formulieren gaan via een externe
dienst. Alles staat al klaar — je hoeft alleen twee gegevens in te vullen in
het bestand `nv-forms.js`.

Zolang je dat niet doet: de nieuwsbrief zegt eerlijk dat aanmelden nog niet
actief is, en het contactformulier opent het mailprogramma van de bezoeker met
het bericht al ingevuld. Er gaat dus nooit iets stil verloren.

## De twee adressen

| Adres | Waarvoor |
| --- | --- |
| `hello@novevita.nl` | afzender van de nieuwsbrief, welkomstmails en de bevestiging op het contactformulier |
| `support@novevita.nl` | de inbox waar contactformulier, vragen, klachten en bestellingen binnenkomen |

Maak `hello@novevita.nl` aan bij je hostingpartij voordat je verder gaat;
`support@novevita.nl` heb je al.

## 1. Nieuwsbrief (MailerLite)

1. Maak een account op mailerlite.com — gratis tot 1.000 abonnees.
2. Ga naar **Subscribe forms → Embedded form** en maak een formulier.
3. In de code die je krijgt staat een adres als:
   `https://assets.mailerlite.com/jsonp/1234567/forms/9876543/subscribe`
4. Zet dat adres in `nv-forms.js` achter `MAILERLITE_ENDPOINT`.
5. Stel bij **Sender** of **Domain** `hello@novevita.nl` in als afzender en
   verifieer je domein. Zonder die verificatie belandt je nieuwsbrief eerder
   in de spammap.

Laat **double opt-in aan staan** (standaard bij MailerLite). De bezoeker krijgt
dan een bevestigingsmail. Dat is wat de AVG vraagt en het houdt je lijst schoon.

## 2. Contactformulier (Web3Forms)

1. Ga naar web3forms.com en vul `support@novevita.nl` in. Geen account nodig.
2. Je krijgt een access key per mail.
3. Zet die key in `nv-forms.js` achter `WEB3FORMS_KEY`.

Berichten komen daarna binnen op `support@novevita.nl`, met het adres van de
bezoeker als antwoordadres — je kunt dus direct op Antwoorden klikken.

**Over de automatische bevestiging:** die staat al in de code klaar, met
`hello@novevita.nl` als afzender. Web3Forms verstuurt hem alleen op een betaald
plan. Op het gratis plan komt je bericht gewoon binnen, maar krijgt de bezoeker
geen bevestigingsmail. Het formulier zegt na verzenden wel op de pagina zelf
dat het gelukt is.

Wil je die bevestiging zonder abonnement, dan kan het ook via MailerLite: laat
het contactformulier de afzender als abonnee aanmelden in een aparte groep met
een automatische welkomstmail. Zeg het als je dat wilt, dan bouw ik het.

## AVG in één alinea

Je mag e-mailadressen bewaren als iemand daar zelf om vraagt, je moet zeggen
waarvoor je ze gebruikt, en afmelden moet altijd kunnen. Bij beide formulieren
staat nu een regel met een link naar je privacypagina. Zet in dat privacybeleid
ook welke diensten je gebruikt (MailerLite en Web3Forms) en hoe lang je de
gegevens bewaart.
