// Nové Vita — formulierkoppeling
// ---------------------------------------------------------------------------
// Deze site is statisch (alleen HTML, geen server), dus verzenden gaat via
// twee externe diensten. Vul hieronder je eigen gegevens in; zolang ze op de
// standaardwaarde staan, tonen de formulieren een nette melding in plaats van
// te doen alsof het gelukt is.
//
// 1. NIEUWSBRIEF via MailerLite
//    MailerLite → Subscribe forms → Embedded form → nieuw formulier maken.
//    In de code die je krijgt staat een adres als:
//      https://assets.mailerlite.com/jsonp/1234567/forms/9876543/subscribe
//    Kopieer dat adres hieronder in MAILERLITE_ENDPOINT.
//
// 2. CONTACTFORMULIER via Web3Forms (gratis, geen account nodig)
//    Ga naar web3forms.com, vul support@novevita.nl in, en je krijgt een
//    access key per mail. Zet die hieronder in WEB3FORMS_KEY.
//    Berichten komen dan rechtstreeks in je mailbox.
//
// Adressen zijn bewust gescheiden: hello@ is het warme afzenderadres voor de
// nieuwsbrief, support@ is de inbox waar contactvragen binnenkomen.
// ---------------------------------------------------------------------------

export const MAILERLITE_ENDPOINT = 'https://assets.mailerlite.com/jsonp/2590265/forms/196692824337418096/subscribe';
export const WEB3FORMS_KEY = '1bcf91e7-167e-4763-9dc1-0aee6d641fb2';
export const CONTACT_EMAIL = 'support@novevita.nl'; // waar berichten binnenkomen
export const SENDER_EMAIL = 'hello@novevita.nl';   // afzender van nieuwsbrief en bevestiging

export const isConfigured = {
  newsletter: () => MAILERLITE_ENDPOINT !== 'VUL_IN' && MAILERLITE_ENDPOINT.startsWith('http'),
  contact: () => WEB3FORMS_KEY !== 'VUL_IN' && WEB3FORMS_KEY.length > 10,
};

export function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test((value || '').trim());
}

// MailerLite's embedded endpoint accepts a plain form POST. It answers with an
// opaque response, so success is "the request went out without a network
// error" — enough here, because MailerLite sends the confirmation mail itself.
export async function subscribe(email) {
  if (!isConfigured.newsletter()) {
    return { ok: false, reason: 'not-configured' };
  }
  const body = new FormData();
  body.append('fields[email]', email);
  body.append('ml-submit', '1');
  body.append('anticsrf', 'true');
  try {
    await fetch(MAILERLITE_ENDPOINT, { method: 'POST', body, mode: 'no-cors' });
    return { ok: true };
  } catch (e) {
    return { ok: false, reason: 'network' };
  }
}

export async function sendContact(fields) {
  if (!isConfigured.contact()) {
    return { ok: false, reason: 'not-configured' };
  }
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: 'Nové Vita — ' + (fields.onderwerp || 'nieuw bericht'),
        from_name: fields.naam || 'Website',
        // Auto-reply to the visitor, sent from hello@ while the question
        // itself lands in info@. Web3Forms only honours this on a paid plan;
        // without it the submission still arrives, just without the reply.
        replyto: fields.email,
        autoresponse_from: SENDER_EMAIL,
        autoresponse_subject: 'Bedankt voor je bericht — Nové Vita',
        autoresponse_message:
          'Hallo ' + (fields.naam || '') + ',\n\n' +
          'Bedankt voor je bericht. We hebben het ontvangen en reageren zo snel mogelijk, ' +
          'meestal binnen één werkdag.\n\nHartelijke groet,\nNové Vita',
        ...fields,
      }),
    });
    const data = await res.json();
    return data.success ? { ok: true } : { ok: false, reason: 'rejected' };
  } catch (e) {
    return { ok: false, reason: 'network' };
  }
}

// Fallback while nothing is configured yet: open the visitor's mail client
// with everything pre-filled, so no message is ever silently lost.
export function mailtoFallback(fields) {
  const lines = [
    fields.naam && 'Naam: ' + fields.naam,
    fields.email && 'E-mail: ' + fields.email,
    fields.telefoon && 'Telefoon: ' + fields.telefoon,
    fields.gevonden && 'Gevonden via: ' + fields.gevonden,
    '',
    fields.bericht || '',
  ].filter(Boolean).join('\n');
  return 'mailto:' + CONTACT_EMAIL +
    '?subject=' + encodeURIComponent(fields.onderwerp || 'Vraag via de website') +
    '&body=' + encodeURIComponent(lines);
}
