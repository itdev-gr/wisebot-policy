
import React, { useState, useMemo } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { BookOpen, Star, Lock, X, PlayCircle, Zap, ArrowRight, Lightbulb, Dumbbell, Cpu, Palette, Globe, CheckCircle, Brain, Book } from 'lucide-react';
import { UI_TEXT } from '../constants';
import { useEconomy } from '../context/EconomyContext'; // Hook

const motion = m as any;

// HD IMAGE LINKS
const LINK_HD = "https://i.postimg.cc/5yV8gkz0/Gemini-Generated-Image-1kbdh81kbdh81kbd.jpg";
const PENCILO_HD = "https://i.postimg.cc/NFcRDPXR/Gemini-Generated-Image-sr51ccsr51ccsr51.jpg";
const WISEBOT_HD = "https://i.postimg.cc/qqT2wZKn/Gemini-Generated-Image-e2e7aoe2e7aoe2e7.jpg";
const CROCUS_HD = "https://i.postimg.cc/j2byckfH/Gemini-Generated-Image-htitclhtitclhtit.jpg";
const SPARKEN_HD = "https://i.postimg.cc/C5skQHCR/Gemini-Generated-Image-olffpqolffpqolff.jpg";

// CATEGORY CONFIGURATION
const CATEGORIES = {
  START_SMALL: { 
    id: 'START_SMALL',
    icon: Lightbulb, 
    color: "from-amber-400 to-orange-600",
    border: "border-amber-500/50",
    bg: "bg-amber-500/10",
    title: { el: "ΕΠΙΧΕΙΡΗΜΑΤΙΚΟΤΗΤΑ", en: "ENTREPRENEURSHIP" }
  },
  SPORTS: { 
    id: 'SPORTS',
    icon: Dumbbell, 
    color: "from-red-500 to-rose-600",
    border: "border-red-500/50",
    bg: "bg-red-500/10",
    title: { el: "ΑΘΛΗΤΙΣΜΟΣ & ΘΕΛΗΣΗ", en: "SPORTS & RESILIENCE" }
  },
  TECH: { 
    id: 'TECH',
    icon: Cpu, 
    color: "from-cyan-400 to-blue-600",
    border: "border-cyan-500/50",
    bg: "bg-cyan-500/10",
    title: { el: "ΤΕΧΝΟΛΟΓΙΑ", en: "TECHNOLOGY" }
  },
  ARTS: { 
    id: 'ARTS',
    icon: Palette, 
    color: "from-fuchsia-400 to-purple-600",
    border: "border-fuchsia-500/50",
    bg: "bg-fuchsia-500/10",
    title: { el: "ΤΕΧΝΕΣ & ΕΚΦΡΑΣΗ", en: "ARTS & EXPRESSION" }
  },
  SCIENCE: { 
    id: 'SCIENCE',
    icon: Globe, 
    color: "from-emerald-400 to-teal-600",
    border: "border-emerald-500/50",
    bg: "bg-emerald-500/10",
    title: { el: "ΕΠΙΣΤΗΜΗ", en: "SCIENCE" }
  }
};

// --- RICH MINI-WIKI CONTENT (50 STORIES) ---
const COURSES = [
  // ========================================================================
  // 🚀 CATEGORY 1: START SMALL (Business & Visionaries)
  // ========================================================================
  {
    id: 1,
    category: "START_SMALL",
    subject: { el: "Walt Disney", en: "Walt Disney" },
    title: { el: "Η Αυτοκρατορία του Ποντικιού", en: "The Mouse Empire" },
    subtitle: { el: "The Dreamer", en: "The Dreamer" },
    image: WISEBOT_HD,
    storyContent: {
      el: "Το 1919, ο νεαρός Walt απολύθηκε από μια εφημερίδα επειδή «του έλειπε η φαντασία και δεν είχε καλές ιδέες». Αργότερα, η πρώτη του εταιρεία κινουμένων σχεδίων, η 'Laugh-O-Gram', χρεοκόπησε. Έμεινε άφραγκος και έτρωγε σκυλοτροφή για να επιβιώσει. Αντί να τα παρατήσει, πήρε ένα τρένο για το Hollywood με μόλις 40 δολάρια στην τσέπη. Εκεί, έχασε τα δικαιώματα του πρώτου του χαρακτήρα, του 'Oswald the Lucky Rabbit'. Στην επιστροφή, απογοητευμένος, σχεδίασε σε μια χαρτοπετσέτα ένα νέο χαρακτήρα: τον Μίκυ Μάους. Σήμερα, η Disney είναι συνώνυμο της μαγείας. Μάθημα: Η αποτυχία είναι απλώς η αρχή του σεναρίου σου.",
      en: "In 1919, young Walt was fired from a newspaper because he 'lacked imagination and had no good ideas.' Later, his first animation company, 'Laugh-O-Gram,' went bankrupt. He was penniless, allegedly eating dog food to survive. Instead of quitting, he took a train to Hollywood with just $40. There, he lost the rights to his first successful character, 'Oswald the Lucky Rabbit.' On the train ride home, devastated, he sketched a new character on a napkin: Mickey Mouse. Today, Disney is synonymous with magic. Lesson: Failure is just the opening scene of your script."
    }
  },
  {
    id: 2,
    category: "START_SMALL",
    subject: { el: "LEGO (Ole Kirk)", en: "LEGO (Ole Kirk)" },
    title: { el: "Χτίζοντας από τις Στάχτες", en: "Building from Ashes" },
    subtitle: { el: "The Architect", en: "The Architect" },
    image: LINK_HD,
    storyContent: {
      el: "Ο Ole Kirk Christiansen ήταν ένας ταπεινός ξυλουργός στη Δανία. Η ζωή ήταν σκληρή: έχασε τη δουλειά του, τη γυναίκα του και έμεινε μόνος με 4 παιδιά. Σαν να μην έφτανε αυτό, το εργαστήριό του κάηκε ολοσχερώς... ΔΥΟ φορές! Μέσα στην απελπισία του, άρχισε να φτιάχνει μικρά ξύλινα παιχνίδια από τα περισσεύματα ξυλείας. Τα ονόμασε LEGO (από το 'Leg Godt' = Παίζω Καλά). Όταν το ξύλο έγινε ακριβό, ρίσκαρε τα πάντα αγοράζοντας μια μηχανή πλαστικού. Κανείς δεν πίστευε στα πλαστικά τουβλάκια τότε. Εκείνος επέμεινε στην ποιότητα ('Μόνο το άριστο είναι αρκετό'). Σήμερα, υπάρχουν περισσότερα τουβλάκια LEGO στον κόσμο από ό,τι άνθρωποι.",
      en: "Ole Kirk Christiansen was a humble carpenter in Denmark. Life was harsh: he lost his job, his wife, and was left raising 4 boys alone. As if that wasn't enough, his workshop burned to the ground... TWICE! In his despair, he started making small wooden toys from leftover wood scraps. He named them LEGO (from 'Leg Godt' = Play Well). When wood became scarce, he gambled everything on a plastic molding machine. No one believed in plastic bricks back then. He insisted on quality ('Only the best is good enough'). Today, there are more LEGO bricks in the world than people."
    }
  },
  {
    id: 3,
    category: "START_SMALL",
    subject: { el: "Wright Brothers", en: "Wright Brothers" },
    title: { el: "Ποδηλάτες στον Ουρανό", en: "Cyclists in the Sky" },
    subtitle: { el: "The Makers", en: "The Makers" },
    image: PENCILO_HD,
    storyContent: {
      el: "Στις αρχές του 1900, όλοι πίστευαν ότι το πρώτο αεροπλάνο θα φτιαχνόταν από πλούσιους επιστήμονες με κρατική χρηματοδότηση. Οι αδερφοί Wright, ο Orville και ο Wilbur, δεν ήταν επιστήμονες. Ήταν μηχανικοί ποδηλάτων. Χρησιμοποίησαν τα κέρδη από το μαγαζί τους και την τεχνογνωσία τους στην ισορροπία των ποδηλάτων για να λύσουν το πρόβλημα της πτήσης. Αντιμετώπισαν χλευασμό, ατυχήματα και ανέμους. Στις 17 Δεκεμβρίου 1903, στο Kitty Hawk, πέταξαν για 12 δευτερόλεπτα. Άλλαξαν την ιστορία της ανθρωπότητας, όχι με πτυχία, αλλά με πείσμα και μουντζούρα στα χέρια.",
      en: "In the early 1900s, everyone thought the first airplane would be built by wealthy scientists with government funding. The Wright brothers, Orville and Wilbur, were not scientists. They were bicycle mechanics. They used profits from their bike shop and their understanding of bicycle balance to solve the problem of flight. They faced ridicule, crashes, and harsh winds. On December 17, 1903, at Kitty Hawk, they flew for 12 seconds. They changed human history, not with degrees, but with grit and grease on their hands."
    }
  },
  {
    id: 4,
    category: "START_SMALL",
    subject: { el: "J.K. Rowling", en: "J.K. Rowling" },
    title: { el: "Η Μαγεία της Επιβίωσης", en: "Magic of Survival" },
    subtitle: { el: "The Storyteller", en: "The Storyteller" },
    image: WISEBOT_HD,
    storyContent: {
      el: "Πριν γίνει δισεκατομμυριούχος, η Joanne ήταν μια άνεργη μητέρα που ζούσε με επιδόματα πρόνοιας. Έγραψε το 'Χάρι Πότερ' σε καφετέριες, ενώ το μωρό της κοιμόταν, επειδή το σπίτι της ήταν πολύ κρύο. Όταν τελείωσε το χειρόγραφο, το έστειλε σε 12 εκδοτικούς οίκους. Όλοι το απέρριψαν. Της είπαν: 'Τα παιδικά βιβλία δεν πουλάνε, βρες μια κανονική δουλειά'. Τελικά, ένας εκδότης δέχτηκε μόνο επειδή η 8χρονη κόρη του διάβασε το πρώτο κεφάλαιο και ζήτησε κι άλλο. Η επιμονή της δημιούργησε έναν ολόκληρο κόσμο.",
      en: "Before becoming a billionaire, Joanne was an unemployed single mother living on state welfare. She wrote 'Harry Potter' in cafes while her baby slept, partly because her apartment was too cold. When she finished the manuscript, she sent it to 12 publishing houses. All of them rejected it. They told her: 'Children's books don't make money, get a real job.' Finally, one publisher accepted only because his 8-year-old daughter read the first chapter and demanded more. Her persistence created an entire universe."
    }
  },
  {
    id: 5,
    category: "START_SMALL",
    subject: { el: "Oprah Winfrey", en: "Oprah Winfrey" },
    title: { el: "Η Φωνή της Αλήθειας", en: "Voice of Truth" },
    subtitle: { el: "The Voice", en: "The Voice" },
    image: SPARKEN_HD,
    storyContent: {
      el: "Η Oprah γεννήθηκε σε απόλυτη φτώχεια στον Μισισιπή, φορώντας φορέματα φτιαγμένα από σακιά πατάτας. Η παιδική της ηλικία ήταν γεμάτη τραύματα και δυσκολίες. Στην πρώτη της δουλειά ως παρουσιάστρια ειδήσεων, απολύθηκε επειδή ήταν 'πολύ συναισθηματική' και 'ακατάλληλη για τηλεόραση'. Αντί να αλλάξει, αγκάλιασε αυτό ακριβώς το χαρακτηριστικό. Μετέτρεψε το talk show της σε μια πλατφόρμα ενσυναίσθησης και αληθινών ιστοριών. Έγινε η πρώτη μαύρη δισεκατομμυριούχος στην Αμερική, αποδεικνύοντας ότι η 'αδυναμία' σου μπορεί να γίνει η υπερδύναμή σου.",
      en: "Oprah was born into deep poverty in Mississippi, wearing dresses made of potato sacks. Her childhood was filled with trauma and hardship. In her first job as a news anchor, she was fired for being 'too emotional' and 'unfit for television.' Instead of changing, she embraced that exact trait. She turned her talk show into a platform for empathy and real stories. She became the first black female billionaire in America, proving that your perceived 'weakness' can actually be your superpower."
    }
  },
  {
    id: 6,
    category: "START_SMALL",
    subject: { el: "MrBeast", en: "MrBeast" },
    title: { el: "Ο Αλγόριθμος της Καλωσύνης", en: "Algorithm of Kindness" },
    subtitle: { el: "The Creator", en: "The Creator" },
    image: CROCUS_HD,
    storyContent: {
      el: "Ο Jimmy Donaldson δεν ήταν διάσημος. Ήταν ένα εσωστρεφές παιδί που μελετούσε το YouTube σαν επιστήμη. Επί χρόνια, ανέβαζε βίντεο με 0 προβολές. Αντί να παίζει απλώς παιχνίδια, άρχισε να πειραματίζεται. Μέτρησε μέχρι το 100.000 (του πήρε 40 ώρες!). Όταν άρχισε να βγάζει τα πρώτα του χρήματα, δεν αγόρασε αυτοκίνητο. Τα χάρισε σε έναν άστεγο και το βιντεοσκόπησε. Κατάλαβε κάτι μοναδικό: όσο περισσότερα δίνεις, τόσο περισσότερα βλέπει ο κόσμος. Έχτισε μια αυτοκρατορία βασισμένη στη γεναιοδωρία.",
      en: "Jimmy Donaldson wasn't famous. He was an introverted kid who studied YouTube like a science. For years, he uploaded videos with 0 views. Instead of just playing games, he experimented. He counted to 100,000 (it took 40 hours!). When he started making his first money, he didn't buy a car. He gave it to a homeless person and filmed it. He realized something unique: the more you give, the more people watch. He built an empire based on extreme generosity."
    }
  },
  {
    id: 7,
    category: "START_SMALL",
    subject: { el: "Jeff Bezos", en: "Jeff Bezos" },
    title: { el: "Το Μαγαζί των Πάντων", en: "The Everything Store" },
    subtitle: { el: "The Visionary", en: "The Visionary" },
    image: LINK_HD,
    storyContent: {
      el: "Το 1994, ο Jeff Bezos είχε μια καλοπληρωμένη δουλειά στη Wall Street. Είδε όμως ότι το ίντερνετ μεγάλωνε ραγδαία. Παραιτήθηκε, πήρε το αυτοκίνητό του και οδήγησε μέχρι το Σιάτλ γράφοντας το επιχειρηματικό σχέδιο της Amazon στη διαδρομή. Ξεκίνησε πουλώντας βιβλία από το γκαράζ του. Το γραφείο του ήταν μια παλιά ξύλινη πόρτα πάνω σε τρίποδα. Κάθε φορά που πουλούσε ένα βιβλίο, χτυπούσε ένα κουδουνάκι στο γραφείο. Σήμερα, η Amazon είναι παντού. Το μάθημα; Ξεκίνα με κάτι μικρό (βιβλία), αλλά έχε όραμα για τα πάντα.",
      en: "In 1994, Jeff Bezos had a high-paying job on Wall Street. But he noticed the internet was growing rapidly. He quit, got in his car, and drove to Seattle, writing the business plan for Amazon on the way. He started selling books from his garage. His desk was an old wooden door on sawhorses. Every time they sold a book, a bell rang in the office. Today, Amazon is everywhere. Lesson: Start with something small (books), but have a vision for everything."
    }
  },
  {
    id: 8,
    category: "START_SMALL",
    subject: { el: "Colonel Sanders", en: "Colonel Sanders" },
    title: { el: "Επιτυχία στα 65", en: "Success at 65" },
    subtitle: { el: "The Legend", en: "The Legend" },
    image: PENCILO_HD,
    storyContent: {
      el: "Ο Harland Sanders είναι η απόδειξη ότι ποτέ δεν είναι αργά. Μέχρι τα 65 του, είχε αποτύχει ως δικηγόρος, πυροσβέστης και αγρότης. Ζούσε με μια μικρή σύνταξη 105 δολαρίων. Το μόνο που ήξερε να κάνει καλά ήταν να τηγανίζει κοτόπουλο. Φόρεσε το λευκό του κοστούμι, πήρε τη συνταγή του και άρχισε να γυρίζει τα εστιατόρια της Αμερικής, κοιμώμενος στο αυτοκίνητό του. Του είπαν «ΟΧΙ» 1009 φορές πριν κάποιος δεχτεί τη συνταγή του. Έτσι γεννήθηκαν τα KFC.",
      en: "Harland Sanders is proof that it's never too late. By age 65, he had failed as a lawyer, fireman, and farmer. He was living on a $105 social security check. The only thing he knew how to do well was fry chicken. He put on his white suit, took his spice recipe, and started traveling to restaurants across America, sleeping in his car. He was told 'NO' 1009 times before someone accepted his franchise deal. That's how KFC was born."
    }
  },
  {
    id: 9,
    category: "START_SMALL",
    subject: { el: "Howard Schultz", en: "Howard Schultz" },
    title: { el: "Περισσότερο από Καφές", en: "More than Coffee" },
    subtitle: { el: "Starbucks", en: "Starbucks" },
    image: WISEBOT_HD,
    storyContent: {
      el: "Ο Howard μεγάλωσε σε εργατικές κατοικίες. Μια μέρα ταξίδεψε στο Μιλάνο και μαγεύτηκε από τα ιταλικά espresso bars. Είδε ότι ο καφές δεν ήταν απλώς ρόφημα, αλλά κοινωνική εμπειρία. Όταν γύρισε στην Αμερική και πρότεινε την ιδέα, οι επενδυτές γέλασαν: «Κανείς δεν θα πληρώσει 3 δολάρια για καφέ σε χάρτινο ποτήρι». Τον απέρριψαν 217 φορές. Εκείνος επέμεινε. Έχτισε τα Starbucks ως το 'τρίτο μέρος' (μετά το σπίτι και τη δουλειά). Άλλαξε την κουλτούρα του καφέ παγκοσμίως.",
      en: "Howard grew up in public housing projects. One day he traveled to Milan and was mesmerized by Italian espresso bars. He saw that coffee wasn't just a drink, but a social experience. When he returned to America and pitched the idea, investors laughed: 'No one will pay $3 for coffee in a paper cup.' He was rejected 217 times. He persisted. He built Starbucks as the 'third place' (between home and work). He changed coffee culture globally."
    }
  },
  {
    id: 10,
    category: "START_SMALL",
    subject: { el: "Henry Ford", en: "Henry Ford" },
    title: { el: "Ένα Αμάξι για Όλους", en: "A Car for Everyone" },
    subtitle: { el: "The Industrialist", en: "The Industrialist" },
    image: LINK_HD,
    storyContent: {
      el: "Πριν τον Ford, τα αυτοκίνητα ήταν παιχνίδια για πλούσιους. Ήταν χειροποίητα και πανάκριβα. Ο Henry Ford είχε ένα όραμα: «Θα φτιάξω ένα αυτοκίνητο για το πλήθος». Οι πρώτες του δύο εταιρείες χρεοκόπησαν. Οι μέτοχοι τον πίεζαν για κέρδη, αλλά εκείνος ήθελε χαμηλότερες τιμές. Εφηύρε τη 'γραμμή συναρμολόγησης', μειώνοντας τον χρόνο παραγωγής από 12 ώρες σε 2,5. Το Model T έγινε προσιτό στον απλό εργάτη. Έβαλε τον κόσμο σε τροχούς.",
      en: "Before Ford, cars were toys for the rich. They were handmade and incredibly expensive. Henry Ford had a vision: 'I will build a car for the great multitude.' His first two companies went bankrupt. Shareholders pushed for higher profits, but he wanted lower prices. He invented the 'assembly line,' reducing production time from 12 hours to 2.5. The Model T became affordable for the common worker. He put the world on wheels."
    }
  },

  // ========================================================================
  // 🏅 CATEGORY 2: SPORTS (Resilience & Mindset)
  // ========================================================================
  {
    id: 11,
    category: "SPORTS",
    subject: { el: "Giannis Antetokounmpo", en: "Giannis Antetokounmpo" },
    title: { el: "Από τα Σεπόλια στην Κορυφή", en: "Sepolia to the Top" },
    subtitle: { el: "The Greek Freak", en: "The Greek Freak" },
    image: CROCUS_HD,
    storyContent: {
      el: "Πριν γίνει MVP του NBA, ο Γιάννης ήταν ένα παιδί μεταναστών χωρίς χαρτιά στην Αθήνα. Πουλούσε CD και γυαλιά ηλίου στους δρόμους για να βοηθήσει την οικογένειά του να φάει. Μοιραζόταν το ίδιο ζευγάρι αθλητικά παπούτσια με τον αδερφό του, Θανάση – όταν ο ένας έπαιζε, ο άλλος περίμενε. Πολλοί προπονητές έλεγαν ότι ήταν 'πολύ αδύνατος' για μπάσκετ. Αλλά ο Γιάννης είχε το 'Crocus Mindset': δούλευε όταν οι άλλοι κοιμόντουσαν. Κοιμόταν στο γυμναστήριο. Η ιστορία του μας διδάσκει ότι η αφετηρία σου δεν καθορίζει τον προορισμό σου.",
      en: "Before becoming an NBA MVP, Giannis was an undocumented immigrant kid in Athens. He sold CDs and sunglasses on the streets to help his family eat. He shared the same pair of sneakers with his brother, Thanasis – when one played, the other waited. Many coaches said he was 'too skinny' for basketball. But Giannis had the 'Crocus Mindset': he worked when others slept. He slept in the gym. His story teaches us that your starting point does not define your destination."
    }
  },
  {
    id: 12,
    category: "SPORTS",
    subject: { el: "Michael Jordan", en: "Michael Jordan" },
    title: { el: "Ο Θρύλος που Κόπηκε", en: "The Cut Legend" },
    subtitle: { el: "The GOAT", en: "The GOAT" },
    image: CROCUS_HD,
    storyContent: {
      el: "Είναι ο μεγαλύτερος παίκτης όλων των εποχών. Αλλά στα 15 του, γύρισε σπίτι κλαίγοντας: τον είχαν κόψει από την ομάδα μπάσκετ του λυκείου του. Ο προπονητής διάλεξε άλλον. Αντί να τα παρατήσει, ο Michael κλείστηκε στο γήπεδο. Κάθε φορά που κουραζόταν, φανταζόταν τη λίστα με τα ονόματα χωρίς το δικό του. Έχει πει: 'Έχω χάσει πάνω από 9.000 σουτ. Έχω χάσει 26 παιχνίδια στο τελευταίο σουτ. Έχω αποτύχει ξανά και ξανά. Και γι' αυτό πέτυχα'.",
      en: "He is the greatest player of all time. But at 15, he went home crying: he had been cut from his high school varsity basketball team. The coach picked someone else. Instead of quitting, Michael locked himself in the gym. Every time he got tired, he visualized the list of names without his on it. He famously said: 'I've missed more than 9,000 shots. I've lost almost 300 games. I've failed over and over and over again in my life. And that is why I succeed.'"
    }
  },
  {
    id: 13,
    category: "SPORTS",
    subject: { el: "Lionel Messi", en: "Lionel Messi" },
    title: { el: "Ο Γίγαντας της Μπάλας", en: "The Football Giant" },
    subtitle: { el: "The Magician", en: "The Magician" },
    image: PENCILO_HD,
    storyContent: {
      el: "Στα 11 του χρόνια, ο μικρός Λίο διαγνώστηκε με έλλειψη αυξητικής ορμόνης. Ήταν πολύ πιο κοντός από τα άλλα παιδιά. Η θεραπεία ήταν ακριβή και η ομάδα του στην Αργεντινή δεν μπορούσε να την πληρώσει. Η οικογένειά του ρίσκαρε τα πάντα και μετακόμισε στην Ισπανία για την Μπαρτσελόνα. Ο τεχνικός διευθυντής εντυπωσιάστηκε τόσο πολύ που υπέγραψε το πρώτο συμβόλαιο του Μέσι πάνω σε μια... χαρτοπετσέτα! Το χαμηλό του κέντρο βάρους έγινε το μεγαλύτερο όπλο του. Μάθημα: Αυτό που φαίνεται μειονέκτημα, μπορεί να γίνει χάρισμα.",
      en: "At 11, little Leo was diagnosed with a growth hormone deficiency. He was much shorter than other kids. The treatment was expensive, and his local club in Argentina couldn't afford it. His family risked everything and moved to Spain for Barcelona. The sporting director was so impressed he signed Messi's first contract on a... paper napkin! His low center of gravity became his greatest weapon. Lesson: What looks like a disadvantage can become your greatest gift."
    }
  },
  {
    id: 14,
    category: "SPORTS",
    subject: { el: "Usain Bolt", en: "Usain Bolt" },
    title: { el: "Τρέχοντας με Σκολίωση", en: "Running with Scoliosis" },
    subtitle: { el: "Lightning", en: "Lightning" },
    image: SPARKEN_HD,
    storyContent: {
      el: "Ο γρηγορότερος άνθρωπος στον κόσμο δεν έχει τέλειο σώμα. Ο Usain Bolt γεννήθηκε με σκολίωση (στραβή σπονδυλική στήλη), κάνοντας το ένα του πόδι λίγο κοντύτερο από το άλλο. Οι ειδικοί έλεγαν ότι είναι πολύ ψηλός για σπρίντερ, ότι θα αργεί στην εκκίνηση. Και όντως αργούσε. Αλλά δούλεψε τον βηματισμό του ώστε να εκμεταλλευτεί το ύψος του στα τελευταία μέτρα. Κέρδισε 8 χρυσά Ολυμπιακά μετάλλια, τρώγοντας συχνά κοτομπουκιές πριν τον αγώνα. Μας έμαθε να τρέχουμε με χαμόγελο.",
      en: "The fastest man in the world doesn't have a perfect body. Usain Bolt was born with scoliosis (curved spine), making one leg slightly shorter than the other. Experts said he was too tall for a sprinter, that he would be slow off the blocks. And he was. But he worked on his stride to leverage his height in the final meters. He won 8 Olympic gold medals, often eating chicken nuggets before the race. He taught us to run with a smile."
    }
  },
  {
    id: 15,
    category: "SPORTS",
    subject: { el: "Serena Williams", en: "Serena Williams" },
    title: { el: "Από το Γκέτο στο Wimbledon", en: "Ghetto to Wimbledon" },
    subtitle: { el: "The Queen", en: "The Queen" },
    image: CROCUS_HD,
    storyContent: {
      el: "Η Serena και η αδερφή της Venus δεν προπονήθηκαν σε ακριβά κλαμπ. Ο πατέρας τους τις προπονούσε στα δημόσια γήπεδα του Compton, μιας κακόφημης περιοχής, συχνά αποφεύγοντας σπασμένα μπουκάλια και ήχους πυροβολισμών. Τους δίδαξε να είναι πνευματικά αλύγιστες. Η Serena αντιμετώπισε ρατσισμό, κριτική για το σώμα της και σοβαρά προβλήματα υγείας. Κυριάρχησε στο τένις για δύο δεκαετίες, κερδίζοντας Grand Slam ακόμα και όταν ήταν έγκυος. Απέδειξε ότι η δύναμη είναι ομορφιά.",
      en: "Serena and her sister Venus didn't train at expensive country clubs. Their father coached them on the public courts of Compton, a rough neighborhood, often dodging broken glass and the sound of gunfire. He taught them to be mentally unbreakable. Serena faced racism, body shaming, and life-threatening health issues. She dominated tennis for two decades, winning a Grand Slam even while pregnant. She proved that strength is beauty."
    }
  },
  {
    id: 16,
    category: "SPORTS",
    subject: { el: "Kobe Bryant", en: "Kobe Bryant" },
    title: { el: "Mamba Mentality", en: "Mamba Mentality" },
    subtitle: { el: "The Worker", en: "The Worker" },
    image: WISEBOT_HD,
    storyContent: {
      el: "Ο Kobe δεν ήταν απλώς ταλαντούχος. Ήταν εμμονικός με την εργατικότητα. Ξυπνούσε στις 4:00 το πρωί κάθε μέρα για προπόνηση, πριν καν ξυπνήσουν οι συμπαίκτες του. Μελετούσε βίντεο αγώνων, διάβαζε ακόμα και το εγχειρίδιο των διαιτητών για να ξέρει κάθε κανόνα! Όταν έσπασε τον αχίλλειο τένοντά του, περπάτησε μόνος του για να εκτελέσει τις βολές. Αυτό ονόμασε 'Mamba Mentality': η διαρκής προσπάθεια να γίνεσαι η καλύτερη εκδοχή του εαυτού σου, κάθε μέρα, χωρίς δικαιολογίες.",
      en: "Kobe wasn't just talented. He was obsessed with work ethic. He woke up at 4:00 AM every day to train, long before his teammates were even awake. He studied game tapes, even reading the referee handbook to know every rule! When he tore his Achilles tendon during a game, he walked on his own to shoot the free throws. He called this 'Mamba Mentality': the constant quest to become the best version of yourself, every single day, with no excuses."
    }
  },
  {
    id: 17,
    category: "SPORTS",
    subject: { el: "Muhammad Ali", en: "Muhammad Ali" },
    title: { el: "Ο Πρωταθλητής του Λαού", en: "The People's Champ" },
    subtitle: { el: "The Greatest", en: "The Greatest" },
    image: SPARKEN_HD,
    storyContent: {
      el: "Ο Cassius Clay (αργότερα Muhammad Ali) δεν ήταν μόνο γροθιές. Ήταν ποιητής μέσα στο ρινγκ: «Πετάω σαν πεταλούδα, τσιμπάω σαν μέλισσα». Αλλά η μεγαλύτερη μάχη του δόθηκε έξω από το ρινγκ. Αρνήθηκε να πολεμήσει στον πόλεμο του Βιετνάμ λόγω των πιστεύω του. Του αφαίρεσαν τον τίτλο, του πήραν την άδεια πυγμαχίας και κινδύνεψε με φυλάκιση. Έμεινε εκτός αγώνων στα καλύτερά του χρόνια. Όταν γύρισε, ήταν πιο αργός, αλλά πιο σοφός και αγαπητός. Μας έμαθε ότι αξίες μετράνε περισσότερο από τις ζώνες.",
      en: "Cassius Clay (later Muhammad Ali) wasn't just about punches. He was a poet in the ring: 'Float like a butterfly, sting like a bee.' But his biggest fight was outside the ring. He refused to fight in the Vietnam War due to his beliefs. They stripped him of his title, took his boxing license, and he faced prison. He stayed out of the ring during his prime years. When he returned, he was slower but wiser and beloved. He taught us that values matter more than belts."
    }
  },
  {
    id: 18,
    category: "SPORTS",
    subject: { el: "Michael Phelps", en: "Michael Phelps" },
    title: { el: "Το Ανθρώπινο Ψάρι", en: "The Human Fish" },
    subtitle: { el: "The Shark", en: "The Shark" },
    image: LINK_HD,
    storyContent: {
      el: "Ως παιδί, ο Michael είχε σοβαρό ΔΕΠΥ (διαταραχή προσοχής). Δεν μπορούσε να καθίσει ήσυχος στην τάξη. Μια δασκάλα είπε στη μητέρα του: «Ο γιος σου δεν θα πετύχει ποτέ τίποτα». Η ενέργειά του ήταν ανεξέλεγκτη... μέχρι που μπήκε στο νερό. Η πισίνα έγινε το ησυχαστήριό του. Το σώμα του ήταν φτιαγμένο για κολύμπι (τεράστιο άνοιγμα χεριών, κοντά πόδια). Κέρδισε 28 Ολυμπιακά μετάλλια, τα περισσότερα από κάθε άλλον αθλητή στην ιστορία. Το 'πρόβλημά' του έγινε το καύσιμό του.",
      en: "As a child, Michael had severe ADHD. He couldn't sit still in class. A teacher told his mother: 'Your son will never amount to anything.' His energy was uncontrollable... until he got into the water. The pool became his sanctuary. His body was built for swimming (huge wingspan, short legs). He won 28 Olympic medals, more than any other athlete in history. His 'problem' became his fuel."
    }
  },
  {
    id: 19,
    category: "SPORTS",
    subject: { el: "Nadia Comaneci", en: "Nadia Comaneci" },
    title: { el: "Το Τέλειο 10", en: "The Perfect 10" },
    subtitle: { el: "Perfection", en: "Perfection" },
    image: PENCILO_HD,
    storyContent: {
      el: "Στους Ολυμπιακούς του 1976 στο Μόντρεαλ, η 14χρονη Νάντια από τη Ρουμανία έκανε κάτι που θεωρούνταν αδύνατο. Η εμφάνισή της στους ασύμμετρους ζυγούς ήταν αψεγάδιαστη. Οι πίνακες του σκορ δεν ήταν φτιαγμένοι για το '10', γιατί κανείς δεν πίστευε ότι μπορεί να επιτευχθεί. Όταν έδειξαν '1.00', ο κόσμος μπερδεύτηκε. Ήταν το πρώτο τέλειο 10 στην ιστορία της ενόργανης. Η Νάντια απέδειξε ότι τα όρια υπάρχουν μόνο στο μυαλό μας – και στα μηχανήματα, όχι στους ανθρώπους.",
      en: "At the 1976 Montreal Olympics, 14-year-old Nadia from Romania did something considered impossible. Her performance on the uneven bars was flawless. The scoreboards weren't built to display a '10' because no one thought it could be achieved. When they showed '1.00', the crowd was confused. It was the first perfect 10 in gymnastics history. Nadia proved that limits exist only in our minds – and in machines, not in humans."
    }
  },
  {
    id: 20,
    category: "SPORTS",
    subject: { el: "Cristiano Ronaldo", en: "Cristiano Ronaldo" },
    title: { el: "Μηχανή Πειθαρχίας", en: "Discipline Machine" },
    subtitle: { el: "CR7", en: "CR7" },
    image: CROCUS_HD,
    storyContent: {
      el: "Ο Ρονάλντο δεν γεννήθηκε πλούσιος. Μεγάλωσε στη Μαδέρα και έφυγε από το σπίτι του στα 12 για να κυνηγήσει το όνειρό του στη Λισαβόνα, κλαίγοντας κάθε βράδυ από νοσταλγία. Αυτό που τον ξεχωρίζει δεν είναι μόνο το ταλέντο, αλλά η στρατιωτική πειθαρχία. Είναι ο πρώτος που πάει στην προπόνηση και ο τελευταίος που φεύγει. Προσέχει τη διατροφή του και τον ύπνο του σαν επιστήμονας. Στα 39 του, παίζει ακόμα σε κορυφαίο επίπεδο, αποδεικνύοντας ότι το σώμα ακολουθεί εκεί που το μυαλό διατάζει.",
      en: "Ronaldo wasn't born rich. He grew up in Madeira and left home at 12 to chase his dream in Lisbon, crying every night from homesickness. What sets him apart isn't just talent, but military discipline. He is the first to arrive at training and the last to leave. He watches his diet and sleep like a scientist. At 39, he still plays at a top level, proving that the body follows where the mind commands."
    }
  },

  // ========================================================================
  // 💻 CATEGORY 3: TECH (Innovation & Coding)
  // ========================================================================
  {
    id: 21,
    category: "TECH",
    subject: { el: "Thomas Edison", en: "Thomas Edison" },
    title: { el: "1.000 Τρόποι να Μάθεις", en: "1,000 Ways to Learn" },
    subtitle: { el: "The Visionary", en: "The Visionary" },
    image: SPARKEN_HD,
    storyContent: {
      el: "Ο δάσκαλός του τον έστειλε σπίτι με ένα σημείωμα που έλεγε ότι είναι 'πολύ χαζός για να μάθει'. Η μητέρα του, όμως, του είπε ότι το σημείωμα έλεγε 'είσαι ιδιοφυΐα, το σχολείο δεν σε χωράει' και τον δίδαξε η ίδια. Ο Edison έγινε ο μεγαλύτερος εφευρέτης. Όταν προσπαθούσε να φτιάξει τον ηλεκτρικό λαμπτήρα, απέτυχε χιλιάδες φορές. Όταν τον ρώτησαν πώς ένιωσε για τις αποτυχίες, απάντησε: 'Δεν απέτυχα. Απλά βρήκα 1.000 τρόπους που δεν δουλεύει η λάμπα'. Η εφεύρεση είναι 1% έμπνευση και 99% ιδρώτας.",
      en: "His teacher sent him home with a note saying he was 'too stupid to learn.' His mother, however, told him the note said 'you are a genius, the school is too small for you' and taught him herself. Edison became the greatest inventor. While trying to create the light bulb, he failed thousands of times. When asked about his failures, he replied: 'I have not failed. I've just found 1,000 ways that won't work.' Invention is 1% inspiration and 99% perspiration."
    }
  },
  {
    id: 22,
    category: "TECH",
    subject: { el: "Steve Jobs", en: "Steve Jobs" },
    title: { el: "Συνδέοντας τις Τελείες", en: "Connecting the Dots" },
    subtitle: { el: "The Innovator", en: "The Innovator" },
    image: LINK_HD,
    storyContent: {
      el: "Ο Steve παράτησε το πανεπιστήμιο γιατί δεν ήθελε να ξοδεύει τα λεφτά των γονιών του. Παρακολούθησε όμως 'λαθραία' ένα μάθημα καλλιγραφίας. Τότε φαινόταν άχρηστο. Χρόνια αργότερα, όταν έφτιαχνε τον πρώτο Mac, θυμήθηκε εκείνο το μάθημα και έβαλε όμορφες γραμματοσειρές στον υπολογιστή. Αργότερα, τον απέλυσαν από την ίδια του την εταιρεία, την Apple! Αντί να καταστραφεί, έφτιαξε την Pixar και την NeXT. Γύρισε θριαμβευτικά και μας έδωσε το iPhone. Το μάθημα; Δεν μπορείς να συνδέσεις τις τελείες κοιτώντας μπροστά, μόνο κοιτώντας πίσω.",
      en: "Steve dropped out of college because he didn't want to waste his parents' money. However, he 'sneaked' into a calligraphy class. It seemed useless at the time. Years later, when building the first Mac, he remembered that class and put beautiful typography into the computer. Later, he was fired from his own company, Apple! Instead of being destroyed, he built Pixar and NeXT. He returned triumphantly and gave us the iPhone. Lesson: You can't connect the dots looking forward; you can only connect them looking backward."
    }
  },
  {
    id: 23,
    category: "TECH",
    subject: { el: "Bill Gates", en: "Bill Gates" },
    title: { el: "Ο Κώδικας του Μέλλοντος", en: "The Code of the Future" },
    subtitle: { el: "The Architect", en: "The Architect" },
    image: PENCILO_HD,
    storyContent: {
      el: "Ως έφηβος, ο Bill χακάριζε το σύστημα του σχολείου του για να μπει σε τάξεις με κορίτσια! Αγάπησε τον προγραμματισμό και διάβαζε εγκυκλοπαίδειες για διασκέδαση. Παράτησε το Χάρβαρντ για να ιδρύσει τη Microsoft, πιστεύοντας ότι μια μέρα 'κάθε σπίτι θα έχει έναν υπολογιστή'. Πολλοί τον έλεγαν τρελό. Όταν πέτυχε, έγινε ο πλουσιότερος άνθρωπος στον κόσμο, αλλά αποφάσισε να δωρίσει τη περιουσία του για να λύσει προβλήματα υγείας στην Αφρική. Η ευφυΐα αποκτά αξία όταν βοηθάει τον κόσμο.",
      en: "As a teenager, Bill hacked his school's system to get into classes with girls! He loved coding and read encyclopedias for fun. He dropped out of Harvard to found Microsoft, believing that one day 'there would be a computer on every desk.' Many called him crazy. When he succeeded, becoming the richest man on earth, he decided to give his wealth away to solve health problems in Africa. Intelligence gains value when it helps the world."
    }
  },
  {
    id: 24,
    category: "TECH",
    subject: { el: "Elon Musk", en: "Elon Musk" },
    title: { el: "Πυραύλοι και Όνειρα", en: "Rockets and Dreams" },
    subtitle: { el: "The Rocket Man", en: "The Rocket Man" },
    image: CROCUS_HD,
    storyContent: {
      el: "Ο Elon υπέστη σκληρό bullying στο σχολείο στη Νότια Αφρική. Κλείστηκε στα βιβλία και στους υπολογιστές. Ίδρυσε την PayPal και έβγαλε εκατομμύρια. Αντί να αποσυρθεί σε ένα νησί, ρίσκαρε ΟΛΑ του τα χρήματα για να φτιάξει πυραύλους (SpaceX) και ηλεκτρικά αμάξια (Tesla). Το 2008, και οι δύο εταιρείες ήταν έτοιμες να χρεοκοπήσουν. Επέμεινε. Σήμερα, οι πύραυλοί του προσγειώνονται μόνοι τους και στοχεύει στον Άρη. Μάθημα: Όταν κάτι είναι αρκετά σημαντικό, το κάνεις ακόμα και αν οι πιθανότητες είναι εναντίον σου.",
      en: "Elon was severely bullied in school in South Africa. He retreated into books and computers. He founded PayPal and made millions. Instead of retiring to an island, he risked ALL his money to build rockets (SpaceX) and electric cars (Tesla). In 2008, both companies were on the brink of bankruptcy. He persisted. Today, his rockets land themselves, and he aims for Mars. Lesson: When something is important enough, you do it even if the odds are against you."
    }
  },
  {
    id: 25,
    category: "TECH",
    subject: { el: "Nikola Tesla", en: "Nikola Tesla" },
    title: { el: "Ο Άνθρωπος που Εφηύρε τον 20ο Αιώνα", en: "Inventor of 20th Century" },
    subtitle: { el: "The Genius", en: "The Genius" },
    image: WISEBOT_HD,
    storyContent: {
      el: "Ο Τέσλα ήταν μια ιδιοφυΐα που σκεφτόταν σε 3D: κατασκεύαζε τις μηχανές στο μυαλό του και τις έβλεπε να λειτουργούν πριν καν τις σχεδιάσει. Μας έδωσε το εναλλασσόμενο ρεύμα (AC) που φωτίζει τα σπίτια μας, το ραδιόφωνο, το ραντάρ, και οραματίστηκε τα κινητά και το Wi-Fi το 1900! Πέθανε φτωχός και μόνος, γιατί τον ενδιέφερε η επιστήμη και όχι το κέρδος. Το όνομά του ζει σήμερα ως σύμβολο της ανιδιοτελούς καινοτομίας.",
      en: "Tesla was a genius who thought in 3D: he built machines in his mind and watched them run before even drawing them. He gave us the Alternating Current (AC) that powers our homes, the radio, radar, and envisioned mobile phones and Wi-Fi in 1900! He died poor and alone because he cared for science, not profit. His name lives on today as a symbol of selfless innovation."
    }
  },
  {
    id: 26,
    category: "TECH",
    subject: { el: "Mark Zuckerberg", en: "Mark Zuckerberg" },
    title: { el: "Move Fast and Break Things", en: "Move Fast and Break Things" },
    subtitle: { el: "Social Network", en: "Social Network" },
    image: LINK_HD,
    storyContent: {
      el: "Σε έναν φοιτητικό κοιτώνα στο Χάρβαρντ, ο Mark έγραψε κώδικα για μια ιστοσελίδα που θα ένωνε τους φοιτητές. Το ονόμασε 'The Facebook'. Η ιδέα εξαπλώθηκε σαν πυρκαγιά. Παράτησε το πανεπιστήμιο και μετακόμισε στην Καλιφόρνια. Η φιλοσοφία του ήταν 'Κινήσου γρήγορα και σπάσε πράγματα' (αν δεν σπας κάτι, δεν κινείσαι αρκετά γρήγορα). Άλλαξε τον τρόπο που επικοινωνεί όλος ο πλανήτης, αποδεικνύοντας ότι ένας φοιτητής με ένα laptop μπορεί να αλλάξει τον κόσμο.",
      en: "In a Harvard dorm room, Mark wrote code for a website to connect students. He called it 'The Facebook.' The idea spread like wildfire. He dropped out and moved to California. His philosophy was 'Move fast and break things' (if you aren't breaking stuff, you aren't moving fast enough). He changed how the entire planet communicates, proving that a student with a laptop can change the world."
    }
  },
  {
    id: 27,
    category: "TECH",
    subject: { el: "Ada Lovelace", en: "Ada Lovelace" },
    title: { el: "Η Πρώτη Προγραμματίστρια", en: "The First Programmer" },
    subtitle: { el: "The Pioneer", en: "The Pioneer" },
    image: PENCILO_HD,
    storyContent: {
      el: "Στο 1840, πολύ πριν υπάρξουν υπολογιστές, η Ada (κόρη του Λόρδου Βύρωνα) συνεργάστηκε με τον Charles Babbage στη 'Αναλυτική Μηχανή'. Ενώ όλοι έβλεπαν μια αριθμομηχανή, η Ada είδε κάτι παραπάνω: μια μηχανή που θα μπορούσε να χειριστεί σύμβολα, μουσική και τέχνη. Έγραψε τον πρώτο αλγόριθμο στην ιστορία. Είναι η 'μητέρα' του προγραμματισμού, αποδεικνύοντας ότι η φαντασία είναι απαραίτητη στην τεχνολογία.",
      en: "In 1840, long before computers existed, Ada (daughter of Lord Byron) worked with Charles Babbage on the 'Analytical Engine.' While everyone else saw a calculator, Ada saw something more: a machine that could manipulate symbols, music, and art. She wrote the first algorithm in history. She is the 'mother' of programming, proving that imagination is essential to technology."
    }
  },
  {
    id: 28,
    category: "TECH",
    subject: { el: "Alan Turing", en: "Alan Turing" },
    title: { el: "Το Παιχνίδι της Μίμησης", en: "The Imitation Game" },
    subtitle: { el: "The Enigma", en: "The Enigma" },
    image: WISEBOT_HD,
    storyContent: {
      el: "Στον Β' Παγκόσμιο Πόλεμο, οι Ναζί χρησιμοποιούσαν μια άλυτη μηχανή κρυπτογράφησης, την 'Enigma'. Ο Turing, ένας εκκεντρικός μαθηματικός, πίστευε ότι μόνο μια μηχανή μπορεί να νικήσει μια άλλη μηχανή. Έφτιαξε τον πρόγονο του σημερινού υπολογιστή και έσπασε τον κώδικα, σώζοντας εκατομμύρια ζωές. Διώχθηκε για την προσωπική του ζωή, αλλά σήμερα τιμάται ως ο πατέρας της Πληροφορικής.",
      en: "In WWII, the Nazis used an unbreakable encryption machine, 'Enigma.' Turing, an eccentric mathematician, believed that only a machine could defeat another machine. He built the ancestor of the modern computer and broke the code, saving millions of lives. Persecuted for his personal life, he is today honored as the father of Computer Science."
    }
  },
  {
    id: 29,
    category: "TECH",
    subject: { el: "Larry Page & Sergey Brin", en: "Larry Page & Sergey Brin" },
    title: { el: "Οργανώνοντας το Ίντερνετ", en: "Organizing the Internet" },
    subtitle: { el: "Google", en: "Google" },
    image: SPARKEN_HD,
    storyContent: {
      el: "Στα τέλη του '90, το ίντερνετ ήταν χάος. Δύο φοιτητές στο Stanford, ο Larry και ο Sergey, σκέφτηκαν έναν καλύτερο τρόπο αναζήτησης: να μετράνε πόσες άλλες σελίδες 'δείχνουν' σε μια σελίδα. Προσπάθησαν να πουλήσουν την ιδέα τους (Google) για 1 εκατομμύριο, αλλά κανείς δεν την ήθελε! Έτσι, την κράτησαν. Σήμερα, 'Googlάρω' σημαίνει 'ψάχνω'. Μάθημα: Όταν κανείς δεν αγοράζει το όνειρό σου, χτίσε το μόνος σου.",
      en: "In the late 90s, the internet was a mess. Two Stanford students, Larry and Sergey, thought of a better way to search: counting how many other pages 'point' to a page. They tried to sell their idea (Google) for $1 million, but no one wanted it! So, they kept it. Today, 'Googling' means 'searching.' Lesson: When no one buys your dream, build it yourself."
    }
  },
  {
    id: 30,
    category: "TECH",
    subject: { el: "Tim Berners-Lee", en: "Tim Berners-Lee" },
    title: { el: "Το Δώρο στον Κόσμο", en: "Gift to the World" },
    subtitle: { el: "The WWW", en: "The WWW" },
    image: LINK_HD,
    storyContent: {
      el: "Ο Sir Tim εφηύρε τον Παγκόσμιο Ιστό (WWW) στο CERN το 1989. Θα μπορούσε να τον πατεντάρει και να γίνει ο πλουσιότερος άνθρωπος στην ιστορία. Αντί γι' αυτό, τον χάρισε στην ανθρωπότητα δωρεάν, ώστε όλοι να μπορούν να μοιράζονται γνώση. Χάρη στην απόφασή του, διαβάζεις αυτό το κείμενο τώρα. Η μεγαλύτερη καινοτομία ήταν η γεναιοδωρία του.",
      en: "Sir Tim invented the World Wide Web (WWW) at CERN in 1989. He could have patented it and become the richest man in history. Instead, he gave it to humanity for free, so everyone could share knowledge. Thanks to his decision, you are reading this text now. His greatest innovation was his generosity."
    }
  },

  // ========================================================================
  // 🎨 CATEGORY 4: ARTS (Expression & Pain)
  // ========================================================================
  {
    id: 31,
    category: "ARTS",
    subject: { el: "Frida Kahlo", en: "Frida Kahlo" },
    title: { el: "Ζωγραφίζοντας τον Πόνο", en: "Painting the Pain" },
    subtitle: { el: "The Artist", en: "The Artist" },
    image: PENCILO_HD,
    storyContent: {
      el: "Στα 18 της, ένα φρικτό ατύχημα με λεωφορείο άφησε τη Φρίντα με σπασμένη σπονδυλική στήλη. Καθηλωμένη στο κρεβάτι για μήνες, ζήτησε έναν καθρέφτη στο ταβάνι και μπογιές. «Ζωγραφίζω τον εαυτό μου γιατί είμαι το θέμα που ξέρω καλύτερα», είπε. Μετέτρεψε τον αφόρητο σωματικό και ψυχικό της πόνο σε τέχνη γεμάτη χρώμα, λουλούδια και σουρεαλισμό. Έγινε σύμβολο φεμινισμού και αντοχής. Η τέχνη ήταν το φάρμακό της.",
      en: "At 18, a horrific bus accident left Frida with a broken spine. Bedridden for months, she asked for a mirror on the ceiling and paints. 'I paint myself because I am the subject I know best,' she said. She transformed her unbearable physical and emotional pain into art full of color, flowers, and surrealism. She became a symbol of feminism and resilience. Art was her medicine."
    }
  },
  {
    id: 32,
    category: "ARTS",
    subject: { el: "Beethoven", en: "Beethoven" },
    title: { el: "Η Σιωπηλή Συμφωνία", en: "The Silent Symphony" },
    subtitle: { el: "The Maestro", en: "The Maestro" },
    image: WISEBOT_HD,
    storyContent: {
      el: "Φαντάσου έναν ζωγράφο τυφλό. Ο Beethoven ήταν ένας συνθέτης κουφός. Στα 20 του άρχισε να χάνει την ακοή του. Σκέφτηκε να αυτοκτονήσει, αλλά η μουσική τον έσωσε. Έγραψε την 9η Συμφωνία (τον Ύμνο της Χαράς) όταν ήταν εντελώς κουφός! Στην πρεμιέρα, έπρεπε να τον γυρίσουν προς το κοινό για να δει το χειροκρότημα που δεν μπορούσε να ακούσει. Έκοβε τα πόδια του πιάνου για να νιώθει τις δονήσεις στο πάτωμα. Το πνεύμα νίκησε το σώμα.",
      en: "Imagine a blind painter. Beethoven was a deaf composer. In his 20s, he started losing his hearing. He contemplated suicide, but music saved him. He wrote the 9th Symphony (Ode to Joy) when he was completely deaf! At the premiere, they had to turn him around to see the applause he couldn't hear. He cut the legs off his piano to feel the vibrations on the floor. Spirit conquered body."
    }
  },
  {
    id: 33,
    category: "ARTS",
    subject: { el: "Pablo Picasso", en: "Pablo Picasso" },
    title: { el: "Μαθαίνοντας να είσαι Παιδί", en: "Learning to be a Child" },
    subtitle: { el: "Cubism", en: "Cubism" },
    image: PENCILO_HD,
    storyContent: {
      el: "Ο Πικάσο ήταν παιδί-θαύμα. Στα 14 του ζωγράφιζε ρεαλιστικά σαν τους παλιούς δασκάλους (όπως ο Ραφαήλ). Αλλά βαρέθηκε. Ήθελε να δείξει τον κόσμο όχι όπως φαίνεται, αλλά όπως είναι: σπασμένος, πολύπλευρος, γεμάτος συναίσθημα. Επινόησε τον Κυβισμό. Είπε το διάσημο: «Μου πήρε τέσσερα χρόνια να ζωγραφίσω σαν τον Ραφαήλ, αλλά μια ολόκληρη ζωή για να ζωγραφίσω σαν παιδί». Η αληθινή τέχνη θέλει αθωότητα.",
      en: "Picasso was a child prodigy. At 14, he painted realistically like the old masters (like Raphael). But he got bored. He wanted to show the world not as it looks, but as it is: broken, multifaceted, full of emotion. He invented Cubism. He famously said: 'It took me four years to paint like Raphael, but a lifetime to paint like a child.' True art requires innocence."
    }
  },
  {
    id: 34,
    category: "ARTS",
    subject: { el: "Mozart", en: "Mozart" },
    title: { el: "Η Αιώνια Μελωδία", en: "The Eternal Melody" },
    subtitle: { el: "The Prodigy", en: "The Prodigy" },
    image: SPARKEN_HD,
    storyContent: {
      el: "Ο Αμαντέους Μότσαρτ έγραψε την πρώτη του συμφωνία στα 5 του χρόνια. Ταξίδευε σε όλη την Ευρώπη παίζοντας με δεμένα μάτια. Μπορούσε να ακούσει ένα ολόκληρο μουσικό κομμάτι στο μυαλό του και απλώς να το γράψει στο χαρτί χωρίς διορθώσεις. Πέθανε νέος και φτωχός, αλλά άφησε πίσω του πάνω από 600 έργα. Μας διδάσκει ότι το ταλέντο είναι δώρο, αλλά η αφοσίωση είναι αυτή που το κάνει αθάνατο.",
      en: "Amadeus Mozart wrote his first symphony at age 5. He traveled across Europe playing blindfolded. He could hear an entire piece of music in his head and just write it down on paper without corrections. He died young and poor, but left behind over 600 works. He teaches us that talent is a gift, but dedication makes it immortal."
    }
  },
  {
    id: 35,
    category: "ARTS",
    subject: { el: "William Shakespeare", en: "William Shakespeare" },
    title: { el: "Ο Αρχιτέκτονας των Λέξεων", en: "Architect of Words" },
    subtitle: { el: "The Bard", en: "The Bard" },
    image: WISEBOT_HD,
    storyContent: {
      el: "Ο Σαίξπηρ δεν πήγε πανεπιστήμιο. Ήταν γιος ενός γαντοποιού. Όμως, κατάλαβε την ανθρώπινη ψυχή καλύτερα από κάθε ψυχολόγο. Εφηύρε πάνω από 1.700 λέξεις που χρησιμοποιούμε στα Αγγλικά σήμερα (όπως 'lonely', 'kiss', 'manager'). Τα έργα του (Άμλετ, Ρωμαίος & Ιουλιέτα) παίζονται ακόμα μετά από 400 χρόνια. Έδειξε ότι οι λέξεις είναι το πιο ισχυρό φάρμακο.",
      en: "Shakespeare didn't go to university. He was a glove-maker's son. Yet, he understood the human soul better than any psychologist. He invented over 1,700 words used in English today (like 'lonely', 'kiss', 'manager'). His plays (Hamlet, Romeo & Juliet) are still performed 400 years later. He showed that words are the most potent drug."
    }
  },
  {
    id: 36,
    category: "ARTS",
    subject: { el: "Steven Spielberg", en: "Steven Spielberg" },
    title: { el: "Ονειροπόλος με Κάμερα", en: "Dreamer with a Camera" },
    subtitle: { el: "Director", en: "Director" },
    image: CROCUS_HD,
    storyContent: {
      el: "Τον απέρριψαν από τη Σχολή Κινηματογράφου του USC τρεις φορές λόγω χαμηλών βαθμών. Δεν το έβαλε κάτω. Μπήκε κρυφά στα Universal Studios, βρήκε ένα άδειο γραφείο και προσποιήθηκε ότι δούλευε εκεί! Στα γυρίσματα του 'Jaws', ο μηχανικός καρχαρίας χάλαγε συνέχεια. Αντί να τα παρατήσει, ο Spielberg αποφάσισε να δείχνει τον καρχαρία λιγότερο και να παίζει με τη μουσική και τον φόβο του άγνωστου. Αυτό έκανε την ταινία αριστούργημα. Το εμπόδιο έγινε τέχνη.",
      en: "He was rejected from USC Film School three times due to poor grades. He didn't quit. He sneaked into Universal Studios, found an empty office, and pretended to work there! While filming 'Jaws', the mechanical shark kept breaking. Instead of quitting, Spielberg decided to show the shark less and play with music and the fear of the unknown. This made the movie a masterpiece. The obstacle became art."
    }
  },
  {
    id: 37,
    category: "ARTS",
    subject: { el: "Leonardo da Vinci", en: "Leonardo da Vinci" },
    title: { el: "Ο Άνθρωπος που Ήξερε τα Πάντα", en: "The Man Who Knew Everything" },
    subtitle: { el: "Renaissance", en: "Renaissance" },
    image: LINK_HD,
    storyContent: {
      el: "Ζωγράφος, γλύπτης, αρχιτέκτονας, μηχανικός, επιστήμονας. Ο Ντα Βίντσι ήταν η προσωποποίηση της περιέργειας. Σχεδίασε ελικόπτερα, τανκς και αλεξίπτωτα 400 χρόνια πριν εφευρεθούν. Έγραφε τις σημειώσεις του ανάποδα (καθρεπτικά) για να τις προστατεύσει. Η 'Μόνα Λίζα' είναι διάσημη όχι μόνο για το χαμόγελο, αλλά για την επιστημονική χρήση του φωτός και της σκιάς. Μας έμαθε ότι η τέχνη και η επιστήμη είναι αδέρφια.",
      en: "Painter, sculptor, architect, engineer, anatomist. Da Vinci was the embodiment of curiosity. He sketched helicopters, tanks, and parachutes 400 years before they were invented. He wrote his notes backwards (mirror writing) to protect them. The 'Mona Lisa' is famous not just for the smile, but for the scientific use of light and shadow. He taught us that art and science are siblings."
    }
  },
  {
    id: 38,
    category: "ARTS",
    subject: { el: "Vincent van Gogh", en: "Vincent van Gogh" },
    title: { el: "Φως μέσα στο Σκοτάδι", en: "Light in Darkness" },
    subtitle: { el: "Starry Night", en: "Starry Night" },
    image: PENCILO_HD,
    storyContent: {
      el: "Ο Βαν Γκογκ πούλησε μόνο έναν πίνακα όσο ζούσε. Υπέφερε από ψυχική ασθένεια και φτώχεια. Όμως, έβλεπε τον κόσμο διαφορετικά: γεμάτο κίνηση και ενέργεια. Η 'Έναστρη Νύχτα' ζωγραφίστηκε ενώ ήταν στο άσυλο. Σήμερα θεωρείται ένας από τους σπουδαιότερους καλλιτέχνες στην ιστορία. Η ιστορία του μας θυμίζει ότι η επιτυχία μπορεί να αργήσει, αλλά η αλήθεια της ψυχής λάμπει πάντα.",
      en: "Van Gogh sold only one painting while alive. He suffered from mental illness and poverty. Yet, he saw the world differently: full of motion and energy. 'The Starry Night' was painted while he was in an asylum. Today he is considered one of the greatest artists in history. His story reminds us that success may come late, but the truth of the soul always shines."
    }
  },
  {
    id: 39,
    category: "ARTS",
    subject: { el: "Coco Chanel", en: "Coco Chanel" },
    title: { el: "Ελευθερία στο Ντύσιμο", en: "Freedom in Dressing" },
    subtitle: { el: "Style", en: "Style" },
    image: WISEBOT_HD,
    storyContent: {
      el: "Μεγάλωσε σε ορφανοτροφείο όπου έμαθε να ράβει. Στην εποχή της, οι γυναίκες φορούσαν ασφυκτικούς κορσέδες και τεράστια καπέλα. Η Coco πίστευε ότι «η πολυτέλεια πρέπει να είναι άνετη, αλλιώς δεν είναι πολυτέλεια». Έβαλε τις γυναίκες σε παντελόνια, χρησιμοποίησε ύφασμα φανέλας και δημιούργησε το 'μικρό μαύρο φόρεμα'. Απελευθέρωσε το γυναικείο σώμα μέσω της μόδας.",
      en: "She grew up in an orphanage where she learned to sew. In her time, women wore suffocating corsets and huge hats. Coco believed that 'luxury must be comfortable, otherwise it is not luxury.' She put women in trousers, used jersey fabric, and created the 'little black dress.' She liberated the female body through fashion."
    }
  },
  {
    id: 40,
    category: "ARTS",
    subject: { el: "The Beatles", en: "The Beatles" },
    title: { el: "Τα Σκαθάρια που Άλλαξαν τον Κόσμο", en: "Beetles Changed World" },
    subtitle: { el: "Music Icons", en: "Music Icons" },
    image: SPARKEN_HD,
    storyContent: {
      el: "Όταν οι Beatles ξεκίνησαν, οι δισκογραφικές τους απέρριψαν λέγοντας: «Τα συγκροτήματα με κιθάρες τελείωσαν». Εκείνοι συνέχισαν. Έπαιζαν σε άθλια μπαρ στο Αμβούργο για 8 ώρες τη μέρα, αποκτώντας απίστευτη εμπειρία (ο κανόνας των 10.000 ωρών). Έγραψαν τα δικά τους τραγούδια (κάτι σπάνιο τότε) και άλλαξαν την ποπ κουλτούρα για πάντα. Όλα ξεκίνησαν από 4 φίλους στο Λίβερπουλ.",
      en: "When the Beatles started, record labels rejected them saying: 'Guitar groups are on their way out.' They kept going. They played in dingy bars in Hamburg for 8 hours a day, gaining incredible experience (the 10,000-hour rule). They wrote their own songs (rare at the time) and changed pop culture forever. It all started with 4 friends in Liverpool."
    }
  },

  // ========================================================================
  // 🌍 CATEGORY 5: SCIENCE (Curiosity & Discovery)
  // ========================================================================
  {
    id: 41,
    category: "SCIENCE",
    subject: { el: "Albert Einstein", en: "Albert Einstein" },
    title: { el: "Καβαλώντας μια Αχτίδα Φωτός", en: "Riding a Lightbeam" },
    subtitle: { el: "The Genius", en: "The Genius" },
    image: SPARKEN_HD,
    storyContent: {
      el: "Ο μικρός Albert δεν μιλούσε μέχρι τα 4 του χρόνια. Οι γονείς του ανησυχούσαν. Στο σχολείο δεν τα πήγαινε καλά με την παπαγαλία. Αλλά είχε φαντασία. Αναρωτήθηκε: «Πώς θα έμοιαζε ο κόσμος αν καθόμουν πάνω σε μια αχτίδα φωτός;». Αυτή η παιδική ερώτηση τον οδήγησε στη Θεωρία της Σχετικότητας (E=mc²), αλλάζοντας για πάντα το πώς καταλαβαίνουμε τον χρόνο και τον χώρο. Μάθημα: Η φαντασία είναι πιο σημαντική από τη γνώση.",
      en: "Little Albert didn't speak until he was 4. His parents were worried. In school, he struggled with rote memorization. But he had imagination. He asked: 'What would the world look like if I rode on a beam of light?' This childish question led him to the Theory of Relativity (E=mc²), changing forever how we understand time and space. Lesson: Imagination is more important than knowledge."
    }
  },
  {
    id: 42,
    category: "SCIENCE",
    subject: { el: "Marie Curie", en: "Marie Curie" },
    title: { el: "Λάμψη στο Σκοτάδι", en: "Glow in the Dark" },
    subtitle: { el: "Radiation", en: "Radiation" },
    image: WISEBOT_HD,
    storyContent: {
      el: "Η Μαρία Σκλοντόφσκα έφυγε από την Πολωνία για να σπουδάσει στο Παρίσι, ζώντας με τσάι και ψωμί. Ανακάλυψε δύο νέα στοιχεία: το Πολώνιο και το Ράδιο. Είναι ο μόνος άνθρωπος στην ιστορία που κέρδισε Νόμπελ σε ΔΥΟ διαφορετικές επιστήμες (Φυσική και Χημεία). Οι σημειώσεις της είναι ακόμα ραδιενεργές! Πέθανε από την επιστήμη που αγάπησε, αλλά η δουλειά της έσωσε εκατομμύρια μέσω των ακτινογραφιών και της θεραπείας του καρκίνου.",
      en: "Maria Sklodowska left Poland to study in Paris, living on tea and bread. She discovered two new elements: Polonium and Radium. She is the only person in history to win Nobels in TWO different sciences (Physics and Chemistry). Her notebooks are still radioactive! She died from the science she loved, but her work saved millions through X-rays and cancer treatments."
    }
  },
  {
    id: 43,
    category: "SCIENCE",
    subject: { el: "Isaac Newton", en: "Isaac Newton" },
    title: { el: "Το Μήλο που Έπεσε", en: "The Falling Apple" },
    subtitle: { el: "Gravity", en: "Gravity" },
    image: LINK_HD,
    storyContent: {
      el: "Κατά τη διάρκεια μιας πανδημίας το 1665, το πανεπιστήμιο έκλεισε και ο Νεύτων γύρισε σπίτι. Μια μέρα, είδε ένα μήλο να πέφτει. Αναρωτήθηκε: «Γιατί πέφτει ευθεία κάτω; Γιατί δεν πάει πλάγια ή πάνω;». Κατάλαβε ότι η ίδια δύναμη που ρίχνει το μήλο, κρατάει το φεγγάρι σε τροχιά γύρω από τη Γη. Ονόμασε τη δύναμη 'Βαρύτητα'. Σε εκείνη την καραντίνα, έθεσε τις βάσεις της σύγχρονης φυσικής.",
      en: "During a pandemic in 1665, the university closed and Newton went home. One day, he saw an apple fall. He wondered: 'Why does it fall straight down? Why not sideways or up?' He realized the same force that pulls the apple also keeps the moon in orbit around the Earth. He named this force 'Gravity.' In that quarantine, he laid the foundations of modern physics."
    }
  },
  {
    id: 44,
    category: "SCIENCE",
    subject: { el: "Charles Darwin", en: "Charles Darwin" },
    title: { el: "Το Ταξίδι του Beagle", en: "Voyage of the Beagle" },
    subtitle: { el: "Evolution", en: "Evolution" },
    image: CROCUS_HD,
    storyContent: {
      el: "Ο Δαρβίνος ήταν ένας μέτριος φοιτητής που αγαπούσε τα σκαθάρια. Μπήκε στο πλοίο 'Beagle' για ένα ταξίδι 5 ετών στον κόσμο. Στα νησιά Γκαλαπάγκος, παρατήρησε ότι οι σπίνοι (πουλιά) είχαν διαφορετικά ράμφη ανάλογα με το τι έτρωγαν σε κάθε νησί. Κατάλαβε ότι τα είδη δεν είναι σταθερά, αλλά αλλάζουν για να επιβιώσουν. Η θεωρία της Εξέλιξης μας έδειξε ότι είμαστε μέρος της φύσης, όχι αφεντικά της.",
      en: "Darwin was an average student who loved beetles. He boarded the ship 'Beagle' for a 5-year journey around the world. In the Galapagos Islands, he noticed that finches (birds) had different beaks depending on what they ate on each island. He realized species aren't fixed, but change to survive. The Theory of Evolution showed us we are part of nature, not its bosses."
    }
  },
  {
    id: 45,
    category: "SCIENCE",
    subject: { el: "Stephen Hawking", en: "Stephen Hawking" },
    title: { el: "Το Μυαλό Χωρίς Όρια", en: "Mind Without Limits" },
    subtitle: { el: "Black Holes", en: "Black Holes" },
    image: SPARKEN_HD,
    storyContent: {
      el: "Στα 21 του διαγνώστηκε με ALS και του έδωσαν 2 χρόνια ζωής. Έζησε άλλα 55! Καθηλωμένος σε καροτσάκι, χωρίς να μπορεί να μιλήσει ή να κουνηθεί, το μυαλό του ταξίδευε στις μαύρες τρύπες και τη δημιουργία του σύμπαντος. Έγραψε βιβλία χρησιμοποιώντας έναν μυ του μάγουλου του για να επιλέγει γράμματα. Απέδειξε ότι «όσο δύσκολη κι αν φαίνεται η ζωή, πάντα υπάρχει κάτι που μπορείς να κάνεις και να πετύχεις».",
      en: "At 21, he was diagnosed with ALS and given 2 years to live. He lived another 55! Confined to a wheelchair, unable to speak or move, his mind traveled to black holes and the creation of the universe. He wrote books using a cheek muscle to select letters. He proved that 'however difficult life may seem, there is always something you can do and succeed at.'"
    }
  },
  {
    id: 46,
    category: "SCIENCE",
    subject: { el: "Galileo Galilei", en: "Galileo Galilei" },
    title: { el: "Κοιτάζοντας Ψηλά", en: "Looking Up" },
    subtitle: { el: "Astronomy", en: "Astronomy" },
    image: WISEBOT_HD,
    storyContent: {
      el: "Ο Γαλιλαίος δεν εφηύρε το τηλεσκόπιο, αλλά το βελτίωσε και το έστρεψε στον ουρανό. Είδε κρατήρες στη Σελήνη και φεγγάρια γύρω από τον Δία. Υποστήριξε ότι η Γη γυρίζει γύρω από τον Ήλιο, κάτι που τότε θεωρούνταν έγκλημα. Καταδικάστηκε σε κατ' οίκον περιορισμό για πάντα. Ο θρύλος λέει ότι ψιθύρισε: «Και όμως κινείται». Είναι ο πατέρας της σύγχρονης επιστήμης γιατί πίστεψε στην παρατήρηση και όχι στο δόγμα.",
      en: "Galileo didn't invent the telescope, but he improved it and pointed it at the sky. He saw craters on the Moon and moons orbiting Jupiter. He argued that the Earth revolves around the Sun, which was considered a crime back then. He was sentenced to house arrest for life. Legend says he whispered: 'And yet it moves.' He is the father of modern science because he believed in observation over dogma."
    }
  },
  {
    id: 47,
    category: "SCIENCE",
    subject: { el: "Rosalind Franklin", en: "Rosalind Franklin" },
    title: { el: "Η Φωτογραφία της Ζωής", en: "Photo of Life" },
    subtitle: { el: "DNA", en: "DNA" },
    image: LINK_HD,
    storyContent: {
      el: "Η Rosalind ήταν ειδική στις ακτίνες Χ. Τράβηξε τη διάσημη «Φωτογραφία 51», η οποία αποκάλυψε ότι το DNA έχει σχήμα διπλής έλικας. Χωρίς την άδειά της, η φωτογραφία δόθηκε στους Watson και Crick, οι οποίοι πήραν το Νόμπελ για την ανακάλυψη της δομής του DNA. Η Rosalind πέθανε νέα και δεν αναγνωρίστηκε όσο ζούσε. Σήμερα τιμάται ως η γυναίκα που αποκάλυψε το μυστικό της ζωής.",
      en: "Rosalind was an expert in X-rays. She took the famous 'Photograph 51', which revealed that DNA has a double-helix shape. Without her permission, the photo was shown to Watson and Crick, who won the Nobel Prize for discovering the structure of DNA. Rosalind died young and wasn't recognized during her lifetime. Today she is honored as the woman who revealed the secret of life."
    }
  },
  {
    id: 48,
    category: "SCIENCE",
    subject: { el: "Alexander Fleming", en: "Alexander Fleming" },
    title: { el: "Το Τυχερό Λάθος", en: "The Lucky Mistake" },
    subtitle: { el: "Penicillin", en: "Penicillin" },
    image: CROCUS_HD,
    storyContent: {
      el: "Ο Fleming δεν ήταν ο πιο τακτικός επιστήμονας. Έφυγε για διακοπές αφήνοντας άπλυτα πιατάκια με βακτήρια στο εργαστήριο. Όταν γύρισε, είδε ότι σε ένα πιατάκι είχε φυτρώσει μούχλα και τα βακτήρια γύρω της είχαν πεθάνει. Αντί να το πετάξει, το μελέτησε. Αυτή η μούχλα ήταν η πενικιλίνη, το πρώτο αντιβιοτικό. Η ακαταστασία του έσωσε εκατομμύρια ζωές. Μάθημα: Κράτα τα μάτια σου ανοιχτά στο απροσδόκητο.",
      en: "Fleming wasn't the tidiest scientist. He went on vacation leaving dirty petri dishes with bacteria in the lab. When he returned, he saw mold growing on one dish, and the bacteria around it had died. Instead of throwing it away, he studied it. That mold was penicillin, the first antibiotic. His messiness saved millions of lives. Lesson: Keep your eyes open to the unexpected."
    }
  },
  {
    id: 49,
    category: "SCIENCE",
    subject: { el: "Jane Goodall", en: "Jane Goodall" },
    title: { el: "Το Κορίτσι της Ζούγκλας", en: "Girl of the Jungle" },
    subtitle: { el: "Nature", en: "Nature" },
    image: PENCILO_HD,
    storyContent: {
      el: "Στα 26 της, χωρίς πτυχίο, η Jane πήγε στην Αφρική για να μελετήσει τους χιμπατζήδες. Όλοι έλεγαν ότι τα ζώα λειτουργούν μόνο με ένστικτο. Η Jane ανακάλυψε ότι οι χιμπατζήδες φτιάχνουν εργαλεία, έχουν συναισθήματα, αγκαλιάζονται και κάνουν πόλεμο. Άλλαξε τον ορισμό του τι σημαίνει 'άνθρωπος'. Μας έμαθε ότι δεν είμαστε οι μόνοι με προσωπικότητα σε αυτόν τον πλανήτη.",
      en: "At 26, with no degree, Jane went to Africa to study chimpanzees. Everyone said animals operate only on instinct. Jane discovered that chimps make tools, have emotions, hug each other, and wage war. She changed the definition of what it means to be 'human.' She taught us that we are not the only ones with personality on this planet."
    }
  },
  {
    id: 50,
    category: "SCIENCE",
    subject: { el: "Neil Armstrong", en: "Neil Armstrong" },
    title: { el: "Ένα Βήμα για την Ανθρωπότητα", en: "One Step for Mankind" },
    subtitle: { el: "Moon Landing", en: "Moon Landing" },
    image: SPARKEN_HD,
    storyContent: {
      el: "Ο Neil ήταν πιλότος δοκιμών που πέταξε το πιο γρήγορο αεροπλάνο (X-15). Επιλέχθηκε για την αποστολή Apollo 11. Όταν το σκάφος κατέβαινε στη Σελήνη, ο υπολογιστής έβγαζε λάθη και τα καύσιμα τελείωναν. Ο Neil πήρε τον έλεγχο και προσγείωσε το Eagle με μόλις 30 δευτερόλεπτα καυσίμου να απομένουν. Η καρδιά του χτυπούσε με 150 παλμούς. Πάτησε στο φεγγάρι και είπε: «Ένα μικρό βήμα για τον άνθρωπο, ένα τεράστιο άλμα για την ανθρωπότητα».",
      en: "Neil was a test pilot who flew the fastest plane (X-15). He was chosen for Apollo 11. As the craft descended to the Moon, the computer flashed errors and fuel was running low. Neil took manual control and landed the Eagle with just 30 seconds of fuel left. His heart rate was 150 bpm. He stepped onto the moon and said: 'That's one small step for man, one giant leap for mankind.'"
    }
  }
];

interface AcademyProps {
  lang: 'el' | 'en';
  addXp?: (amount: number, id: string, creditReward?: number) => void;
  completedIds: string[];
}

export default function Academy({ lang, addXp, completedIds }: AcademyProps) {
  const [selectedCourse, setSelectedCourse] = useState<any | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("START_SMALL"); 
  const { trackAction } = useEconomy();
  
  const filteredCourses = COURSES.filter(course => course.category === activeCategory);

  const handleReadStory = (course: any) => {
    setSelectedCourse(course);
    
    // TRACKING LOGIC (Hidden XP: Just mark as complete)
    if (addXp) {
        addXp(0, `academy-${course.id}`); // 0 XP, purely for completion status
    }
    trackAction('READ_ACADEMY');
  };

  const handleNextStory = () => {
    if (!selectedCourse) return;
    const currentFilteredIndex = filteredCourses.findIndex(c => c.id === selectedCourse.id);

    if (currentFilteredIndex < filteredCourses.length - 1) {
      const nextCourse = filteredCourses[currentFilteredIndex + 1];
      handleReadStory(nextCourse); 
    } else {
      setSelectedCourse(null); 
    }
  };

  // Progress per category
  const getProgress = (catId: string) => {
    const catCourses = COURSES.filter(c => c.category === catId);
    const completedCount = catCourses.filter(c => completedIds.includes(`academy-${c.id}`)).length;
    return Math.round((completedCount / catCourses.length) * 100);
  };

  return (
    <div className="relative w-full h-full pb-32 animate-in fade-in duration-700">
      
      {/* HEADER */}
      <div className="text-center py-8 space-y-3 relative z-10">
         <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-2 backdrop-blur-md">
            <BookOpen size={14} className="text-blue-400" />
            <span className="text-[10px] font-black uppercase tracking-widest text-white/60">WISEBOT ACADEMY</span>
         </div>
         <h2 className="text-4xl md:text-6xl font-[1000] text-white uppercase italic tracking-tighter leading-none">
            {lang === 'el' ? 'ΜΑΘΗΜΑΤΑ' : 'LESSONS'} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">ZWIS</span>
         </h2>
         <p className="text-white/40 font-bold uppercase tracking-[0.3em] text-xs">
            {lang === 'el' ? 'ΔΙΑΒΑΣΕ, ΕΜΠΝΕΥΣΟΥ, ΠΡΟΧΩΡΑ' : 'READ, INSPIRE, MOVE FORWARD'}
         </p>
      </div>

      {/* CATEGORY TABS (Pill Style) */}
      <div className="max-w-7xl mx-auto px-4 mb-10 overflow-x-auto custom-scrollbar pb-4">
        <div className="flex gap-3 justify-start md:justify-center min-w-max">
          {Object.values(CATEGORIES).map((cat) => {
            const isActive = activeCategory === cat.id;
            const progress = getProgress(cat.id);
            
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`
                  relative px-6 py-3 rounded-2xl flex items-center gap-3 transition-all duration-300 border group
                  ${isActive 
                    ? `bg-gradient-to-r ${cat.color} border-white/20 text-white shadow-lg scale-105` 
                    : 'bg-white/5 border-white/10 text-white/50 hover:bg-white/10 hover:text-white'
                  }
                `}
              >
                <cat.icon size={18} className={isActive ? 'text-white' : 'opacity-70'} />
                <div className="text-left">
                    <span className="block font-black text-xs uppercase tracking-wide leading-none mb-1">
                    {lang === 'el' ? cat.title.el : cat.title.en}
                    </span>
                    {isActive && (
                        <div className="w-full bg-black/20 h-1 rounded-full overflow-hidden">
                            <div className="bg-white h-full" style={{ width: `${progress}%` }} />
                        </div>
                    )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* COURSE GRID */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
         <AnimatePresence mode='popLayout'>
            {filteredCourses.map((course, index) => {
               const isCompleted = completedIds.includes(`academy-${course.id}`); 
               const CategoryConfig = CATEGORIES[course.category as keyof typeof CATEGORIES];

               return (
                  <motion.div 
                     layout
                     key={course.id}
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 0.9 }}
                     transition={{ duration: 0.2, delay: index * 0.05 }}
                     onClick={() => handleReadStory(course)}
                     className={`
                        group relative rounded-[2rem] overflow-hidden border-2 bg-[#0f1014] cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
                        ${isCompleted ? 'border-emerald-500/50' : 'border-white/10 hover:border-white/30'}
                     `}
                  >
                     {/* Image Header */}
                     <div className="aspect-[4/3] relative overflow-hidden">
                        <img src={course.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" alt={course.title[lang]} />
                        <div className={`absolute inset-0 bg-gradient-to-t from-[#0f1014] via-transparent to-transparent`} />
                        
                        {/* Status Badge */}
                        <div className="absolute top-3 right-3">
                            {isCompleted ? (
                                <div className="bg-emerald-500 text-white p-1.5 rounded-full shadow-lg">
                                    <CheckCircle size={16} fill="currentColor" className="text-emerald-900" />
                                </div>
                            ) : (
                                <div className="bg-black/40 backdrop-blur-md text-white/70 p-1.5 rounded-full border border-white/10">
                                    <Book size={14} />
                                </div>
                            )}
                        </div>
                     </div>

                     {/* Content Body */}
                     <div className="p-5 relative">
                        {/* Glow effect on hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${CategoryConfig.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                        
                        <div className="relative z-10">
                            <span className={`inline-block text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-md mb-2 border ${CategoryConfig.bg} ${CategoryConfig.border} text-white/80`}>
                                {course.subject[lang]}
                            </span>
                            <h3 className="text-lg font-[1000] text-white uppercase italic tracking-tighter leading-tight mb-1 group-hover:text-blue-300 transition-colors">
                                {course.title[lang]}
                            </h3>
                            <p className="text-white/40 text-xs font-bold uppercase tracking-wider">
                                {isCompleted ? (lang === 'el' ? 'ΟΛΟΚΛΗΡΩΘΗΚΕ' : 'COMPLETED') : (lang === 'el' ? 'ΔΙΑΒΑΣΕ ΤΩΡΑ' : 'READ NOW')}
                            </p>
                        </div>
                     </div>
                  </motion.div>
               );
            })}
         </AnimatePresence>
      </div>

      {/* READING MODAL */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-8 bg-black/95 backdrop-blur-xl"
            onClick={() => setSelectedCourse(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0f1014] border border-white/10 w-full max-w-4xl h-[90vh] md:h-auto md:max-h-[90vh] rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row relative"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedCourse(null)}
                className="absolute top-6 right-6 z-50 p-3 bg-black/50 hover:bg-white/10 rounded-full text-white transition-all border border-white/10 backdrop-blur-md"
              >
                <X size={20} />
              </button>

              {/* Left: Visuals */}
              <div className="w-full md:w-5/12 h-64 md:h-auto relative shrink-0">
                <img 
                  src={selectedCourse.image} 
                  alt={selectedCourse.title[lang]} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1014] via-transparent to-transparent md:bg-gradient-to-r" />
                
                <div className="absolute bottom-8 left-8 right-8">
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border bg-black/40 backdrop-blur-md mb-4 border-white/20`}>
                      <span className="text-[10px] font-black uppercase tracking-widest text-white">
                        {selectedCourse.subject[lang]}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-[1000] text-white drop-shadow-xl uppercase italic tracking-tighter leading-[0.9]">
                      {selectedCourse.title[lang]}
                    </h2>
                </div>
              </div>

              {/* Right: Story Content */}
              <div className="w-full md:w-7/12 p-8 md:p-12 overflow-y-auto custom-scrollbar flex flex-col bg-[#0f1014]">
                
                <div className="flex-1 space-y-8">
                  <div className="prose prose-invert prose-lg max-w-none">
                    <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed first-letter:text-5xl first-letter:font-black first-letter:text-white first-letter:mr-3 first-letter:float-left">
                      {selectedCourse.storyContent[lang]}
                    </p>
                  </div>

                  <div className="p-6 rounded-3xl bg-emerald-900/10 border border-emerald-500/20 flex items-start gap-4">
                     <div className="p-3 bg-emerald-500/20 rounded-xl text-emerald-400 shrink-0">
                        <CheckCircle size={24} />
                     </div>
                     <div>
                        <h5 className="text-base font-black text-white uppercase italic tracking-tighter mb-1">
                           {lang === 'el' ? 'ΤΟ ΜΑΘΗΜΑ ΣΟΥ' : 'KEY LESSON'}
                        </h5>
                        <p className="text-emerald-400/80 text-xs font-bold uppercase tracking-wide leading-relaxed">
                           {lang === 'el' ? 'Κάθε ιστορία κρύβει μια δύναμη. Κράτησέ την.' : 'Every story hides a power. Keep it.'}
                        </p>
                     </div>
                  </div>
                </div>

                <div className="pt-8 mt-auto border-t border-white/10">
                   <button 
                     onClick={handleNextStory}
                     className="w-full py-4 bg-white text-black rounded-2xl font-[1000] text-sm hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-widest shadow-xl flex items-center justify-center gap-3 group"
                   >
                     <span>{lang === 'el' ? 'ΕΠΟΜΕΝΗ ΙΣΤΟΡΙΑ' : 'NEXT STORY'}</span>
                     <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                   </button>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
