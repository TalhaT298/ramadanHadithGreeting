// Predefined Hadiths with References
const hadiths = [
  {
    arabic: "مَنْ صَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ",
    english: "Whoever fasts Ramadan out of faith and hope for reward, his previous sins will be forgiven.",
    bangla: "যে ব্যক্তি ঈমান ও সওয়াবের আশায় রমজান মাসের রোজা রাখে, তার পূর্ববর্তী সব গুনাহ মাফ করে দেওয়া হবে।",
    reference: "Sahih al-Bukhari, Hadith 38"
  },
  {
    arabic: "الصَّوْمُ جُنَّةٌ",
    english: "Fasting is a shield.",
    bangla: "রোজা একটি ঢাল।",
    reference: "Sahih al-Bukhari, Hadith 1894"
  },
  {
    arabic: "إِذَا دَخَلَ رَمَضَانُ فُتِّحَتْ أَبْوَابُ الْجَنَّةِ وَغُلِّقَتْ أَبْوَابُ النَّارِ وَصُفِّدَتِ الشَّيَاطِينُ",
    english: "When Ramadan enters, the gates of Paradise are opened, the gates of Hell are closed, and the devils are chained.",
    bangla: "রমজান মাস এলে জান্নাতের দরজাগুলো খুলে দেওয়া হয়, জাহান্নামের দরজাগুলো বন্ধ করে দেওয়া হয় এবং শয়তানদের শৃঙ্খলিত করা হয়।",
    reference: "Sahih al-Bukhari, Hadith 1899"
  },
  {
    arabic: "تَسَحَّرُوا فَإِنَّ فِي السَّحُورِ بَرَكَةٌ",
    english: "Take Suhoor, for indeed there is a blessing in it.",
    bangla: "সেহরি খাও, কারণ এতে বরকত রয়েছে।",
    reference: "Sahih al-Bukhari, Hadith 1923"
  },
  {
    arabic: "مَنْ لَمْ يَدَعْ قَوْلَ الزُّورِ وَالْعَمَلَ بِهِ فَلَيْسَ لِلَّهِ حَاجَةٌ فِي أَنْ يَدَعَ طَعَامَهُ وَشَرَابَهُ",
    english: "Whoever does not give up false speech and acting upon it, Allah has no need of him giving up his food and drink.",
    bangla: "যে মিথ্যা কথা ও কাজ ত্যাগ করে না, তার পানাহার ত্যাগ করার আল্লাহর কোনো প্রয়োজন নেই।",
    reference: "Sahih al-Bukhari, Hadith 1903"
  },
  {
    arabic: "رُبَّ صَائِمٍ لَيْسَ لَهُ مِنْ صِيَامِهِ إِلَّا الْجُوعُ وَالْعَطَشُ",
    english: "How many a fasting person gets nothing from his fast except hunger and thirst.",
    bangla: "কত রোজাদার এমন আছে যাদের রোজা থেকে ক্ষুধা ও তৃষ্ণা ছাড়া আর কিছুই লাভ হয় না।",
    reference: "Sunan Ibn Majah, Hadith 1690"
  },
  {
    arabic: "الصِّيَامُ نِصْفُ الصَّبْرِ",
    english: "Fasting is half of patience.",
    bangla: "রোজা ধৈর্যের অর্ধেক।",
    reference: "Sunan Ibn Majah, Hadith 1745"
  },
  {
    arabic: "لِلصَّائِمِ فَرْحَتَانِ يَفْرَحُهُمَا: إِذَا أَفْطَرَ فَرِحَ بِفِطْرِهِ، وَإِذَا لَقِيَ رَبَّهُ فَرِحَ بِصَوْمِهِ",
    english: "The fasting person has two joys: when he breaks his fast, he rejoices, and when he meets his Lord, he rejoices at his fasting.",
    bangla: "রোজাদারের দুটি আনন্দ: যখন সে ইফতার করে, তখন আনন্দিত হয়, এবং যখন সে তার রবের সাথে সাক্ষাৎ করে, তখন তার রোজার কারণে আনন্দিত হয়।",
    reference: "Sahih al-Bukhari, Hadith 1904"
  },
  {
    arabic: "إِنَّ فِي الْجَنَّةِ بَابًا يُقَالُ لَهُ الرَّيَّانُ، يَدْخُلُ مِنْهُ الصَّائِمُونَ يَوْمَ الْقِيَامَةِ",
    english: "Indeed, in Paradise there is a gate called Ar-Rayyan, through which the fasting people will enter on the Day of Resurrection.",
    bangla: "জান্নাতে একটি দরজা আছে যার নাম রাইয়ান, কিয়ামতের দিন রোজাদাররা এ দরজা দিয়ে প্রবেশ করবে।",
    reference: "Sahih al-Bukhari, Hadith 1896"
  },
  {
    arabic: "صُومُوا تَصِحُّوا",
    english: "Fast, and you will be healthy.",
    bangla: "রোজা রাখ, তুমি সুস্থ থাকবে।",
    reference: "Sunan Ibn Majah, Hadith 1744"
  },
  {
    arabic: "مَنْ فَطَّرَ صَائِمًا كَانَ لَهُ مِثْلُ أَجْرِهِ",
    english: "Whoever provides food for a fasting person to break his fast, he will have a reward like his.",
    bangla: "যে ব্যক্তি কোনো রোজাদারকে ইফতার করায়, সে তার সমপরিমাণ সওয়াব পাবে।",
    reference: "Sunan al-Tirmidhi, Hadith 807"
  },
  {
    arabic: "اللَّهُمَّ لَكَ صُمْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ",
    english: "O Allah, for You I have fasted, and with Your provision, I break my fast.",
    bangla: "হে আল্লাহ, তোমার জন্য আমি রোজা রেখেছি এবং তোমার রিজিক দিয়ে আমি ইফতার করছি।",
    reference: "Sunan Abu Dawood, Hadith 2358"
  },
  {
    arabic: "صِيَامُ شَهْرِ الصَّبْرِ وَثَلَاثَةِ أَيَّامٍ مِنْ كُلِّ شَهْرٍ يُذْهِبْنَ وَحَرَ الصَّدْرِ",
    english: "Fasting the month of patience (Ramadan) and three days of every month removes the heat of the chest.",
    bangla: "ধৈর্যের মাস (রমজান) এবং প্রতি মাসে তিন দিন রোজা রাখলে বুকের জ্বালা দূর হয়।",
    reference: "Sunan al-Nasa'i, Hadith 2391"
  },
  {
    arabic: "الصَّلَوَاتُ الْخَمْسُ وَالْجُمْعَةُ إِلَى الْجُمْعَةِ وَرَمَضَانُ إِلَى رَمَضَانَ مُكَفِّرَاتٌ لِمَا بَيْنَهُنَّ إِذَا اجْتَنَبَ الْكَبَائِرَ",
    english: "The five daily prayers, Friday to Friday, and Ramadan to Ramadan are expiations for the sins committed in between, so long as major sins are avoided.",
    bangla: "পাঁচ ওয়াক্ত নামাজ, জুমুআ থেকে জুমুআ এবং রমজান থেকে রমজান মধ্যবর্তী সময়ের গুনাহ মোচন করে, যতক্ষণ না কবিরা গুনাহ থেকে বেঁচে থাকা হয়।",
    reference: "Sahih Muslim, Hadith 233"
  },
  {
    arabic: "مَنْ قَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ",
    english: "Whoever stands (in prayer) during Ramadan out of faith and hope for reward, his previous sins will be forgiven.",
    bangla: "যে ব্যক্তি ঈমান ও সওয়াবের আশায় রমজান মাসে রাতের নামাজ আদায় করে, তার পূর্ববর্তী সব গুনাহ মাফ করে দেওয়া হবে।",
    reference: "Sahih al-Bukhari, Hadith 2009"
  },
  {
    arabic: "أَفْطِرُوا عَلَى التَّمْرِ فَإِنَّهُ بَرَكَةٌ",
    english: "Break your fast with dates, for indeed it is a blessing.",
    bangla: "খেজুর দিয়ে ইফতার কর, কারণ এতে বরকত রয়েছে।",
    reference: "Sunan Abu Dawood, Hadith 2345"
  },
  {
    arabic: "لَيْسَ فِي الْإِيمَانِ شَيْءٌ أَفْضَلُ مِنَ الصَّبْرِ",
    english: "There is nothing in faith better than patience.",
    bangla: "ঈমানে ধৈর্যের চেয়ে উত্তম কিছু নেই।",
    reference: "Sahih Muslim, Hadith 223"
  },
  {
    arabic: "الصَّوْمُ فِي الشِّتَاءِ الْغَنِيمَةُ الْبَارِدَةُ",
    english: "Fasting in winter is a cool treasure.",
    bangla: "শীতকালে রোজা রাখা একটি শীতল গনিমত।",
    reference: "Sunan Ibn Majah, Hadith 1746"
  },
  {
    arabic: "الصَّوْمُ فِي السَّفَرِ لَيْسَ مِنَ الْبِرِّ",
    english: "Fasting while traveling is not from righteousness.",
    bangla: "সফরে রোজা রাখা পুণ্যের কাজ নয়।",
    reference: "Sahih al-Bukhari, Hadith 1946"
  },
  {
    arabic: "الصَّوْمُ يَوْمَ الْقِيَامَةِ شَفِيعٌ لِلْعَبْدِ",
    english: "Fasting will intercede for the servant on the Day of Resurrection.",
    bangla: "রোজা কিয়ামতের দিন বান্দার জন্য সুপারিশ করবে।",
    reference: "Sahih al-Bukhari, Hadith 1894"
  },
  {
    arabic: "مَنْ صَلَّى عَلَيَّ وَاحِدَةً صَلَّى اللَّهُ عَلَيْهِ عَشْرًا",
    english: "Whoever sends blessings upon me once, Allah will send blessings upon him ten times.",
    bangla: "যে ব্যক্তি আমার উপর একবার দরুদ পাঠায়, আল্লাহ তার উপর দশবার রহমত বর্ষণ করেন।",
    reference: "Sahih Muslim, Hadith 408"
  },
  {
    arabic: "الْحَلَالُ بَيِّنٌ وَالْحَرَامُ بَيِّنٌ",
    english: "The lawful is clear, and the unlawful is clear.",
    bangla: "হালাল স্পষ্ট, হারামও স্পষ্ট।",
    reference: "Sahih al-Bukhari, Hadith 2051"
  },
  {
    arabic: "طَهُورُ إِنَاءِ أَحَدِكُمْ إِذَا وَلَغَ فِيهِ الْكَلْبُ أَنْ يَغْسِلَهُ سَبْعَ مَرَّاتٍ",
    english: "The purification of the utensil of one of you, after it is licked by a dog, is to wash it seven times.",
    bangla: "তোমাদের কারও পাত্রে কুকুর মুখ দিলে তা সাতবার ধুয়ে পবিত্র করতে হবে।",
    reference: "Sahih Muslim, Hadith 279"
  },
  {
    arabic: "إِنَّ اللَّهَ لَا يَنْظُرُ إِلَى صُوَرِكُمْ وَأَمْوَالِكُمْ وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ",
    english: "Indeed, Allah does not look at your appearances or wealth, but He looks at your hearts and deeds.",
    bangla: "নিশ্চয় আল্লাহ তোমাদের চেহারা ও সম্পদের দিকে তাকান না, বরং তিনি তোমাদের অন্তর ও আমলের দিকে তাকান।",
    reference: "Sahih Muslim, Hadith 2564"
  },
  {
    arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
    english: "Whoever believes in Allah and the Last Day, let him speak good or remain silent.",
    bangla: "যে আল্লাহ ও পরকালে বিশ্বাস করে, সে যেন ভালো কথা বলে অথবা চুপ থাকে।",
    reference: "Sahih al-Bukhari, Hadith 6475"
  },
  {
    arabic: "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ",
    english: "A Muslim is one from whose tongue and hand the Muslims are safe.",
    bangla: "মুসলিম হলো সেই ব্যক্তি, যার জিহ্বা ও হাত থেকে অন্য মুসলিমরা নিরাপদ।",
    reference: "Sahih al-Bukhari, Hadith 10"
  },
  {
    arabic: "الْإِيمَانُ بِضْعٌ وَسَبْعُونَ شُعْبَةً",
    english: "Faith has over seventy branches.",
    bangla: "ঈমানের সত্তরটিরও বেশি শাখা রয়েছে।",
    reference: "Sahih Muslim, Hadith 35"
  },
  {
    arabic: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",
    english: "The best among you are those who learn the Quran and teach it.",
    bangla: "তোমাদের মধ্যে সর্বোত্তম ব্যক্তি হলো সে, যে কুরআন শেখে এবং অন্যকে শেখায়।",
    reference: "Sahih al-Bukhari, Hadith 5027"
  },
  {
    arabic: "الْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ",
    english: "A good word is charity.",
    bangla: "ভালো কথা বলা সদকার সমতুল্য।",
    reference: "Sahih al-Bukhari, Hadith 2989"
  },
  {
    arabic: "مَنْ سَنَّ فِي الْإِسْلَامِ سُنَّةً حَسَنَةً فَلَهُ أَجْرُهَا وَأَجْرُ مَنْ عَمِلَ بِهَا",
    english: "Whoever starts a good practice in Islam will get its reward and the reward of those who follow it.",
    bangla: "যে ব্যক্তি ইসলামে কোনো ভালো কাজের প্রচলন করে, সে তার সওয়াব পাবে এবং যারা তা অনুসরণ করবে তাদের সওয়াবও পাবে।",
    reference: "Sahih Muslim, Hadith 1017"
  }
];

// Function to generate a random Hadith
function generateHadith() {
  const userInput = document.getElementById('userInput').value;
  if (!userInput.trim()) {
    alert("Please type something to get a Hadith!");
    return;
  }

  const randomHadith = hadiths[Math.floor(Math.random() * hadiths.length)];
  document.getElementById('hadithArabic').textContent = randomHadith.arabic;
  document.getElementById('hadithEnglish').textContent = randomHadith.english;
  document.getElementById('hadithBangla').textContent = randomHadith.bangla;
  document.getElementById('hadithReference').textContent = `Reference: ${randomHadith.reference}`; // Display reference
}

// Function to download the card as an image
function downloadCard() {
  const cardContainer = document.getElementById('cardContainer');

  // Ensure the card is fully rendered before capturing
  cardContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'; // Add background color for better visibility
  cardContainer.style.backdropFilter = 'blur(10px)'; // Ensure blur effect is applied

  html2canvas(cardContainer, {
    useCORS: true, // Allow cross-origin images (if any)
    scale: 2, // Increase scale for better quality
    logging: true, // Enable logging for debugging
    allowTaint: true, // Allow tainted images (if any)
  }).then(canvas => {
    // Convert canvas to image
    const link = document.createElement('a');
    link.download = 'Ramadan_Hadith_Card.png';
    link.href = canvas.toDataURL('image/png', 1.0); // Ensure high-quality image
    link.click();

    // Reset styles after download
    cardContainer.style.backgroundColor = '';
    cardContainer.style.backdropFilter = '';
  }).catch(err => {
    console.error('Error capturing card:', err);
    alert('Failed to download the card. Please try again.');
  });
}