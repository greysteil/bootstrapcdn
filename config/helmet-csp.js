'use strict';

const CSP = {
    defaultSrc: ['\'none\''],
    baseUri: ['\'self\''],
    formAction: [
        'platform.twitter.com',
        'syndication.twitter.com'
    ],
    frameAncestors: ['\'none\''],
    scriptSrc: [
        '\'self\'',
        '\'unsafe-inline\'',
        'stackpath.bootstrapcdn.com',
        'www.google-analytics.com',
        'code.jquery.com',
        'platform.twitter.com',
        'api.github.com',
        'www.ziprecruiter.com',
        'api.ziprecruiter.com',
        'codefund.app',
        'codefund.io',
        (req, res) => `'nonce-${res.locals.nonce}'`
    ],
    styleSrc: [
        '\'self\'',
        '\'unsafe-inline\'',
        'stackpath.bootstrapcdn.com',
        'fonts.googleapis.com',
        'platform.twitter.com',
        'codefund.io'
    ],
    imgSrc: [
        '\'self\'',
        'data:',
        'www.google-analytics.com',
        'bootswatch.com',
        'stats.g.doubleclick.net',
        'ad.doubleclick.net',
        '*.convertro.com',
        '*.c3tag.com',
        '*.2mdn.net',
        'codefund.app',
        'cdn2.codefund.app',
        'cdn2.codefund.io',
        'codefund.io',
        'cdn.codefund.io',
        'launchbit.com',
        'www.launchbit.com',
        'www.ziprecruiter.com'
    ],
    fontSrc: [
        '\'self\'',
        'stackpath.bootstrapcdn.com',
        'fonts.gstatic.com'
    ],
    frameSrc: [
        '\'self\'',
        'img.shields.io',
        'platform.twitter.com',
        'syndication.twitter.com',
        'ghbtns.com'
    ],
    childSrc: [
        '\'self\'',
        'img.shields.io',
        'platform.twitter.com',
        'syndication.twitter.com',
        'ghbtns.com'
    ],
    connectSrc: [
        'syndication.twitter.com',
        'cdn2.codefund.app',
        'cdn.codefund.io'
    ],
    manifestSrc: ['\'self\'']
};

module.exports = CSP;

// vim: ft=javascript sw=4 sts=4 et:
