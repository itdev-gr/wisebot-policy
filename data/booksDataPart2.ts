
import { Book } from './booksData';

// Images for reference
const IMG_WISEBOT = "https://i.postimg.cc/qqT2wZKn/Gemini-Generated-Image-e2e7aoe2e7aoe2e7.jpg";
const IMG_PENCILO = "https://i.postimg.cc/NFcRDPXR/Gemini-Generated-Image-sr51ccsr51ccsr51.jpg";
const IMG_CROCUS = "https://i.postimg.cc/j2byckfH/Gemini-Generated-Image-htitclhtitclhtit.jpg";
const IMG_LINK = "https://i.postimg.cc/5yV8gkz0/Gemini-Generated-Image-1kbdh81kbdh81kbd.jpg";
const IMG_SPARKEN = "https://i.postimg.cc/C5skQHCR/Gemini-Generated-Image-olffpqolffpqolff.jpg";

// BOOKS 8 - 14
export const BOOKS_PART_2: Book[] = [
  {
    id: 8,
    title: { el: "ΜΑΣ ΑΝΤΙΓΡΑΦΟΥΝ", en: "THEY ARE COPYING US" },
    theme: { el: "ΕΞΕΛΙΞΗ", en: "EVOLUTION" },
    stepLabel: { el: "LINK & Η ΕΞΕΛΙΞΗ", en: "LINK & EVOLUTION" },
    author: "Link & Pencilo",
    cover: IMG_LINK,
    videoUrl: "",
    description: { 
      el: "Βρήκαν το παιχνίδι τους σε άλλη σελίδα. Ο Φίλιππος θέλει εκδίκηση, ο Pencilo κλαίει, αλλά η Link γελάει. Ποιος έχει δίκιο;", 
      en: "They found their game on another page. Philippos wants revenge, Pencilo cries, but Link laughs. Who is right?" 
    },
    meaning: { 
      el: "Η αντιγραφή δεν είναι το τέλος. Είναι απόδειξη ότι ξεκίνησες σωστά.", 
      en: "Copying is not the end. It is proof that you started correctly." 
    },
    xp: 180,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        
        <div class="relative bg-gradient-to-r from-pink-900/60 to-rose-900/60 p-8 rounded-2xl border border-pink-500/30 text-center italic text-pink-200 shadow-lg">
           «Όποιος αντιγράφει, κοιτάει πίσω. Όποιος δημιουργεί, κοιτάει μπροστά.»
        </div>

        <section>
          <h3 class="text-2xl font-black text-pink-400 mb-3 tracking-wide">01. ΚΑΤΙ ΜΟΙΑΖΕΙ ΠΟΛΥ ΓΝΩΡΙΜΟ</h3>
          <p>Ο Φίλιππος μπήκε τρέχοντας. «ΕΛΑΤΕ ΝΑ ΔΕΙΤΕ!»</p>
          <p class="mt-2">Η Αλεξάνδρα πλησίασε την οθόνη. Η Ελευθερία έσκυψε. Ηταν ένα παιχνίδι. Ή μάλλον… έμοιαζε <em>πολύ</em> με το δικό τους.</p>
          <p class="mt-4">— «Μα… αυτό είναι σαν το δικό μας», είπε η Αλεξάνδρα.</p>
          <p class="mt-2 text-white font-bold">— «Όχι σαν», είπε ο Φίλιππος. «ΕΙΝΑΙ». Η σιωπή έπεσε βαριά.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-red-400 mb-3 tracking-wide">02. Ο ΘΥΜΟΣ</h3>
          <p>Ο Φίλιππος σηκώθηκε όρθιος. «ΜΑΣ ΕΚΛΕΨΑΝ! Πάμε να τους γράψουμε! Να το κατεβάσουμε! Να τους ξεμπροστιάσουμε!»</p>
          <p class="mt-2">Ο Crocus κούνησε την ουρά του. <strong class="text-green-400">«Επιτέλους, κάτι λογικό»</strong>, είπε.</p>
          <p class="mt-2">Η Αλεξάνδρα ένιωσε κόμπο. Η Ελευθερία έσφιξε το τετράδιο.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-fuchsia-300 mb-3 tracking-wide">03. ΤΟ ΠΑΓΩΜΑ ΤΟΥ PENCILO</h3>
          <p>Ο Pencilo εμφανίστηκε αργά. Κρατούσε σχέδια. Πολλά σχέδια.</p>
          <p class="mt-2">— «Δεν αντέχω», είπε. «Κάθε γραμμή μου… είναι εκεί».</p>
          <p class="mt-2">Τα μάτια του γυάλιζαν. <strong class="text-white">«Αν μας αντιγράφουν, τότε τι νόημα είχε όλο αυτό;»</strong></p>
          <p class="mt-2">Η Αλεξάνδρα πλησίασε. «Είχε. Απλώς… πονάει».</p>
        </section>

        <section>
          <h3 class="text-3xl font-black text-blue-300 mb-3 tracking-wide">04. Η LINK ΓΕΛΑΕΙ</h3>
          <p>Ξαφνικά, ένα <em>μπιπ</em> ακούστηκε. Η Link εμφανίστηκε με καλώδια, φως και ταχύτητα.</p>
          <p class="mt-2">— «ΟΚ. Πανικός mode. Ωραία».</p>
          <p class="mt-2">Ο Φίλιππος τον κοίταξε άγρια. «Τι λες τώρα;»</p>
          <p class="mt-4 text-white font-bold">«Λέω ότι αν σε αντέγραψαν, είδες κάτι που δουλεύει».</p>
          <p class="mt-2">Ο Pencilo γύρισε απότομα. «Δεν είναι παιχνίδι! Είναι ιδέα!»</p>
          <p class="mt-2">— «Και οι ιδέες», είπε η Link, «δεν προστατεύονται με κλάμα. Προχωρούν».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-purple-400 mb-3 tracking-wide">05. Η ΣΥΓΚΡΟΥΣΗ</h3>
          <p>«Εσύ όλα τα βλέπεις σαν κουμπιά και κώδικα!» φώναξε ο Pencilo. «Κι εσύ σαν σχέδια που δεν τελειώνουν ποτέ!» απάντησε η Link.</p>
          <p class="mt-2">Η ένταση ανέβηκε. Ο Crocus ετοιμάστηκε. «Να χτυπήσουμε;»</p>
          <p class="mt-4 text-center text-xl font-bold text-pink-200">«ΣΤΟΠ».</p>
          <p class="mt-2 text-center">Η WiseBot εμφανίστηκε.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-white mb-3 tracking-wide">06. Η ΑΛΗΘΕΙΑ ΠΟΥ ΠΟΝΑΕΙ</h3>
          <p>Η WiseBot μίλησε ήρεμα. «Η αντιγραφή πονάει. Αλλά δεν σταματά τον δημιουργό. <strong>Τον αποκαλύπτει</strong>».</p>
          <p class="mt-2">Η Ελευθερία σήκωσε το κεφάλι. «Δηλαδή… δεν χάσαμε;»</p>
          <p class="mt-2">— «Όχι», είπε η WiseBot. «Απλώς μπήκατε στο επόμενο επίπεδο».</p>
          <p class="mt-2">Ο Sparken φάνηκε ψηλά. «Τώρα φαίνεται ποιος εξελίσσεται».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-rose-300 mb-3 tracking-wide">07. Η ΑΠΟΦΑΣΗ</h3>
          <p>Ο Φίλιππος πήρε ανάσα. «Δεν θα τους μοιάσουμε. Θα πάμε πιο μπροστά».</p>
          <p class="mt-2">Ο Pencilo άνοιξε νέο χαρτί. «Θα το κάνω καλύτερο».</p>
          <p class="mt-2">Η Link χαμογέλασε. «Και πιο έξυπνο».</p>
          <p class="mt-4 font-bold text-white">Για πρώτη φορά… μαζί.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-pink-400 mb-3 tracking-wide">08. ΤΟ ΜΑΘΗΜΑ</h3>
          <p>Το βράδυ, έγραψαν: <em>«Όποιος αντιγράφει, κοιτάει πίσω. Όποιος δημιουργεί, κοιτάει μπροστά.»</em></p>
          <p class="mt-2">Ο Crocus χαμογέλασε. «ΟΚ… αυτό μου άρεσε».</p>
        </section>

        <div class="mt-12 bg-pink-950/60 p-8 rounded-3xl border-2 border-dashed border-pink-500/40 shadow-xl">
           <h4 class="text-xl font-black text-pink-300 uppercase tracking-wider mb-6 flex items-center gap-2">
             🤖 JOURNAL: ΜΑΣ ΑΝΤΙΓΡΑΦΟΥΝ
           </h4>
           
           <div class="space-y-6 text-gray-300">
             
             <div>
               <h5 class="text-pink-200 font-bold mb-2">1. ΤΟ ΣΥΝΑΙΣΘΗΜΑ</h5>
               <p class="text-sm mb-2 opacity-80">Γράψε τι ένιωσες όταν κάποιος πήρε κάτι δικό σου:</p>
               <div class="w-full h-10 bg-black/30 rounded border border-pink-500/20"></div>
             </div>

             <div>
               <h5 class="text-pink-200 font-bold mb-2">2. Η ΑΝΤΙΔΡΑΣΗ</h5>
               <p class="text-sm mb-2 opacity-80">Τι θα έκανες παλιά; (Θυμός/Παραίτηση;)</p>
               <div class="w-full h-10 bg-black/30 rounded border border-pink-500/20"></div>
             </div>
             
             <div>
                <h5 class="text-pink-200 font-bold mb-2">3. Η ΕΠΙΛΟΓΗ</h5>
                <div class="bg-black/20 p-4 rounded-xl border border-pink-500/10">
                 <p class="text-sm">«Διαλέγω να ______ αντί να ______»</p>
               </div>
             </div>

           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-slate-950 to-pink-950/60 p-8 rounded-3xl border border-pink-500/30 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-pink-300 uppercase tracking-wider">ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             Η αντιγραφή είναι η μεγαλύτερη φιλοφρόνηση, αλλά πονάει.
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             Όταν τα παιδιά μαθαίνουν ότι η αξία τους δεν χάνεται με την αντιγραφή, <strong class="text-pink-300">χτίζει αντοχή και νοοτροπία εξέλιξης</strong>. Δεν τους πήραν κάτι. Τους έδειξαν ότι αξίζει.
           </p>
        </div>

      </div>
    `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        
        <div class="relative bg-gradient-to-r from-pink-900/60 to-rose-900/60 p-8 rounded-2xl border border-pink-500/30 text-center italic text-pink-200 shadow-lg">
           «He who copies looks back. He who creates looks forward.»
        </div>

        <section>
          <h3 class="text-2xl font-black text-pink-400 mb-3 tracking-wide">01. SOMETHING LOOKS VERY FAMILIAR</h3>
          <p>Philippos ran in. «COME AND SEE!»</p>
          <p class="mt-2">Alexandra approached the screen. Eleftheria leaned in. It was a game. Or rather… it looked <em>very much</em> like theirs.</p>
          <p class="mt-4">— «But… this is like ours», said Alexandra.</p>
          <p class="mt-2 text-white font-bold">— «Not like», said Philippos. «IT IS». Silence fell heavily.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-red-400 mb-3 tracking-wide">02. THE ANGER</h3>
          <p>Philippos stood up. «THEY STOLE FROM US! Let's write to them! Take it down! Expose them!»</p>
          <p class="mt-2">Crocus wagged his tail. <strong class="text-green-400">«Finally, something logical»</strong>, he said.</p>
          <p class="mt-2">Alexandra felt a knot. Eleftheria gripped the notebook.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-fuchsia-300 mb-3 tracking-wide">03. PENCILO FREEZES</h3>
          <p>Pencilo appeared slowly. He held drawings. Many drawings.</p>
          <p class="mt-2">— «I can't take it», he said. «Every line of mine… is there».</p>
          <p class="mt-2">His eyes glistened. <strong class="text-white">«If they copy us, then what was the point of all this?»</strong></p>
          <p class="mt-2">Alexandra approached. «There was a point. It just… hurts».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-blue-300 mb-3 tracking-wide">04. LINK LAUGHS</h3>
          <p>Suddenly, a <em>beep</em> was heard. Link appeared with wires, light, and speed.</p>
          <p class="mt-2">— «OK. Panic mode. Great».</p>
          <p class="mt-2">Philippos glared at her. «What are you saying now?»</p>
          <p class="mt-4 text-white font-bold">«I'm saying if they copied you, they saw something that works».</p>
          <p class="mt-2">Pencilo turned abruptly. «It's not a game! It's an idea!»</p>
          <p class="mt-2">— «And ideas», said Link, «are not protected by crying. They move forward».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-purple-400 mb-3 tracking-wide">05. THE CONFLICT</h3>
          <p>«You see everything as buttons and code!» shouted Pencilo. «And you as designs that never end!» replied Link.</p>
          <p class="mt-2">Tension rose. Crocus got ready. «Shall we strike?»</p>
          <p class="mt-4 text-center text-xl font-bold text-pink-200">«STOP».</p>
          <p class="mt-2 text-center">WiseBot appeared.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-white mb-3 tracking-wide">06. THE TRUTH THAT HURTS</h3>
          <p>WiseBot spoke calmly. «Copying hurts. But it doesn't stop the creator. <strong>It reveals them</strong>».</p>
          <p class="mt-2">Eleftheria raised her head. «Meaning… we didn't lose?»</p>
          <p class="mt-2">— «No», said WiseBot. «You just entered the next level».</p>
          <p class="mt-2">Sparken appeared above. «Now it shows who evolves».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-rose-300 mb-3 tracking-wide">07. THE DECISION</h3>
          <p>Philippos took a breath. «We won't look like them. We'll go further ahead».</p>
          <p class="mt-2">Pencilo opened a new paper. «I'll make it better».</p>
          <p class="mt-2">Link smiled. «And smarter».</p>
          <p class="mt-4 font-bold text-white">For the first time… together.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-pink-400 mb-3 tracking-wide">08. THE LESSON</h3>
          <p>That night, they wrote: <em>«He who copies looks back. He who creates looks forward.»</em></p>
          <p class="mt-2">Crocus smiled. «OK… I liked that».</p>
        </section>

        <div class="mt-12 bg-pink-950/60 p-8 rounded-3xl border-2 border-dashed border-pink-500/40 shadow-xl">
           <h4 class="text-xl font-black text-pink-300 uppercase tracking-wider mb-6 flex items-center gap-2">
             🤖 JOURNAL: THEY ARE COPYING US
           </h4>
           
           <div class="space-y-6 text-gray-300">
             
             <div>
               <h5 class="text-pink-200 font-bold mb-2">1. THE FEELING</h5>
               <p class="text-sm mb-2 opacity-80">Write what you felt when someone took something of yours:</p>
               <div class="w-full h-10 bg-black/30 rounded border border-pink-500/20"></div>
             </div>

             <div>
               <h5 class="text-pink-200 font-bold mb-2">2. THE REACTION</h5>
               <p class="text-sm mb-2 opacity-80">What would you do before? (Anger/Giving up?)</p>
               <div class="w-full h-10 bg-black/30 rounded border border-pink-500/20"></div>
             </div>
             
             <div>
                <h5 class="text-pink-200 font-bold mb-2">3. THE CHOICE</h5>
                <div class="bg-black/20 p-4 rounded-xl border border-pink-500/10">
                 <p class="text-sm">«I choose to ______ instead of ______»</p>
               </div>
             </div>

           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-slate-950 to-pink-950/60 p-8 rounded-3xl border border-pink-500/30 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-pink-300 uppercase tracking-wider">MESSAGE FOR PARENTS</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             Imitation is the greatest flattery, but it hurts.
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             When children learn that their value is not lost with copying, <strong class="text-pink-300">they build resilience and a growth mindset</strong>. They didn't take anything. They showed them it has worth.
           </p>
        </div>

      </div>
    `
    }
  },
  {
    id: 9,
    title: { el: "ΔΕΝ ΦΤΑΝΕΙ Ο ΧΡΟΝΟΣ", en: "NOT ENOUGH TIME" },
    theme: { el: "ΧΡΟΝΟΣ", en: "TIME" },
    stepLabel: { el: "WISEBOT & Ο ΧΡΟΝΟΣ", en: "WISEBOT & TIME" },
    author: "Wisebot & Sparken",
    cover: IMG_WISEBOT,
    videoUrl: "",
    description: {
      el: "Το ξυπνητήρι χτυπάει και όλα πρέπει να γίνουν ΤΩΡΑ. Μια ιστορία για τη στιγμή που λυγίζεις από την πίεση και μαθαίνεις να διαλέγεις.",
      en: "The alarm rings and everything must be done NOW. A story about the moment you break from pressure and learn to choose."
    },
    meaning: {
      el: "Δεν φταίει που κουράστηκες. Φταίει που προσπάθησες να χωρέσεις τα πάντα.",
      en: "It's not your fault you got tired. It's that you tried to fit everything in."
    },
    xp: 190,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        
        <div class="relative bg-gradient-to-r from-slate-900 to-gray-800 p-8 rounded-2xl border border-slate-500/30 text-center italic text-slate-200 shadow-lg">
           «Ο χρόνος δεν φτάνει για όλα. Φτάνει για όσα διαλέγεις.»
        </div>

        <section>
          <h3 class="text-2xl font-black text-slate-400 mb-3 tracking-wide">01. ΠΟΛΛΑ ΜΑΖΙ</h3>
          <p>Το ξυπνητήρι χτύπησε. Σχολείο. Μαθήματα. Υποχρεώσεις. Ο Φίλιππος έτρωγε βιαστικά. Η Αλεξάνδρα έδενε τα κορδόνια της λάθος.</p>
          <p class="mt-2">Η Ελευθερία κοίταζε το πρόγραμμα της ημέρας. «Δεν βγαίνει», είπε.</p>
          <p class="mt-2">— «Ποιο;» ρώτησε ο Φίλιππος.</p>
          <p class="mt-2 text-red-400 font-bold">— «Τίποτα».</p>
          <p class="mt-4">Ο Crocus χασμουρήθηκε. «Ποιος έβαλε τόσα πολλά σε μία μέρα;» Κανείς δεν απάντησε.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-red-400 mb-3 tracking-wide">02. Ο ΧΡΟΝΟΣ ΤΡΕΧΕΙ</h3>
          <p>Το project περίμενε. Αλλά και: το διάβασμα, οι φίλοι, οι δραστηριότητες, οι γονείς, οι προσδοκίες.</p>
          <p class="mt-4">Η Αλεξάνδρα κάθισε μπροστά στο τραπέζι. «Δεν προλαβαίνω».</p>
          <p class="mt-2">— «Έχεις χρόνο», είπε ο Φίλιππος.</p>
          <p class="mt-2">— «Όχι <em>καθαρό</em>», απάντησε.</p>
          <p class="mt-2">Η Ελευθερία έκλεισε το τετράδιο. <strong class="text-slate-300">«Ο χρόνος μας είναι σπασμένος».</strong></p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-orange-400 mb-3 tracking-wide">03. Η ΕΝΤΑΣΗ</h3>
          <p>Ο Φίλιππος εκνευρίστηκε. «Αν το αφήσουμε, θα μείνουμε πίσω!»</p>
          <p class="mt-2">— «Δεν μπορούμε να τα κάνουμε όλα!» είπε η Ελευθερία.</p>
          <p class="mt-2 text-white font-bold">Η Αλεξάνδρα σηκώθηκε. «ΣΤΑΜΑΤΑΤΕ!»</p>
          <p class="mt-2">Η φωνή της έτρεμε. «Δεν είναι παιχνίδι πια. Κουράστηκα». Σιωπή.</p>
        </section>

        <section class="bg-slate-900/40 p-6 rounded-xl border-l-4 border-fuchsia-400 my-6">
          <h3 class="text-2xl font-black text-fuchsia-300 mb-3 tracking-wide">04. Η ΚΟΥΡΑΣΗ ΠΟΥ ΔΕΝ ΦΑΙΝΕΤΑΙ</h3>
          <p>Το απόγευμα, δεν έκαναν τίποτα. Όχι γιατί δεν ήθελαν. Αλλά γιατί <strong>δεν μπορούσαν</strong>.</p>
          <p class="mt-2">Η WiseBot εμφανίστηκε. «Δεν είστε τεμπέληδες», είπε. «Είστε φορτωμένοι».</p>
          <p class="mt-2">Ο Φίλιππος κατέβασε το κεφάλι. «Αν σταματήσουμε, θα χάσουμε».</p>
          <p class="mt-2 text-white">— «Αν συνεχίσετε έτσι», απάντησε η WiseBot, «θα χαθείτε εσείς».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-sky-400 mb-3 tracking-wide">05. Η ΕΠΙΛΟΓΗ</h3>
          <p>Ο Sparken κατέβηκε χαμηλά. «Πόσα πράγματα θέλετε να κάνετε;»</p>
          <p class="mt-2">— «Όλα», είπε ο Φίλιππος.</p>
          <p class="mt-2">Ο Sparken χαμογέλασε. <strong class="text-sky-200">«Τότε δεν θα κάνετε τίποτα καλά».</strong></p>
          <p class="mt-4">Η Ελευθερία αναστέναξε. «Δηλαδή πρέπει να κόψουμε;»</p>
          <p class="mt-2">— «Να διαλέξετε», είπε ο Sparken. «Όχι για πάντα. Για τώρα».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-white mb-3 tracking-wide">06. Η ΔΥΣΚΟΛΗ ΛΙΣΤΑ</h3>
          <p>Έγραψαν όλα όσα έκαναν. Ήταν πολλά. Έπειτα έγραψαν αυτά που <em>έπρεπε</em>. Και μετά αυτά που <em>ήθελαν πραγματικά</em>.</p>
          <p class="mt-2">Η λίστα μίκρυνε. Ο Φίλιππος δυσκολεύτηκε. «Και αν χάσουμε κάτι σημαντικό;»</p>
          <p class="mt-2">Η WiseBot απάντησε: <strong class="text-fuchsia-400">«Χάνεις περισσότερα όταν διαλύεσαι».</strong></p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-teal-300 mb-3 tracking-wide">07. Η ΑΝΑΣΑ</h3>
          <p>Για πρώτη φορά, ένα απόγευμα ήταν… άδειο. Όχι βαρετό. <strong>Ήσυχο.</strong></p>
          <p class="mt-2">Η Αλεξάνδρα ζωγράφιζε χωρίς ρολόι. Ο Φίλιππος έφτιαχνε χωρίς βιασύνη. Η Ελευθερία σκεφτόταν καθαρά.</p>
          <p class="mt-2">Ο Crocus χαμογέλασε. «Αυτό… είναι καλύτερο».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-slate-300 mb-3 tracking-wide">08. Η ΝΕΑ ΣΥΜΦΩΝΙΑ</h3>
          <p>— «Δεν τα παρατάμε», είπε η Ελευθερία. «Απλώς δεν τα κάνουμε όλα».</p>
          <p class="mt-2">Ο Φίλιππος έγνεψε. «Καλύτερα λιγότερα… σωστά».</p>
          <p class="mt-4">Η WiseBot άναψε πιο δυνατά. <strong class="text-white">«Ο χρόνος δεν φτάνει για όλα. Φτάνει για όσα διαλέγεις».</strong></p>
        </section>

        <div class="mt-12 bg-slate-900 p-8 rounded-3xl border-2 border-dashed border-slate-600 shadow-xl">
           <h4 class="text-xl font-black text-slate-300 uppercase tracking-wider mb-6 flex items-center gap-2">
             ⏳ JOURNAL: ΔΙΑΛΕΓΩ ΤΟΝ ΧΡΟΝΟ ΜΟΥ
           </h4>
           
           <div class="space-y-6 text-gray-300">
             
             <div>
               <h5 class="text-slate-200 font-bold mb-2">1. ΤΙ ΜΕ ΚΟΥΡΑΖΕΙ</h5>
               <p class="text-sm mb-2 opacity-80">Γράψε 3 πράγματα που νιώθεις ότι "πρέπει" να κάνεις και σε πιέζουν:</p>
               <div class="w-full h-10 bg-black/30 rounded border border-slate-500/20"></div>
             </div>

             <div>
               <h5 class="text-slate-200 font-bold mb-2">2. ΤΙ ΜΕ ΓΕΜΙΖΕΙ</h5>
               <p class="text-sm mb-2 opacity-80">Γράψε 2 πράγματα που σου δίνουν ενέργεια όταν τα κάνεις:</p>
               <div class="w-full h-10 bg-black/30 rounded border border-slate-500/20"></div>
             </div>
             
             <div>
                <h5 class="text-slate-200 font-bold mb-2">3. Η ΕΠΙΛΟΓΗ</h5>
                <div class="bg-black/20 p-4 rounded-xl border border-slate-500/10">
                 <p class="text-sm">«Για να έχω ενέργεια, σήμερα σταματάω να __________»</p>
               </div>
             </div>

           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-gray-900 to-slate-900/80 p-8 rounded-3xl border border-slate-500/30 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-slate-300 uppercase tracking-wider">ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             Η υπερφόρτωση δεν φαίνεται πάντα. Μοιάζει με "τεμπελιά" ή "γκρίνια".
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             Όταν τα παιδιά μάθουν να <strong class="text-slate-200">διαλέγουν</strong> και να λένε όχι, μαθαίνουν να προστατεύουν τον εαυτό τους από το burnout. Ο χρόνος δεν μεγάλωσε. Αλλά χώρεσε.
           </p>
        </div>

      </div>
    `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        
        <div class="relative bg-gradient-to-r from-slate-900 to-gray-800 p-8 rounded-2xl border border-slate-500/30 text-center italic text-slate-200 shadow-lg">
           «Time isn't enough for everything. It's enough for what you choose.»
        </div>

        <section>
          <h3 class="text-2xl font-black text-slate-400 mb-3 tracking-wide">01. TOO MUCH AT ONCE</h3>
          <p>The alarm rang. School. Lessons. Obligations. Philippos ate hastily. Alexandra tied her shoelaces wrong.</p>
          <p class="mt-2">Eleftheria looked at the day's schedule. «It doesn't work», she said.</p>
          <p class="mt-2">— «Which one?» asked Philippos.</p>
          <p class="mt-2 text-red-400 font-bold">— «None of it».</p>
          <p class="mt-4">Crocus yawned. «Who put so much in one day?» No one answered.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-red-400 mb-3 tracking-wide">02. TIME IS RUNNING</h3>
          <p>The project waited. But also: reading, friends, activities, parents, expectations.</p>
          <p class="mt-4">Alexandra sat at the table. «I can't make it».</p>
          <p class="mt-2">— «You have time», said Philippos.</p>
          <p class="mt-2">— «Not <em>clean</em> time», she replied.</p>
          <p class="mt-2">Eleftheria closed the notebook. <strong class="text-slate-300">«Our time is broken».</strong></p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-orange-400 mb-3 tracking-wide">03. THE TENSION</h3>
          <p>Philippos got annoyed. «If we leave it, we'll fall behind!»</p>
          <p class="mt-2">— «We can't do everything!» said Eleftheria.</p>
          <p class="mt-2 text-white font-bold">Alexandra stood up. «STOP!»</p>
          <p class="mt-2">Her voice trembled. «It's not a game anymore. I'm tired». Silence.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-fuchsia-300 mb-3 tracking-wide">04. THE FATIGUE THAT DOESN'T SHOW</h3>
          <p>In the afternoon, they did nothing. Not because they didn't want to. But because they <strong>couldn't</strong>.</p>
          <p class="mt-2">WiseBot appeared. «You aren't lazy», she said. «You are overloaded».</p>
          <p class="mt-2">Philippos lowered his head. «If we stop, we lose».</p>
          <p class="mt-2 text-white">— «If you continue like this», replied WiseBot, «you will lose yourselves».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-sky-400 mb-3 tracking-wide">05. THE CHOICE</h3>
          <p>Sparken came down low. «How many things do you want to do?»</p>
          <p class="mt-2">— «Everything», said Philippos.</p>
          <p class="mt-2">Sparken smiled. <strong class="text-sky-200">«Then you won't do anything well».</strong></p>
          <p class="mt-4">Eleftheria sighed. «So we have to cut?»</p>
          <p class="mt-2">— «You have to choose», said Sparken. «Not forever. For now».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-white mb-3 tracking-wide">06. THE HARD LIST</h3>
          <p>They wrote down everything they did. It was a lot. Then they wrote what they <em>had</em> to do. And then what they <em>really wanted</em> to do.</p>
          <p class="mt-2">The list shrank. Philippos struggled. «And if we miss something important?»</p>
          <p class="mt-2">WiseBot replied: <strong class="text-fuchsia-400">«You lose more when you fall apart».</strong></p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-teal-300 mb-3 tracking-wide">07. THE BREATH</h3>
          <p>For the first time, an afternoon was… empty. Not boring. <strong>Quiet.</strong></p>
          <p class="mt-2">Alexandra drew without a clock. Philippos built without rushing. Eleftheria thought clearly.</p>
          <p class="mt-2">Crocus smiled. «This… is better».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-slate-300 mb-3 tracking-wide">08. THE NEW DEAL</h3>
          <p>— «We aren't giving up», said Eleftheria. «We just aren't doing everything».</p>
          <p class="mt-2">Philippos nodded. «Better less… correctly».</p>
          <p class="mt-4">WiseBot lit up brighter. <strong class="text-white">«Time isn't enough for everything. It's enough for what you choose».</strong></p>
        </section>

        <div class="mt-12 bg-slate-900 p-8 rounded-3xl border-2 border-dashed border-slate-600 shadow-xl">
           <h4 class="text-xl font-black text-slate-300 uppercase tracking-wider mb-6 flex items-center gap-2">
             ⏳ JOURNAL: CHOOSING MY TIME
           </h4>
           
           <div class="space-y-6 text-gray-300">
             
             <div>
               <h5 class="text-slate-200 font-bold mb-2">1. WHAT TIRES ME</h5>
               <p class="text-sm mb-2 opacity-80">Write 3 things you feel you "must" do and they pressure you:</p>
               <div class="w-full h-10 bg-black/30 rounded border border-slate-500/20"></div>
             </div>

             <div>
               <h5 class="text-slate-200 font-bold mb-2">2. WHAT FILLS ME</h5>
               <p class="text-sm mb-2 opacity-80">Write 2 things that give you energy when you do them:</p>
               <div class="w-full h-10 bg-black/30 rounded border border-slate-500/20"></div>
             </div>
             
             <div>
                <h5 class="text-slate-200 font-bold mb-2">3. THE CHOICE</h5>
                <div class="bg-black/20 p-4 rounded-xl border border-slate-500/10">
                 <p class="text-sm">«To have energy, today I stop __________»</p>
               </div>
             </div>

           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-gray-900 to-slate-900/80 p-8 rounded-3xl border border-slate-500/30 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-slate-300 uppercase tracking-wider">MESSAGE FOR PARENTS</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             Overload doesn't always show. It looks like "laziness" or "whining".
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             When children learn to <strong class="text-slate-200">choose</strong> and say no, they learn to protect themselves from burnout. Time didn't grow. But it fit.
           </p>
        </div>

      </div>
    `
    }
  },
  {
    id: 10,
    title: { el: "ΤΟ ΣΠΑΣΙΜΟ", en: "THE BREAK" },
    theme: { el: "ΠΙΣΤΗ", en: "FAITH" },
    stepLabel: { el: "ΟΜΑΔΑ & ΠΙΣΤΗ", en: "TEAM & FAITH" },
    author: "Wisebot & Team",
    cover: IMG_CROCUS,
    videoUrl: "",
    description: { 
      el: "Μια ιστορία για τη στιγμή που όλα φαίνονται χαμένα. Ο καβγάς, το σπάσιμο και η στιγμή που καταλαβαίνεις τι αξίζει να κρατήσεις.", 
      en: "A story about the moment everything seems lost. The fight, the break, and the moment you realize what is worth keeping." 
    },
    meaning: { 
      el: "Η ομάδα δεν σπάει όταν διαφωνεί. Σπάει όταν φοβάται να μιλήσει.", 
      en: "The team doesn't break when it disagrees. It breaks when it fears to speak." 
    },
    xp: 200,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        
        <div class="relative bg-gradient-to-r from-slate-900 to-amber-900/40 p-8 rounded-2xl border border-amber-500/30 text-center italic text-amber-100 shadow-lg">
           «Καμία ομάδα δεν προχωρά χωρίς ρωγμές. Από εκεί περνάει το φως.»
        </div>

        <section>
          <h3 class="text-2xl font-black text-slate-400 mb-3 tracking-wide">01. Η ΜΕΡΑ ΠΟΥ ΔΕΝ ΠΗΓΕ ΚΑΛΑ</h3>
          <p>Τίποτα δεν πήγε καλά από το πρωί. Ο Φίλιππος άργησε. Η Αλεξάνδρα ξέχασε πράγματα. Η Ελευθερία είχε πονοκέφαλο.</p>
          <p class="mt-4">Το τραπέζι ήταν γεμάτο. Όχι από ιδέες. <strong>Από εκνευρισμό.</strong></p>
          <p class="mt-2">— «Πάλι δεν τελείωσες αυτό που είπες!» φώναξε ο Φίλιππος.</p>
          <p class="mt-2">— «Δεν είμαι μηχανή!» απάντησε η Αλεξάνδρα.</p>
          <p class="mt-2 text-red-400">— «Αν είχαμε σχέδιο, δεν θα τρέχαμε τελευταία στιγμή!» πέταξε η Ελευθερία.</p>
          <p class="mt-4">Ο Crocus έσφιξε τα δόντια. «ΣΤΟΠ!» Αλλά κανείς δεν άκουγε.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-red-500 mb-3 tracking-wide">02. Ο ΚΑΒΓΑΣ</h3>
          <p>Οι φωνές ανέβηκαν. «Εσύ πάντα βιάζεσαι!» — «Εσύ πάντα φοβάσαι!» — «Και εσύ μόνο σκέφτεσαι!»</p>
          <p class="mt-4">Η Αλεξάνδρα έτρεμε. «Δεν θέλω άλλο…»</p>
          <p class="mt-2">Σιωπή. Ο Φίλιππος ένιωσε τύψεις. Η Ελευθερία κοίταξε κάτω. Κανείς δεν μιλούσε.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-gray-400 mb-3 tracking-wide">03. ΚΡΑΚ</h3>
          <p>Δεν ήταν το project. Ήταν κάτι μικρό. Ένα κομμάτι έπεσε από το τραπέζι. <strong>Έσπασε.</strong></p>
          <p class="mt-2">Ο ήχος έκανε τον καβγά να φαίνεται… χαζός.</p>
          <p class="mt-2">— «Να το», είπε ο Φίλιππος. «Χάλασε».</p>
          <p class="mt-2 text-blue-200 italic">Η Αλεξάνδρα δάκρυσε. «Όπως κι εμείς».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-fuchsia-400 mb-3 tracking-wide">04. Ο ΚΑΘΡΕΦΤΗΣ</h3>
          <p>Η WiseBot εμφανίστηκε. Όχι φωτεινή. Ήρεμη. «Τι σπάει στ’ αλήθεια;» ρώτησε. «Το παιχνίδι; Ή η ομάδα;»</p>
          <p class="mt-2">Η ερώτηση έμεινε.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-green-400 mb-3 tracking-wide">05. Ο ΦΟΒΟΣ</h3>
          <p>Για πρώτη φορά, ο Crocus <strong>δεν φώναξε.</strong></p>
          <p class="mt-2">— «Δεν τσακωνόμαστε επειδή δεν μας νοιάζει», είπε χαμηλά. «Τσακωνόμαστε γιατί… μας νοιάζει πολύ».</p>
          <p class="mt-4">Η Ελευθερία σήκωσε το κεφάλι. «Φοβάμαι ότι θα χαθεί όλο αυτό».</p>
          <p class="mt-2">Ο Φίλιππος έσφιξε τα χέρια του. «Φοβάμαι ότι θα αποτύχουμε».</p>
          <p class="mt-2">Η Αλεξάνδρα ψιθύρισε. «Φοβάμαι ότι θα μείνω πίσω».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-sky-400 mb-3 tracking-wide">06. ΤΟ ΦΩΣ</h3>
          <p>Η WiseBot έγνεψε. «Να λοιπόν το σπάσιμο. Όχι επειδή είστε κακοί. Αλλά επειδή είστε άνθρωποι».</p>
          <p class="mt-2">Ο Sparken εμφανίστηκε ψηλά. <strong class="text-amber-200">«Καμία ομάδα δεν προχωρά χωρίς ρωγμές. Από εκεί περνάει το φως».</strong></p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-amber-500 mb-3 tracking-wide">07. ΤΟ ΜΑΖΕΜΑ</h3>
          <p>Μάζεψαν τα κομμάτια. Όχι γρήγορα. Όχι τέλεια. <strong>Μαζί.</strong></p>
          <p class="mt-2">Ο Φίλιππος κόλλησε. Η Αλεξάνδρα κράτησε. Η Ελευθερία διόρθωσε. Το αντικείμενο δεν ήταν όπως πριν. Ήταν πιο γερό.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-white mb-3 tracking-wide">08. Η ΣΥΜΦΩΝΙΑ</h3>
          <p>— «Αν ξανατσακωθούμε;» ρώτησε η Αλεξάνδρα.</p>
          <p class="mt-2">Ο Crocus χαμογέλασε. «Θα σταματάμε».</p>
          <p class="mt-2">Η Ελευθερία πρόσθεσε. «Θα μιλάμε νωρίτερα».</p>
          <p class="mt-2">Ο Φίλιππος ένευσε. «Και δεν θα τα κρατάμε μέσα μας».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-slate-300 mb-3 tracking-wide">09. Η ΝΕΑ ΔΥΝΑΜΗ</h3>
          <p>Δεν ήταν χαρούμενοι. Ήταν ήσυχοι. Και αυτό ήταν καλύτερο.</p>
          <p class="mt-4">Ο Sparken άνοιξε τα φτερά του. «Τώρα έχετε κάτι που δεν είχατε πριν».</p>
          <p class="mt-2">— «Τι;» ρώτησε ο Φίλιππος.</p>
          <p class="mt-2 text-amber-400 text-xl font-black">— «ΠΙΣΤΗ».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-white mb-2 tracking-wide">10. ΤΟ ΤΕΛΟΣ ΤΟΥ ΠΡΩΤΟΥ ΚΥΚΛΟΥ</h3>
          <p>Στον τοίχο έγραψαν: <strong>ΠΙΣΤΗ</strong>. Όχι ότι όλα θα πάνε καλά. Αλλά ότι <strong>θα μείνουν μαζί</strong> όταν δεν πάνε.</p>
        </section>

        <div class="mt-12 bg-gradient-to-br from-slate-900 to-amber-900/20 p-8 rounded-3xl border-2 border-dashed border-amber-600/40 shadow-xl">
           <h4 class="text-xl font-black text-amber-500 uppercase tracking-wider mb-6 flex items-center gap-2">
             ❤️‍🩹 JOURNAL: ΤΟ ΣΠΑΣΙΜΟ
           </h4>
           
           <div class="space-y-6 text-gray-300">
             
             <div>
               <h5 class="text-amber-200 font-bold mb-2">1. Ο ΦΟΒΟΣ ΜΟΥ</h5>
               <p class="text-sm mb-2 opacity-80">Συμπλήρωσε: «Όταν τσακωνόμαστε, φοβάμαι ότι __________»</p>
               <div class="w-full h-10 bg-black/30 rounded border border-amber-500/20"></div>
             </div>

             <div>
               <h5 class="text-amber-200 font-bold mb-2">2. Η ΑΛΗΘΕΙΑ</h5>
               <p class="text-sm mb-2 opacity-80">Τι θα ήθελες να πεις στους άλλους την επόμενη φορά αντί να φωνάξεις;</p>
               <div class="w-full h-10 bg-black/30 rounded border border-amber-500/20"></div>
             </div>
             
             <div>
                <h5 class="text-amber-200 font-bold mb-2">3. Η ΥΠΕΝΘΥΜΙΣΗ</h5>
                <div class="bg-black/20 p-4 rounded-xl border border-amber-500/10">
                 <p class="text-sm">«Η ομάδα δεν σπάει όταν διαφωνεί.</p>
                 <p class="text-sm">Σπάει όταν φοβάται να μιλήσει.»</p>
               </div>
             </div>

           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-slate-950 to-black p-8 rounded-3xl border border-amber-500/20 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-amber-300 uppercase tracking-wider">ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             Οι συγκρούσεις δεν είναι αποτυχία. Είναι ένδειξη σχέσης που βαθαίνει.
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             Όταν τα παιδιά μαθαίνουν να μιλούν για τον φόβο τους <strong class="text-amber-200">μετά τον καβγά</strong>, χτίζει ανθεκτικότητα ζωής. Δεν έσπασε το όνειρο. Έσπασε ο φόβος.
           </p>
        </div>

      </div>
    `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        
        <div class="relative bg-gradient-to-r from-slate-900 to-amber-900/40 p-8 rounded-2xl border border-amber-500/30 text-center italic text-amber-100 shadow-lg">
           «No team moves forward without cracks. That's where the light gets in.»
        </div>

        <section>
          <h3 class="text-2xl font-black text-slate-400 mb-3 tracking-wide">01. THE DAY THAT DIDN'T GO WELL</h3>
          <p>Nothing went well from the morning. Philippos was late. Alexandra forgot things. Eleftheria had a headache.</p>
          <p class="mt-4">The table was full. Not of ideas. <strong>Of irritation.</strong></p>
          <p class="mt-2">— «You didn't finish what you said again!» shouted Philippos.</p>
          <p class="mt-2">— «I'm not a machine!» replied Alexandra.</p>
          <p class="mt-2 text-red-400">— «If we had a plan, we wouldn't be running last minute!» threw in Eleftheria.</p>
          <p class="mt-4">Crocus clenched his teeth. «STOP!» But no one listened.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-red-500 mb-3 tracking-wide">02. THE FIGHT</h3>
          <p>Voices rose. «You always rush!» — «You always fear!» — «And you only think!»</p>
          <p class="mt-4">Alexandra trembled. «I don't want anymore...»</p>
          <p class="mt-2">Silence. Philippos felt guilt. Eleftheria looked down. No one spoke.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-gray-400 mb-3 tracking-wide">03. CRACK</h3>
          <p>It wasn't the project. It was something small. A piece fell off the table. <strong>It broke.</strong></p>
          <p class="mt-2">The sound made the fight seem... silly.</p>
          <p class="mt-2">— «There», said Philippos. «It's ruined».</p>
          <p class="mt-2 text-blue-200 italic">Alexandra teared up. «Like us».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-fuchsia-400 mb-3 tracking-wide">04. THE MIRROR</h3>
          <p>WiseBot appeared. Not bright. Calm. «What is really breaking?» she asked. «The game? Or the team?»</p>
          <p class="mt-2">The question lingered.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-green-400 mb-3 tracking-wide">05. THE FEAR</h3>
          <p>For the first time, Crocus <strong>didn't shout.</strong></p>
          <p class="mt-2">— «We don't fight because we don't care», he said lowly. «We fight because... we care a lot».</p>
          <p class="mt-4">Eleftheria raised her head. «I'm afraid all this will be lost».</p>
          <p class="mt-2">Philippos clenched his hands. «I'm afraid we will fail».</p>
          <p class="mt-2">Alexandra whispered. «I'm afraid I'll be left behind».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-sky-400 mb-3 tracking-wide">06. THE LIGHT</h3>
          <p>WiseBot nodded. «So there is the break. Not because you are bad. But because you are human».</p>
          <p class="mt-2">Sparken appeared high above. <strong class="text-amber-200">«No team moves forward without cracks. That's where the light gets in»</strong>.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-amber-500 mb-3 tracking-wide">07. THE GATHERING</h3>
          <p>They gathered the pieces. Not quickly. Not perfectly. <strong>Together.</strong></p>
          <p class="mt-2">Philippos glued. Alexandra held. Eleftheria fixed. The object wasn't as before. It was stronger.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-white mb-3 tracking-wide">08. THE AGREEMENT</h3>
          <p>— «If we fight again?» asked Alexandra.</p>
          <p class="mt-2">Crocus smiled. «We will stop».</p>
          <p class="mt-2">Eleftheria added. «We will talk sooner».</p>
          <p class="mt-2">Philippos nodded. «And we won't keep it inside».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-slate-300 mb-3 tracking-wide">09. THE NEW POWER</h3>
          <p>They weren't happy. They were quiet. And that was better.</p>
          <p class="mt-4">Sparken opened his wings. «Now you have something you didn't have before».</p>
          <p class="mt-2">— «What?» asked Philippos.</p>
          <p class="mt-2 text-amber-400 text-xl font-black">— «FAITH».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-white mb-2 tracking-wide">10. THE END OF THE FIRST CYCLE</h3>
          <p>They wrote on the wall: <strong>FAITH</strong>. Not that everything will go well. But that <strong>they will stay together</strong> when they don't.</p>
        </section>

        <div class="mt-12 bg-gradient-to-br from-slate-900 to-amber-900/20 p-8 rounded-3xl border-2 border-dashed border-amber-600/40 shadow-xl">
           <h4 class="text-xl font-black text-amber-500 uppercase tracking-wider mb-6 flex items-center gap-2">
             ❤️‍🩹 JOURNAL: THE BREAK
           </h4>
           
           <div class="space-y-6 text-gray-300">
             
             <div>
               <h5 class="text-amber-200 font-bold mb-2">1. MY FEAR</h5>
               <p class="text-sm mb-2 opacity-80">Complete: «When we fight, I fear that __________»</p>
               <div class="w-full h-10 bg-black/30 rounded border border-amber-500/20"></div>
             </div>

             <div>
               <h5 class="text-amber-200 font-bold mb-2">2. THE TRUTH</h5>
               <p class="text-sm mb-2 opacity-80">What would you like to tell others next time instead of shouting?</p>
               <div class="w-full h-10 bg-black/30 rounded border border-amber-500/20"></div>
             </div>
             
             <div>
                <h5 class="text-amber-200 font-bold mb-2">3. THE REMINDER</h5>
                <div class="bg-black/20 p-4 rounded-xl border border-amber-500/10">
                 <p class="text-sm">«The team doesn't break when it disagrees.</p>
                 <p class="text-sm">It breaks when it fears to speak.»</p>
               </div>
             </div>

           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-slate-950 to-black p-8 rounded-3xl border border-amber-500/20 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-amber-300 uppercase tracking-wider">MESSAGE FOR PARENTS</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             Conflicts are not failure. They are a sign of a deepening relationship.
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             When children learn to talk about their fear <strong class="text-amber-200">after the fight</strong>, they build life resilience. The dream didn't break. The fear broke.
           </p>
        </div>

      </div>
    `
    }
  },
  {
    id: 11,
    title: { el: "ΔΕΝ ΕΧΩ ΟΡΕΞΗ", en: "I DON'T FEEL LIKE IT" },
    theme: { el: "ΠΕΙΘΑΡΧΙΑ", en: "DISCIPLINE" },
    stepLabel: { el: "PENCILO & Η ΠΕΙΘΑΡΧΙΑ", en: "PENCILO & DISCIPLINE" },
    author: "Wisebot & Pencilo",
    cover: IMG_PENCILO,
    videoUrl: "",
    description: { 
      el: "Μια ιστορία για τις μέρες που δεν θες να κάνεις τίποτα. Ο Crocus και ο Pencilo τους μαθαίνουν το μυστικό των 5 λεπτών.", 
      en: "A story about the days you don't want to do anything. Crocus and Pencilo teach them the 5-minute secret." 
    },
    meaning: { 
      el: "Η πειθαρχία δεν είναι τιμωρία. Είναι το δώρο που κάνεις στον εαυτό σου τις μέρες που δεν θες.", 
      en: "Discipline is not punishment. It is the gift you give yourself on days you don't want to." 
    },
    xp: 220,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        
        <div class="relative bg-gradient-to-r from-indigo-900/60 to-violet-900/60 p-8 rounded-2xl border border-indigo-500/30 text-center italic text-indigo-200 shadow-lg">
           «Η όρεξη δεν έρχεται πρώτη. Η κίνηση έρχεται πρώτη.»
        </div>

        <section>
          <h3 class="text-2xl font-black text-indigo-400 mb-3 tracking-wide">01. Η ΜΕΡΑ ΠΟΥ ΚΑΝΕΙΣ ΔΕΝ ΗΘΕΛΕ</h3>
          <p>Το τραπέζι ήταν στρωμένο. Όχι με ιδέες. <strong>Με σιωπή.</strong></p>
          <p class="mt-4">Ο Φίλιππος κοίταζε το πάτωμα. Η Αλεξάνδρα ζωγράφιζε κύκλους χωρίς να το καταλαβαίνει. Η Ελευθερία είχε ανοίξει το τετράδιο… και δεν έγραφε.</p>
          <p class="mt-2 text-gray-400">— «Δεν έχω όρεξη», είπε ο Φίλιππος.</p>
          <p class="mt-2">— «Ούτε εγώ», είπε η Αλεξάνδρα.</p>
          <p class="mt-2">— «Σήμερα όχι», πρόσθεσε η Ελευθερία.</p>
          <p class="mt-4">Ο Crocus σήκωσε το κεφάλι. «Τι εννοείτε “όχι”;» Κανείς δεν απάντησε.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-gray-400 mb-3 tracking-wide">02. Η ΚΟΥΡΑΣΗ ΠΟΥ ΜΟΙΑΖΕΙ ΤΕΜΠΕΛΙΑ</h3>
          <p>Δεν ήταν βαρεμάρα. Ηταν εκείνη η κούραση που δεν φαίνεται: όταν σκέφτεσαι «αύριο», όταν όλα σου φαίνονται βαριά.</p>
          <p class="mt-4">Η Αλεξάνδρα έγειρε πίσω. «Θέλω απλώς… να μην κάνω τίποτα».</p>
          <p class="mt-2">Ο Φίλιππος συμφώνησε. «Μια μέρα μόνο».</p>
          <p class="mt-2">Η Ελευθερία δάγκωσε τα χείλη της. <strong class="text-indigo-300">«Αν γίνει μία, θα γίνει δύο».</strong></p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-green-400 mb-3 tracking-wide">03. ΤΑ 5 ΛΕΠΤΑ</h3>
          <p>Περίμεναν τον Crocus να φωνάξει. Δεν το έκανε.</p>
          <p class="mt-2">— «Ξέρετε τι είναι αυτό;» είπε ήρεμα. «Όχι βαρεμάρα. Απόφαση που δεν πήρατε».</p>
          <p class="mt-2">— «Και τι να κάνουμε;» ρώτησε ο Φίλιππος.</p>
          <p class="mt-2 text-white font-bold">— «Να κάνετε κάτι μικρό. Όχι τέλειο. Όχι μεγάλο. Πέντε λεπτά».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-fuchsia-300 mb-3 tracking-wide">04. Η ΚΙΝΗΣΗ</h3>
          <p>Ο Pencilo εμφανίστηκε αθόρυβα. Άφησε ένα χαρτί. Μόνο ένα κουτάκι γραμμένο: <strong>ΣΗΜΕΡΑ</strong>.</p>
          <p class="mt-2 text-white">«Η όρεξη δεν έρχεται πρώτη», είπε. «Η κίνηση έρχεται».</p>
          <p class="mt-2">Η Ελευθερία τον κοίταξε. «Κι αν δεν νιώθουμε έτοιμοι;»</p>
          <p class="mt-2 text-fuchsia-200">— «Τέλεια. Τότε ξεκινάτε από εκεί που είστε».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-white mb-3 tracking-wide">05. ΤΟ ΠΙΟ ΜΙΚΡΟ ΒΗΜΑ</h3>
          <p>Δεν έστησαν σχέδιο. Δεν έφτιαξαν τίποτα μεγάλο. Ο Φίλιππος έκοψε ένα κομμάτι. Η Αλεξάνδρα διόρθωσε μια γραμμή. Η Ελευθερία έγραψε μία πρόταση.</p>
          <p class="mt-4">Ο Crocus κοίταζε το ρολόι. «Πέρασαν πέντε λεπτά».</p>
          <p class="mt-2 font-bold text-green-300">Κανείς δεν σταμάτησε.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-indigo-400 mb-3 tracking-wide">06. Η ΑΛΗΘΕΙΑ</h3>
          <p>Η WiseBot εμφανίστηκε. «Δεν χρειάζεται να θέλεις», είπε. «Χρειάζεται να συνεχίσεις».</p>
          <p class="mt-2">Ο Φίλιππος συνοφρυώθηκε. «Δηλαδή να πιέζουμε τον εαυτό μας;»</p>
          <p class="mt-2">— «Όχι», απάντησε η WiseBot. <strong class="text-white">«Να τον εμπιστεύεστε».</strong></p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-slate-300 mb-3 tracking-wide">07. Η ΑΛΛΑΓΗ</h3>
          <p>Όταν σταμάτησαν, δεν ήταν ενθουσιασμένοι. Ήταν… ήσυχοι. Η Αλεξάνδρα χαμογέλασε. «Δεν ήταν τόσο δύσκολο».</p>
          <p class="mt-2">Ο Φίλιππος είπε χαμηλά: «Νιώθω καλύτερα».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-white mb-3 tracking-wide">08. ΤΟ ΜΥΣΤΙΚΟ</h3>
          <p>Το βράδυ, η Ελευθερία έγραψε στον τοίχο:</p>
          <p class="mt-4 font-serif italic text-lg text-indigo-200 border-l-4 border-indigo-500 pl-4">
            «Δεν περιμένουμε την όρεξη. Τη φτιάχνουμε.»
          </p>
          <p class="mt-4">Ο Pencilo έγνεψε. Ο Crocus χαμογέλασε. Η WiseBot έλαμψε λίγο περισσότερο.</p>
        </section>

        <div class="mt-12 bg-indigo-950/60 p-8 rounded-3xl border-2 border-dashed border-indigo-500/40 shadow-xl">
           <h4 class="text-xl font-black text-indigo-300 uppercase tracking-wider mb-6 flex items-center gap-2">
             💜 JOURNAL: ΟΤΑΝ ΔΕΝ ΕΧΩ ΟΡΕΞΗ
           </h4>
           
           <div class="space-y-6 text-gray-300">
             
             <div>
               <h5 class="text-indigo-200 font-bold mb-2">1. ΤΙ ΝΙΩΘΩ</h5>
               <div class="flex flex-wrap gap-3">
                 <span class="px-3 py-1 bg-black/40 rounded-full border border-indigo-500/30">Κούραση</span>
                 <span class="px-3 py-1 bg-black/40 rounded-full border border-indigo-500/30">Βαρεμάρα</span>
                 <span class="px-3 py-1 bg-black/40 rounded-full border border-indigo-500/30">Αναβλητικότητα</span>
               </div>
             </div>

             <div>
               <h5 class="text-indigo-200 font-bold mb-2">2. ΤΟ ΜΙΚΡΟ ΒΗΜΑ (5 ΛΕΠΤΑ)</h5>
               <div class="bg-black/20 p-4 rounded-xl border border-indigo-500/10">
                 <p class="text-sm">«Σήμερα μπορώ να κάνω ________ για 5 λεπτά,</p>
                 <p class="text-sm">ακόμα κι αν δεν έχω όρεξη.»</p>
               </div>
             </div>
             
             <div>
                <h5 class="text-indigo-200 font-bold mb-2">3. Η ΥΠΟΣΧΕΣΗ</h5>
                <p class="text-sm opacity-80">«Δεν χρειάζεται να νιώθω έτοιμος. Χρειάζεται να ξεκινήσω.»</p>
             </div>

           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-slate-950 to-indigo-950/80 p-8 rounded-3xl border border-indigo-500/30 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-indigo-300 uppercase tracking-wider">ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             Η πειθαρχία δεν χτίζεται με πίεση. Χτίζεται με <strong class="text-indigo-300">μικρές νίκες</strong> τις δύσκολες μέρες.
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             Αν το παιδί μάθει να ξεκινά χωρίς όρεξη, θα μπορεί να προχωρά όταν οι άλλοι σταματούν. Δεν είχαν όρεξη. Αλλά είχαν κάτι πιο δυνατό: Συνέχεια.
           </p>
        </div>

      </div>
    `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        
        <div class="relative bg-gradient-to-r from-indigo-900/60 to-violet-900/60 p-8 rounded-2xl border border-indigo-500/30 text-center italic text-indigo-200 shadow-lg">
           «Motivation doesn't come first. Action comes first.»
        </div>

        <section>
          <h3 class="text-2xl font-black text-indigo-400 mb-3 tracking-wide">01. THE DAY NO ONE WANTED TO</h3>
          <p>The table was set. Not with ideas. <strong>With silence.</strong></p>
          <p class="mt-4">Philippos looked at the floor. Alexandra drew circles without realizing it. Eleftheria had opened the notebook… and wasn't writing.</p>
          <p class="mt-2 text-gray-400">— «I don't feel like it», said Philippos.</p>
          <p class="mt-2">— «Me neither», said Alexandra.</p>
          <p class="mt-2">— «Not today», added Eleftheria.</p>
          <p class="mt-4">Crocus raised his head. «What do you mean “no”?» No one answered.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-gray-400 mb-3 tracking-wide">02. THE FATIGUE THAT LOOKS LIKE LAZINESS</h3>
          <p>It wasn't boredom. It was that fatigue that doesn't show: when you think «tomorrow», when everything feels heavy.</p>
          <p class="mt-4">Alexandra leaned back. «I just want to… do nothing».</p>
          <p class="mt-2">Philippos agreed. «Just for one day».</p>
          <p class="mt-2">Eleftheria bit her lips. <strong class="text-indigo-300">«If it becomes one, it will become two».</strong></p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-green-400 mb-3 tracking-wide">03. THE 5 MINUTES</h3>
          <p>They waited for Crocus to shout. He didn't.</p>
          <p class="mt-2">— «Do you know what this is?» he said calmly. «Not boredom. A decision you didn't make».</p>
          <p class="mt-2">— «And what should we do?» asked Philippos.</p>
          <p class="mt-2 text-white font-bold">— «Do something small. Not perfect. Not big. Five minutes».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-fuchsia-300 mb-3 tracking-wide">04. THE MOVEMENT</h3>
          <p>Pencilo appeared quietly. He left a paper. Only one box written: <strong>TODAY</strong>.</p>
          <p class="mt-2 text-white">«Appetite doesn't come first», he said. «Movement comes».</p>
          <p class="mt-2">Eleftheria looked at him. «What if we don't feel ready?»</p>
          <p class="mt-2 text-fuchsia-200">— «Perfect. Then you start from where you are».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-white mb-3 tracking-wide">05. THE SMALLEST STEP</h3>
          <p>They didn't set up a plan. They didn't make anything big. Philippos cut a piece. Alexandra fixed a line. Eleftheria wrote one sentence.</p>
          <p class="mt-4">Crocus looked at the clock. «Five minutes passed».</p>
          <p class="mt-2 font-bold text-green-300">No one stopped.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-indigo-400 mb-3 tracking-wide">06. THE TRUTH</h3>
          <p>WiseBot appeared. «You don't need to want to», she said. «You need to continue».</p>
          <p class="mt-2">Philippos frowned. «Meaning we force ourselves?»</p>
          <p class="mt-2">— «No», replied WiseBot. <strong class="text-white">«You trust yourselves».</strong></p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-slate-300 mb-3 tracking-wide">07. THE CHANGE</h3>
          <p>When they stopped, they weren't excited. They were… quiet. Alexandra smiled. «It wasn't that hard».</p>
          <p class="mt-2">Philippos said lowly: «I feel better».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-white mb-3 tracking-wide">08. THE SECRET</h3>
          <p>That night, Eleftheria wrote on the wall:</p>
          <p class="mt-4 font-serif italic text-lg text-indigo-200 border-l-4 border-indigo-500 pl-4">
            «We don't wait for motivation. We make it.»
          </p>
          <p class="mt-4">Pencilo winked. Crocus smiled. WiseBot shone a little brighter.</p>
        </section>

        <div class="mt-12 bg-indigo-950/60 p-8 rounded-3xl border-2 border-dashed border-indigo-500/40 shadow-xl">
           <h4 class="text-xl font-black text-indigo-300 uppercase tracking-wider mb-6 flex items-center gap-2">
             💜 JOURNAL: WHEN I DON'T FEEL LIKE IT
           </h4>
           
           <div class="space-y-6 text-gray-300">
             
             <div>
               <h5 class="text-indigo-200 font-bold mb-2">1. WHAT I FEEL</h5>
               <div class="flex flex-wrap gap-3">
                 <span class="px-3 py-1 bg-black/40 rounded-full border border-indigo-500/30">Fatigue</span>
                 <span class="px-3 py-1 bg-black/40 rounded-full border border-indigo-500/30">Boredom</span>
                 <span class="px-3 py-1 bg-black/40 rounded-full border border-indigo-500/30">Procrastination</span>
               </div>
             </div>

             <div>
               <h5 class="text-indigo-200 font-bold mb-2">2. THE SMALL STEP (5 MINUTES)</h5>
               <div class="bg-black/20 p-4 rounded-xl border border-indigo-500/10">
                 <p class="text-sm">«Today I can do ________ for 5 minutes,</p>
                 <p class="text-sm">even if I don't feel like it.»</p>
               </div>
             </div>
             
             <div>
                <h5 class="text-indigo-200 font-bold mb-2">3. THE PROMISE</h5>
                <p class="text-sm opacity-80">«I don't need to feel ready. I need to start.»</p>
             </div>

           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-slate-950 to-indigo-950/80 p-8 rounded-3xl border border-indigo-500/30 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-indigo-300 uppercase tracking-wider">MESSAGE FOR PARENTS</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             Discipline is not built with pressure. It is built with <strong class="text-indigo-300">small wins</strong> on difficult days.
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             If the child learns to start without desire, they will be able to move forward when others stop. They didn't have desire. But they had something stronger: Consistency.
           </p>
        </div>

      </div>
    `
    }
  },
  {
    id: 12,
    title: { el: "ΤΟ ΚΑΝΩ ΚΑΙ ΑΣ ΦΟΒΑΜΑΙ", en: "DO IT SCARED" },
    theme: { el: "ΘΑΡΡΟΣ", en: "COURAGE" },
    stepLabel: { el: "WISEBOT & ΤΟ ΘΑΡΡΟΣ", en: "WISEBOT & COURAGE" },
    author: "Wisebot & Crocus",
    cover: IMG_WISEBOT,
    videoUrl: "",
    description: { 
      el: "Τους ζήτησαν να παρουσιάσουν το έργο τους. Ο φόβος τους παραλύει. Μια ιστορία για το πώς προχωράς ακόμα κι αν τρέμουν τα γόνατά σου.", 
      en: "They were asked to present their project. Fear paralyzes them. A story about how you move forward even if your knees are shaking." 
    },
    meaning: { 
      el: "Το θάρρος δεν είναι απουσία φόβου. Είναι κίνηση παρά τον φόβο.", 
      en: "Courage is not the absence of fear. It is movement despite fear." 
    },
    xp: 240,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        
        <div class="relative bg-gradient-to-r from-rose-900/60 to-red-900/60 p-8 rounded-2xl border border-rose-500/30 text-center italic text-rose-200 shadow-lg">
           «Ο φόβος δεν είναι σήμα κινδύνου. Είναι σήμα ανάπτυξης.»
        </div>

        <section>
          <h3 class="text-2xl font-black text-rose-400 mb-3 tracking-wide">01. Η ΕΥΚΑΙΡΙΑ</h3>
          <p>Το μήνυμα ήρθε απρόσμενα. «Θέλουμε να δείτε το project σας. Μπροστά σε κόσμο».</p>
          <p class="mt-4">Η Αλεξάνδρα διάβασε ξανά. Και ξανά. «Δεν είμαστε έτοιμοι», είπε αμέσως.</p>
          <p class="mt-2">Ο Φίλιππος χαμογέλασε νευρικά. «Ήρθαν τα δύσκολα».</p>
          <p class="mt-2">Η Ελευθερία ένιωσε το στομάχι της να σφίγγεται. «Αυτό είναι μεγάλο».</p>
          <p class="mt-4">Ο Crocus πετάχτηκε. «ΠΑΜΕ!» Κανείς δεν απάντησε.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-gray-400 mb-3 tracking-wide">02. Ο ΦΟΒΟΣ ΑΛΛΑΖΕΙ ΜΟΡΦΗ</h3>
          <p>Δεν ήταν πια κοροϊδία. Ηταν: βλέμματα, προσδοκίες, ευθύνη.</p>
          <p class="mt-2">— «Κι αν αποτύχουμε;» ρώτησε η Αλεξάνδρα. «Κι αν τα ξεχάσουμε όλα; Κι αν γελάσουν;»</p>
          <p class="mt-4">Ο Φίλιππος κοίταξε κάτω. <strong class="text-white">«Φοβάμαι».</strong> Και αυτή τη φορά… το είπε.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-rose-300 mb-3 tracking-wide">03. ΤΟ ΘΑΡΡΟΣ</h3>
          <p>Ο Crocus δεν φώναξε. «Ξέρετε τι φοβάμαι εγώ; Να μην πάμε ποτέ».</p>
          <p class="mt-2">Η φράση έπεσε βαριά. Η Ελευθερία τον κοίταξε. «Δηλαδή να πάμε φοβισμένοι;»</p>
          <p class="mt-2 text-white font-bold">— «Ναι», είπε ο Crocus. «Αυτό λέγεται θάρρος».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-fuchsia-300 mb-3 tracking-wide">04. ΤΟ ΣΗΜΑ</h3>
          <p>Η WiseBot εμφανίστηκε. «Ο φόβος δεν είναι σήμα κινδύνου. Είναι σήμα ανάπτυξης».</p>
          <p class="mt-2">Η Αλεξάνδρα την κοίταξε. «Και αν δεν τα καταφέρουμε;»</p>
          <p class="mt-2">— «Τότε», είπε η WiseBot, «θα έχετε κάνει κάτι που δεν είχατε κάνει πριν».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-slate-400 mb-3 tracking-wide">05. Η ΠΑΓΩΣΗ</h3>
          <p>Την προηγούμενη μέρα… κανείς δεν μιλούσε. Η Ελευθερία έσβηνε και ξανάγραφε. Ο Φίλιππος έκανε λάθη.</p>
          <p class="mt-2">Η Αλεξάνδρα ήθελε να φύγει. «Να ακυρώσουμε», ψιθύρισε.</p>
          <p class="mt-4">Ο Sparken κατέβηκε χαμηλά. <strong class="text-white">«Αν φύγετε τώρα, ο φόβος θα σας ακολουθεί».</strong> Σιωπή.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-white mb-3 tracking-wide">06. Η ΑΠΟΦΑΣΗ</h3>
          <p>Δεν ήταν γενναία στιγμή. Ηταν ήσυχη.</p>
          <p class="mt-2">— «Πάμε», είπε η Ελευθερία. «Όχι επειδή είμαστε έτοιμοι. Αλλά επειδή δεν θέλουμε να κρυφτούμε».</p>
          <p class="mt-2">Ο Φίλιππος πήρε ανάσα. «Πάμε».</p>
          <p class="mt-2">Η Αλεξάνδρα έσφιξε τα χέρια της. «Πάμε».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-rose-500 mb-3 tracking-wide">07. ΤΟ ΒΗΜΑ</h3>
          <p>Στάθηκαν μπροστά. Τα φώτα ήταν δυνατά. Ο κόσμος περισσότερος απ’ όσο περίμεναν.</p>
          <p class="mt-2">Η φωνή της Αλεξάνδρας έτρεμε στην αρχή. Μετά… σταθεροποιήθηκε. Ο Φίλιππος μίλησε με πάθος. Η Ελευθερία καθαρά.</p>
          <p class="mt-4"><strong class="text-white">Δεν ήταν τέλειο. Ήταν αληθινό.</strong></p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-rose-300 mb-3 tracking-wide">08. ΤΟ ΜΕΤΑ</h3>
          <p>Δεν χειροκρότησαν όλοι. Αλλά κάποιοι πλησίασαν. «Μου άρεσε». — «Έχει ιδέα». — «Συνεχίστε».</p>
          <p class="mt-2">Η Αλεξάνδρα χαμογέλασε. «Το κάναμε».</p>
          <p class="mt-2">Η WiseBot άναψε. «Και ο φόβος;»</p>
          <p class="mt-2">Ο Φίλιππος σκέφτηκε. «Ήταν εκεί. Απλώς… δεν μας σταμάτησε».</p>
        </section>

        <div class="mt-12 bg-rose-950/60 p-8 rounded-3xl border-2 border-dashed border-rose-500/40 shadow-xl">
           <h4 class="text-xl font-black text-rose-300 uppercase tracking-wider mb-6 flex items-center gap-2">
             🦁 JOURNAL: ΤΟ ΚΑΝΩ ΚΑΙ ΑΣ ΦΟΒΑΜΑΙ
           </h4>
           
           <div class="space-y-6 text-gray-300">
             
             <div>
               <h5 class="text-rose-200 font-bold mb-2">1. ΤΙ ΜΕ ΦΟΒΙΖΕΙ</h5>
               <p class="text-sm mb-2 opacity-80">Γράψε κάτι που θέλεις να κάνεις αλλά φοβάσαι (π.χ. να μιλήσω, να δείξω το έργο μου):</p>
               <div class="w-full h-10 bg-black/30 rounded border border-rose-500/20"></div>
             </div>

             <div>
               <h5 class="text-rose-200 font-bold mb-2">2. ΤΟ ΡΙΣΚΟ</h5>
               <p class="text-sm mb-2 opacity-80">Τι θα χάσεις αν δεν προσπαθήσεις ποτέ;</p>
               <div class="w-full h-10 bg-black/30 rounded border border-rose-500/20"></div>
             </div>
             
             <div>
                <h5 class="text-rose-200 font-bold mb-2">3. Η ΔΡΑΣΗ</h5>
                <div class="bg-black/20 p-4 rounded-xl border border-rose-500/10">
                 <p class="text-sm">«Ακόμα κι αν φοβάμαι, θα κάνω __________»</p>
               </div>
             </div>

           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-slate-950 to-rose-950/80 p-8 rounded-3xl border border-rose-500/30 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-rose-300 uppercase tracking-wider">ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             Το θάρρος δεν είναι να μην φοβάσαι. Είναι να μην αφήνεις τον φόβο να αποφασίζει.
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             Όταν ένα παιδί το μάθει αυτό νωρίς, αλλάζει η πορεία του. Δεν χρειάζεται να τους διώξουμε τον φόβο, αλλά να τους μάθουμε <strong class="text-rose-200">να προχωρούν μαζί του</strong>.
           </p>
        </div>

      </div>
    `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        
        <div class="relative bg-gradient-to-r from-rose-900/60 to-red-900/60 p-8 rounded-2xl border border-rose-500/30 text-center italic text-rose-200 shadow-lg">
           «Fear is not a danger signal. It is a growth signal.»
        </div>

        <section>
          <h3 class="text-2xl font-black text-rose-400 mb-3 tracking-wide">01. THE OPPORTUNITY</h3>
          <p>The message came unexpectedly. «We want you to see your project. In front of people».</p>
          <p class="mt-4">Alexandra read it again. And again. «We are not ready», she said immediately.</p>
          <p class="mt-2">Philippos smiled nervously. «The hard times have come».</p>
          <p class="mt-2">Eleftheria felt her stomach tighten. «This is big».</p>
          <p class="mt-4">Crocus jumped up. «LET'S GO!» No one answered.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-gray-400 mb-3 tracking-wide">02. FEAR CHANGES SHAPE</h3>
          <p>It wasn't mockery anymore. It was: looks, expectations, responsibility.</p>
          <p class="mt-2">— «What if we fail?» asked Alexandra. «What if we forget everything? What if they laugh?»</p>
          <p class="mt-4">Philippos looked down. <strong class="text-white">«I'm scared».</strong> And this time… he said it.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-rose-300 mb-3 tracking-wide">03. COURAGE</h3>
          <p>Crocus didn't shout. «Do you know what I fear? That we never go».</p>
          <p class="mt-2">The phrase fell heavy. Eleftheria looked at him. «Meaning we go scared?»</p>
          <p class="mt-2 text-white font-bold">— «Yes», said Crocus. «That is called courage».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-fuchsia-300 mb-3 tracking-wide">04. THE SIGNAL</h3>
          <p>WiseBot appeared. «Fear is not a danger signal. It is a growth signal».</p>
          <p class="mt-2">Alexandra looked at her. «And if we don't make it?»</p>
          <p class="mt-2">— «Then», said WiseBot, «you will have done something you hadn't done before».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-slate-400 mb-3 tracking-wide">05. THE FREEZE</h3>
          <p>The previous day… no one spoke. Eleftheria erased and rewrote. Philippos made mistakes.</p>
          <p class="mt-2">Alexandra wanted to leave. «Let's cancel», she whispered.</p>
          <p class="mt-4">Sparken came down low. <strong class="text-white">«If you leave now, fear will follow you».</strong> Silence.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-white mb-3 tracking-wide">06. THE DECISION</h3>
          <p>It wasn't a brave moment. It was quiet.</p>
          <p class="mt-2">— «Let's go», said Eleftheria. «Not because we are ready. But because we don't want to hide».</p>
          <p class="mt-2">Philippos took a breath. «Let's go».</p>
          <p class="mt-2">Alexandra squeezed her hands. «Let's go».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-rose-500 mb-3 tracking-wide">07. THE STEP</h3>
          <p>They stood in front. The lights were bright. The crowd more than they expected.</p>
          <p class="mt-2">Alexandra's voice trembled at first. Then… it stabilized. Philippos spoke with passion. Eleftheria clearly.</p>
          <p class="mt-4"><strong class="text-white">It wasn't perfect. It was real.</strong></p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-rose-300 mb-3 tracking-wide">08. THE AFTER</h3>
          <p>Not everyone applauded. But some approached. «I liked it». — «It has an idea». — «Keep going».</p>
          <p class="mt-2">Alexandra smiled. «We did it».</p>
          <p class="mt-2">WiseBot lit up. «And the fear?»</p>
          <p class="mt-2">Philippos thought. «It was there. It just… didn't stop us».</p>
        </section>

        <div class="mt-12 bg-rose-950/60 p-8 rounded-3xl border-2 border-dashed border-rose-500/40 shadow-xl">
           <h4 class="text-xl font-black text-rose-300 uppercase tracking-wider mb-6 flex items-center gap-2">
             🦁 JOURNAL: DO IT SCARED
           </h4>
           
           <div class="space-y-6 text-gray-300">
             
             <div>
               <h5 class="text-rose-200 font-bold mb-2">1. WHAT SCARES ME</h5>
               <p class="text-sm mb-2 opacity-80">Write something you want to do but fear (e.g. speak up, show my work):</p>
               <div class="w-full h-10 bg-black/30 rounded border border-rose-500/20"></div>
             </div>

             <div>
               <h5 class="text-rose-200 font-bold mb-2">2. THE RISK</h5>
               <p class="text-sm mb-2 opacity-80">What will you lose if you never try?</p>
               <div class="w-full h-10 bg-black/30 rounded border border-rose-500/20"></div>
             </div>
             
             <div>
                <h5 class="text-rose-200 font-bold mb-2">3. THE ACTION</h5>
                <div class="bg-black/20 p-4 rounded-xl border border-rose-500/10">
                 <p class="text-sm">«Even if I'm scared, I will __________»</p>
               </div>
             </div>

           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-slate-950 to-rose-950/80 p-8 rounded-3xl border border-rose-500/30 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-rose-300 uppercase tracking-wider">MESSAGE FOR PARENTS</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             Courage is not about not fearing. It is about not letting fear decide.
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             When a child learns this early, their path changes. We don't need to chase fear away, but teach them <strong class="text-rose-200">to move forward with it</strong>.
           </p>
        </div>

      </div>
    `
    }
  },
  {
    id: 13,
    title: { el: "ΔΕΝ ΤΑ ΠΑΡΑΤΑΜΕ", en: "WE DON'T GIVE UP" },
    theme: { el: "ΑΝΤΟΧΗ", en: "RESILIENCE" },
    stepLabel: { el: "CROCUS & LINK & ΑΝΤΟΧΗ", en: "CROCUS, LINK & RESILIENCE" },
    author: "Crocus & Link",
    cover: IMG_LINK,
    videoUrl: "",
    description: { 
      el: "Τίποτα δεν δουλεύει. Η κούραση είναι μεγάλη. Μια ιστορία για τις φορές που συνεχίζεις χωρίς να ξέρεις αν αξίζει — και αυτό σε αλλάζει.", 
      en: "Nothing works. The fatigue is great. A story about the times you keep going without knowing if it's worth it — and that changes you." 
    },
    meaning: { 
      el: "Δεν τα παρατάς επειδή είσαι σίγουρος. Δεν τα παρατάς επειδή έμαθες να συνεχίζεις.", 
      en: "You don't give up because you are sure. You don't give up because you learned to continue." 
    },
    xp: 260,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        
        <div class="relative bg-gradient-to-r from-yellow-900/60 to-amber-900/60 p-8 rounded-2xl border border-amber-600/30 text-center italic text-amber-200 shadow-lg">
           «Η αντοχή δεν φωνάζει. Η αντοχή είναι η φωνή που λέει σιγά: "Αύριο θα ξαναπροσπαθήσω".»
        </div>

        <section>
          <h3 class="text-2xl font-black text-amber-500 mb-3 tracking-wide">01. ΤΙΠΟΤΑ ΔΕΝ ΔΟΥΛΕΥΕ</h3>
          <p>Την επόμενη μέρα… τίποτα δεν πήγαινε όπως έπρεπε. Το παιχνίδι κόλλαγε. Οι ιδέες δεν έβγαιναν. Το κλίμα ήταν βαρύ.</p>
          <p class="mt-2">Ο Φίλιππος χτύπησε το τραπέζι. «Χάσαμε χρόνο».</p>
          <p class="mt-2">Η Αλεξάνδρα έκλεισε το τετράδιο. «Ίσως… να μην είμαστε καλοί σε αυτό».</p>
          <p class="mt-2">Η Ελευθερία δεν μίλησε. Απλώς κοίταζε το πάτωμα. Ο Crocus ήταν ήσυχος. <strong>Πολύ ήσυχος.</strong></p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-gray-400 mb-3 tracking-wide">02. Η ΣΚΕΨΗ ΠΟΥ ΠΟΝΑΕΙ</h3>
          <p>Δεν ήταν η αποτυχία. Ηταν η σκέψη: <em>«Και αν όλο αυτό ήταν απλώς τύχη;»</em></p>
          <p class="mt-4">Ο Φίλιππος ένιωσε τον θυμό να φεύγει. Να μένει κάτι πιο βαρύ. «Κουράστηκα», είπε. «Όχι στο σώμα. Στο μέσα».</p>
          <p class="mt-2">Η Αλεξάνδρα έγνεψε. «Κι εγώ».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-orange-600 mb-3 tracking-wide">03. Ο CROCUS ΣΠΑΕΙ ΤΗ ΣΙΩΠΗ</h3>
          <p>Ο Crocus γύρισε απότομα. <strong class="text-white">«ΣΤΑΜΑΤΑΤΕ!»</strong></p>
          <p class="mt-2">Τους κοίταξε έναν έναν. «Ξέρετε τι με φοβίζει; Όχι να χάσουμε. Να φύγουμε πριν μάθουμε».</p>
          <p class="mt-2">Η φωνή του έτρεμε. «Δεν ήρθαμε ως εδώ για να κάνουμε πίσω».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-fuchsia-400 mb-3 tracking-wide">04. Η ΝΕΑ ΟΠΤΙΚΗ</h3>
          <p>Ο Pencilo άνοιξε τα σχέδια. «Αυτό δεν απέτυχε», είπε. «Μας έδειξε τι <strong>δεν</strong> δουλεύει».</p>
          <p class="mt-2">Η Αλεξάνδρα ανασήκωσε το κεφάλι. «Δηλαδή… δεν τελειώσαμε;»</p>
          <p class="mt-2 text-white">— «Όχι», απάντησε. «Απλώς δεν τελειώσαμε ακόμα».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-blue-400 mb-3 tracking-wide">05. Η LINK ΛΕΕΙ ΤΗΝ ΑΛΗΘΕΙΑ</h3>
          <p>Η Link εμφανίστηκε με ένα <em>κλικ</em>. «Να σας πω κάτι; Τα καλύτερα πράγματα… χαλάνε πρώτα».</p>
          <p class="mt-2">Ο Φίλιππος συνοφρυώθηκε. «Δεν βοηθάει αυτό».</p>
          <p class="mt-2 text-blue-200">Η Link χαμογέλασε. «Βοηθάει αν δεν περιμένεις να πετύχεις με την πρώτη».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-white mb-3 tracking-wide">06. Η ΜΙΚΡΗ ΑΠΟΦΑΣΗ</h3>
          <p>Δεν είπαν μεγάλα λόγια. Δεν είπαν «θα τα καταφέρουμε». Είπαν κάτι πιο απλό:</p>
          <p class="mt-4 text-xl text-amber-200 font-bold text-center">«Σήμερα… συνεχίζουμε».</p>
          <p class="mt-4">Ο Crocus χαμογέλασε. «Αυτό μου φτάνει».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-slate-400 mb-3 tracking-wide">07. Η ΣΙΩΠΗ ΤΗΣ ΔΟΥΛΕΙΑΣ</h3>
          <p>Δεν ήταν χαρούμενοι. Ηταν συγκεντρωμένοι. Η Αλεξάνδρα δοκίμαζε ξανά. Ο Φίλιππος διόρθωνε. Η Ελευθερία ξαναέφτιαχνε το πλάνο.</p>
          <p class="mt-2">Η σιωπή δεν ήταν βαριά. <strong>Ήταν δουλειά.</strong></p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-fuchsia-300 mb-3 tracking-wide">08. Η ΑΝΤΟΧΗ</h3>
          <p>Η WiseBot εμφανίστηκε. «Αυτό που κάνετε τώρα… δεν λέγεται ενθουσιασμός. Λέγεται <strong>αντοχή</strong>».</p>
          <p class="mt-2">Ο Sparken φάνηκε ψηλά. «Και αυτή», είπε, «είναι σπάνια».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-amber-500 mb-3 tracking-wide">09. ΧΩΡΙΣ ΥΠΟΣΧΕΣΕΙΣ</h3>
          <p>Το βράδυ, κανείς δεν είπε: «Αύριο θα πετύχουμε». Είπαν: «Αύριο θα συνεχίσουμε». Και αυτό ήταν αρκετό.</p>
        </section>

        <div class="mt-12 bg-gradient-to-br from-amber-950/60 to-black p-8 rounded-3xl border-2 border-dashed border-amber-700/40 shadow-xl">
           <h4 class="text-xl font-black text-amber-600 uppercase tracking-wider mb-6 flex items-center gap-2">
             🧗 JOURNAL: ΔΕΝ ΤΑ ΠΑΡΑΤΑΜΕ
           </h4>
           
           <div class="space-y-6 text-gray-300">
             
             <div>
               <h5 class="text-amber-500 font-bold mb-2">1. ΤΟ ΕΜΠΟΔΙΟ</h5>
               <p class="text-sm mb-2 opacity-80">Γράψε κάτι που σου φαίνεται πολύ δύσκολο και θες να το αφήσεις:</p>
               <div class="w-full h-10 bg-black/30 rounded border border-amber-700/20"></div>
             </div>

             <div>
               <h5 class="text-amber-500 font-bold mb-2">2. Η ΑΛΛΑΓΗ</h5>
               <p class="text-sm mb-2 opacity-80">Συμπλήρωσε: «Αντί να τα παρατήσω, θα ________».</p>
               <div class="w-full h-10 bg-black/30 rounded border border-amber-700/20"></div>
             </div>
             
             <div>
                <h5 class="text-amber-500 font-bold mb-2">3. Η ΔΕΣΜΕΥΣΗ</h5>
                <div class="bg-black/20 p-4 rounded-xl border border-amber-700/10">
                 <p class="text-sm">«Δεν χρειάζεται να κερδίσω σήμερα.</p>
                 <p class="text-sm">Χρειάζεται να συνεχίσω.»</p>
               </div>
             </div>

           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-slate-950 to-amber-950/40 p-8 rounded-3xl border border-amber-600/30 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-amber-500 uppercase tracking-wider">ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             Η επιμονή δεν φαίνεται πάντα εντυπωσιακή. Συχνά μοιάζει με "βαρετή" συνέχιση.
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             Όταν ένα παιδί το μάθει αυτό, <strong class="text-amber-400">αποκτά δύναμη που δεν σπάει εύκολα</strong>. Δεν κέρδισαν. Αλλά δεν έφυγαν. Και αυτό… ήταν η αρχή της νίκης.
           </p>
        </div>

      </div>
    `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        
        <div class="relative bg-gradient-to-r from-yellow-900/60 to-amber-900/60 p-8 rounded-2xl border border-amber-600/30 text-center italic text-amber-200 shadow-lg">
           «Resilience doesn't shout. Resilience is the voice that whispers: "Tomorrow I will try again".»
        </div>

        <section>
          <h3 class="text-2xl font-black text-amber-500 mb-3 tracking-wide">01. NOTHING WORKED</h3>
          <p>The next day... nothing went right. The game stuck. Ideas didn't come. The atmosphere was heavy.</p>
          <p class="mt-2">Philippos hit the table. «We wasted time».</p>
          <p class="mt-2">Alexandra closed the notebook. «Maybe... we aren't good at this».</p>
          <p class="mt-2">Eleftheria didn't speak. She just looked at the floor. Crocus was quiet. <strong>Very quiet.</strong></p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-gray-400 mb-3 tracking-wide">02. THE THOUGHT THAT HURTS</h3>
          <p>It wasn't failure. It was the thought: <em>«What if all this was just luck?»</em></p>
          <p class="mt-4">Philippos felt anger leaving. Something heavier remaining. «I'm tired», he said. «Not in the body. Inside».</p>
          <p class="mt-2">Alexandra nodded. «Me too».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-orange-600 mb-3 tracking-wide">03. CROCUS BREAKS THE SILENCE</h3>
          <p>Crocus turned abruptly. <strong class="text-white">«STOP!»</strong></p>
          <p class="mt-2">He looked at them one by one. «Do you know what scares me? Not losing. Leaving before we learn».</p>
          <p class="mt-2">His voice trembled. «We didn't come this far to turn back».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-fuchsia-400 mb-3 tracking-wide">04. THE NEW PERSPECTIVE</h3>
          <p>Pencilo opened the plans. «This didn't fail», he said. «It showed us what <strong>doesn't</strong> work».</p>
          <p class="mt-2">Alexandra raised her head. «Meaning... we aren't finished?»</p>
          <p class="mt-2 text-white">— «No», he replied. «We just haven't finished yet».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-blue-400 mb-3 tracking-wide">05. LINK TELLS THE TRUTH</h3>
          <p>Link appeared with a <em>click</em>. «Can I tell you something? The best things... break first».</p>
          <p class="mt-2">Philippos frowned. «That doesn't help».</p>
          <p class="mt-2 text-blue-200">Link smiled. «It helps if you don't expect to succeed on the first try».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-white mb-3 tracking-wide">06. THE SMALL DECISION</h3>
          <p>They didn't say big words. They didn't say «we will make it». They said something simpler:</p>
          <p class="mt-4 text-xl text-amber-200 font-bold text-center">«Today... we continue».</p>
          <p class="mt-4">Crocus smiled. «That is enough for me».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-slate-400 mb-3 tracking-wide">07. THE SILENCE OF WORK</h3>
          <p>They weren't happy. They were focused. Alexandra tried again. Philippos fixed. Eleftheria replanned. The silence wasn't heavy. <strong>It was work.</strong></p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-fuchsia-300 mb-3 tracking-wide">08. THE ENDURANCE</h3>
          <p>WiseBot appeared. «What you are doing now... is not called excitement. It is called <strong>resilience</strong>».</p>
          <p class="mt-2">Sparken appeared above. «And this», he said, «is rare».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-amber-500 mb-3 tracking-wide">09. NO PROMISES</h3>
          <p>That night, no one said: «Tomorrow we will succeed». They said: «Tomorrow we will continue». And that was enough.</p>
        </section>

        <div class="mt-12 bg-gradient-to-br from-amber-950/60 to-black p-8 rounded-3xl border-2 border-dashed border-amber-700/40 shadow-xl">
           <h4 class="text-xl font-black text-amber-600 uppercase tracking-wider mb-6 flex items-center gap-2">
             🧗 JOURNAL: WE DON'T GIVE UP
           </h4>
           
           <div class="space-y-6 text-gray-300">
             
             <div>
               <h5 class="text-amber-500 font-bold mb-2">1. THE OBSTACLE</h5>
               <p class="text-sm mb-2 opacity-80">Write something that seems very hard and you want to quit:</p>
               <div class="w-full h-10 bg-black/30 rounded border border-amber-700/20"></div>
             </div>

             <div>
               <h5 class="text-amber-500 font-bold mb-2">2. THE CHANGE</h5>
               <p class="text-sm mb-2 opacity-80">Complete: «Instead of quitting, I will ________».</p>
               <div class="w-full h-10 bg-black/30 rounded border border-amber-700/20"></div>
             </div>
             
             <div>
                <h5 class="text-amber-500 font-bold mb-2">3. THE COMMITMENT</h5>
                <div class="bg-black/20 p-4 rounded-xl border border-amber-700/10">
                 <p class="text-sm">«I don't need to win today.</p>
                 <p class="text-sm">I need to continue.»</p>
               </div>
             </div>

           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-slate-950 to-amber-950/40 p-8 rounded-3xl border border-amber-600/30 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-amber-500 uppercase tracking-wider">MESSAGE FOR PARENTS</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             Persistence doesn't always look impressive. It often looks like "boring" continuation.
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             When a child learns this, <strong class="text-amber-400">they acquire strength that doesn't break easily</strong>. They didn't win. But they didn't leave. And that... was the beginning of victory.
           </p>
        </div>

      </div>
    `
    }
  },
  {
    id: 14,
    title: { el: "Ο ΧΡΟΝΟΣ ΣΟΥ ΕΙΝΑΙ ΔΥΝΑΜΗ", en: "YOUR TIME IS POWER" },
    theme: { el: "ΕΝΕΡΓΕΙΑ", en: "ENERGY" },
    stepLabel: { el: "SPARKEN & WISEBOT", en: "SPARKEN & WISEBOT" },
    author: "Sparken & Wisebot",
    cover: IMG_SPARKEN,
    videoUrl: "",
    description: { 
      el: "Όλοι ζητάνε κάτι. «Κάνε κι αυτό», «Έλα λίγο». Μια ιστορία για το πώς να προστατεύεις τον χρόνο σου χωρίς ενοχές.",
      en: "Everyone asks for something. \"Do this too\", \"Come here for a bit\". A story about how to protect your time without guilt."
    },
    meaning: { 
      el: "Ο χρόνος σου δεν χρειάζεται να γεμίσει. Χρειάζεται να προστατευτεί.",
      en: "Your time doesn't need to be filled. It needs to be protected."
    },
    xp: 280,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        
        <div class="relative bg-gradient-to-r from-sky-900/60 to-blue-900/60 p-8 rounded-2xl border border-sky-500/30 text-center italic text-sky-200 shadow-lg">
           «Κάθε "ΝΑΙ" σε κάτι που δεν θες, είναι ένα "ΟΧΙ" στον εαυτό σου.»
        </div>

        <section>
          <h3 class="text-2xl font-black text-sky-400 mb-3 tracking-wide">01. ΟΤΑΝ ΟΛΑ ΖΗΤΑΝΕ ΛΙΓΟ ΑΚΟΜΑ</h3>
          <p>Το τραπέζι ήταν γεμάτο. Όχι από δουλειά. <strong>Από αιτήματα.</strong></p>
          <p class="mt-2">— «Έλα λίγο εδώ». — «Κάνε κι αυτό». — «Μην το αφήσεις τώρα». — «Παίξε λίγο ακόμα».</p>
          <p class="mt-4">Η Αλεξάνδρα ένιωθε χαρούμενη… και κουρασμένη. Ο Φίλιππος έτρεχε από το ένα στο άλλο. Η Ελευθερία κρατούσε λίστες. Κανείς δεν σταμάτησε. Ο χρόνος… έφευγε.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-gray-400 mb-3 tracking-wide">02. Η ΚΟΥΡΑΣΗ ΠΟΥ ΔΕΝ ΦΑΙΝΕΤΑΙ</h3>
          <p>Δεν πονούσε το σώμα. Πονούσε το μέσα. Η Ελευθερία το ένιωσε πρώτη. «Δεν προλαβαίνουμε».</p>
          <p class="mt-2">Ο Φίλιππος αντέδρασε. «Κι όμως κάνουμε συνέχεια».</p>
          <p class="mt-2 text-white">Η φράση κόλλησε στον αέρα. Η Αλεξάνδρα ψιθύρισε: <strong>«Νιώθω άδεια».</strong></p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-cyan-300 mb-3 tracking-wide">03. Ο SPARKEN ΚΑΤΕΒΑΙΝΕΙ ΧΑΜΗΛΑ</h3>
          <p>Ο αέρας άλλαξε. Ο Sparken προσγειώθηκε χωρίς θόρυβο. Δεν άνοιξε φτερά. Δεν έδειξε μέλλον. Κοίταξε τα παιδιά.</p>
          <p class="mt-2">— «Πού πάτε;»</p>
          <p class="mt-2">— «Μπροστά», είπε ο Φίλιππος.</p>
          <p class="mt-2 text-sky-200 font-bold">Ο Sparken έγειρε το κεφάλι. «Και γιατί τρέχετε;»</p>
          <p class="mt-2">Σιωπή.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-fuchsia-400 mb-3 tracking-wide">04. ΤΟ ΒΑΡΟΣ ΤΟΥ «ΝΑΙ»</h3>
          <p>Ο Sparken άνοιξε ένα μικρό ολόγραμμα. Όχι εικόνες. Λέξεις: <strong>ΝΑΙ - ΝΑΙ - ΝΑΙ</strong>.</p>
          <p class="mt-2">«Κάθε “ναι”», είπε, «παίρνει χρόνο».</p>
          <p class="mt-4">Η WiseBot εμφανίστηκε δίπλα του. «Και κάθε χρόνος… είναι κομμάτι ζωής». Η λέξη έμεινε: <strong>Ζωής.</strong></p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-white mb-3 tracking-wide">05. ΤΟ ΠΡΩΤΟ «ΟΧΙ»</h3>
          <p>Η Αλεξάνδρα κοίταξε το τραπέζι. «Δεν μπορούμε να τα κάνουμε όλα».</p>
          <p class="mt-2">Ο Φίλιππος δίστασε. «Και αν χάσουμε κάτι;»</p>
          <p class="mt-2 text-sky-300">Ο Sparken απάντησε ήρεμα. «Χάνετε ήδη… όταν σκορπάτε».</p>
          <p class="mt-2">Η Ελευθερία ένιωσε ανακούφιση.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-green-400 mb-3 tracking-wide">06. Η ΕΠΙΛΟΓΗ ΠΟΥ ΕΛΑΦΡΑΙΝΕΙ</h3>
          <p>Έσβησαν πράγματα από τη λίστα. Όχι γιατί δεν άξιζαν. Αλλά γιατί <strong>δεν ήταν για τώρα.</strong></p>
          <p class="mt-2">Το δωμάτιο έγινε πιο ήσυχο. Ο χρόνος… χώρεσε.</p>
          <p class="mt-4">Ο Crocus ξύστηκε στο κεφάλι. «Πρώτη φορά που δεν λέμε “πάμε”».</p>
          <p class="mt-2">Η Αλεξάνδρα χαμογέλασε. «Και όμως προχωράμε».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-teal-300 mb-3 tracking-wide">07. Ο ΧΡΟΝΟΣ ΑΛΛΙΩΣ</h3>
          <p>Το απόγευμα ήταν αλλιώτικο. Χωρίς βιασύνη. Χωρίς πίεση.</p>
          <p class="mt-2">Η Αλεξάνδρα ζωγράφιζε. Ο Φίλιππος έφτιαχνε. Η Ελευθερία σκεφτόταν καθαρά.</p>
          <p class="mt-2 text-white">Η WiseBot τους κοίταζε. «Τώρα μαθαίνετε να σέβεστε τον εαυτό σας».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-sky-400 mb-3 tracking-wide">08. ΤΟ ΜΑΘΗΜΑ</h3>
          <p>Το βράδυ, έγραψαν: <em>«Ο χρόνος δεν είναι λίγος. Είναι πολύτιμος.»</em></p>
          <p class="mt-4">Ο Sparken άνοιξε τα φτερά του. «Αυτό δεν το μαθαίνουν όλοι».</p>
        </section>

        <div class="mt-12 bg-sky-950/60 p-8 rounded-3xl border-2 border-dashed border-sky-500/40 shadow-xl">
           <h4 class="text-xl font-black text-sky-300 uppercase tracking-wider mb-6 flex items-center gap-2">
             ⏳ JOURNAL: ΠΡΟΣΤΑΤΕΥΩ ΤΟΝ ΧΡΟΝΟ ΜΟΥ
           </h4>
           
           <div class="space-y-6 text-gray-300">
             
             <div>
               <h5 class="text-sky-200 font-bold mb-2">1. ΟΙ ΚΛΕΦΤΕΣ ΤΟΥ ΧΡΟΝΟΥ</h5>
               <p class="text-sm mb-2 opacity-80">Γράψε 3 πράγματα που σου "τρώνε" χρόνο αλλά δεν σου δίνουν χαρά:</p>
               <div class="w-full h-10 bg-black/30 rounded border border-sky-500/20"></div>
             </div>

             <div>
               <h5 class="text-sky-200 font-bold mb-2">2. Η ΑΞΙΑ</h5>
               <p class="text-sm mb-2 opacity-80">Γράψε 2 πράγματα που ΑΞΙΖΟΥΝ τον χρόνο σου:</p>
               <div class="w-full h-10 bg-black/30 rounded border border-sky-500/20"></div>
             </div>
             
             <div>
                <h5 class="text-sky-200 font-bold mb-2">3. ΤΟ ΙΣΟΖΥΓΙΟ</h5>
                <div class="bg-black/20 p-4 rounded-xl border border-sky-500/10">
                 <p class="text-sm">«Όταν λέω ΟΧΙ σε ________,</p>
                 <p class="text-sm">λέω ΝΑΙ σε ________.»</p>
               </div>
             </div>

           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-slate-950 to-sky-950/60 p-8 rounded-3xl border border-sky-500/30 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-sky-300 uppercase tracking-wider">ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             Τα παιδιά δεν χρειάζονται γεμάτες μέρες. Χρειάζονται καθαρές.
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             Όταν μάθουν να <strong class="text-sky-300">προστατεύουν τον χρόνο τους</strong> (ακόμα και από το "καλό" παιχνίδι), μαθαίνουν να σέβονται τον εαυτό τους. Ο χρόνος δεν γυρίζει πίσω. Αλλά μπορεί να αλλάξει κατεύθυνση.
           </p>
        </div>

      </div>
      `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        
        <div class="relative bg-gradient-to-r from-sky-900/60 to-blue-900/60 p-8 rounded-2xl border border-sky-500/30 text-center italic text-sky-200 shadow-lg">
           «Every "YES" to something you don't want, is a "NO" to yourself.»
        </div>

        <section>
          <h3 class="text-2xl font-black text-sky-400 mb-3 tracking-wide">01. WHEN EVERYONE ASKS FOR A LITTLE MORE</h3>
          <p>The table was full. Not of work. <strong>Of requests.</strong></p>
          <p class="mt-2">— «Come here a bit». — «Do this too». — «Don't leave it now». — «Play a little more».</p>
          <p class="mt-4">Alexandra felt happy… and tired. Philippos ran from one thing to another. Eleftheria kept lists. No one stopped. Time… was leaving.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-gray-400 mb-3 tracking-wide">02. THE FATIGUE THAT DOESN'T SHOW</h3>
          <p>The body didn't hurt. The inside hurt. Eleftheria felt it first. «We can't make it».</p>
          <p class="mt-2">Philippos reacted. «But we are doing things constantly».</p>
          <p class="mt-2 text-white">The phrase stuck in the air. Alexandra whispered: <strong>«I feel empty».</strong></p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-cyan-300 mb-3 tracking-wide">03. SPARKEN COMES DOWN LOW</h3>
          <p>The air changed. Sparken landed without noise. He didn't open wings. He didn't show the future. He looked at the children.</p>
          <p class="mt-2">— «Where are you going?»</p>
          <p class="mt-2">— «Forward», said Philippos.</p>
          <p class="mt-2 text-sky-200 font-bold">Sparken tilted his head. «And why are you running?»</p>
          <p class="mt-2">Silence.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-fuchsia-400 mb-3 tracking-wide">04. THE WEIGHT OF "YES"</h3>
          <p>Sparken opened a small hologram. Not images. Words: <strong>YES - YES - YES</strong>.</p>
          <p class="mt-2">«Every “yes”», he said, «takes time».</p>
          <p class="mt-4">WiseBot appeared next to him. «And every time… is a piece of life». The word stayed: <strong>Life.</strong></p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-white mb-3 tracking-wide">05. THE FIRST "NO"</h3>
          <p>Alexandra looked at the table. «We can't do everything».</p>
          <p class="mt-2">Philippos hesitated. «And if we lose something?»</p>
          <p class="mt-2 text-sky-300">Sparken answered calmly. «You are already losing… when you scatter».</p>
          <p class="mt-2">Eleftheria felt relief.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-green-400 mb-3 tracking-wide">06. THE CHOICE THAT LIGHTENS</h3>
          <p>They erased things from the list. Not because they weren't worth it. But because <strong>they weren't for now.</strong></p>
          <p class="mt-2">The room became quieter. Time… fit.</p>
          <p class="mt-4">Crocus scratched his head. «First time we don't say “let's go”».</p>
          <p class="mt-2">Alexandra smiled. «And yet we move forward».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-teal-300 mb-3 tracking-wide">07. TIME DIFFERENTLY</h3>
          <p>The afternoon was different. Without rush. Without pressure.</p>
          <p class="mt-2">Alexandra drew. Philippos built. Eleftheria thought clearly.</p>
          <p class="mt-2 text-white">WiseBot looked at them. «Now you are learning to respect yourselves».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-sky-400 mb-3 tracking-wide">08. THE LESSON</h3>
          <p>That night, they wrote: <em>«Time is not little. It is precious.»</em></p>
          <p class="mt-4">Sparken opened his wings. «Not everyone learns this».</p>
        </section>

        <div class="mt-12 bg-sky-950/60 p-8 rounded-3xl border-2 border-dashed border-sky-500/40 shadow-xl">
           <h4 class="text-xl font-black text-sky-300 uppercase tracking-wider mb-6 flex items-center gap-2">
             ⏳ JOURNAL: PROTECTING MY TIME
           </h4>
           
           <div class="space-y-6 text-gray-300">
             
             <div>
               <h5 class="text-sky-200 font-bold mb-2">1. THE TIME THIEVES</h5>
               <p class="text-sm mb-2 opacity-80">Write 3 things that "eat" your time but don't give you joy:</p>
               <div class="w-full h-10 bg-black/30 rounded border border-sky-500/20"></div>
             </div>

             <div>
               <h5 class="text-sky-200 font-bold mb-2">2. THE VALUE</h5>
               <p class="text-sm mb-2 opacity-80">Write 2 things that are WORTH your time:</p>
               <div class="w-full h-10 bg-black/30 rounded border border-sky-500/20"></div>
             </div>
             
             <div>
                <h5 class="text-sky-200 font-bold mb-2">3. THE BALANCE</h5>
                <div class="bg-black/20 p-4 rounded-xl border border-sky-500/10">
                 <p class="text-sm">«When I say NO to ________,</p>
                 <p class="text-sm">I say YES to ________.»</p>
               </div>
             </div>

           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-slate-950 to-sky-950/60 p-8 rounded-3xl border border-sky-500/30 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-sky-300 uppercase tracking-wider">MESSAGE FOR PARENTS</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             Children don't need full days. They need clean days.
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             When they learn to <strong class="text-sky-300">protect their time</strong> (even from "good" play), they learn to respect themselves. Time doesn't turn back. But it can change direction.
           </p>
        </div>

      </div>
      `
    }
  }
];
