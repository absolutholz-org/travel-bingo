const config = {
	symbols: [
		{
			id: '101_gefahrstelle',
			filename: '101_gefahrstelle.svg',
			taxonomy: {
				frequency: 'medium',
				locations: ['city', 'highway'],
				tags: ['triangle', 'red', 'danger'],
			},
		},
		{
			id: '101-11_fussgaengerueberweg-rechts',
			filename: '101-11_fussgaengerueberweg-rechts.svg',
			taxonomy: {
				frequency: 'medium',
				locations: ['city'],
				tags: ['triangle', 'red', 'danger', 'right', 'pedestrian'],
			},
		},
		{
			id: '101-21_fussgaengerueberweg-links',
			filename: '101-21_fussgaengerueberweg-links.svg',
			taxonomy: {
				frequency: 'medium',
				locations: ['city'],
				tags: ['triangle', 'red', 'danger', 'left', 'pedestrian'],
			},
		},
		{
			id: '101-15_steinschlag-rechts',
			filename: '101-15_steinschlag-rechts.svg',
			taxonomy: {
				frequency: 'low',
				locations: ['city', 'highway'],
				tags: ['triangle', 'red', 'danger', 'right'],
			},
		},
		{
			id: '101-25_steinschlag-links',
			filename: '101-25_steinschlag-links.svg',
			taxonomy: {
				frequency: 'low',
				locations: ['city', 'highway'],
				tags: ['triangle', 'red', 'danger', 'left'],
			},
		},
		{
			id: '101-51_schnee-oder-eisglaette',
			filename: '101-51_schnee-oder-eisglaette.svg',
			taxonomy: {
				frequency: 'low',
				locations: ['city', 'highway'],
				tags: ['triangle', 'red', 'danger'],
			},
		},
		{
			id: '101-52_splitt-schotter',
			filename: '101-52_splitt-schotter.svg',
			taxonomy: {
				frequency: 'low',
				locations: ['city', 'highway'],
				tags: ['triangle', 'red', 'danger'],
			},
		},
		{
			id: '101-54_unzureichendes-lichtraumprofil',
			filename: '101-54_unzureichendes-lichtraumprofil.svg',
			taxonomy: {
				frequency: 'low',
				locations: ['city', 'highway'],
				tags: ['triangle', 'red', 'danger'],
			},
		},
		{
			id: '105-10_doppelkurve-links-rechts',
			filename: '105-10_doppelkurve-links-rechts.svg',
			taxonomy: {
				frequency: 'low',
				locations: ['city'],
				tags: ['triangle', 'red', 'danger'],
			},
		},
		{
			id: '105-20_doppelkurve-rechts-links',
			filename: '105-20_doppelkurve-rechts-links.svg',
			taxonomy: {
				frequency: 'low',
				locations: ['city'],
				tags: ['triangle', 'red', 'danger'],
			},
		},
		{
			id: '112_unebene-fahrbahn',
			filename: '112_unebene-fahrbahn.svg',
			taxonomy: {
				frequency: 'low',
				locations: ['city'],
				tags: ['triangle', 'red', 'danger'],
			},
		},
		{
			id: '114_schleuder-rutschgefahr',
			filename: '114_schleuder-rutschgefahr.svg',
			taxonomy: {
				frequency: 'low',
				locations: ['city'],
				tags: ['triangle', 'red', 'danger'],
			},
		},
		{
			id: '120_verengte-fahrbahn',
			filename: '120_verengte-fahrbahn.svg',
			taxonomy: {
				frequency: 'low',
				locations: ['city', 'highway'],
				tags: ['triangle', 'red', 'danger'],
			},
		},
		{
			id: '123_arbeitsstelle',
			filename: '123_arbeitsstelle.svg',
			taxonomy: {
				frequency: 'low',
				locations: ['city', 'highway'],
				tags: ['triangle', 'red', 'danger'],
			},
		},
		{
			id: '124_stau',
			filename: '124_stau.svg',
			taxonomy: {
				frequency: 'low',
				locations: ['city', 'highway'],
				tags: ['triangle', 'red', 'danger'],
			},
		},
		{
			id: '125_gegenverkehr',
			filename: '125_gegenverkehr.svg',
			taxonomy: {
				frequency: 'low',
				locations: ['city', 'highway'],
				tags: ['triangle', 'red', 'danger'],
			},
		},
		{
			id: '131_lichtzeichenanlage',
			filename: '131_lichtzeichenanlage.svg',
			taxonomy: {
				frequency: 'low',
				locations: ['city', 'highway'],
				tags: ['triangle', 'red', 'danger'],
			},
		},
		{
			id: '133-10_fussgaenger-rechts',
			filename: '133-10_fussgaenger-rechts.svg',
			taxonomy: {
				frequency: 'low',
				locations: ['city'],
				tags: ['triangle', 'red', 'danger', 'right'],
			},
		},
		{
			id: '133-20_fussgaenger-links',
			filename: '133-20_fussgaenger-links.svg',
			taxonomy: {
				frequency: 'low',
				locations: ['city'],
				tags: ['triangle', 'red', 'danger', 'left'],
			},
		},
		{
			id: '136-10_kinder-rechts',
			filename: '136-10_kinder-rechts.svg',
			taxonomy: {
				frequency: 'low',
				locations: ['city'],
				tags: ['triangle', 'red', 'danger', 'right'],
			},
		},
		{
			id: '136-20_kinder-links',
			filename: '136-20_kinder-links.svg',
			taxonomy: {
				frequency: 'low',
				locations: ['city'],
				tags: ['triangle', 'red', 'danger', 'left'],
			},
		},
		{
			id: '138-10_radverkehr-rechts',
			filename: '138-10_radverkehr-rechts.svg',
			taxonomy: {
				frequency: 'low',
				locations: ['city'],
				tags: ['triangle', 'red', 'danger', 'right'],
			},
		},
		{
			id: '138-20_radverkehr-links',
			filename: '138-20_radverkehr-links.svg',
			taxonomy: {
				frequency: 'low',
				locations: ['city'],
				tags: ['triangle', 'red', 'danger', 'left'],
			},
		},
		{
			id: '142-10_wildwechsel-rechts',
			filename: '142-10_wildwechsel-rechts.svg',
			taxonomy: {
				frequency: 'low',
				locations: ['city', 'highway'],
				tags: ['triangle', 'red', 'danger', 'right'],
			},
		},
		{
			id: '142-20_wildwechsel-links',
			filename: '142-20_wildwechsel-links.svg',
			taxonomy: {
				frequency: 'low',
				locations: ['city', 'highway'],
				tags: ['triangle', 'red', 'danger', 'left'],
			},
		},
		{
			id: '151_bahnuebergang',
			filename: '151_bahnuebergang.svg',
			taxonomy: {
				frequency: 'low',
				locations: ['city'],
				tags: ['triangle', 'red', 'danger'],
			},
		},
		{
			id: '205_vorfahrt-gewaehren',
			filename: '205_vorfahrt-gewaehren.svg',
			taxonomy: {
				frequency: 'high',
				locations: ['city', 'highway'],
				tags: ['triangle', 'red', 'white'],
			},
		},
		{
			id: '206_halt',
			filename: '206_halt.svg',
			taxonomy: {
				frequency: 'high',
				locations: ['city'],
				tags: ['octogon', 'red', 'white'],
			},
		},
		{
			id: '208_gegenverkehr-vorrang',
			filename: '208_gegenverkehr-vorrang.svg',
			taxonomy: {
				frequency: 'low',
				locations: ['city', 'highway'],
				tags: ['circle', 'red', 'white', 'black'],
			},
		},
		{
			id: '272_wendens-verbot',
			filename: '272_wendens-verbot.svg',
			taxonomy: {
				frequency: 'medium',
				locations: ['city', 'highway'],
				tags: ['circle', 'red'],
			},
		},
		{
			id: '250_fahrzeuge-verbot',
			filename: '250_fahrzeuge-verbot.svg',
			taxonomy: {
				frequency: 'high',
				locations: ['city', 'highway'],
				tags: ['circle', 'red'],
			},
		},
		{
			id: '267_einfahrt-verbot',
			filename: '267_einfahrt-verbot.svg',
			taxonomy: {
				frequency: 'high',
				locations: ['city', 'highway'],
				tags: ['circle', 'red'],
			},
		},
		{
			id: '209_fahrtrichtung-rechts',
			filename: '209_fahrtrichtung-rechts.svg',
			taxonomy: {
				frequency: 'medium',
				locations: ['city'],
				tags: ['circle', 'blue', 'white', 'right'],
			},
		},
		{
			id: '209-10_fahrtrichtung-links',
			filename: '209-10_fahrtrichtung-links.svg',
			taxonomy: {
				frequency: 'medium',
				locations: ['city'],
				tags: ['circle', 'blue', 'white', 'left'],
			},
		},
		{
			id: '209-30_fahrtrichtung-geradeaus',
			filename: '209-30_fahrtrichtung-geradeaus.svg',
			taxonomy: {
				frequency: 'medium',
				locations: ['city'],
				tags: ['circle', 'blue', 'white'],
			},
		},
		{
			id: '211-10_fahrtrichtung-hier-links',
			filename: '211-10_fahrtrichtung-hier-links.svg',
			taxonomy: {
				frequency: 'medium',
				locations: ['city'],
				tags: ['circle', 'blue', 'white', 'left'],
			},
		},
		{
			id: '211_fahrtrichtung-hier-rechts',
			filename: '211_fahrtrichtung-hier-rechts.svg',
			taxonomy: {
				frequency: 'medium',
				locations: ['city'],
				tags: ['circle', 'blue', 'white', 'right'],
			},
		},
		{
			id: '215_kreisverkehr',
			filename: '215_kreisverkehr.svg',
			taxonomy: {
				frequency: 'medium',
				locations: ['city'],
				tags: ['circle', 'blue', 'white'],
			},
		},
		{
			id: '222-10_vorbeifahrt-links',
			filename: '222-10_vorbeifahrt-links.svg',
			taxonomy: {
				frequency: 'medium',
				locations: ['city', 'highway'],
				tags: ['circle', 'blue', 'white', 'left'],
			},
		},
		{
			id: '222_vorbeifahrt-rechts',
			filename: '222_vorbeifahrt-rechts.svg',
			taxonomy: {
				frequency: 'medium',
				locations: ['city', 'highway'],
				tags: ['circle', 'blue', 'white', 'right'],
			},
		},
		{
			id: '237_sonderweg-radfahrer',
			filename: '237_sonderweg-radfahrer.svg',
			taxonomy: {
				frequency: 'high',
				locations: ['city'],
				tags: ['circle', 'blue'],
			},
		},
		{
			id: '239_gehweg',
			filename: '239_gehweg.svg',
			taxonomy: {
				frequency: 'high',
				locations: ['city'],
				tags: ['circle', 'blue'],
			},
		},
		{
			id: '245_bussonderfahrstreifen',
			filename: '245_bussonderfahrstreifen.svg',
			taxonomy: {
				frequency: 'low',
				locations: ['city'],
				tags: ['circle', 'blue'],
			},
		},
		{
			id: '224_haltestelle',
			filename: '224_haltestelle.svg',
			taxonomy: {
				frequency: 'medium',
				locations: ['city'],
				tags: ['circle', 'green', 'yellow'],
			},
		},
		{
			id: '229_taxenstand',
			filename: '229_taxenstand.svg',
			taxonomy: {
				frequency: 'medium',
				locations: ['city'],
				tags: ['rectangle', 'blue'],
			},
		},
		{
			id: '242.1_fussgaengerzone-beginn',
			filename: '242.1_fussgaengerzone-beginn.svg',
			taxonomy: {
				frequency: 'medium',
				locations: ['city'],
				tags: ['square', 'white'],
			},
		},
		{
			id: '242.2_fussgaengerzone-ende',
			filename: '242.2_fussgaengerzone-ende.svg',
			taxonomy: {
				frequency: 'medium',
				locations: ['city'],
				tags: ['square', 'white'],
			},
		},
		{
			id: '244.3_fahrradzone-beginn',
			filename: '244.3_fahrradzone-beginn.svg',
			taxonomy: {
				frequency: 'medium',
				locations: ['city'],
				tags: ['square', 'white'],
			},
		},
		{
			id: '244.4_fahrradzone-ende',
			filename: '244.4_fahrradzone-ende.svg',
			taxonomy: {
				frequency: 'medium',
				locations: ['city'],
				tags: ['square', 'white'],
			},
		},
		{
			id: '270.1_umweltzone-beginn',
			filename: '270.1_umweltzone-beginn.svg',
			taxonomy: {
				frequency: 'low',
				locations: ['city'],
				tags: ['square', 'white'],
			},
		},
		{
			id: '270.2_umweltzone-ende',
			filename: '270.2_umweltzone-ende.svg',
			taxonomy: {
				frequency: 'low',
				locations: ['city'],
				tags: ['square', 'white'],
			},
		},
		{
			id: '274.1_zone-30-beginn',
			filename: '274.1_zone-30-beginn.svg',
			taxonomy: {
				frequency: 'low',
				locations: ['city'],
				tags: ['square', 'white'],
			},
		},
		{
			id: '274.2_zone-30-ende',
			filename: '274.2_zone-30-ende.svg',
			taxonomy: {
				frequency: 'low',
				locations: ['city'],
				tags: ['square', 'white'],
			},
		},
		{
			id: '274-30_hoechstgeschwindigkeit-30',
			filename: '274-30_hoechstgeschwindigkeit-30.svg',
			taxonomy: {
				frequency: 'medium',
				locations: ['city'],
				tags: ['circle', 'red'],
			},
		},
		{
			id: '274-40_hoechstgeschwindigkeit-40',
			filename: '274-40_hoechstgeschwindigkeit-40.svg',
			taxonomy: {
				frequency: 'low',
				locations: ['city'],
				tags: ['circle', 'red'],
			},
		},
		{
			id: '274-50_hoechstgeschwindigkeit-50',
			filename: '274-50_hoechstgeschwindigkeit-50.svg',
			taxonomy: {
				frequency: 'high',
				locations: ['city', 'highway'],
				tags: ['circle', 'red'],
			},
		},
		{
			id: '274-60_hoechstgeschwindigkeit-60',
			filename: '274-60_hoechstgeschwindigkeit-60.svg',
			taxonomy: {
				frequency: 'medium',
				locations: ['city', 'highway'],
				tags: ['circle', 'red'],
			},
		},
		{
			id: '274-70_hoechstgeschwindigkeit-70',
			filename: '274-70_hoechstgeschwindigkeit-70.svg',
			taxonomy: {
				frequency: 'low',
				locations: ['city', 'highway'],
				tags: ['circle', 'red'],
			},
		},
		{
			id: '274-80_hoechstgeschwindigkeit-80',
			filename: '274-80_hoechstgeschwindigkeit-80.svg',
			taxonomy: {
				frequency: 'medium',
				locations: ['city', 'highway'],
				tags: ['circle', 'red'],
			},
		},
		{
			id: '274-90_hoechstgeschwindigkeit-90',
			filename: '274-90_hoechstgeschwindigkeit-90.svg',
			taxonomy: {
				frequency: 'low',
				locations: ['city', 'highway'],
				tags: ['circle', 'red'],
			},
		},
		{
			id: '274-100_hoechstgeschwindigkeit-100',
			filename: '274-100_hoechstgeschwindigkeit-100.svg',
			taxonomy: {
				frequency: 'medium',
				locations: ['city', 'highway'],
				tags: ['circle', 'red'],
			},
		},
		{
			id: '274-110_hoechstgeschwindigkeit-110',
			filename: '274-110_hoechstgeschwindigkeit-110.svg',
			taxonomy: {
				frequency: 'medium',
				locations: ['highway'],
				tags: ['circle', 'red'],
			},
		},
		{
			id: '274-120_hoechstgeschwindigkeit-120',
			filename: '274-120_hoechstgeschwindigkeit-120.svg',
			taxonomy: {
				frequency: 'medium',
				locations: ['highway'],
				tags: ['circle', 'red'],
			},
		},
		{
			id: '274-130_hoechstgeschwindigkeit-130',
			filename: '274-130_hoechstgeschwindigkeit-130.svg',
			taxonomy: {
				frequency: 'medium',
				locations: ['highway'],
				tags: ['circle', 'red'],
			},
		},
		{
			id: '282_ende-saemtlicher-verbote',
			filename: '282_ende-saemtlicher-verbote.svg',
			taxonomy: {
				frequency: 'medium',
				locations: ['city', 'highway'],
				tags: ['circle', 'white'],
			},
		},
		{
			id: '276_ueberholverbot-kraftfahrzeuge',
			filename: '276_ueberholverbot-kraftfahrzeuge.svg',
			taxonomy: {
				frequency: 'medium',
				locations: ['city', 'highway'],
				tags: ['circle', 'red'],
			},
		},
		{
			id: '277_ueberholverbot-kraftfahrzeuge-schwer',
			filename: '277_ueberholverbot-kraftfahrzeuge-schwer.svg',
			taxonomy: {
				frequency: 'medium',
				locations: ['city', 'highway'],
				tags: ['circle', 'red'],
			},
		},
		{
			id: '280_ueberholverbot-kraftfahrzeuge-ende',
			filename: '280_ueberholverbot-kraftfahrzeuge-ende.svg',
			taxonomy: {
				frequency: 'medium',
				locations: ['city', 'highway'],
				tags: ['circle', 'white'],
			},
		},
		{
			id: '281_ueberholverbot-kraftfahrzeuge-schwer-ende',
			filename: '281_ueberholverbot-kraftfahrzeuge-schwer-ende.svg',
			taxonomy: {
				frequency: 'medium',
				locations: ['city', 'highway'],
				tags: ['circle', 'white'],
			},
		},
		{
			id: '283_haltverbot-absolutes',
			filename: '283_haltverbot-absolutes.svg',
			taxonomy: {
				frequency: 'medium',
				locations: ['city'],
				tags: ['circle', 'red'],
			},
		},
		{
			id: '290.1_zone-halteverbot-beginn',
			filename: '290.1_zone-halteverbot-beginn.svg',
			taxonomy: {
				frequency: 'medium',
				locations: ['city'],
				tags: ['square', 'white'],
			},
		},
		{
			id: '290.2_zone-halteverbot-ende',
			filename: '290.2_zone-halteverbot-ende.svg',
			taxonomy: {
				frequency: 'medium',
				locations: ['city'],
				tags: ['square', 'white'],
			},
		},
		{
			id: '314.1_zone-parkraum-beginn',
			filename: '314.1_zone-parkraum-beginn.svg',
			taxonomy: {
				frequency: 'medium',
				locations: ['city'],
				tags: ['square', 'white', 'blue'],
			},
		},
		{
			id: '314.2_zone-parkraum-ende',
			filename: '314.2_zone-parkraum-ende.svg',
			taxonomy: {
				frequency: 'medium',
				locations: ['city'],
				tags: ['square', 'white', 'blue'],
			},
		},
		{
			id: '314_parken',
			filename: '314_parken.svg',
			taxonomy: {
				frequency: 'high',
				locations: ['city', 'highway'],
				tags: ['square', 'blue'],
			},
		},
		{
			id: '314-50_parkhaus-parkgarage',
			filename: '314-50_parkhaus-parkgarage.svg',
			taxonomy: {
				frequency: 'medium',
				locations: ['city'],
				tags: ['square', 'blue'],
			},
		},
		{
			id: '325.1_verkehrsberuhigtes-bereich-beginn',
			filename: '325.1_verkehrsberuhigtes-bereich-beginn.svg',
			taxonomy: {
				frequency: 'low',
				locations: ['city'],
				tags: ['rectangle', 'blue'],
			},
		},
		{
			id: '325.2_verkehrsberuhigtes-bereichs-ende',
			filename: '325.2_verkehrsberuhigtes-bereichs-ende.svg',
			taxonomy: {
				frequency: 'low',
				locations: ['city'],
				tags: ['rectangle', 'blue'],
			},
		},
		{
			id: '308_vorrang-vor-dem-gegenverkehr',
			filename: '308_vorrang-vor-dem-gegenverkehr.svg',
			taxonomy: {
				frequency: 'medium',
				locations: ['city', 'highway'],
				tags: ['square', 'blue'],
			},
		},
		{
			id: '327_tunnel',
			filename: '327_tunnel.svg',
			taxonomy: {
				frequency: 'low',
				locations: ['city', 'highway'],
				tags: ['square', 'blue'],
			},
		},
		{
			id: '330.1_autobahn',
			filename: '330.1_autobahn.svg',
			taxonomy: {
				frequency: 'low',
				locations: ['city', 'highway'],
				tags: ['square', 'blue'],
			},
		},
		{
			id: '330.2_autobahn-ende',
			filename: '330.2_autobahn-ende.svg',
			taxonomy: {
				frequency: 'low',
				locations: ['city', 'highway'],
				tags: ['square', 'blue'],
			},
		},
		{
			id: '331.1_kraftfahrstrasse-beginn',
			filename: '331.1_kraftfahrstrasse-beginn.svg',
			taxonomy: {
				frequency: 'low',
				locations: ['city', 'highway'],
				tags: ['square', 'blue'],
			},
		},
		{
			id: '331.2_kraftfahrstrasse-ende',
			filename: '331.2_kraftfahrstrasse-ende.svg',
			taxonomy: {
				frequency: 'low',
				locations: ['city', 'highway'],
				tags: ['square', 'blue'],
			},
		},
		{
			id: '350-10_fussgaengerueberweg-rechts',
			filename: '350-10_fussgaengerueberweg-rechts.svg',
			taxonomy: {
				frequency: 'high',
				locations: ['city'],
				tags: ['square', 'blue', 'right', 'pedestrian'],
			},
		},
		{
			id: '350-20_fussgaengerueberweg-links',
			filename: '350-20_fussgaengerueberweg-links.svg',
			taxonomy: {
				frequency: 'high',
				locations: ['city'],
				tags: ['square', 'blue', 'left', 'pedestrian'],
			},
		},
		{
			id: '357_sackgasse',
			filename: '357_sackgasse.svg',
			taxonomy: {
				frequency: 'high',
				locations: ['city'],
				tags: ['square', 'blue'],
			},
		},
		{
			id: '333_ausfahrt-autobahn',
			filename: '333_ausfahrt-autobahn.svg',
			taxonomy: {
				frequency: 'high',
				locations: ['city'],
				tags: ['rectangle', 'blue', 'landscape'],
			},
		},
		{
			id: '333.1_ausfahrt-nicht-autobahn',
			filename: '333.1_ausfahrt-nicht-autobahn.svg',
			taxonomy: {
				frequency: 'high',
				locations: ['city'],
				tags: ['rectangle', 'yellow', 'landscape'],
			},
		},
		{
			id: '220-10_einbahnstrasse-links',
			filename: '220-10_einbahnstrasse-links.svg',
			taxonomy: {
				frequency: 'medium',
				locations: ['city'],
				tags: ['rectangle', 'blue', 'white', 'left'],
			},
		},
		{
			id: '220-20_einbahnstrasse-rechts',
			filename: '220-20_einbahnstrasse-rechts.svg',
			taxonomy: {
				frequency: 'medium',
				locations: ['city'],
				tags: ['rectangle', 'blue', 'white', 'right'],
			},
		},
		{
			id: '454-10_umleitung-links',
			filename: '454-10_umleitung-links.svg',
			taxonomy: {
				frequency: 'low',
				locations: ['city', 'highway'],
				tags: ['rectangle', 'yellow', 'left'],
			},
		},
		{
			id: '454-20_umleitung-rechts',
			filename: '454-20_umleitung-rechts.svg',
			taxonomy: {
				frequency: 'low',
				locations: ['city', 'highway'],
				tags: ['rectangle', 'yellow', 'right'],
			},
		},
		{
			id: '720_gruenpfeil',
			filename: '720_gruenpfeil.svg',
			taxonomy: {
				frequency: 'low',
				locations: ['city'],
				tags: ['square', 'black', 'green'],
			},
		},
		{
			id: '306_vorfahrtstrasse',
			filename: '306_vorfahrtstrasse.svg',
			taxonomy: {
				frequency: 'medium',
				locations: ['city'],
				tags: ['diamond', 'white', 'yellow'],
			},
		},
	],
};
export default config;
