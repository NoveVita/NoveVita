// Nové Vita Journal — "What's New" news data. Separate editorial stream from
// the evergreen Journal articles. Add new items here; the list auto-sorts by
// datePublished (newest first). Each item follows the same structure so the
// layout never needs to change when adding new entries.
import { SITE_URL, SITE_NAME } from './journal-data.js';

export const TAGS = ['GLP-1', 'PEPTIDES', 'RESEARCH', 'REGULATION', 'SAFETY', 'LEGAL', 'CLINICAL DEVELOPMENT'];

export const NEWS_ITEMS = [
  {
    slug: 'fda-bpc-157-kpv-tb-500-mots-c-2026',
    url: './Nove Vita Journal News - FDA Peptides.dc.html',
    published: true,
    tag: 'PEPTIDES · REGULATION',
    title: 'Vier bekende peptides op tafel bij de FDA',
    subtitle: 'Ook KPV, TB-500 en MOTS-c stonden op de agenda van een Amerikaanse adviescommissie',
    excerpt: 'De FDA bespreekt BPC-157, KPV, TB-500 en MOTS-c voor mogelijke opname op de Amerikaanse 503A Bulks List. Dit is wat er speelt.',
    image: 'uploads/ChatGPT Image 18 aug 2026, 13_15_33.png',
    imagePlaceholder: 'FDA building with magnifying glass over 503A Bulks List document and four peptide vials: BPC-157, KPV, TB-500, MOTS-c',
    datePublished: '2026-07-23',
    dateModified: '2026-07-23',
    seoTitle: 'FDA beoordeelt BPC-157, KPV, TB-500 en MOTS-c | Nové Vita',
    metaDescription: 'De FDA bespreekt BPC-157, KPV, TB-500 en MOTS-c voor mogelijke opname op de Amerikaanse 503A Bulks List. Dit is wat er speelt.',
    ogTitle: 'Vier bekende peptides op tafel bij de FDA | Nové Vita Journal',
    ogDescription: 'Ook KPV, TB-500 en MOTS-c stonden op de agenda van een Amerikaanse adviescommissie.',
    heroImageAlt: 'FDA-gebouw met vergrootglas over 503A Bulks List document en vier peptide vials: BPC-157, KPV, TB-500, MOTS-c',
    paragraphs: [
      'BPC-157, KPV, TB-500 en MOTS-c zijn online al lang geen onbekende namen meer. Nu krijgen deze populaire peptides ook opnieuw formele aandacht van de Amerikaanse FDA.',
      'Op 23 juli besprak de Pharmacy Compounding Advisory Committee van de FDA de vier stoffen in het kader van de 503A Bulks List. Die lijst bepaalt welke bulkstoffen onder bepaalde voorwaarden door traditionele compounding pharmacies in de Verenigde Staten mogen worden gebruikt.',
      'Voor BPC-157 keek de FDA specifiek naar het voorgestelde gebruik bij colitis ulcerosa. Voor KPV en TB-500 werden toepassingen rond wondherstel en ontsteking beoordeeld en voor MOTS-c obesitas en osteoporose.',
      'Een belangrijk punt in de beoordeling is het gebrek aan stevige humane veiligheidsdata. De FDA wijst bij verschillende van deze peptides ook op mogelijke risico\u2019s rond immunogeniciteit, peptide-onzuiverheden en de karakterisering van de werkzame stof.',
      'Dat betekent niet dat de FDA nu heeft vastgesteld dat deze peptides onveilig zijn.',
      'Het betekent vooral dat deze peptides de formele evaluatie krijgen die past bij hun populariteit. Dat is precies waar dit soort proces waarde toevoegt: het scheidt wat we al weten van wat nog moet worden aangetoond.',
      'Een definitieve beslissing over opname op de 503A Bulks List volgt pas nadat het adviesproces en de beoordelingen zijn afgerond.',
      'Voor een peptidewereld die zich razendsnel ontwikkelt, is dit een teken dat de wetenschap en regelgeving meegroeien.',
    ],
    source: { label: 'July 23-24, 2026: Meeting of the Pharmacy Compounding Advisory Committee', publisher: 'U.S. Food & Drug Administration', url: 'https://www.fda.gov/advisory-committees/advisory-committee-calendar/july-23-24-2026-meeting-pharmacy-compounding-advisory-committee-07232026' },
    source2: { label: 'Certain Bulk Drug Substances for Use in Compounding that May Present Significant Safety Risks', publisher: 'U.S. Food & Drug Administration', url: 'https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks' },
  },
  {
    slug: 'glp-1-gewrichtspijn-artrose-onderzoek',
    url: './Nove Vita Journal News - GLP-1 Gewrichtspijn.dc.html',
    published: true,
    tag: 'GLP-1 · RESEARCH',
    title: 'Minder gewrichtspijn door GLP-1: is het alleen het gewichtsverlies?',
    subtitle: 'Nieuw onderzoek naar semaglutide kijkt naar wat er ín het gewricht gebeurt',
    excerpt: 'Nieuw onderzoek naar semaglutide suggereert mogelijke effecten op artrose en kraakbeen die verder gaan dan alleen gewichtsverlies.',
    image: 'uploads/ChatGPT Image 18 aug 2026, 12_28_30.png',
    imagePlaceholder: 'Woman holding knee with anatomical overlay, lab in background',
    datePublished: '2026-02-09',
    dateModified: '2026-02-09',
    seoTitle: 'GLP-1 en gewrichtspijn: meer dan gewichtsverlies? | Nové Vita',
    metaDescription: 'Nieuw onderzoek naar semaglutide suggereert mogelijke effecten op artrose en kraakbeen die verder gaan dan alleen gewichtsverlies.',
    ogTitle: 'Minder gewrichtspijn door GLP-1: is het alleen het gewichtsverlies? | Nové Vita Journal',
    ogDescription: 'Nieuw onderzoek naar semaglutide suggereert mogelijke effecten op artrose en kraakbeen die verder gaan dan alleen gewichtsverlies.',
    heroImageAlt: 'Vrouw met hand op knie, anatomische overlay van het gewricht, laboratorium op de achtergrond',
    paragraphs: [
      'Dat afvallen de belasting op knieën vermindert, klinkt logisch. Maar nieuw onderzoek naar semaglutide suggereert dat er mogelijk meer gebeurt.',
      'In een studie uit 2026 zagen onderzoekers in experimentele artrosemodellen minder kraakbeenschade, minder osteofytvorming, minder afwijkingen in het synoviale weefsel en minder pijngevoeligheid.',
      'Opvallend was dat een deel van deze effecten zichtbaar bleef toen onderzoekers de invloed van minder eten en gewichtsverlies experimenteel probeerden uit te sluiten.',
      'De onderzoekers zagen onder andere veranderingen in het metabolisme van kraakbeencellen. Dat roept een interessante nieuwe vraag op: beïnvloedt GLP-1 alleen het lichaamsgewicht en daarmee de belasting op gewrichten, of gebeurt er ook rechtstreeks iets in het gewricht?',
      'Bij mensen weten we al dat semaglutide bij obesitas en knieartrose gepaard kan gaan met minder kniepijn en een betere fysieke functie. Of GLP-1 bij mensen ook daadwerkelijk kraakbeen beschermt of de progressie van artrose beïnvloedt, is nog niet bewezen.',
      'Maar het onderzoek verschuift duidelijk van: "Wat doet gewichtsverlies met de knie?" naar: "Wat doet GLP-1 met het gewricht zelf?"',
    ],
    sources: [
      { label: 'Semaglutide ameliorates osteoarthritis progression through a weight loss-independent metabolic restoration mechanism', publisher: 'Cell Metabolism, 2026', url: 'https://pubmed.ncbi.nlm.nih.gov/41666927/' },
      { label: 'Once-Weekly Semaglutide in Persons with Obesity and Knee Osteoarthritis', publisher: 'The New England Journal of Medicine, 2024', url: 'https://pubmed.ncbi.nlm.nih.gov/39476339/' },
    ],
  },
  {
    slug: 'lipoedeem-tirzepatide-nieuw-onderzoek-2026',
    url: './Nove Vita Journal News - Lipoedeem Onderzoek.dc.html',
    published: true,
    tag: 'LIPOEDEEM · RESEARCH',
    title: 'Nieuwe kijk op lipoedeem zet ook tirzepatide in beeld',
    subtitle: 'Onderzoekers verbinden hormonen, vetweefsel en bindweefsel in één nieuw model',
    excerpt: 'Nieuw onderzoek naar lipoedeem verbindt hormonen, vetweefsel en bindweefsel en bespreekt tirzepatide als mogelijke toekomstige onderzoekslijn.',
    image: 'uploads/ChatGPT Image 18 aug 2026, 02_44_18.png',
    imagePlaceholder: 'Lipedema tissue with molecular overlay, editorial visual',
    datePublished: '2026-07-22',
    dateModified: '2026-07-22',
    seoTitle: 'Lipoedeem en tirzepatide: nieuwe onderzoekslijn | Nové Vita',
    metaDescription: 'Nieuw onderzoek naar lipoedeem verbindt hormonen, vetweefsel en bindweefsel en bespreekt tirzepatide als mogelijke toekomstige onderzoekslijn.',
    ogTitle: 'Nieuwe kijk op lipoedeem zet ook tirzepatide in beeld | Nové Vita Journal',
    ogDescription: 'Onderzoekers verbinden hormonen, vetweefsel en bindweefsel in één nieuw model voor lipoedeem.',
    heroImageAlt: 'Lipoedeemweefsel met moleculaire overlay, editorial beeld',
    paragraphs: [
      'De wetenschappelijke kijk op lipoedeem begint te veranderen.',
      'In een nieuwe publicatie uit juli 2026 beschrijven onderzoekers lipoedeem als een mogelijk hormoongevoelige aandoening van het stromale weefsel. In hun model komen hormonale signalering, vetweefsel, bindweefsel, ontsteking en metabole processen samen.',
      'Dat is interessant voor de ontwikkeling van nieuwe behandelstrategieën. De auteurs bespreken onder andere incretinetherapieën en noemen tirzepatide, het werkzame bestanddeel van Mounjaro, als een mogelijke toekomstige onderzoekslijn.',
      'De gedachte daarachter gaat verder dan gewichtsverlies. Tirzepatide werkt via zowel GIP als GLP-1 en wordt onderzocht vanwege effecten op metabole processen en vetweefsel die mogelijk relevant kunnen zijn voor de biologie van lipoedeem.',
      'Betekent dit dat Mounjaro lipoedeem behandelt? Dat weten we nog niet.',
      'Dit onderzoek is geen klinische trial met tirzepatide en bewijst geen werkzaamheid bij lipoedeem. Het is een wetenschappelijk framework dat nieuwe hypotheses formuleert die nu in klinisch onderzoek getest moeten worden.',
      'Juist dát maakt deze ontwikkeling interessant: de onderzoeksvraag verschuift van alleen gewichtsverlies naar wat metabole therapieën mogelijk doen met het aangedane weefsel zelf.',
    ],
    source: { label: 'Lipedema as a hormone-sensitive stromal disorder: a four-pathway translational framework', publisher: 'Frontiers in Cell and Developmental Biology, 22 juli 2026', url: 'https://www.frontiersin.org/journals/cell-and-developmental-biology/articles/10.3389/fcell.2026.1903835/full' },
  },
  {
    slug: 'glp-1-haarverlies-onderzoek',
    url: './Nove Vita Journal News - GLP-1 Haarverlies.dc.html',
    published: true,
    tag: 'GLP-1',
    title: 'GLP-1 en haarverlies: het signaal wordt sterker',
    excerpt: 'Nieuw onderzoek vindt een verband tussen GLP-1 medicatie en haarverlies. Wat weten we inmiddels over semaglutide, tirzepatide en haaruitval?',
    image: 'uploads/ChatGPT Image 18 aug 2026, 02_01_15.png',
    imagePlaceholder: 'Woman examining hair loss at vanity, skincare products',
    datePublished: '2026-05-18',
    dateModified: '2026-05-18',
    seoTitle: 'GLP-1 en haarverlies: nieuw onderzoek | Nové Vita',
    metaDescription: 'Nieuw onderzoek vindt een verband tussen GLP-1 medicatie en haarverlies. Wat weten we inmiddels over semaglutide, tirzepatide en haaruitval?',
    ogTitle: 'GLP-1 en haarverlies: het signaal wordt sterker | Nové Vita Journal',
    ogDescription: 'Nieuw onderzoek vindt een verband tussen GLP-1 medicatie en haarverlies.',
    heroImageAlt: 'Vrouw bekijkt haaruitval aan haar kaptafel met verzorgingsproducten',
    paragraphs: [
      'Haaruitval wordt al langer gemeld door mensen die GLP-1 medicatie gebruiken. Inmiddels begint ook de wetenschap beter naar dat signaal te kijken.',
      'Een nieuwe systematische review en meta-analyse uit 2026 combineerde gegevens van negen interventiestudies met in totaal 4.114 GLP-1 gebruikers. Daaruit kwam een significant hogere kans op haarverlies naar voren bij GLP-1 gebruikers dan bij deelnemers die een placebo kregen.',
      'Een andere systematische review uit 2026 zag vooral signalen bij semaglutide en tirzepatide. Telogen effluvium, tijdelijk verhoogde haaruitval na lichamelijke belasting of grote veranderingen in het lichaam, behoort tot de vormen die worden beschreven.',
      'De grote vraag blijft waarom.',
      'Snel gewichtsverlies, minder calorieën en voedingsstoffen, veranderingen in het metabolisme en mogelijk effecten van de medicatie zelf worden allemaal onderzocht. Op dit moment kan nog niet worden vastgesteld dat GLP-1 medicatie rechtstreeks de oorzaak is.',
      'Wel wordt steeds duidelijker dat haarverlies serieus genoeg is om verder te onderzoeken.',
    ],
    source: { label: 'Glucagon-like peptide-1 receptor agonists and hair loss: A systematic review and meta-analysis', publisher: 'Diabetes Research and Clinical Practice, 2026', url: 'https://pubmed.ncbi.nlm.nih.gov/42155605/' },
    source2: { label: 'GLP-1 therapies and hair loss: A systematic review of current evidence and implications for counseling', publisher: 'Science Progress, 2026', url: 'https://pubmed.ncbi.nlm.nih.gov/41998799/' },
  },
  {
    slug: 'ghk-cu-fda-evaluatie',
    url: './Nove Vita Journal News - GHK-Cu FDA.dc.html',
    published: true,
    tag: 'PEPTIDES',
    title: 'GHK-Cu krijgt officiële aandacht van de FDA',
    excerpt: 'De FDA evalueert GHK-Cu voor niet-injecteerbare toepassingen binnen het Amerikaanse compounding-kader. Wat betekent deze ontwikkeling?',
    image: 'uploads/ChatGPT Image 18 aug 2026, 01_44_18.png',
    imagePlaceholder: 'GHK-Cu copper peptide vial and pipette, laboratory setting',
    datePublished: '2026-05-14',
    dateModified: '2026-05-14',
    seoTitle: 'GHK-Cu onder evaluatie bij FDA | Nové Vita',
    metaDescription: 'De FDA evalueert GHK-Cu voor niet-injecteerbare toepassingen binnen het Amerikaanse compounding-kader. Wat betekent deze ontwikkeling?',
    ogTitle: 'GHK-Cu krijgt officiële aandacht van de FDA | Nové Vita Journal',
    ogDescription: 'De FDA evalueert GHK-Cu voor niet-injecteerbare toepassingen binnen het Amerikaanse compounding-kader.',
    heroImageAlt: 'GHK-Cu copper peptide flesje en pipet in laboratoriumsetting',
    paragraphs: [
      'GHK-Cu krijgt steeds meer wetenschappelijke en regulatoire erkenning buiten de wereld van skincare en peptide-liefhebbers.',
      'De Amerikaanse FDA heeft GHK-Cu voor niet-injecteerbare toepassingen opnieuw opgenomen in Category 1 van de stoffen die worden geëvalueerd voor mogelijke toepassing binnen 503A compounding. Dat is de categorie waarin een stof serieus in overweging wordt genomen voor gestructureerd gebruik.',
      'Dat betekent nog geen goedkeuring, en GHK-Cu is hiermee ook geen FDA-goedgekeurd geneesmiddel. Het betekent wel dat de stof officieel wordt beoordeeld binnen het Amerikaanse compounding-kader, een stap die niet elk peptide krijgt.',
      'De FDA maakt daarbij duidelijk onderscheid tussen toedieningsvormen. Voor injecteerbare GHK-Cu gelden afzonderlijke aandachtspunten, onder andere rond immunogeniciteit, aggregatie en peptide-gerelateerde onzuiverheden, en de beperkte hoeveelheid humane veiligheidsdata voor die specifieke route.',
      'Voor de niet-injecteerbare toepassingen van GHK-Cu, waar het peptide al het langst bekend is, is dat onderscheid een relevant signaal om te volgen.',
      'Een peptide dat vooral bekend werd via huidverzorging bevindt zich hiermee middenin een grotere discussie over de toekomst en regulering van peptides.',
      'Nové Vita houdt de ontwikkelingen in de gaten.',
    ],
    source: { label: 'Bekijk de actuele FDA-status van GHK-Cu', publisher: 'U.S. Food & Drug Administration', url: 'https://www.fda.gov/media/94155/download' },
    source2: { label: 'Lees de FDA-informatie over veiligheidszorgen rond injectable GHK-Cu', publisher: 'U.S. Food & Drug Administration', url: 'https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks' },
  },
  {
    slug: 'glp-1-tablet-wegovy-vk',
    url: './Nove Vita Journal News - GLP-1 Tablet VK.dc.html',
    published: false,
    tag: 'GLP-1',
    title: 'De GLP-1 pil is er. Gaat de prik straks terrein verliezen?',
    excerpt: 'De Britse MHRA keurde in juni 2026 de eerste GLP-1 tablet voor gewichtsmanagement goed. Wat betekent dit voor de toekomst van GLP-1?',
    image: 'uploads/ChatGPT Image 18 aug 2026, 01_39_00.png',
    imagePlaceholder: 'Tablet blister pack next to injection pen',
    datePublished: '2026-06-11',
    dateModified: '2026-06-11',
    seoTitle: 'Eerste GLP-1 tablet voor gewichtsverlies goedgekeurd in VK | Nové Vita',
    metaDescription: 'Het VK heeft de eerste GLP-1 tablet voor gewichtsmanagement goedgekeurd. Wat betekent orale Wegovy voor de toekomst van GLP-1?',
    ogTitle: 'De GLP-1 pil is er. Gaat de prik straks terrein verliezen? | Nové Vita Journal',
    ogDescription: 'De Britse MHRA keurde in juni 2026 de eerste GLP-1 tablet voor gewichtsmanagement goed.',
    paragraphs: [
      'GLP-1 wordt bijna automatisch geassocieerd met injecties. Maar dat beeld begint te veranderen.',
      'De Britse geneesmiddelenautoriteit MHRA keurde in juni 2026 een orale vorm van Wegovy goed voor gewichtsmanagement. Daarmee werd het de eerste GLP-1 tablet die in het Verenigd Koninkrijk voor gewichtsverlies werd goedgekeurd.',
      'De tablet bevat semaglutide, hetzelfde actieve bestanddeel als de bekende Wegovy-injectie. Tegelijkertijd wordt er gewerkt aan een nieuwe generatie orale GLP-1 middelen, waaronder small-molecule geneesmiddelen die speciaal zijn ontwikkeld om als tablet te worden gebruikt.',
      'De prik verdwijnt voorlopig niet. Maar GLP-1 begint wel los te komen van de injectienaald.',
    ],
    source: { label: 'Lees het officiële bericht van de MHRA', publisher: 'MHRA / GOV.UK', url: 'https://www.gov.uk/government/news/first-glp-1-tablet-for-weight-loss-approved-in-the-uk' },
  },
  {
    slug: 'wegovy-pil-lancering-2026',
    url: './Nove Vita Journal News - Wegovy Pil.dc.html',
    published: true,
    tag: 'REGULATION',
    title: 'De Wegovy-pil is gelanceerd',
    subtitle: 'Semaglutide is nu ook als tablet beschikbaar',
    excerpt: 'Sinds januari 2026 is een orale versie van Wegovy (semaglutide) beschikbaar. Wat betekent dit voor mensen die momenteel injecteren?',
    image: 'uploads/ChatGPT Image 18 aug 2026, 01_23_54.png',
    imagePlaceholder: 'Wegovy tablet packaging, oral semaglutide',
    datePublished: '2026-01-15',
    dateModified: '2026-01-15',
    seoTitle: 'Wegovy-pil gelanceerd: semaglutide nu ook oraal | Nové Vita',
    metaDescription: 'Sinds januari 2026 is een orale tablet-versie van Wegovy (semaglutide) beschikbaar. Ontdek wat dit betekent voor gebruikers van GLP-1-medicatie.',
    ogTitle: 'De Wegovy-pil is gelanceerd | Nové Vita Journal',
    ogDescription: 'Semaglutide is nu ook als tablet verkrijgbaar. Een overzicht van deze ontwikkeling.',
    heroImageAlt: 'Wegovy (semaglutide) tabletten van 25 mg naast een glas water',
    content: [
      { heading: null, paragraphs: [
        'Sinds januari 2026 is een orale tabletvorm van Wegovy, het merk semaglutide van Novo Nordisk, beschikbaar. Tot nu toe werd semaglutide voor gewichtsmanagement vrijwel uitsluitend via een wekelijkse injectie toegediend.',
        'De orale route vraagt om een andere formulering: semaglutide is een peptide en peptiden breken normaal gesproken af in het maag-darmkanaal voordat ze kunnen worden opgenomen. De tablet is daarom zo ontwikkeld dat het middel toch via de maagwand kan worden opgenomen.',
        'Voor mensen die spuiten vervelend vinden, kan dit een relevante ontwikkeling zijn. Tegelijk verandert het middel zelf niet: de werking, indicaties en mogelijke bijwerkingen van semaglutide blijven vergelijkbaar met de injectievorm.',
        'Of en wanneer een orale versie voor een individuele patiënt geschikt is, blijft een vraag voor de behandelend arts. Beschikbaarheid, vergoeding en toegang verschillen bovendien per land.',
      ] },
    ],
    sources: [
      { label: '5 GLP-1 trends to expect in 2026: Expanded uses, oral options, and more', publisher: 'GoodRx via AOL, 2026', url: 'https://www.aol.com/articles/5-glp-1-trends-expect-200025802.html' },
    ],
    disclaimer: 'De informatie op deze pagina is uitsluitend bedoeld voor algemene en educatieve doeleinden en vormt geen medisch advies. Beschikbaarheid van geneesmiddelen verschilt per land en kan wijzigen. Bespreek vragen over medicatie altijd met een arts of apotheker.',
  },
];

export function buildNewsSeo(item) {
  const path = '/journal/whats-new/' + item.slug;
  const canonicalUrl = item.canonicalUrl || (SITE_URL ? SITE_URL + path : path);
  const imageUrl = item.image ? (SITE_URL ? SITE_URL + '/' + item.image.replace(/^\//, '') : item.image) : '';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: item.title,
    description: item.metaDescription,
    image: imageUrl ? [imageUrl] : undefined,
    datePublished: item.datePublished,
    dateModified: item.dateModified || item.datePublished,
    author: { '@type': 'Organization', name: SITE_NAME },
    publisher: { '@type': 'Organization', name: SITE_NAME },
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
  };
  return {
    title: item.seoTitle,
    metaDescription: item.metaDescription,
    canonicalUrl,
    ogTitle: item.ogTitle || item.seoTitle,
    ogDescription: item.ogDescription || item.metaDescription,
    ogImage: imageUrl,
    jsonLd,
  };
}

export function sortedNews() {
  return [...NEWS_ITEMS].filter(n => n.published).sort((a, b) => new Date(b.datePublished) - new Date(a.datePublished));
}

export function formatNewsDate(iso) {
  if (!iso) return '';
  const d = new Date(iso + 'T00:00:00');
  const months = ['JAN','FEB','MRT','APR','MEI','JUN','JUL','AUG','SEP','OKT','NOV','DEC'];
  return d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
}
