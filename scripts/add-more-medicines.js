require('dotenv').config();
const db = require('../models');

const moreMedicines = [
  {
    name: 'कैमोमिला',
    prakriti: 'गर्म',
    shakti: '30, 200',
    rogName: 'दांत दर्द, बच्चों की समस्या',
    rogGati: 'तीव्र',
    rogiPrakriti: 'गर्म प्रकृति, चिड़चिड़ा',
    mansikLakshan: 'चिड़चिड़ापन, क्रोध, बेचैनी',
    vishishtLakshan: 'गर्म से बिगड़ता है, रात में बिगड़ता है',
    vyapakLakshan: 'दांत दर्द, पेट में दर्द, बच्चा रोता है',
    utkatIchha: 'कोई नहीं',
    masikDharm: 'मासिक धर्म अधिक, दर्द के साथ',
    puranak: 'एकोनाइट, बेलाडोना',
    saman: 'एकोनाइट, कोलोसिन्थ',
    virodhi: 'कोई नहीं',
    notes: 'बच्चों की चिड़चिड़ापन और दांत दर्द के लिए'
  },
  {
    name: 'कोलोसिन्थ',
    prakriti: 'गर्म',
    shakti: '30, 200',
    rogName: 'पेट में दर्द, ऐंठन',
    rogGati: 'तीव्र',
    rogiPrakriti: 'गर्म प्रकृति',
    mansikLakshan: 'चिड़चिड़ापन, क्रोध',
    vishishtLakshan: 'मुड़ने से सुधरता है, दबाने से सुधरता है',
    vyapakLakshan: 'पेट में तीव्र दर्द, ऐंठन, दस्त',
    utkatIchha: 'कोई नहीं',
    masikDharm: 'सामान्य',
    puranak: 'कैमोमिला, मैग फॉस',
    saman: 'कैमोमिला, डायोस्कोरिया',
    virodhi: 'कोई नहीं',
    notes: 'पेट में ऐंठन और दर्द के लिए'
  },
  {
    name: 'डायोस्कोरिया',
    prakriti: 'गर्म',
    shakti: '30, 200',
    rogName: 'पेट में दर्द, गैस',
    rogGati: 'तीव्र',
    rogiPrakriti: 'गर्म प्रकृति',
    mansikLakshan: 'चिड़चिड़ापन',
    vishishtLakshan: 'सीधे बैठने से बिगड़ता है, झुकने से सुधरता है',
    vyapakLakshan: 'पेट में दर्द, गैस, डकार',
    utkatIchha: 'कोई नहीं',
    masikDharm: 'सामान्य',
    puranak: 'कोलोसिन्थ, कैरबो वेज',
    saman: 'कोलोसिन्थ, नक्स वोमिका',
    virodhi: 'कोई नहीं',
    notes: 'पेट में दर्द और गैस के लिए'
  },
  {
    name: 'मैग्नेशिया फॉस',
    prakriti: 'गर्म',
    shakti: '6X, 30',
    rogName: 'ऐंठन, दर्द, मांसपेशियों की समस्या',
    rogGati: 'तीव्र',
    rogiPrakriti: 'कोई भी',
    mansikLakshan: 'चिड़चिड़ापन',
    vishishtLakshan: 'ठंड से बिगड़ता है, गर्म से सुधरता है',
    vyapakLakshan: 'ऐंठन, दर्द, मांसपेशियों में खिंचाव',
    utkatIchha: 'कोई नहीं',
    masikDharm: 'मासिक धर्म में ऐंठन',
    puranak: 'कोलोसिन्थ, कैमोमिला',
    saman: 'कोलोसिन्थ, कैल्केरिया फॉस',
    virodhi: 'कोई नहीं',
    notes: 'ऐंठन और दर्द के लिए बायोकेमिक दवा'
  },
  {
    name: 'नक्स वोमिका',
    prakriti: 'ठंडी',
    shakti: '30, 200',
    rogName: 'कब्ज, सिरदर्द, पेट',
    rogGati: 'सुबह बिगड़ता है',
    rogiPrakriti: 'ठंडी प्रकृति, चिड़चिड़ा',
    mansikLakshan: 'चिड़चिड़ापन, क्रोध, अकेले रहना चाहता है',
    vishishtLakshan: 'सुबह बिगड़ता है, ठंड से बिगड़ता है',
    vyapakLakshan: 'कब्ज, पेट में दर्द, सिरदर्द, मतली',
    utkatIchha: 'मादक पदार्थ, मसालेदार भोजन',
    masikDharm: 'मासिक धर्म देर से, कम',
    puranak: 'सल्फर, लाइकोपोडियम',
    saman: 'सल्फर, ब्रायोनिया',
    virodhi: 'कोई नहीं',
    notes: 'कब्ज और पेट की समस्या के लिए'
  },
  {
    name: 'पोडोफाइलम',
    prakriti: 'ठंडी',
    shakti: '30, 200',
    rogName: 'दस्त, पेट की समस्या',
    rogGati: 'सुबह बिगड़ता है',
    rogiPrakriti: 'ठंडी प्रकृति',
    mansikLakshan: 'उदासी, चिड़चिड़ापन',
    vishishtLakshan: 'सुबह बिगड़ता है, गर्म से सुधरता है',
    vyapakLakshan: 'दस्त, पेट में दर्द, मतली',
    utkatIchha: 'कोई नहीं',
    masikDharm: 'मासिक धर्म सामान्य',
    puranak: 'आर्सेनिक, मर्क सोल',
    saman: 'आर्सेनिक, सल्फर',
    virodhi: 'कोई नहीं',
    notes: 'दस्त और पेट की समस्या के लिए'
  },
  {
    name: 'रस टॉक्स',
    prakriti: 'ठंडी',
    shakti: '30, 200',
    rogName: 'जोड़ों का दर्द, गठिया',
    rogGati: 'धीरे-धीरे',
    rogiPrakriti: 'ठंडी प्रकृति',
    mansikLakshan: 'उदासी, चिड़चिड़ापन',
    vishishtLakshan: 'हिलने से सुधरता है, ठंड से बिगड़ता है',
    vyapakLakshan: 'जोड़ों में दर्द, सूजन, कठोरता',
    utkatIchha: 'कोई नहीं',
    masikDharm: 'सामान्य',
    puranak: 'ब्रायोनिया, अर्निका',
    saman: 'ब्रायोनिया, लेडम',
    virodhi: 'कोई नहीं',
    notes: 'हिलने से सुधरने वाले दर्द के लिए'
  },
  {
    name: 'स्ट्रैमोनियम',
    prakriti: 'गर्म',
    shakti: '30, 200',
    rogName: 'मानसिक समस्या, भय, नींद की समस्या',
    rogGati: 'तीव्र',
    rogiPrakriti: 'गर्म प्रकृति',
    mansikLakshan: 'भय, हिंसक प्रवृत्ति, अंधेरे से डर',
    vishishtLakshan: 'अंधेरे से बिगड़ता है, प्रकाश से सुधरता है',
    vyapakLakshan: 'भय, नींद नहीं आती, हिंसक प्रवृत्ति',
    utkatIchha: 'कोई नहीं',
    masikDharm: 'मासिक धर्म सामान्य',
    puranak: 'बेलाडोना, हायोसायमस',
    saman: 'बेलाडोना, इग्नेशिया',
    virodhi: 'कोई नहीं',
    notes: 'भय और मानसिक समस्या के लिए'
  }
];

async function addMoreMedicines() {
  try {
    console.log(`Adding ${moreMedicines.length} more medicines to database...\n`);
    let successCount = 0;
    let errorCount = 0;

    for (let i = 0; i < moreMedicines.length; i++) {
      const medicine = moreMedicines[i];
      try {
        await db.Medicine.create(medicine);
        successCount++;
        console.log(`${i + 1}. ✅ ${medicine.name} - Added successfully`);
      } catch (error) {
        errorCount++;
        console.log(`${i + 1}. ❌ ${medicine.name} - Error: ${error.message}`);
      }
    }

    console.log(`\n=== Summary ===`);
    console.log(`Total: ${moreMedicines.length}`);
    console.log(`Success: ${successCount}`);
    console.log(`Errors: ${errorCount}`);
    
    const totalCount = await db.Medicine.count();
    console.log(`\nTotal medicines in database: ${totalCount}`);
    console.log(`\nDone!`);

    process.exit(0);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

addMoreMedicines();

