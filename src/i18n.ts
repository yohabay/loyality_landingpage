import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip: move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  am: {
    translation: {
      "Gursha Localization": "ጉርሻ ትርጉህ: ጥር 5, 2026",
      "Supermarket Money Saving App": "የሱፐርማርኬት ገንዘብ መቆጠቢያ አፕ",
      "Up to 10% Gursha points for Scanned Receipts!": "ደረሰኝ ፎቶ በማንሳት እስከ 10% የጉርሻ ነጥብ ያግኙ!",
      "How it Works?": "እንዴት ይሰራል?",
      "It's sooo easy": "በጣም ቀላል ነው!",
      "1. Scan your receipt": "1. ደረሰኝዎን ፎቶ ማንሳት",
      "Simply upload your purchase receipts into the App": "የግዢ ደረሰኞን ፎቶ በማንሳት እስከ 10% ጉርሻ ያግኙ",
      "2. Earn Gursha points": "2. የጉርሻ ነጥቦችን ይሰብስቡ",
      "Collect Gursha points and save on every supermarket purchases (1 Gursha point = 1 ETB)": "ለሚያደርጉት ለእያንዳንዱ ግዢ የሚያገኙትን የጉርሻ ነጥቦች በሂሳብዎ ውስጥ ያከማቹ",
      "Shop from bonus offers to earn additional Gursha points": "ተጨማሪ የጉርሻ ነጥቦችን ለማግኘት ከተመረጡ እቃዎች ይገበያዩ",
      "3. Discounts from points": "3. ነጥቦችን ወደ ቅናሽ ይቀይ",
      "Convert your Gursha points into supermarket Discount Coupons": "የሰበሰቧቸውን ነጥቦች ወደ ገንዘብ ቅናሽ በመቀየር ለቀጣይ ግዢ ክፍያዎ ይጠቀሙ።",
      "FAQ & Help Section": "ተደጋጋሚ ጥያቄዎች እና መረጃ",
      "Asked Questions": "ተደጋጋሚ ጥያቄዎች",
      "What is Gursha Rewards?": "ጉርሻ ሪዋርድስ ምንድን ነው?",
      "Gursha Rewards is a supermarket loyalty app that lets shoppers earn Gursha points, Maximize savings with exclusive offers, and save on every spend at our partner supermarkets.": "ጉርሻ ሪዋርድስ ሸማቾች የጉርሻ ነጥቦችን እንዲሰበስቡ፣ በልዩ ስጦታ ቁጠባን እንዲያሳድጉ እና በሱፐርማርኬቶች በሚያደርጉት ወጪ እንዲቆጥቡ የሚያስችል አፕ ነው።",
      "How do I earn Gursha Points?": "የጉርሻ ነጥቦችን እንዴት ማግኘት እችላለሁ?",
      "You earn gursha points by shopping at partner supermarkets and uploading your receipt in the app, (1 Gursha points = 1 ETB).": "ከአጋር ሱፐርማርኬቶች በመገበያየት እና የግዢ ደረሰኝዎን በመተግበሪያው ላይ ስካን በማድረግ የጉርሻ ነጥብ ያገኛሉ (1 የጉርሻ ነጥብ = 1 ብር)።",
      "How does Gursha Rewards works?": "ጉርሻ ሪዋርድስ እንዴት ይሰራል?",
      "Simply upload your purchase receipt to the app from one of our partner supermarkets and see your saving grow through Gursha points.": "ከአጋር ሱፐርማርኬቶች የገዙበትን ደረሰኝ ወደ መተግበሪያው ያስገቡ፤ በጉርሻ ነጥቦች አማካኝነት ቁጠባዎ ሲያድግ ይመልከቱ።",
      "What is an Offer?": "ኦፈር ወይም ልዩ ስጦታ ምንድን ነው?",
      "Offers are bonus campaigns that help you earn more Gursha points through game-like progress, either by buying specific items or spending a set amount within the campaign period.": "ኦፈሮች ማለት የተወሰኑ እቃዎችን በመግዛት ወይም በተሰጠው የጊዜ ገደብ ውስጥ የተወሰነ ገንዘብ በማውጣት፣ በአዝናኝ ሂደት ተጨማሪ የጉርሻ ነጥቦችን እንዲያገኙ የሚያግዙ የሽልማት አይነቶች ናቸው።",
      "What to do with my Gursha points?": "በሰበሰብኩት የጉርሻ ነጥብ ምን ማድረግ እችላለሁ?",
      "Gursha points collected from a supermarket can be converted into a discount coupon, which will be deducted for your next purchase by giving the cashier your coupon code and pay only the remaining amounts.": "ከሱፐርማርኬት ግዢዎች የሰበሰቡትን የጉርሻ ነጥብ ወደ ቅናሽ ኩፖን መቀየር ይችላሉ። በሚቀጥለው ግዢዎ ለካሸሩ የኩፖኑን ኮዱን በመስጠት የኩፖኑን ዋጋ አስቀንሰው ቀሪውን ሂሳብ ብቻ መክፈል ይችላሉ።",
      "Download the app to save on every purchase!": "Copyright ©️ Gursha Rewards 2026" 
    }
  }
};

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    lng: 'am', // language to use, more info here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already does escaping
    }
  });

i18n.changeLanguage('am');

export default i18n;