// All visible copy for the site, word for word from the Hindi invitation
// (Prafful_Nandini_Invitation_Hindi.pdf). Edit text here only; js/main.js reads from this file.
window.INVITE = {
  AUDIO_SRC: 'assets/audio/saibo.mp3',
  MONOGRAM_SRC: 'assets/images/pn-monogram-gold.svg',
  ICS_SRC: 'assets/reception.ics',
  MAP_URL: 'https://maps.app.goo.gl/XD9oN1gpyqKr12DA6',

  patrika: {
    title: 'शुभ विवाह',
    groom: 'प्रफुल्ल',
    bride: 'नंदिनी',
    joiner: 'संग',
    innerBlessing: '।। श्री गणेशाय नमः ।।',
    innerLine: 'सादर आमंत्रण',
    hint: 'खोलने के लिए स्पर्श करें',
    ariaLabel: 'निमंत्रण पत्रिका खोलें',
  },

  hero: {
    invocation: '।। श्री गणेशाय नमः ।।',
    shloka: ['वक्रतुण्ड महाकार्य, सूर्यकोटि समप्रभः ।', 'निर्विघ्नं कुरुमे देव, सर्व कार्येषु सर्वदा ।।'],
    title: 'शुभ विवाह',
    groom: 'प्रफुल्ल',
    joiner: 'संग',
    bride: 'नंदिनी',
    dates: '7 – 12 दिसम्बर 2026',
    place: 'शुजालपुर (म.प्र.)',
    scrollCue: 'नीचे देखें',
  },

  // Countdown to the Panigrahan Sanskar, 12 Dec 2026, 11:00 AM IST
  countdown: {
    target: '2026-12-12T11:00:00+05:30',
    title: 'शुभ घड़ी में शेष',
    units: ['दिन', 'घंटे', 'मिनट', 'सेकंड'],
  },

  invitation: {
    doha: ['विघ्न हरण, मंगल करण, गौरी पुत्र गणेश ।', 'प्रथम निमंत्रण आपको, ब्रह्मा, विष्णु, महेश ।।'],
    salutation: 'स्नेही स्वजन,',
    body: ['परमपिता परमेश्वर की असीम कृपा एवं पूर्वजों के आशीर्वाद से', 'हमारे परिवार में शुभ अवसर आया है, प्रसंग है...'],
  },

  couple: {
    groom: {
      prefix: 'आयुष्मान',
      name: 'प्रफुल्ल',
      lines: [
        { label: 'सुपौत्र', value: 'श्रीमती सीता–गौरीशंकर नेमा' },
        { label: 'सुपुत्र', value: 'श्रीमती वंदना–संतोष नेमा' },
      ],
      place: 'शुजालपुर मण्डी',
    },
    joiner: 'संग',
    bride: {
      prefix: 'आयुष्मति',
      name: 'नंदिनी',
      lines: [
        { label: 'सुपौत्री', value: 'स्व. श्रीमती रुकमणी – शाहश्री राधेश्याम जी नेमा (अध्यापक)' },
        { label: 'सुपुत्री', value: 'श्रीमती मधु–शाहश्री महेश जी नेमा' },
      ],
      place: 'शुजालपुर सिटी',
    },
  },

  // ---------- Pre-wedding photos ----------
  // Files are numbered by where they appear. To swap photos, just rename the files in assets/photos/.
  //   01 = inside the Patrika · 02 = first-screen background · 03–09 = gallery (in this order) · 10 = closing
  // pos (01, 02 and 10) = which part of the photo stays in view in its frame ("50% 72%" = centre, lower part).
  // Gallery photos (03–09) are never cropped: they keep their natural shape.
  // After swapping a photo, adjust its pos if a face is cut, or set it to '50% 50%'.
  photos: {
    patrika: { src: 'assets/photos/01.jpg', pos: '50% 72%' },
    hero: { src: 'assets/photos/02.jpg', pos: '50% 62%' }, // full-screen background behind the names
    closing: { src: 'assets/photos/10.jpg', pos: '52% 74%' },
    labels: {
      patrika: 'प्रफुल्ल और नंदिनी',
      closing: 'प्रफुल्ल और नंदिनी',
    },
    gallery: {
      // Other title options: 'हमारी प्रेम कहानी', 'दो दिल, एक सफ़र', 'साथ के सुनहरे पल', 'यादों के पल'
      heading: '।। प्यार के रंग ।।',
      sub: '',
      placeholder: 'फ़ोटो',
      openLabel: 'बड़ा देखें',
      // Add, remove or reorder freely. caption is optional (Hindi text shown under the photo).
      items: [
        { src: 'assets/photos/03.jpg', pos: '50% 40%', caption: '' },
        { src: 'assets/photos/04.jpg', pos: '50% 22%', caption: '' },
        { src: 'assets/photos/05.jpg', pos: '50% 62%', caption: '' },
        { src: 'assets/photos/06.jpg', pos: '50% 50%', caption: '' },
        { src: 'assets/photos/07.jpg', pos: '50% 20%', caption: '' },
        { src: 'assets/photos/08.jpg', pos: '50% 62%', caption: '' },
        { src: 'assets/photos/09.jpg', pos: '50% 30%', caption: '' },
      ],
    },
  },

  eventsHeading: '।। शुभ मंगल बेलाएं ।।',

  // Ceremonies grouped by day. The reception is shown once, in its own section below.
  days: [
    {
      num: '7',
      month: 'दिसम्बर',
      week: 'सोमवार',
      events: [
        { id: 'mata-pujan', icon: 'kalash', accent: '#A62A5E', titles: [{ name: 'माता पूजन' }], time: 'प्रातः 9:00 बजे', venue: 'नेमा डाटकॉम से शुरू' },
      ],
    },
    {
      num: '8',
      month: 'दिसम्बर',
      week: 'मंगलवार',
      events: [
        {
          id: 'katha-chowki',
          icon: 'diya',
          accent: '#B4541A',
          titles: [
            { name: 'श्री भगवान सत्यनारायण कथा', time: 'सायं 7:00 बजे' },
            { name: 'माता की चौकी भजन संध्या', time: 'रात्रि 9:00 बजे' },
          ],
          venue: 'नेमा बजाज श्रीनाथ मंदिर के पास',
        },
      ],
    },
    {
      num: '10',
      month: 'दिसम्बर',
      week: 'गुरुवार',
      events: [
        { id: 'mandap', icon: 'mandap', accent: '#1E5B4B', titles: [{ name: 'मण्डपाच्छादन' }], time: 'प्रातः 11:00 बजे', venue: 'नेमा बजाज श्रीनाथ मंदिर के पास' },
        { id: 'mamera', icon: 'mamera', accent: '#8E2A45', titles: [{ name: 'मामेरा' }], time: 'सायं 7:00 बजे', venue: 'नेमा बजाज श्रीनाथ मंदिर के पास' },
      ],
    },
    {
      num: '11',
      month: 'दिसम्बर',
      week: 'शुक्रवार',
      events: [
        { id: 'sangeet', icon: 'dholak', accent: '#1B5A73', titles: [{ name: 'कार्निवाल एवं संगीत' }], time: 'सुबह 11:00 बजे से', venue: 'मीरा मोहन रिट्रीट' },
        { id: 'baraat', icon: 'ghodi', accent: '#B23A1E', titles: [{ name: 'वर निकासी एवं बारात' }], time: 'सायं 5:00 बजे से', venue: 'निवास स्थान राम मंदिर के सामने' },
        { id: 'thirakte-kadam', icon: 'disco', accent: '#4E3484', titles: [{ name: 'थिरकते कदम' }], time: 'रात्रि 9:00 बजे से', venue: 'मीरा मोहन रिट्रीट' },
      ],
    },
    {
      num: '12',
      month: 'दिसम्बर',
      week: 'शनिवार',
      events: [
        { id: 'panigrahan', icon: 'havan', accent: '#9E1B24', titles: [{ name: 'पाणिग्रहण संस्कार' }], time: 'सुबह 11:00 बजे से', venue: 'मीरा मोहन रिट्रीट' },
      ],
    },
  ],

  reception: {
    title: ['आशीर्वाद समारोह', 'एवं स्वरुचि भोज'],
    rows: [
      { label: 'दिनांक', value: '12 दिसम्बर 2026, शनिवार' },
      { label: 'समय', value: 'सायं 7 बजे से आपके आगमन तक' },
    ],
    venueLabel: 'विवाह स्थल',
    venueName: 'मीरा मोहन रिट्रीट',
    venueAddress: 'मधुर वेयर हाउस परिसर, आष्टा रोड, शुजालपुर (म.प्र.)',
    mapCta: 'मानचित्र पर देखें',
    calendarCta: 'कैलेंडर में जोड़ें',
    note: 'नोट : बारात 11 दिसम्बर 2026 को रात्रि 9 बजे शाहजी श्री राधेश्याम जी, महेश जी नेमा शुजालपुर वालों के यहां मीरा मोहन रिट्रीट शुजालपुर मण्डी को पहुंचेगी',
    calendar: {
      title: 'आशीर्वाद समारोह एवं स्वरुचि भोज · प्रफुल्ल संग नंदिनी',
      // 12 Dec 2026, 7:00 PM IST = 13:30 UTC. No end time on the card; 3 hours is used.
      startUtc: '20261212T133000Z',
      endUtc: '20261212T163000Z',
      location: 'मीरा मोहन रिट्रीट, मधुर वेयर हाउस परिसर, आष्टा रोड, शुजालपुर (म.प्र.)',
    },
  },

  balManuhar: {
    heading: 'बाल मनुहार',
    lines: ['थोड़ी सी सर्दी है, सर्दी से ना घबराना,', 'हमारे चाचा की शादी में जलूल-जलूल आना...'],
    signature: 'वेदार्थ, सार्थ',
  },

  closing: {
    line: 'आपकी उपस्थिति ही हमारी खुशियों को पूर्ण करेगी',
    sub: 'सपरिवार पधारकर वर-वधू को अपना स्नेह और आशीर्वाद दें',
    sign: 'सप्रेम, नेमा परिवार',
  },

  footer: {
    senderLabel: 'प्रेषक',
    senders: ['गौरीशंकर नेमा', 'संतोष नेमा, प्रतीक नेमा'],
    address: '201, लोहिया मार्ग, शुजालपुर मण्डी',
    phones: 'मोबा.: 98265 36029, 9425979670',
    establishmentsLabel: 'प्रतिष्ठान',
    companies: ['नेमा ऑटोमोबाईल्स (प्रा.) लि.', 'मे. संतोषकुमार गौरीशंकर नेमा'],
    companyPhones: 'मो.: 9770029458, 7999774569',
    branches: [
      { name: 'नेमा बजाज', lines: ['लोहिया मार्ग, राम मंदिर के सामने', 'शुजालपुर मण्डी'] },
      { name: 'नेमा चेतक', lines: ['चेतक एक्सपिरियंस सेंटर', 'गुरुकृपा होटल के सामने, अकोदिया रोड', 'शुजालपुर'] },
      { name: 'नेमा बजाज', lines: ['ए.बी. रोड BSNL टॉवर के सामने', 'शाजापुर'] },
      { name: 'नेमा बजाज', lines: ['पुलिस थाने के सामने', 'मक्सी'] },
      { name: 'नेमा बजाज', lines: ['दुकान नं. 2,3,4 छापीहेड़ा रोड', 'नलखेड़ा'] },
    ],
  },

  music: { play: 'संगीत चलाएं', pause: 'संगीत बंद करें' },
};
