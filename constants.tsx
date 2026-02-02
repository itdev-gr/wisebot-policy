
import { Character, Book } from './types';

// --- Translation Dictionary (Moved from App.tsx) ---
export const UI_TEXT = {
  el: {
    menu: { home: 'Αρχική', dashboard: 'Κέντρο Ελέγχου', academy: 'Ακαδημία', factory: 'Εργαστήριο Ηρώων', factory3d: '3D Factory', market: 'Hero Market', wiseFriends: 'Wise & Friends', quiz: 'Κουίζ & Δώρα', ebooks: 'Ebooks', admin: 'Admin Panel', account: 'Λογαριασμός', logout: 'Αποσύνδεση' },
    dashboard: { 
      welcome: 'Στρατηγείο', 
      subtitle: 'Το δάσος της γνώσης σε περιμένει.', 
      rank: 'Rank: Master Creator',
      levelMsg: 'XP για το επόμενο Level',
      stats: { xp: 'Γνώση', credits: 'Credits', badges: 'Badges' },
      modules: {
        academy: { title: 'ΑΚΑΔΗΜΙΑ', sub: 'Μαθήματα & Ιστορίες', btn: 'ΣΥΝΕΧΙΣΕ ΤΗΝ ΕΚΠΑΙΔΕΥΣΗ', prog: 'Πρόοδος Μαθημάτων' },
        ebooks: { title: 'ΒΙΒΛΙΟΘΗΚΗ', sub: 'Ξεκλείδωσε τη Σοφία', btn: 'ΑΝΟΙΓΜΑ EBOOKS', remaining: 'Βιβλία προς ανάγνωση' },
        factory: { title: 'ΕΡΓΑΣΤΗΡΙΟ', sub: 'Δημιούργησε Ήρωες', btn: 'ΝΕΑ ΔΗΜΙΟΥΡΓΙΑ', cost: 'Κόστος: 50 Credits' },
        market: { title: 'HERO MARKET', sub: 'Πούλα & Αγόρασε', btn: 'ΕΙΣΟΔΟΣ ΣΤΗΝ ΑΓΟΡΑ', profit: 'Κέρδη από πωλήσεις' },
        quiz: { title: 'ΖΩΝΗ QUIZ', sub: 'Κέρδισε XP & Δώρα', btn: 'ΠΑΙΞΕ ΤΩΡΑ', status: 'Διαθέσιμη Πρόκληση' },
        friends: { title: 'WISE & FRIENDS', sub: 'Γνώρισε την Ομάδα', btn: 'ΔΕΣ ΤΟΥΣ ΗΡΩΕΣ' }
      }
    },
    // Added for Dashboard compatibility
    steps: {
        academy: { title: 'ΑΚΑΔΗΜΙΑ', desc: 'Μαθήματα & Ιστορίες' },
        quiz: { title: 'QUIZ ZONE', desc: 'Κέρδισε XP & Badges' },
        factory: { title: 'ΕΡΓΑΣΤΗΡΙΟ', desc: 'Δημιούργησε Ήρωες' },
        cinema: { title: 'CINEMA', desc: 'Ζωντάνεψε τον Ήρωα' },
        factory3d: { title: '3D FACTORY', desc: 'Μετατροπή σε 3D' },
        market: { title: 'MARKET', desc: 'Εμπόριο Ηρώων' }
    },
    factory: { title: 'Εργαστήριο Ήρωα', desc: 'Μετάτρεψε τη φαντασία σου σε πραγματικότητα', nameLabel: 'Όνομα Ήρωα', styleLabel: 'Καλλιτεχνικό Στυλ', promptLabel: 'Περιγραφή Δυνάμεων & Εμφάνισης', promptPlace: 'Περίγραψε τον ήρωά σου... (π.χ. Ένας πράσινος δράκος με γυαλιά)', btn: 'ΔΗΜΙΟΥΡΓΗΣΕ ΤΟ (-50⚡)', download: 'ΛΗΨΗ', share: 'SHARE', print: '3D PRINT (20€)', credits: 'Credits' },
    factory3d: { 
      title: '3D Factory', 
      subtitle: 'Ανέβασε τη ζωγραφιά σου και δες την να γίνεται 3D!', 
      uploadTitle: 'Σύρε την εικόνα σου εδώ',
      uploadBtn: 'ή πάτα για αναζήτηση',
      generating: 'Μετατροπή σε 3D Μοντέλο...',
      resultTitle: 'Το 3D Μοντέλο σου!',
      printBtn: 'ΠΑΡΑΓΓΕΛΙΑ 3D PRINT',
      newBtn: 'ΝΕΟ ΜΟΝΤΕΛΟ' 
    },
    market: {
        title: 'Hero Market',
        subtitle: 'Δημιούργησε, Πούλα, Κέρδισε. Γίνε ο επιχειρηματίας του μέλλοντος.',
        buyTab: 'ΑΓΟΡΑ',
        sellTab: 'ΤΟ ΜΑΓΑΖΙ ΜΟΥ',
        redeemTab: 'ΔΩΡΑ & ΕΞΑΡΓΥΡΩΣΗ',
        price: 'Τιμή',
        buyBtn: 'ΑΓΟΡΑ',
        sellBtn: 'ΠΩΛΗΣΗ ΣΤΗΝ ΑΓΟΡΑ',
        owned: 'ΤΟ ΕΧΕΙΣ',
        sold: 'ΠΟΥΛΗΘΗΚΕ',
        earnings: 'Συνολικά Κέρδη',
        tip: 'Wise Tip: Οι ήρωες με ωραία ιστορία πουλάνε πιο ακριβά!'
    },
    common: { locked: 'ΚΛΕΙΔΩΜΕΝΟ', readNow: 'ΔΙΑΒΑΣΕ ΤΩΡΑ', readStory: 'ΔΙΑΒΑΣΕ ΤΗΝ ΙΣΤΟΡΙΑ', close: 'ΚΛΕΙΣΙΜΟ', nextLesson: 'ΕΠΟΜΕΝΟ ΜΑΘΗΜΑ' },
    landing: { title: 'Το Πρώτο Ελληνικό Έξυπνο Παιχνίδι!', subtitle: 'Μάθε, Παίξε και Δημιουργήσε τους δικούς σου ήρωες σε 3D. Το ταξίδι σου στην Ακαδημία WiseBot ξεκινά εδώ!', cta: 'Ξεκίνα το Ταξίδι' },
    quiz: { title: 'Ζώνη Κουίζ 🧠', subtitle: 'Προκάλεσε τον εαυτό σου και κέρδισε XP!', placeholder: 'π.χ. Διάστημα...', startBtn: 'ΞΕΚΙΝΑ ΤΩΡΑ!' }
  },
  en: {
    menu: { home: 'Home', dashboard: 'Dashboard', academy: 'Academy', factory: 'Hero Factory', factory3d: '3D Factory', market: 'Hero Market', wiseFriends: 'Wise & Friends', quiz: 'Quiz Zone', ebooks: 'Ebooks', admin: 'Admin Panel', account: 'Account', logout: 'Logout' },
    dashboard: { 
      welcome: 'Headquarters', 
      subtitle: 'The forest of knowledge awaits you.', 
      rank: 'Rank: Master Creator',
      levelMsg: 'XP to next Level',
      stats: { xp: 'Total XP', credits: 'Credits', badges: 'Badges' },
      modules: {
        academy: { title: 'ACADEMY', sub: 'Lessons & Stories', btn: 'CONTINUE TRAINING', prog: 'Course Progress' },
        ebooks: { title: 'LIBRARY', sub: 'Unlock Wisdom', btn: 'OPEN EBOOKS', remaining: 'Books left to read' },
        factory: { title: 'FACTORY', sub: 'Create Heroes', btn: 'CREATE NEW', cost: 'Cost: 50 Credits' },
        market: { title: 'HERO MARKET', sub: 'Sell & Buy', btn: 'ENTER MARKET', profit: 'Sales Profit' },
        quiz: { title: 'QUIZ ZONE', sub: 'Earn XP & Rewards', btn: 'PLAY NOW', status: 'Challenge Available' },
        friends: { title: 'WISE & FRIENDS', sub: 'Meet the Team', btn: 'VIEW HEROES' }
      }
    },
    // Added for Dashboard compatibility
    steps: {
        academy: { title: 'ACADEMY', desc: 'Lessons & Stories' },
        quiz: { title: 'QUIZ ZONE', desc: 'Earn XP & Badges' },
        factory: { title: 'FACTORY', desc: 'Create Heroes' },
        cinema: { title: 'CINEMA', desc: 'Bring Hero to Life' },
        factory3d: { title: '3D FACTORY', desc: 'Convert to 3D' },
        market: { title: 'MARKET', desc: 'Hero Trading' }
    },
    factory: { title: 'Hero Factory', desc: 'Turn your imagination into 3D reality with one click!', nameLabel: 'Hero Name', styleLabel: 'Art Style', promptLabel: 'Description & Powers', promptPlace: 'Describe your hero... (e.g., A green dragon with glasses)', btn: 'CREATE IT (-50⚡)', download: 'DOWNLOAD', share: 'SHARE', print: '3D ORDER (20€)', credits: 'Credits' },
    factory3d: { 
      title: '3D Factory', 
      subtitle: 'Upload your drawing and watch it become 3D!', 
      uploadTitle: 'Drag your image here',
      uploadBtn: 'or click to browse',
      generating: 'Converting to 3D Model...',
      resultTitle: 'Your 3D Model!',
      printBtn: 'ORDER 3D PRINT',
      newBtn: 'NEW MODEL' 
    },
    market: {
        title: 'Hero Market',
        subtitle: 'Create, Sell, Earn. Become the entrepreneur of the future.',
        buyTab: 'BUY',
        sellTab: 'MY SHOP',
        redeemTab: 'REWARDS & REDEEM',
        price: 'Price',
        buyBtn: 'BUY',
        sellBtn: 'LIST FOR SALE',
        owned: 'OWNED',
        sold: 'SOLD',
        earnings: 'Total Earnings',
        tip: 'Wise Tip: Heroes with a good story sell for more!'
    },
    common: { locked: 'LOCKED', readNow: 'READ NOW', readStory: 'READ STORY', close: 'LOCKED', nextLesson: 'NEXT LESSON' },
    landing: { title: 'The First Greek Smart Game!', subtitle: 'Learn, Play and Create your own 3D heroes. Your journey to WiseBot Academy starts here!', cta: 'Start the Journey' },
    quiz: { title: 'Quiz Zone 🧠', subtitle: 'Challenge yourself and earn XP!', placeholder: 'e.g. Space...', startBtn: 'START NOW!' }
  }
};

// HD IMAGE LINKS
const LINK_HD = "https://i.postimg.cc/5yV8gkz0/Gemini-Generated-Image-1kbdh81kbdh81kbd.jpg";
const PENCILO_HD = "https://i.postimg.cc/NFcRDPXR/Gemini-Generated-Image-sr51ccsr51ccsr51.jpg";
const WISEBOT_HD = "https://i.postimg.cc/qqT2wZKn/Gemini-Generated-Image-e2e7aoe2e7aoe2e7.jpg";
const CROCUS_HD = "https://i.postimg.cc/j2byckfH/Gemini-Generated-Image-htitclhtitclhtit.jpg";
const SPARKEN_HD = "https://i.postimg.cc/C5skQHCR/Gemini-Generated-Image-olffpqolffpqolff.jpg";

// MASTER LEVEL USER AVATAR
export const USER_GROUP_PHOTO = "https://i.postimg.cc/Nj4C7c2Y/Gemini-Generated-Image-xbyfbrxbyfbrxbyf.png";

export const HEROES = [
  {
    id: 'wisebot',
    name: 'Wisebot',
    role: { el: 'Ο Μέντορας', en: 'The Mentor' },
    description: { el: 'Η σοφή κουκουβάγια που μας καθοδηγεί.', en: 'The wise owl that guides us.' },
    avatar: WISEBOT_HD,
    color: 'bg-green-500',
  },
  {
    id: 'crocus',
    name: 'Crocus',
    role: { el: 'Ο Εκτελεστής', en: 'The Executor' },
    description: { el: 'Ο δυναμικός κροκόδειλος της δράσης.', en: 'The dynamic crocodile of action.' },
    avatar: CROCUS_HD,
    color: 'bg-green-600',
  },
  {
    id: 'pencilo',
    name: 'Pencilo',
    role: { el: 'Ο Αρχιτέκτονας', en: 'The Architect' },
    description: { el: 'Ο σκαντζόχοιρος που σχεδιάζει τα πάντα.', en: 'The hedgehog who designs everything.' },
    avatar: PENCILO_HD,
    color: 'bg-yellow-500',
  },
  {
    id: 'link',
    name: 'Link',
    role: { el: 'Η Κατασκευάστρια', en: 'The Maker' },
    description: { el: 'Η ειδικός στις κατασκευές με την ουρά USB!', en: 'The expert maker with the USB tail!' },
    avatar: LINK_HD,
    color: 'bg-blue-500',
  },
  {
    id: 'sparken',
    name: 'Sparken',
    role: { el: 'Ο Οραματιστής', en: 'The Visionary' },
    description: { el: 'Ο αετός που βλέπει το μέλλον.', en: 'The eagle who sees the future.' },
    avatar: SPARKEN_HD,
    color: 'bg-red-500',
  },
];

// Maintain compatibility for components using GREEK_HEROES alias (Returning Greek version)
export const GREEK_HEROES: Character[] = HEROES.map(h => ({
  id: h.id,
  name: h.name,
  role: h.role.el,
  image: h.avatar,
  motto: h.description.el,
  color: h.color
}));

export const AWAKENING_BOOKS = [
  {
    id: 1,
    title: "Η Βιβλιοθήκη των Αγράγραφων Σελίδων",
    author: "Wisebot",
    category: "The Awakening",
    synopsis: "Η 9χρονη Αλεξάνδρα ξέρει τα πάντα, αλλά φοβάται να ξεκινήσει...",
    coverImage: WISEBOT_HD,
    storyImage: WISEBOT_HD,
    level: 1,
    locked: false,
    requiredXp: 0,
    storyText: "Η Αλεξάνδρα κοιτούσε το λευκό χαρτί. Το δωμάτιο ήταν ήσυχο, αλλά το μυαλό της έκανε φασαρία. 'Κι αν κάνω λάθος;' σκέφτηκε. Τότε, μια λάμψη φώτισε τον καθρέφτη. Η Wisebot πέταξε έξω και προσγειώθηκε στο γραφείο. 'Το λάθος είναι ο μόνος τρόπος να μάθεις', είπε η κουκουβάγια. Της έδωσε ένα στυλό που έλαμπε. 'Γράψε την πρώτη λέξη. Μην σκέφτεσαι'. Η Αλεξάνδρα πήρε βαθιά ανάσα και έγραψε: 'ΑΡΧΗ'. Ξαφνικά, το δωμάτιο γέμισε χρώματα!"
  },
  {
    id: 2,
    title: "Ο Χάρτης του Χάους",
    author: "Pencilo",
    category: "The Awakening",
    synopsis: "Η 12χρονη Ελευθερία πελαγώνει μπροστά στο χάος...",
    coverImage: PENCILO_HD,
    storyImage: PENCILO_HD,
    level: 1,
    locked: false,
    requiredXp: 0,
    storyText: "Η Ελευθερία στέκεται μπροστά στο χάος. Ο Pencilo την καθοδηγεί να σχεδιάσει το δικό της χάρτη."
  }
];