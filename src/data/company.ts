/**
 * Eén bron van waarheid voor de bedrijfsgegevens van Privacy Shield Group.
 * Wijzig hier, niet in de pagina zelf.
 *
 * Herkomst: akte van oprichting 7 oktober 2026 voor mr. R. Jabri (Jabri
 * Notariaat, Hilversum), dossier 2026.001399.01. SAJ Group B.V. is enig
 * aandeelhouder; 1.200 aandelen van EUR 1.
 */
export const company = {
  legalName: 'Privacy Shield Group B.V.',
  shortName: 'Privacy Shield Group',
  foundedISO: '2026-10-07',

  street: 'Amstelveenseweg 186',
  postalCode: '1075 XR',
  city: 'Amsterdam',
  country: 'The Netherlands',
  countryCode: 'NL',

  /** Site-brede conventie: href internationaal, weergave met spaties. */
  phoneHref: '+31207823222',
  phoneDisplay: '+31 20 782 3222',

  email: 'info@privacyshieldgroup.com',

  /**
   * KvK geverifieerd uit het digitaal gewaarmerkte uittreksel (KvK-mail
   * 10 oktober 2026). Btw-nummer is nog niet bekend (volgt van de
   * Belastingdienst); zodra bekend hier invullen, dan verschijnt het
   * automatisch in de voettekst en de juridische gegevens. Leeg laten
   * betekent: regel wordt niet getoond.
   */
  kvk: '42189369',
  vat: '',

  /** Moedermaatschappij, geverifieerd in het handelsregister. */
  parent: {
    name: 'SAJ Group B.V.',
    kvk: '42187598',
    url: 'https://sajgroup.nl',
  },

  /** Zusteronderneming, geverifieerd in het handelsregister. */
  sister: {
    name: 'SAJ Recherche B.V.',
    kvk: '96790954',
    licence: 'POB 8779',
    url: 'https://sajrecherche.com',
  },
} as const;
