import { Injectable } from "@angular/core";
import { CountryISO } from '../enums/country-iso.enum';

@Injectable()
export class CountryCode {
	public allCountries = {
		english: [
			[
				'Afghanistan (‫افغانستان‬‎)',
				CountryISO.Afghanistan,
				'93'
			],
			[
				'Albania (Shqipëri)',
				CountryISO.Albania,
				'355'
			],
			[
				'Algeria (‫الجزائر‬‎)',
				CountryISO.Algeria,
				'213'
			],
			[
				'American Samoa',
				'as',
				'1',
				1,
				[
					'684',
				]
			],
			[
				'Andorra',
				CountryISO.Andorra,
				'376'
			],
			[
				'Angola',
				CountryISO.Angola,
				'244'
			],
			[
				'Anguilla',
				'ai',
				'1',
				1,
				[
					'264',
				]
			],
			[
				'Antigua and Barbuda',
				'ag',
				'1',
				1,
				[
					'268',
				]
			],
			[
				'Argentina',
				CountryISO.Argentina,
				'54'
			],
			[
				'Armenia (Հայաստան)',
				CountryISO.Armenia,
				'374'
			],
			[
				'Aruba',
				CountryISO.Aruba,
				'297'
			],
			[
				'Australia',
				CountryISO.Australia,
				'61',
				0
			],
			[
				'Austria (Österreich)',
				CountryISO.Austria,
				'43'
			],
			[
				'Azerbaijan (Azərbaycan)',
				CountryISO.Azerbaijan,
				'994'
			],
			[
				'Bahamas',
				'bs',
				'1',
				1,
				[
					'242',
				]
			],
			[
				'Bahrain (‫البحرين‬‎)',
				CountryISO.Bahrain,
				'973'
			],
			[
				'Bangladesh (বাংলাদেশ)',
				CountryISO.Bangladesh,
				'880'
			],
			[
				'Barbados',
				'bb',
				'1',
				1,
				[
					'246',
				]
			],
			[
				'Belarus (Беларусь)',
				CountryISO.Belarus,
				'375'
			],
			[
				'Belgium (België)',
				CountryISO.Belgium,
				'32'
			],
			[
				'Belize',
				CountryISO.Belize,
				'501'
			],
			[
				'Benin (Bénin)',
				CountryISO.Benin,
				'229'
			],
			[
				'Bermuda',
				'bm',
				'1',
				1,
				[
					'441',
				]
			],
			[
				'Bhutan (འབྲུག)',
				CountryISO.Bhutan,
				'975'
			],
			[
				'Bolivia',
				CountryISO.Bolivia,
				'591'
			],
			[
				'Bosnia and Herzegovina (Босна и Херцеговина)',
				CountryISO.BosniaAndHerzegovina,
				'387'
			],
			[
				'Botswana',
				CountryISO.Botswana,
				'267'
			],
			[
				'Brazil (Brasil)',
				CountryISO.Brazil,
				'55'
			],
			[
				'British Indian Ocean Territory',
				CountryISO.BritishIndianOceanTerritory,
				'246'
			],
			[
				'British Virgin Islands',
				'vg',
				'1',
				1,
				[
					'284',
				]
			],
			[
				'Brunei',
				CountryISO.Brunei,
				'673'
			],
			[
				'Bulgaria (България)',
				CountryISO.Bulgaria,
				'359'
			],
			[
				'Burkina Faso',
				CountryISO.BurkinaFaso,
				'226'
			],
			[
				'Burundi (Uburundi)',
				CountryISO.Burundi,
				'257'
			],
			[
				'Cambodia (កម្ពុជា)',
				CountryISO.Cambodia,
				'855'
			],
			[
				'Cameroon (Cameroun)',
				CountryISO.Cameroon,
				'237'
			],
			[
				'Canada',
				CountryISO.Canada,
				'1',
				1,
				[
					'204', '226', '236', '249', '250', '289', '306', '343', '365', '387', '403', '416',
					'418', '431', '437', '438', '450', '506', '514', '519', '548', '579', '581', '587',
					'604', '613', '639', '647', '672', '705', '709', '742', '778', '780', '782', '807',
					'819', '825', '867', '873', '902', '905'
				]
			],
			[
				'Cape Verde (Kabu Verdi)',
				CountryISO.CapeVerde,
				'238'
			],
			[
				'Caribbean Netherlands',
				CountryISO.CaribbeanNetherlands,
				'599',
				1
			],
			[
				'Cayman Islands',
				'ky',
				'1',
				1,
				[
					'345',
				]
			],
			[
				'Central African Republic (République centrafricaine)',
				CountryISO.CentralAfricanRepublic,
				'236'
			],
			[
				'Chad (Tchad)',
				CountryISO.Chad,
				'235'
			],
			[
				'Chile',
				CountryISO.Chile,
				'56'
			],
			[
				'China (中国)',
				CountryISO.China,
				'86'
			],
			[
				'Christmas Island',
				CountryISO.ChristmasIsland,
				'61',
				2
			],
			[
				'Cocos (Keeling) Islands',
				CountryISO.Cocos,
				'61',
				1
			],
			[
				'Colombia',
				CountryISO.Colombia,
				'57'
			],
			[
				'Comoros (‫جزر القمر‬‎)',
				CountryISO.Comoros,
				'269'
			],
			[
				'Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)',
				CountryISO.CongoDRCJamhuriYaKidemokrasiaYaKongo,
				'243'
			],
			[
				'Congo (Republic) (Congo-Brazzaville)',
				CountryISO.CongoRepublicCongoBrazzaville,
				'242'
			],
			[
				'Cook Islands',
				CountryISO.CookIslands,
				'682'
			],
			[
				'Costa Rica',
				CountryISO.CostaRica,
				'506'
			],
			[
				'Côte d’Ivoire',
				CountryISO.CôteDIvoire,
				'225'
			],
			[
				'Croatia (Hrvatska)',
				CountryISO.Croatia,
				'385'
			],
			[
				'Cuba',
				CountryISO.Cuba,
				'53'
			],
			[
				'Curaçao',
				CountryISO.Curaçao,
				'599',
				0
			],
			[
				'Cyprus (Κύπρος)',
				CountryISO.Cyprus,
				'357'
			],
			[
				'Czech Republic (Česká republika)',
				CountryISO.CzechRepublic,
				'420'
			],
			[
				'Denmark (Danmark)',
				CountryISO.Denmark,
				'45'
			],
			[
				'Djibouti',
				CountryISO.Djibouti,
				'253'
			],
			[
				'Dominica',
				CountryISO.Dominica,
				'1767'
			],
			[
				'Dominican Republic (República Dominicana)',
				CountryISO.DominicanRepublic,
				'1',
				2,
				['809', '829', '849']
			],
			[
				'Ecuador',
				CountryISO.Ecuador,
				'593'
			],
			[
				'Egypt (‫مصر‬‎)',
				CountryISO.Egypt,
				'20'
			],
			[
				'El Salvador',
				CountryISO.ElSalvador,
				'503'
			],
			[
				'Equatorial Guinea (Guinea Ecuatorial)',
				CountryISO.EquatorialGuinea,
				'240'
			],
			[
				'Eritrea',
				CountryISO.Eritrea,
				'291'
			],
			[
				'Estonia (Eesti)',
				CountryISO.Estonia,
				'372'
			],
			[
				'Ethiopia',
				CountryISO.Ethiopia,
				'251'
			],
			[
				'Falkland Islands (Islas Malvinas)',
				CountryISO.FalklandIslands,
				'500'
			],
			[
				'Faroe Islands (Føroyar)',
				CountryISO.FaroeIslands,
				'298'
			],
			[
				'Fiji',
				CountryISO.Fiji,
				'679'
			],
			[
				'Finland (Suomi)',
				CountryISO.Finland,
				'358',
				0
			],
			[
				'France',
				CountryISO.France,
				'33'
			],
			[
				'French Guiana (Guyane française)',
				CountryISO.FrenchGuiana,
				'594'
			],
			[
				'French Polynesia (Polynésie française)',
				CountryISO.FrenchPolynesia,
				'689'
			],
			[
				'Gabon',
				CountryISO.Gabon,
				'241'
			],
			[
				'Gambia',
				CountryISO.Gambia,
				'220'
			],
			[
				'Georgia (საქართველო)',
				CountryISO.Georgia,
				'995'
			],
			[
				'Germany (Deutschland)',
				CountryISO.Germany,
				'49'
			],
			[
				'Ghana (Gaana)',
				CountryISO.Ghana,
				'233'
			],
			[
				'Gibraltar',
				CountryISO.Gibraltar,
				'350'
			],
			[
				'Greece (Ελλάδα)',
				CountryISO.Greece,
				'30'
			],
			[
				'Greenland (Kalaallit Nunaat)',
				CountryISO.Greenland,
				'299'
			],
			[
				'Grenada',
				CountryISO.Grenada,
				'1473'
			],
			[
				'Guadeloupe',
				CountryISO.Guadeloupe,
				'590',
				0
			],
			[
				'Guam',
				'gu',
				'1',
				1,
				[
					'671',
				]
			],
			[
				'Guatemala',
				CountryISO.Guatemala,
				'502'
			],
			[
				'Guernsey',
				CountryISO.Guernsey,
				'44',
				1,
				[1481]
			],
			[
				'Guinea (Guinée)',
				CountryISO.Guinea,
				'224'
			],
			[
				'Guinea-Bissau (Guiné Bissau)',
				CountryISO.GuineaBissau,
				'245'
			],
			[
				'Guyana',
				CountryISO.Guyana,
				'592'
			],
			[
				'Haiti',
				CountryISO.Haiti,
				'509'
			],
			[
				'Honduras',
				CountryISO.Honduras,
				'504'
			],
			[
				'Hong Kong (香港)',
				CountryISO.HongKong,
				'852'
			],
			[
				'Hungary (Magyarország)',
				CountryISO.Hungary,
				'36'
			],
			[
				'Iceland (Ísland)',
				CountryISO.Iceland,
				'354'
			],
			[
				'India (भारत)',
				CountryISO.India,
				'91'
			],
			[
				'Indonesia',
				CountryISO.Indonesia,
				'62'
			],
			[
				'Iran (‫ایران‬‎)',
				CountryISO.Iran,
				'98'
			],
			[
				'Iraq (‫العراق‬‎)',
				CountryISO.Iraq,
				'964'
			],
			[
				'Ireland',
				CountryISO.Ireland,
				'353'
			],
			[
				'Isle of Man',
				CountryISO.IsleOfMan,
				'44',
				2,
				[1624]
			],
			[
				'Israel (‫ישראל‬‎)',
				CountryISO.Israel,
				'972'
			],
			[
				'Italy (Italia)',
				CountryISO.Italy,
				'39',
				0
			],
			[
				'Jamaica',
				'jm',
				'1',
				1,
				[
					'876',
				]
			],
			[
				'Japan (日本)',
				CountryISO.Japan,
				'81'
			],
			[
				'Jersey',
				CountryISO.Jersey,
				'44',
				3,
				[1534]
			],
			[
				'Jordan (‫الأردن‬‎)',
				CountryISO.Jordan,
				'962'
			],
			[
				'Kazakhstan (Казахстан)',
				CountryISO.Kazakhstan,
				'7',
				1
			],
			[
				'Kenya',
				CountryISO.Kenya,
				'254'
			],
			[
				'Kiribati',
				CountryISO.Kiribati,
				'686'
			],
			[
				'Kosovo',
				CountryISO.Kosovo,
				'383'
			],
			[
				'Kuwait (‫الكويت‬‎)',
				CountryISO.Kuwait,
				'965'
			],
			[
				'Kyrgyzstan (Кыргызстан)',
				CountryISO.Kyrgyzstan,
				'996'
			],
			[
				'Laos (ລາວ)',
				CountryISO.Laos,
				'856'
			],
			[
				'Latvia (Latvija)',
				CountryISO.Latvia,
				'371'
			],
			[
				'Lebanon (‫لبنان‬‎)',
				CountryISO.Lebanon,
				'961'
			],
			[
				'Lesotho',
				CountryISO.Lesotho,
				'266'
			],
			[
				'Liberia',
				CountryISO.Liberia,
				'231'
			],
			[
				'Libya (‫ليبيا‬‎)',
				CountryISO.Libya,
				'218'
			],
			[
				'Liechtenstein',
				CountryISO.Liechtenstein,
				'423'
			],
			[
				'Lithuania (Lietuva)',
				CountryISO.Lithuania,
				'370'
			],
			[
				'Luxembourg',
				CountryISO.Luxembourg,
				'352'
			],
			[
				'Macau (澳門)',
				CountryISO.Macau,
				'853'
			],
			[
				'Macedonia (FYROM) (Македонија)',
				CountryISO.Macedonia,
				'389'
			],
			[
				'Madagascar (Madagasikara)',
				CountryISO.Madagascar,
				'261'
			],
			[
				'Malawi',
				CountryISO.Malawi,
				'265'
			],
			[
				'Malaysia',
				CountryISO.Malaysia,
				'60'
			],
			[
				'Maldives',
				CountryISO.Maldives,
				'960'
			],
			[
				'Mali',
				CountryISO.Mali,
				'223'
			],
			[
				'Malta',
				CountryISO.Malta,
				'356'
			],
			[
				'Marshall Islands',
				CountryISO.MarshallIslands,
				'692'
			],
			[
				'Martinique',
				CountryISO.Martinique,
				'596'
			],
			[
				'Mauritania (‫موريتانيا‬‎)',
				CountryISO.Mauritania,
				'222'
			],
			[
				'Mauritius (Moris)',
				CountryISO.Mauritius,
				'230'
			],
			[
				'Mayotte',
				CountryISO.Mayotte,
				'262',
				1
			],
			[
				'Mexico (México)',
				CountryISO.Mexico,
				'52'
			],
			[
				'Micronesia',
				CountryISO.Micronesia,
				'691'
			],
			[
				'Moldova (Republica Moldova)',
				CountryISO.Moldova,
				'373'
			],
			[
				'Monaco',
				CountryISO.Monaco,
				'377'
			],
			[
				'Mongolia (Монгол)',
				CountryISO.Mongolia,
				'976'
			],
			[
				'Montenegro (Crna Gora)',
				CountryISO.Montenegro,
				'382'
			],
			[
				'Montserrat',
				'ms',
				'1',
				1,
				[
					'664',
				]
			],
			[
				'Morocco (‫المغرب‬‎)',
				CountryISO.Morocco,
				'212',
				0
			],
			[
				'Mozambique (Moçambique)',
				CountryISO.Mozambique,
				'258'
			],
			[
				'Myanmar (Burma) (မြန်မာ)',
				CountryISO.Myanmar,
				'95'
			],
			[
				'Namibia (Namibië)',
				CountryISO.Namibia,
				'264'
			],
			[
				'Nauru',
				CountryISO.Nauru,
				'674'
			],
			[
				'Nepal (नेपाल)',
				CountryISO.Nepal,
				'977'
			],
			[
				'Netherlands (Nederland)',
				CountryISO.Netherlands,
				'31'
			],
			[
				'New Caledonia (Nouvelle-Calédonie)',
				CountryISO.NewCaledonia,
				'687'
			],
			[
				'New Zealand',
				CountryISO.NewZealand,
				'64'
			],
			[
				'Nicaragua',
				CountryISO.Nicaragua,
				'505'
			],
			[
				'Niger (Nijar)',
				CountryISO.Niger,
				'227'
			],
			[
				'Nigeria',
				CountryISO.Nigeria,
				'234'
			],
			[
				'Niue',
				CountryISO.Niue,
				'683'
			],
			[
				'Norfolk Island',
				CountryISO.NorfolkIsland,
				'672'
			],
			[
				'North Korea (조선 민주주의 인민 공화국)',
				CountryISO.NorthKorea,
				'850'
			],
			[
				'Northern Mariana Islands',
				CountryISO.NorthernMarianaIslands,
				'1670'
			],
			[
				'Norway (Norge)',
				CountryISO.Norway,
				'47',
				0
			],
			[
				'Oman (‫عُمان‬‎)',
				CountryISO.Oman,
				'968'
			],
			[
				'Pakistan (‫پاکستان‬‎)',
				CountryISO.Pakistan,
				'92'
			],
			[
				'Palau',
				CountryISO.Palau,
				'680'
			],
			[
				'Palestine (‫فلسطين‬‎)',
				CountryISO.Palestine,
				'970'
			],
			[
				'Panama (Panamá)',
				CountryISO.Panama,
				'507'
			],
			[
				'Papua New Guinea',
				CountryISO.PapuaNewGuinea,
				'675'
			],
			[
				'Paraguay',
				CountryISO.Paraguay,
				'595'
			],
			[
				'Peru (Perú)',
				CountryISO.Peru,
				'51'
			],
			[
				'Philippines',
				CountryISO.Philippines,
				'63'
			],
			[
				'Poland (Polska)',
				CountryISO.Poland,
				'48'
			],
			[
				'Portugal',
				CountryISO.Portugal,
				'351'
			],
			[
				'Puerto Rico',
				CountryISO.PuertoRico,
				'1',
				3,
				['787', '939']
			],
			[
				'Qatar (‫قطر‬‎)',
				CountryISO.Qatar,
				'974'
			],
			[
				'Réunion (La Réunion)',
				CountryISO.Réunion,
				'262',
				0
			],
			[
				'Romania (România)',
				CountryISO.Romania,
				'40'
			],
			[
				'Russia (Россия)',
				CountryISO.Russia,
				'7',
				0
			],
			[
				'Rwanda',
				CountryISO.Rwanda,
				'250'
			],
			[
				'Saint Barthélemy (Saint-Barthélemy)',
				CountryISO.SaintBarthélemy,
				'590',
				1
			],
			[
				'Saint Helena',
				CountryISO.SaintHelena,
				'290'
			],
			[
				'Saint Kitts and Nevis',
				CountryISO.SaintKittsAndNevis,
				'1869'
			],
			[
				'Saint Lucia',
				'lc',
				'1',
				1,
				[
					'758',
				]
			],
			[
				'Saint Martin (Saint-Martin (partie française))',
				CountryISO.SaintMartin,
				'590',
				2
			],
			[
				'Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)',
				CountryISO.SaintPierreAndMiquelon,
				'508'
			],
			[
				'Saint Vincent and the Grenadines',
				'vc',
				'1',
				1,
				[
					'784',
				]
			],
			[
				'Samoa',
				CountryISO.Samoa,
				'685'
			],
			[
				'San Marino',
				CountryISO.SanMarino,
				'378'
			],
			[
				'São Tomé and Príncipe (São Tomé e Príncipe)',
				CountryISO.SãoToméAndPríncipe,
				'239'
			],
			[
				'Saudi Arabia (‫المملكة العربية السعودية‬‎)',
				CountryISO.SaudiArabia,
				'966'
			],
			[
				'Senegal (Sénégal)',
				CountryISO.Senegal,
				'221'
			],
			[
				'Serbia (Србија)',
				CountryISO.Serbia,
				'381'
			],
			[
				'Seychelles',
				CountryISO.Seychelles,
				'248'
			],
			[
				'Sierra Leone',
				CountryISO.SierraLeone,
				'232'
			],
			[
				'Singapore',
				CountryISO.Singapore,
				'65'
			],
			[
				'Sint Maarten',
				'sx',
				'1',
				1,
				[
					'721',
				]
			],
			[
				'Slovakia (Slovensko)',
				CountryISO.Slovakia,
				'421'
			],
			[
				'Slovenia (Slovenija)',
				CountryISO.Slovenia,
				'386'
			],
			[
				'Solomon Islands',
				CountryISO.SolomonIslands,
				'677'
			],
			[
				'Somalia (Soomaaliya)',
				CountryISO.Somalia,
				'252'
			],
			[
				'South Africa',
				CountryISO.SouthAfrica,
				'27'
			],
			[
				'South Korea (대한민국)',
				CountryISO.SouthKorea,
				'82'
			],
			[
				'South Sudan (‫جنوب السودان‬‎)',
				CountryISO.SouthSudan,
				'211'
			],
			[
				'Spain (España)',
				CountryISO.Spain,
				'34'
			],
			[
				'Sri Lanka (ශ්‍රී ලංකාව)',
				CountryISO.SriLanka,
				'94'
			],
			[
				'Sudan (‫السودان‬‎)',
				CountryISO.Sudan,
				'249'
			],
			[
				'Suriname',
				CountryISO.Suriname,
				'597'
			],
			[
				'Svalbard and Jan Mayen',
				CountryISO.SvalbardAndJanMayen,
				'47',
				1
			],
			[
				'Swaziland',
				CountryISO.Swaziland,
				'268'
			],
			[
				'Sweden (Sverige)',
				CountryISO.Sweden,
				'46'
			],
			[
				'Switzerland (Schweiz)',
				CountryISO.Switzerland,
				'41'
			],
			[
				'Syria (‫سوريا‬‎)',
				CountryISO.Syria,
				'963'
			],
			[
				'Taiwan (台灣)',
				CountryISO.Taiwan,
				'886'
			],
			[
				'Tajikistan',
				CountryISO.Tajikistan,
				'992'
			],
			[
				'Tanzania',
				CountryISO.Tanzania,
				'255'
			],
			[
				'Thailand (ไทย)',
				CountryISO.Thailand,
				'66'
			],
			[
				'Timor-Leste',
				CountryISO.TimorLeste,
				'670'
			],
			[
				'Togo',
				CountryISO.Togo,
				'228'
			],
			[
				'Tokelau',
				CountryISO.Tokelau,
				'690'
			],
			[
				'Tonga',
				CountryISO.Tonga,
				'676'
			],
			[
				'Trinidad and Tobago',
				'tt',
				'1',
				1,
				[
					'868',
				]
			],
			[
				'Tunisia (‫تونس‬‎)',
				CountryISO.Tunisia,
				'216'
			],
			[
				'Turkey (Türkiye)',
				CountryISO.Turkey,
				'90'
			],
			[
				'Turkmenistan',
				CountryISO.Turkmenistan,
				'993'
			],
			[
				'Turks and Caicos Islands',
				CountryISO.TurksAndCaicosIslands,
				'1649'
			],
			[
				'Tuvalu',
				CountryISO.Tuvalu,
				'688'
			],
			[
				'U.S. Virgin Islands',
				'vi',
				'1',
				1,
				[
					'340',
				]
			],
			[
				'Uganda',
				CountryISO.Uganda,
				'256'
			],
			[
				'Ukraine (Україна)',
				CountryISO.Ukraine,
				'380'
			],
			[
				'United Arab Emirates (‫الإمارات العربية المتحدة‬‎)',
				CountryISO.UnitedArabEmirates,
				'971'
			],
			[
				'United Kingdom',
				CountryISO.UnitedKingdom,
				'44',
				0
			],
			[
				'United States',
				CountryISO.UnitedStates,
				'1',
				0
			],
			[
				'Uruguay',
				CountryISO.Uruguay,
				'598'
			],
			[
				'Uzbekistan (Oʻzbekiston)',
				CountryISO.Uzbekistan,
				'998'
			],
			[
				'Vanuatu',
				CountryISO.Vanuatu,
				'678'
			],
			[
				'Vatican City (Città del Vaticano)',
				CountryISO.VaticanCity,
				'39',
				1
			],
			[
				'Venezuela',
				CountryISO.Venezuela,
				'58'
			],
			[
				'Vietnam (Việt Nam)',
				CountryISO.Vietnam,
				'84'
			],
			[
				'Wallis and Futuna',
				CountryISO.WallisAndFutuna,
				'681'
			],
			[
				'Western Sahara (‫الصحراء الغربية‬‎)',
				CountryISO.WesternSahara,
				'212',
				1
			],
			[
				'Yemen (‫اليمن‬‎)',
				CountryISO.Yemen,
				'967'
			],
			[
				'Zambia',
				CountryISO.Zambia,
				'260'
			],
			[
				'Zimbabwe',
				CountryISO.Zimbabwe,
				'263'
			],
			[
				'Åland Islands',
				CountryISO.ÅlandIslands,
				'358',
				1
			]
		],
		arabic: [
			["افغانستان", "af", "93"],
			["ألبانيا", "al", "355"],
			["الجمهورية الجزائرية الديمقراطية الشعبية", "dz", "213"],
			["ساموا الأمريكية", "as", "1", 1, ["684"]],
			["اندورا", "ad", "376"],
			["انغولا", "ao", "244"],
			["أنغويلا", "ai", "1", 1, ["264"]],
			["انتيغوا وبربودا", "ag", "1", 1, ["268"]],
			["الارجنتين", "ar", "54"],
			["ارمينيا", "am", "374"],
			["أروبا", "aw", "297"],
			["استراليا", "au", "61", 0],
			["النمسا", "at", "43"],
			["أذربيجان", "az", "994"],
			["جزر البهاما", "bs", "1", 1, ["242"]],
			["مملكة البحرين", "bh", "973"],
			["بنغلاديش", "bd", "880"],
			["بربادوس", "bb", "1", 1, ["246"]],
			["بيلاروس", "by", "375"],
			["بلجيكا", "be", "32"],
			["بليز", "bz", "501"],
			["بنين", "bj", "229"],
			["جزر برمودا", "bm", "1", 1, ["441"]],
			["بوتان", "bt", "975"],
			["بوليفيا", "bo", "591"],
			["البوسنة والهرسك", "ba", "387"],
			["بوتسوانا", "bw", "267"],
			["البرازيل", "br", "55"],
			["الإقليم البريطاني في المحيط الهندي", "io", "246"],
			["جزر فيرجن البريطانية", "vg", "1", 1, ["284"]],
			["بروني", "bn", "673"],
			["بلغاريا", "bg", "359"],
			["بوركينا فاسو", "bf", "226"],
			["بوروندي", "bi", "257"],
			["كمبوديا", "kh", "855"],
			["كاميرون", "cm", "237"],
			[
				"كندا",
				"ca",
				"1",
				1,
				[
					"204",
					"226",
					"236",
					"249",
					"250",
					"289",
					"306",
					"343",
					"365",
					"387",
					"403",
					"416",
					"418",
					"431",
					"437",
					"438",
					"450",
					"506",
					"514",
					"519",
					"548",
					"579",
					"581",
					"587",
					"604",
					"613",
					"639",
					"647",
					"672",
					"705",
					"709",
					"742",
					"778",
					"780",
					"782",
					"807",
					"819",
					"825",
					"867",
					"873",
					"902",
					"905",
				],
			],
			["الرأس الاخضر", "cv", "238"],
			["هولندا الكاريبية", "bq", "599", 1],
			["جزر كايمان", "ky", "1", 1, ["345"]],
			["جمهورية افريقيا الوسطى", "cf", "236"],
			["جمهورية تشاد", "td", "235"],
			["شيلي", "cl", "56"],
			["صين", "cn", "86"],
			["جزيرة كريسماس", "cx", "61", 2],
			["جزر كوكوس (كيلينغ)", "cc", "61", 1],
			["كولومبيا", "co", "57"],
			["جمهورية جزرالقمر المتحدة", "km", "269"],
			["جمهورية الكونغو الديمقراطية", "cd", "243"],
			["جمهورية الكونغو", "cg", "242"],
			["جزر كوك", "ck", "682"],
			["كوستاريكا", "cr", "506"],
			["كوت ديفوار", "ci", "225"],
			["كرواتيا", "hr", "385"],
			["كوبا", "cu", "53"],
			["كوراساو", "cw", "599", 0],
			["قبرص", "cy", "357"],
			["تشيك", "cz", "420"],
			["الدنمارك", "dk", "45"],
			["جيبوتي", "dj", "253"],
			["دومينيكا", "dm", "1767"],
			["جمهورية الدومينيكان", "do", "1", 2, ["809", "829", "849"]],
			["الاكوادور", "ec", "593"],
			["مصر", "eg", "20"],
			["السلفادور", "sv", "503"],
			["غينيا الاستوائية", "gq", "240"],
			["اريتريا", "er", "291"],
			["إستونيا", "ee", "372"],
			["اثيوبيا", "et", "251"],
			["جزر فوكلاند", "fk", "500"],
			["جزر فارو", "fo", "298"],
			["فيجي", "fj", "679"],
			["فنلندا", "fi", "358", 0],
			["فرنسا", "fr", "33"],
			["غويانا الفرنسية", "gf", "594"],
			["بولينيزيا الفرنسية", "pf", "689"],
			["غابون", "ga", "241"],
			["غامبيا", "gm", "220"],
			["جورجيا", "ge", "995"],
			["المانيا", "de", "49"],
			["غانا", "gh", "233"],
			["مستعمرة جبل طارق", "gi", "350"],
			["يونان", "gr", "30"],
			["غرينلاند", "gl", "299"],
			["غرينادا", "gd", "1473"],
			["غوادلوب", "gp", "590", 0],
			["غوام", "gu", "1", 1, ["671"]],
			["غواتيمالا", "gt", "502"],
			["غيرنزي", "gg", "44", 1, [1481]],
			["غينيا", "gn", "224"],
			["غينيا بيساو", "gw", "245"],
			["غيانا", "gy", "592"],
			["هايتي", "ht", "509"],
			["هندوراس", "hn", "504"],
			["هونغ كونغ", "hk", "852"],
			["هنغاريا", "hu", "36"],
			["ايسلندا", "is", "354"],
			["الهند", "in", "91"],
			["اندونيسيا", "id", "62"],
			["ايران", "ir", "98"],
			["جمهورية العراق", "iq", "964"],
			["جمهورية إيرلندا", "ie", "353"],
			["جزيرة مان", "im", "44", 2, [1624]],
			["ايطاليا", "it", "39", 0],
			["جامايكا", "jm", "1", 1, ["876"]],
			["اليابان", "jp", "81"],
			["جيرسي", "je", "44", 3, [1534]],
			["الأردن", "jo", "962"],
			["كازاخستان", "kz", "7", 1],
			["كينيا", "ke", "254"],
			["كيريباس", "ki", "686"],
			["كوسوفو", "xk", "383"],
			["دَوْلَة اَلْكُوَيْت", "kw", "965"],
			["قيرغيزستان", "kg", "996"],
			["لاوس", "la", "856"],
			["لاتفيا", "lv", "371"],
			["لبنان", "lb", "961"],
			["ليسوتو", "ls", "266"],
			["ليبيريا", "lr", "231"],
			["ليبيا", "ly", "218"],
			["ليختنشتاين", "li", "423"],
			["ليتوانيا", "lt", "370"],
			["لوكسومبرغ", "lu", "352"],
			["مكاو", "mo", "853"],
			["مقدونيا الشمالية", "mk", "389"],
			["مدغشقر", "mg", "261"],
			["ملاوي", "mw", "265"],
			["ماليزيا", "my", "60"],
			["مالديف", "mv", "960"],
			["مالي", "ml", "223"],
			["مالطة", "mt", "356"],
			["جزر مارشال", "mh", "692"],
			["جزر المارتينيك", "mq", "596"],
			["موريتانيا", "mr", "222"],
			["موريشيوس", "mu", "230"],
			["مايوت", "yt", "262", 1],
			["المكسيك", "mx", "52"],
			["ولايات ميكرونيسيا المتحدة", "fm", "691"],
			["مولدوفا", "md", "373"],
			["موناكو", "mc", "377"],
			["منغوليا", "mn", "976"],
			["الجبل الأسود", "me", "382"],
			["مونتسرات", "ms", "1", 1, ["664"]],
			["المملكة المغربية", "ma", "212", 0],
			["موزمبيق", "mz", "258"],
			["ميانمار (بورما)", "mm", "95"],
			["ناميبيا", "na", "264"],
			["نورو", "nr", "674"],
			["نيبال", "np", "977"],
			["هولندا", "nl", "31"],
			["كاليدونيا الجديدة", "nc", "687"],
			["نيوزيلندا", "nz", "64"],
			["نيكاراغوا", "ni", "505"],
			["نيجر", "ne", "227"],
			["نيجيريا", "ng", "234"],
			["نييوي", "nu", "683"],
			["جزيرة نورفولك", "nf", "672"],
			["كوريا الشمالية", "kp", "850"],
			["جزر ماريانا الشمالية", "mp", "1670"],
			["نرويج", "no", "47", 0],
			["‘Umān", "om", "968"],
			["باكستان", "pk", "92"],
			["بالاو", "pw", "680"],
			["فلسطين", "ps", "970"],
			["بنما", "pa", "507"],
			["بابوا غينيا الجديدة", "pg", "675"],
			["باراغواي", "py", "595"],
			["بيرو", "pe", "51"],
			["الفيلبين", "ph", "63"],
			["بولندا", "pl", "48"],
			["برتغال", "pt", "351"],
			["بورتوريكو", "pr", "1", 3, ["787", "939"]],
			["قطر", "qa", "974"],
			["روينيون", "re", "262", 0],
			["رومانيا", "ro", "40"],
			["روسيا", "ru", "7", 0],
			["رواندا", "rw", "250"],
			["سان بارتليمي", "bl", "590", 1],
			["سانت هيلينا", "sh", "290"],
			["سانت كيتس ونيفيس", "kn", "1869"],
			["سانت لوسيا", "lc", "1", 1, ["758"]],
			["سانت مارتن", "mf", "590", 2],
			["سان بيير ومكويلون", "pm", "508"],
			["سانت فنسينت والجرينادينز", "vc", "1", 1, ["784"]],
			["ساموا", "ws", "685"],
			["سان مارينو", "sm", "378"],
			["ساو تومي وبرينسيبي", "st", "239"],
			["المملكة العربية السعودية", "sa", "966"],
			["سنغال", "sn", "221"],
			["صربيا", "rs", "381"],
			["سيشيل", "sc", "248"],
			["سيراليون", "sl", "232"],
			["سنغافورة", "sg", "65"],
			["سانت مارتن", "sx", "1", 1, ["721"]],
			["سلوفاكيا", "sk", "421"],
			["سلوفينيا", "si", "386"],
			["جزر سليمان", "sb", "677"],
			["جمهورية الصومال الفيدرالية", "so", "252"],
			["جنوب افريقيا", "za", "27"],
			["كوريا الجنوبية", "kr", "82"],
			["جنوب السودان", "ss", "211"],
			["اسبانيا", "es", "34"],
			["سريلانكا", "lk", "94"],
			["جمهورية السودان", "sd", "249"],
			["سورينام", "sr", "597"],
			["سفالبارد وجان ماين", "sj", "47", 1],
			["سوازيلند", "sz", "268"],
			["سويد", "se", "46"],
			["سويسرا", "ch", "41"],
			["سورية", "sy", "963"],
			["تايوان", "tw", "886"],
			["طاجيكستان", "tj", "992"],
			["تنزانيا", "tz", "255"],
			["تايلاند", "th", "66"],
			["تيمور الشرقية", "tl", "670"],
			["توغو", "tg", "228"],
			["توكيلو", "tk", "690"],
			["تونغا", "to", "676"],
			["ترينيداد وتوباغو", "tt", "1", 1, ["868"]],
			["تونس", "tn", "216"],
			["تركيا", "tr", "90"],
			["تركمانستان", "tm", "993"],
			["جزر توركس وكايكوس", "tc", "1649"],
			["توفالو", "tv", "688"],
			["جزر فيرجن التابعة للولايات المتحدة", "vi", "1", 1, ["340"]],
			["اوغندا", "ug", "256"],
			["اوكرانيا", "ua", "380"],
			["الامارات العربية المتحدة", "ae", "971"],
			["المملكة المتحدة", "gb", "44", 0],
			["الولايات المتحدة الأمريكية", "us", "1", 0],
			["الأوروغواي", "uy", "598"],
			["ازبكستان", "uz", "998"],
			["فانواتو", "vu", "678"],
			["الفاتيكان", "va", "39", 1],
			["فنزويلا", "ve", "58"],
			["فيتنام", "vn", "84"],
			["والس وفوتونا", "wf", "681"],
			["لصحراء الغربية", "eh", "212", 1],
			["اليمن", "ye", "967"],
			["زامبيا", "zm", "260"],
			["زيمبابوي", "zw", "263"],
			["جزر أولان", "ax", "358", 1],
		]
	};
}