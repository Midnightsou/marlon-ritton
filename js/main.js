/* =========================================
   TOGETHER FOR CHILDREN
   MAIN JAVASCRIPT
========================================= */


/* =========================================
   DONATION CONFIGURATION
========================================= */

/*
 * IMPORTANT:
 *
 * The address below must correspond to
 * the wallet represented by:
 *
 * assets/images/bitcoin-qr.png
 *
 * Always verify both before deployment.
 */

const DONATION_CONFIG = {
  /*
   * Verified against the address encoded
   * in assets/images/bitcoin-qr.png and
   * validated as a mainnet P2PKH address
   * (Base58Check checksum).
   */

  bitcoinAddress:
    "12XtNe4KkAaipvk9aBgzWLL7mePugvGsfM",

  network: "Bitcoin",

  symbol: "BTC",
};


/* =========================================
   DONATION STATE
========================================= */

const donationState = {

  amount: null,

  customAmount: false,

  donorName: "",

  supportPurpose:
    "where-most-needed"

};


/* =========================================
   LANGUAGE TRANSLATIONS
========================================= */

const translations = {

  en: {

    navStory:
      "Our Story",

    navHelp:
      "How We Help",

    navContact:
      "Contact",

    donate:
      "Donate now",

    ourStory:
      "Our story",


    /* HERO */

    heroTitle:
      "Together, we can give every child a reason to hope.",

    heroText:
      "Together for Children is dedicated to supporting underprivileged children across world by providing access to essential needs, education, healthcare, and opportunities for a brighter future.",


    /* STORY */

    storyLabel:
      "Our Story",

    storyTitle:
      "Every child deserves to feel safe, cared for, and hopeful.",

    storyIntro:
      "Together for Children began with a simple belief: every child deserves the opportunity to build a brighter future.",

    storyParagraph1:
      "We created this initiative to bring people together to support children facing difficult circumstances, including orphans and children from disadvantaged backgrounds.",

    storyParagraph2:
      "Through donations and community support, we aim to help provide essential needs, educational opportunities, protection, and a chance for a brighter future.",

    storyContribution:
      "Every contribution, no matter the size, can help make a meaningful difference.",

    helpDifference:
      "Help make a difference",


    /* STORY GALLERY */

    galleryLabel:
      "More moments",

    galleryHint:
      "Scroll or swipe to see more.",


    /* AUTHORIZATION */

    authorizationLabel:
      "Authorization & Support",

    authorizationTitle:
      "Supporting a cause that puts children first.",

    authorizationLead:
      "Marlon Ritter has authorized Together for Children to use his name and approved materials in connection with this charitable initiative.",

    authorizationText:
      "His authorization has helped us raise awareness and encourage people to come together for a cause that puts children first.",

    authorizedUse:
      "Authorized use",

    authorizedUseText:
      "His name and approved materials are used in connection with the Together for Children charitable initiative.",


    /* HOPE */

    organizationName:
      "Together for Children",

    hopePart1:
      "Together, we can give children more than support. ",

    hopePart2:
      "We can give them hope.",


    /* HOW DONATIONS HELP */

    helpLabel:
      "How your donation helps",

    helpTitle:
      "Your generosity becomes practical support.",

    helpIntro:
      "Every donation to Together for Children is intended to support children facing difficult circumstances and help provide the essentials they need to grow, learn, and build a safer future.",


    educationTitle:
      "Education",

    educationText:
      "School supplies, books, uniforms, tuition assistance, and learning resources.",


    foodTitle:
      "Food & Nutrition",

    foodText:
      "Nutritious meals and essential food supplies for children in need.",


    healthcareTitle:
      "Healthcare",

    healthcareText:
      "Basic medical care, health checkups, medicines, and urgent healthcare assistance where appropriate.",


    essentialsTitle:
      "Clothing & Essentials",

    essentialsText:
      "Clothing, shoes, hygiene products, bedding, and other everyday necessities.",


    protectionTitle:
      "Child Protection & Support",

    protectionText:
      "Working with qualified local organizations to provide safe environments and appropriate support for vulnerable children.",


    communityTitle:
      "Community Projects",

    communityText:
      "Initiatives that improve children's access to education, clean water, sanitation, and other essential services.",


    emergencyTitle:
      "Emergency Assistance",

    emergencyText:
      "Responding to urgent needs affecting children and families in vulnerable situations.",


    contributionTitle:
      "Every contribution matters.",

    contributionText:
      "Together, we can turn generosity into practical support and give children an opportunity for a brighter future.",


    /* IMPACT */

    impactQuote:
      "Every child deserves the opportunity to learn, grow, feel safe, and look toward the future with hope.",


    /* TRANSPARENCY */

    commitmentLabel:
      "Our commitment",

    commitmentTitle:
      "Giving with purpose and transparency.",

    transparencyLead:
      "We are committed to using donations responsibly and providing clear information about how funds are allocated.",

    transparencyText1:
      "Where possible, donations will be directed toward programs and services that have a direct benefit for children.",

    transparencyText2:
      "Contributions may support education, food and nutrition, healthcare, clothing and essentials, child protection, community projects, and emergency assistance.",

    seeDonationHelp:
      "See how donations help",


    /* CTA */

    ctaTitle:
      "A brighter future can start with one act of kindness.",

    ctaText:
      "Your contribution can help turn generosity into practical support for children and communities in need.",


    /* BTC MODAL */

    modalLabel:
      "Support our mission",

    modalTitle:
      "Donate with Bitcoin",

    modalDescription:
      "Your contribution can help provide education, healthcare, food, essential supplies, and opportunities for children in need.",

    scanDonate:
      "Scan to donate",

    scanInstructions:
      "Open your Bitcoin wallet and scan this QR code",

    orCopyAddress:
      "or copy the address",

    bitcoinAddress:
      "Bitcoin address",

    bitcoinNetwork:
      "Bitcoin Network",

    copy:
      "Copy",

    copied:
      "✓ Copied",

    addressNotSet:
      "Address not set",

    copyFailed:
      "Copy failed",

    bitcoinWarning:
      "Send only Bitcoin (BTC) using the Bitcoin network. Always verify that the wallet address in your wallet matches the address shown above before sending.",

    needDonationHelp:
      "Need help with your donation?",


    /* DONATION AMOUNTS */

    donationLabel:
      "Support our mission",

    donationTitle:
      "Make a donation",

    donationIntro:
      "Choose an amount to support children and communities in need.",

    chooseAmount:
      "Choose an amount",

    chooseAmountHint:
      "Select one of the suggested amounts or enter your own.",


    amount10:
      "Basic supplies",

    amount25:
      "Food / essential support",

    amount50:
      "Education or school supplies",

    amount100:
      "Larger direct assistance",

    amount250:
      "Support for a specific project",

    amount500:
      "Major project contribution",


    otherAmount:
      "Other amount",

    otherAmountDescription:
      "Choose your own donation amount",

    enterAmount:
      "Enter amount",

    continueDonation:
      "Continue",

    paymentNote:
      "Payment will be made with Bitcoin in the following step.",

    selectDonationAmount:
      "Please select or enter a donation amount.",

    invalidDonationAmount:
      "Please enter a valid donation amount.",


    /* DONOR INFORMATION */

    back:
      "Back",

    donorInformationLabel:
      "Your information",

    donorInformationTitle:
      "Tell us about your donation.",

    donorInformationIntro:
      "Enter your name and let us know what you would like your donation to support.",

    yourDonation:
      "Your donation",

    changeAmount:
      "Change",

    yourName:
      "Your name",

    namePlaceholder:
      "Enter your name",

    supportQuestion:
      "What would you like your donation to support?",

    supportMostNeeded:
      "Where most needed",

    supportEducation:
      "Education",

    supportFood:
      "Food & Nutrition",

    supportHealthcare:
      "Healthcare",

    supportEssentials:
      "Clothing & Essentials",

    supportProtection:
      "Child Protection & Support",

    supportCommunity:
      "Community Projects",

    supportEmergency:
      "Emergency Assistance",

    supportHelp:
      "This tells us which area you would prefer your donation to support.",

    donorPrivacyNotice:
      "Your information is used in connection with your donation and is not sold or rented.",

    continueToPayment:
      "Continue to payment",

    bitcoinPaymentNote:
      "Payment will be completed using Bitcoin.",

    nameRequired:
      "Please enter your name.",


    /* PAYMENT */

    paymentLabel:
      "Bitcoin payment",

    paymentIntro:
      "Review your donation details and use the Bitcoin address below to complete your donation.",

    donationSummary:
      "Donation summary",

    edit:
      "Edit",

    amount:
      "Amount",

    donor:
      "Donor",

    supporting:
      "Supporting",

    verifyWallet:
      "Verify the wallet address before sending.",

    currencyNotice:
      "The euro amount shown above represents your intended donation amount. The Bitcoin amount you send may vary according to the exchange rate used by your wallet or exchange.",


    /* CONTACT */

    contactLabel:
      "Contact",

    contactTitle:
      "We're here to help.",

    contactIntro:
      "Have a question about Together for Children or making a donation? Get in touch with us.",

    emailLabel:
      "Email",

    phoneLabel:
      "Contact",

    addressLabel:
      "Address",


    /* FOOTER */

    footerDescription:
      "Supporting children with essential needs, education, healthcare, protection and opportunities for a brighter future.",

    footerExplore:
      "Explore",

    footerContact:
      "Contact",

    footerLanguage:
      "Language",

    authorizationNav:
      "Authorization & Support",

    rightsReserved:
      "All rights reserved.",

    privacyPolicy:
      "Privacy Policy"

  },


  /* =====================================
     GERMAN
  ===================================== */

  de: {

    navStory:
      "Unsere Geschichte",

    navHelp:
      "So helfen wir",

    navContact:
      "Kontakt",

    donate:
      "Jetzt spenden",

    ourStory:
      "Unsere Geschichte",


    /* HERO */

    heroTitle:
      "Gemeinsam können wir jedem Kind einen Grund zur Hoffnung geben.",

    heroText:
      "Together for Children setzt sich dafür ein, benachteiligte Kinder in ganz world zu unterstützen und ihnen Zugang zu grundlegender Versorgung, Bildung, Gesundheitsversorgung und Chancen auf eine bessere Zukunft zu ermöglichen.",


    /* STORY */

    storyLabel:
      "Unsere Geschichte",

    storyTitle:
      "Jedes Kind verdient Sicherheit, Fürsorge und Hoffnung.",

    storyIntro:
      "Together for Children entstand aus einer einfachen Überzeugung: Jedes Kind verdient die Chance auf eine bessere Zukunft.",

    storyParagraph1:
      "Wir haben diese Initiative ins Leben gerufen, um Menschen zusammenzubringen und Kinder in schwierigen Lebenssituationen zu unterstützen, darunter Waisenkinder und Kinder aus benachteiligten Verhältnissen.",

    storyParagraph2:
      "Durch Spenden und gemeinschaftliche Unterstützung möchten wir dazu beitragen, grundlegende Bedürfnisse zu decken, Bildungschancen zu schaffen, Schutz zu bieten und Kindern die Aussicht auf eine bessere Zukunft zu ermöglichen.",

    storyContribution:
      "Jeder Beitrag, unabhängig von seiner Höhe, kann einen bedeutenden Unterschied machen.",

    helpDifference:
      "Einen Unterschied machen",


    /* STORY GALLERY */

    galleryLabel:
      "Weitere Momente",

    galleryHint:
      "Scrollen oder wischen, um mehr zu sehen.",


    /* AUTHORIZATION */

    authorizationLabel:
      "Autorisierung & Unterstützung",

    authorizationTitle:
      "Gemeinsam für eine Initiative, bei der Kinder im Mittelpunkt stehen.",

    authorizationLead:
      "Marlon Ritter hat Together for Children autorisiert, seinen Namen und freigegebene Materialien im Zusammenhang mit dieser gemeinnützigen Initiative zu verwenden.",

    authorizationText:
      "Seine Autorisierung hilft uns dabei, Aufmerksamkeit für unser Anliegen zu schaffen und Menschen für eine Initiative zusammenzubringen, bei der Kinder im Mittelpunkt stehen.",

    authorizedUse:
      "Autorisierte Verwendung",

    authorizedUseText:
      "Sein Name und freigegebene Materialien werden im Zusammenhang mit der gemeinnützigen Initiative Together for Children verwendet.",


    /* HOPE */

    organizationName:
      "Together for Children",

    hopePart1:
      "Gemeinsam können wir Kindern mehr als Unterstützung geben. ",

    hopePart2:
      "Wir können ihnen Hoffnung geben.",


    /* DONATIONS */

    helpLabel:
      "So hilft Ihre Spende",

    helpTitle:
      "Ihre Großzügigkeit wird zu konkreter Hilfe.",

    helpIntro:
      "Jede Spende an Together for Children ist dafür bestimmt, Kinder in schwierigen Lebenssituationen zu unterstützen und ihnen wichtige Grundlagen für Entwicklung, Bildung und eine sicherere Zukunft zu ermöglichen.",


    educationTitle:
      "Bildung",

    educationText:
      "Schulmaterialien, Bücher, Schuluniformen, Unterstützung bei Schulgebühren und weitere Lernmaterialien.",


    foodTitle:
      "Lebensmittel & Ernährung",

    foodText:
      "Nahrhafte Mahlzeiten und wichtige Lebensmittel für Kinder, die Unterstützung benötigen.",


    healthcareTitle:
      "Gesundheitsversorgung",

    healthcareText:
      "Grundlegende medizinische Versorgung, Gesundheitsuntersuchungen, Medikamente und gegebenenfalls dringende medizinische Unterstützung.",


    essentialsTitle:
      "Kleidung & Grundbedarf",

    essentialsText:
      "Kleidung, Schuhe, Hygieneartikel, Bettwaren und weitere Dinge des täglichen Bedarfs.",


    protectionTitle:
      "Kinderschutz & Unterstützung",

    protectionText:
      "Zusammenarbeit mit qualifizierten lokalen Organisationen, um sichere Umgebungen und angemessene Unterstützung für besonders schutzbedürftige Kinder zu ermöglichen.",


    communityTitle:
      "Gemeinschaftsprojekte",

    communityText:
      "Initiativen zur Verbesserung des Zugangs zu Bildung, sauberem Wasser, sanitären Einrichtungen und weiteren grundlegenden Dienstleistungen.",


    emergencyTitle:
      "Nothilfe",

    emergencyText:
      "Unterstützung bei dringenden Bedürfnissen von Kindern und Familien in besonders schwierigen Situationen.",


    contributionTitle:
      "Jeder Beitrag zählt.",

    contributionText:
      "Gemeinsam können wir Großzügigkeit in konkrete Unterstützung verwandeln und Kindern die Chance auf eine bessere Zukunft geben.",


    /* IMPACT */

    impactQuote:
      "Jedes Kind verdient die Chance zu lernen, sich zu entwickeln, sich sicher zu fühlen und hoffnungsvoll in die Zukunft zu blicken.",


    /* TRANSPARENCY */

    commitmentLabel:
      "Unser Engagement",

    commitmentTitle:
      "Verantwortungsvoll und transparent helfen.",

    transparencyLead:
      "Wir verpflichten uns zu einem verantwortungsvollen Umgang mit Spenden und dazu, transparent darüber zu informieren, wie die Mittel eingesetzt werden.",

    transparencyText1:
      "Wo immer möglich, werden Spenden für Programme und Leistungen eingesetzt, die Kindern unmittelbar zugutekommen.",

    transparencyText2:
      "Beiträge können unter anderem Bildung, Lebensmittel und Ernährung, Gesundheitsversorgung, Kleidung und Grundbedarf, Kinderschutz, Gemeinschaftsprojekte und Nothilfe unterstützen.",

    seeDonationHelp:
      "So helfen Ihre Spenden",


    /* CTA */

    ctaTitle:
      "Eine bessere Zukunft kann mit einer einzigen guten Tat beginnen.",

    ctaText:
      "Ihr Beitrag kann dazu beitragen, Großzügigkeit in konkrete Unterstützung für Kinder und Gemeinschaften zu verwandeln.",


    /* BTC */

    modalLabel:
      "Unterstützen Sie unsere Mission",

    modalTitle:
      "Mit Bitcoin spenden",

    modalDescription:
      "Ihr Beitrag kann dazu beitragen, Kindern Bildung, Gesundheitsversorgung, Lebensmittel, wichtige Grundversorgung und neue Chancen zu ermöglichen.",

    scanDonate:
      "Zum Spenden scannen",

    scanInstructions:
      "Öffnen Sie Ihre Bitcoin-Wallet und scannen Sie diesen QR-Code",

    orCopyAddress:
      "oder Adresse kopieren",

    bitcoinAddress:
      "Bitcoin-Adresse",

    bitcoinNetwork:
      "Bitcoin-Netzwerk",

    copy:
      "Kopieren",

    copied:
      "✓ Kopiert",

    addressNotSet:
      "Adresse nicht hinterlegt",

    copyFailed:
      "Kopieren fehlgeschlagen",

    bitcoinWarning:
      "Senden Sie ausschließlich Bitcoin (BTC) über das Bitcoin-Netzwerk. Prüfen Sie vor dem Senden immer, ob die Wallet-Adresse mit der oben angezeigten Adresse übereinstimmt.",

    needDonationHelp:
      "Benötigen Sie Hilfe bei Ihrer Spende?",


    /* SPENDENBETRÄGE */

    donationLabel:
      "Unterstützen Sie unsere Mission",

    donationTitle:
      "Jetzt spenden",

    donationIntro:
      "Wählen Sie einen Betrag, um Kinder und Gemeinschaften zu unterstützen.",

    chooseAmount:
      "Spendenbetrag auswählen",

    chooseAmountHint:
      "Wählen Sie einen der vorgeschlagenen Beträge oder geben Sie einen eigenen Betrag ein.",


    amount10:
      "Grundversorgung",

    amount25:
      "Lebensmittel / grundlegende Unterstützung",

    amount50:
      "Bildung oder Schulmaterialien",

    amount100:
      "Umfangreichere direkte Unterstützung",

    amount250:
      "Unterstützung eines bestimmten Projekts",

    amount500:
      "Größerer Beitrag zu einem Projekt",


    otherAmount:
      "Freier Betrag",

    otherAmountDescription:
      "Wählen Sie Ihren eigenen Spendenbetrag",

    enterAmount:
      "Betrag eingeben",

    continueDonation:
      "Weiter",

    paymentNote:
      "Die Zahlung erfolgt im nächsten Schritt mit Bitcoin.",

    selectDonationAmount:
      "Bitte wählen Sie einen Spendenbetrag aus oder geben Sie einen Betrag ein.",

    invalidDonationAmount:
      "Bitte geben Sie einen gültigen Spendenbetrag ein.",


    /* SPENDERINFORMATIONEN */

    back:
      "Zurück",

    donorInformationLabel:
      "Ihre Angaben",

    donorInformationTitle:
      "Erzählen Sie uns etwas über Ihre Spende.",

    donorInformationIntro:
      "Geben Sie Ihren Namen ein und teilen Sie uns mit, welchen Bereich Sie mit Ihrer Spende unterstützen möchten.",

    yourDonation:
      "Ihre Spende",

    changeAmount:
      "Ändern",

    yourName:
      "Ihr Name",

    namePlaceholder:
      "Namen eingeben",

    supportQuestion:
      "Welchen Bereich möchten Sie mit Ihrer Spende unterstützen?",

    supportMostNeeded:
      "Dort, wo die Hilfe am dringendsten benötigt wird",

    supportEducation:
      "Bildung",

    supportFood:
      "Lebensmittel & Ernährung",

    supportHealthcare:
      "Gesundheitsversorgung",

    supportEssentials:
      "Kleidung & Grundbedarf",

    supportProtection:
      "Kinderschutz & Unterstützung",

    supportCommunity:
      "Gemeinschaftsprojekte",

    supportEmergency:
      "Nothilfe",

    supportHelp:
      "Damit teilen Sie uns mit, welchen Bereich Sie mit Ihrer Spende bevorzugt unterstützen möchten.",

    donorPrivacyNotice:
      "Ihre Angaben werden im Zusammenhang mit Ihrer Spende verwendet und nicht verkauft oder vermietet.",

    continueToPayment:
      "Weiter zur Zahlung",

    bitcoinPaymentNote:
      "Die Zahlung wird mit Bitcoin abgeschlossen.",

    nameRequired:
      "Bitte geben Sie Ihren Namen ein.",


    /* ZAHLUNG */

    paymentLabel:
      "Bitcoin-Zahlung",

    paymentIntro:
      "Überprüfen Sie Ihre Spendendaten und verwenden Sie anschließend die unten angegebene Bitcoin-Adresse, um Ihre Spende abzuschließen.",

    donationSummary:
      "Spendenübersicht",

    edit:
      "Bearbeiten",

    amount:
      "Betrag",

    donor:
      "Spender",

    supporting:
      "Verwendungswunsch",

    verifyWallet:
      "Überprüfen Sie die Wallet-Adresse vor dem Senden.",

    currencyNotice:
      "Der oben angezeigte Euro-Betrag entspricht Ihrem beabsichtigten Spendenbetrag. Der tatsächlich zu sendende Bitcoin-Betrag kann je nach Wechselkurs Ihrer Wallet oder Kryptobörse variieren.",


    /* KONTAKT */

    contactLabel:
      "Kontakt",

    contactTitle:
      "Wir sind für Sie da.",

    contactIntro:
      "Haben Sie eine Frage zu Together for Children oder zu einer Spende? Kontaktieren Sie uns gerne.",

    emailLabel:
      "E-Mail",

    phoneLabel:
      "Kontakt",

    addressLabel:
      "Adresse",


    /* FOOTER */

    footerDescription:
      "Wir unterstützen Kinder bei grundlegenden Bedürfnissen, Bildung, Gesundheitsversorgung, Schutz und Chancen auf eine bessere Zukunft.",

    footerExplore:
      "Entdecken",

    footerContact:
      "Kontakt",

    footerLanguage:
      "Sprache",

    authorizationNav:
      "Autorisierung & Unterstützung",

    rightsReserved:
      "Alle Rechte vorbehalten.",

    privacyPolicy:
      "Datenschutzerklärung"

  }

};



/* =========================================
   HEADER
========================================= */

/* =========================================
   LANGUAGE SWITCHER
========================================= */

const languageButtons =
  document.querySelectorAll(
    ".language-button"
  );

const i18nElements =
  document.querySelectorAll(
    "[data-i18n]"
  );

let currentLanguage =
  (() => {

    try {

      return (
        localStorage.getItem(
          "language"
        ) || "en"
      );

    } catch (error) {

      return "en";

    }

  })();


/* =========================================
   APPLY TRANSLATIONS
========================================= */

function translatePage() {

  const dictionary =
    translations[currentLanguage];

  if (!dictionary) {

    return;

  }


  i18nElements.forEach(
    (element) => {

      const key =
        element.getAttribute(
          "data-i18n"
        );

      const value =
        dictionary[key];


      if (!value) {

        return;

      }


      const hasElementChildren =
        element.children.length > 0;


      if (hasElementChildren) {

        /*
         * Elements like the hero story
         * link contain icons as child
         * elements. Preserve them and
         * translate only the visible
         * text node.
         */

        const textNode =
          Array.from(
            element.childNodes
          ).find(
            (node) =>
              node.nodeType ===
                3 &&
              node.textContent.trim()
          );


        if (textNode) {

          textNode.textContent =
            value;

        }


      } else {

        element.textContent =
          value;

      }

    }
  );


  /* =====================================
     TRANSLATE PLACEHOLDERS
  ===================================== */

  const placeholderElements =
    document.querySelectorAll(
      "[data-i18n-placeholder]"
    );


  placeholderElements.forEach(
    (element) => {

      const key =
        element.dataset.i18nPlaceholder;


      const translation =
        dictionary[key];


      if (
        typeof translation ===
        "string"
      ) {

        element.placeholder =
          translation;

      }

    }
  );


  document.documentElement.setAttribute(
    "lang",
    currentLanguage
  );

}


/* =========================================
   SET LANGUAGE
========================================= */

function setLanguage(language) {

  if (
    !translations[language]
  ) {

    return;

  }


  currentLanguage =
    language;


  languageButtons.forEach(
    (button) => {

      const isActive =
        button.getAttribute(
          "data-language"
        ) === language;


      button.classList.toggle(
        "active",
        isActive
      );

    }
  );


  translatePage();


  /*
   * Keep the donation summary in the
   * numeric convention of the selected
   * language.
   */

  refreshDonationSummary();


  /*
   * Refresh dynamic donation information
   * after changing language.
   *
   * The static labels are translated
   * automatically, but generated values
   * such as the support purpose and the
   * payment summary must be re-rendered.
   */

  if (
    typeof populateDonorInformation ===
      "function" &&
    donationState.amount !== null
  ) {

    populateDonorInformation();

  }


  if (
    typeof populatePaymentSummary ===
      "function" &&
    donationState.amount !== null
  ) {

    populatePaymentSummary();

  }


  try {

    localStorage.setItem(
      "language",
      language
    );

  } catch (error) {

    /* Storage unavailable. */

  }

}


/* =========================================
   LANGUAGE BUTTON CLICKS
========================================= */

languageButtons.forEach(
  (button) => {

    button.addEventListener(
      "click",
      () => {

        const language =
          button.getAttribute(
            "data-language"
          );

        setLanguage(language);

      }
    );

  }
);


/* =========================================
   INITIAL LANGUAGE
========================================= */

setLanguage(currentLanguage);


/* =========================================
   DONATION AMOUNT SELECTION
========================================= */

const donationAmountOptions =
  document.querySelectorAll(
    ".donation-amount-option"
  );


const otherAmountToggle =
  document.getElementById(
    "otherAmountToggle"
  );


const otherAmountSection =
  document.querySelector(
    ".other-amount-section"
  );


const otherAmountField =
  document.getElementById(
    "otherAmountField"
  );


const customDonationAmount =
  document.getElementById(
    "customDonationAmount"
  );


const donationSelectionError =
  document.getElementById(
    "donationSelectionError"
  );


const donationAmountContinue =
  document.getElementById(
    "donationAmountContinue"
  );


/* =========================================
   CLEAR ERROR
========================================= */

function clearDonationError() {

  if (donationSelectionError) {
    donationSelectionError.textContent =
      "";
  }

}


/* =========================================
   CLEAR PRESET SELECTIONS
========================================= */

function clearPresetAmounts() {

  donationAmountOptions.forEach(
    (option) => {

      option.classList.remove(
        "selected"
      );

      option.setAttribute(
        "aria-pressed",
        "false"
      );

    }
  );

}


/* =========================================
   CLOSE OTHER AMOUNT
========================================= */

function closeOtherAmount() {

  if (!otherAmountSection) {
    return;
  }


  otherAmountSection.classList.remove(
    "active"
  );


  otherAmountToggle?.setAttribute(
    "aria-expanded",
    "false"
  );


  donationState.customAmount =
    false;

}


/* =========================================
   SELECT PRESET AMOUNT
========================================= */

donationAmountOptions.forEach(
  (option) => {

    option.addEventListener(
      "click",
      () => {

        clearDonationError();

        clearPresetAmounts();

        closeOtherAmount();


        option.classList.add(
          "selected"
        );


        option.setAttribute(
          "aria-pressed",
          "true"
        );


        donationState.amount =
          Number(
            option.dataset.amount
          );


        donationState.customAmount =
          false;


        if (customDonationAmount) {
          customDonationAmount.value =
            "";
        }

      }
    );

  }
);


/* =========================================
   OTHER AMOUNT TOGGLE
========================================= */

otherAmountToggle?.addEventListener(
  "click",
  () => {

    clearDonationError();


    const isOpen =
      otherAmountSection.classList.contains(
        "active"
      );


    if (isOpen) {

      closeOtherAmount();

      donationState.amount =
        null;


      if (customDonationAmount) {
        customDonationAmount.value =
          "";
      }

      return;
    }


    clearPresetAmounts();


    otherAmountSection.classList.add(
      "active"
    );


    otherAmountToggle.setAttribute(
      "aria-expanded",
      "true"
    );


    donationState.amount =
      null;


    donationState.customAmount =
      true;


    setTimeout(
      () => {
        customDonationAmount?.focus();
      },
      100
    );

  }
);


/* =========================================
   CUSTOM AMOUNT
========================================= */

customDonationAmount?.addEventListener(
  "input",
  () => {

    clearDonationError();


    const value =
      Number(
        customDonationAmount.value
      );


    if (
      Number.isFinite(value) &&
      value > 0
    ) {

      donationState.amount =
        value;

      donationState.customAmount =
        true;

    } else {

      donationState.amount =
        null;

    }

  }
);


/* =========================================
   CONTINUE FROM AMOUNT
========================================= */

donationAmountContinue?.addEventListener(
  "click",
  () => {

    clearDonationError();


    /*
     * No amount selected.
     */

    if (
      donationState.amount ===
      null
    ) {

      donationSelectionError.textContent =
        translations[
          currentLanguage
        ].selectDonationAmount;

      return;
    }


    /*
     * Invalid amount.
     */

    if (
      !Number.isFinite(
        donationState.amount
      ) ||
      donationState.amount <= 0
    ) {

      donationSelectionError.textContent =
        translations[
          currentLanguage
        ].invalidDonationAmount;

      return;
    }


    /*
     * Move on to the donor-information step
     * with the amount the donor selected.
     */

    populateDonorInformation();


    showDonationStep(
      "donor"
    );

  }
);


/* =========================================
   DONATION STEP SYSTEM
========================================= */

const donationAmountStep =
  document.getElementById(
    "donationAmountStep"
  );


const donorInformationStep =
  document.getElementById(
    "donorInformationStep"
  );


const bitcoinPaymentStep =
  document.getElementById(
    "bitcoinPaymentStep"
  );


function showDonationStep(
  step
) {

  const donationSteps =
    document.querySelectorAll(
      ".donation-step"
    );


  donationSteps.forEach(
    (element) => {

      element.classList.remove(
        "active"
      );

    }
  );


  if (
    step === "amount"
  ) {

    donationAmountStep?.classList.add(
      "active"
    );

  }


  if (
    step === "donor"
  ) {

    donorInformationStep?.classList.add(
      "active"
    );

  }


  if (
    step === "payment"
  ) {

    bitcoinPaymentStep?.classList.add(
      "active"
    );

  }


  /*
   * Move keyboard focus to the heading of
   * the active step. Keyboard and
   * screen-reader users should not lose
   * context when moving between steps.
   */

  const activeStep =
    document.querySelector(
      ".donation-step.active"
    );


  const activeHeading =
    activeStep?.querySelector(
      "h2"
    );


  if (activeHeading) {

    activeHeading.setAttribute(
      "tabindex",
      "-1"
    );


    setTimeout(
      () => {

        activeHeading.focus({
          preventScroll:
            true
        });

      },
      100
    );

  }


  donationDialog?.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================
   FORMAT DONATION AMOUNT
========================================= */

function formatDonationAmount(
  amount
) {

  if (
    !Number.isFinite(amount)
  ) {

    return "€0";

  }


  return new Intl.NumberFormat(
    currentLanguage === "de"
      ? "de-DE"
      : "en-IE",
    {
      style:
        "currency",

      currency:
        "EUR",

      minimumFractionDigits:
        Number.isInteger(amount)
          ? 0
          : 2,

      maximumFractionDigits:
        2
    }
  ).format(amount);

}


/* =========================================
   REFRESH DONATION SUMMARY
========================================= */

function refreshDonationSummary() {

  const summaryElement =
    document.getElementById(
      "donorSummaryAmount"
    );


  if (!summaryElement) {

    return;

  }


  summaryElement.textContent =
    formatDonationAmount(
      donationState.amount
    );

}


/* =========================================
   DONOR INFORMATION
========================================= */

const donorInformationForm =
  document.getElementById(
    "donorInformationForm"
  );


const donorNameInput =
  document.getElementById(
    "donorName"
  );


const donorNameError =
  document.getElementById(
    "donorNameError"
  );


const supportPurposeSelect =
  document.getElementById(
    "supportPurpose"
  );


const donorBackButton =
  document.getElementById(
    "donorBackButton"
  );


const changeDonationAmount =
  document.getElementById(
    "changeDonationAmount"
  );


/* =========================================
   PAYMENT SUMMARY ELEMENTS
========================================= */

const paymentSummaryAmount =
  document.getElementById(
    "paymentSummaryAmount"
  );


const paymentSummaryDonor =
  document.getElementById(
    "paymentSummaryDonor"
  );


const paymentSummaryPurpose =
  document.getElementById(
    "paymentSummaryPurpose"
  );


const paymentBackButton =
  document.getElementById(
    "paymentBackButton"
  );


const editDonationInformation =
  document.getElementById(
    "editDonationInformation"
  );


/* =========================================
   NAME ERROR
========================================= */

function clearDonorNameError() {

  if (donorNameError) {

    donorNameError.textContent =
      "";

  }


  donorNameInput?.classList.remove(
    "error"
  );

}


/* =========================================
   CLEAR NAME ERROR WHILE TYPING
========================================= */

donorNameInput?.addEventListener(
  "input",
  () => {

    clearDonorNameError();

  }
);

/* =========================================
   DONOR FORM SUBMIT
========================================= */

donorInformationForm?.addEventListener(
  "submit",
  (event) => {

    event.preventDefault();


    clearDonorNameError();


    const donorName =
      donorNameInput
        ?.value
        .trim() || "";


    if (!donorName) {

      donorNameError.textContent =
        translations[
          currentLanguage
        ].nameRequired;


      donorNameInput.classList.add(
        "error"
      );


      donorNameInput.focus();


      return;

    }


    donationState.donorName =
      donorName;


    donationState.supportPurpose =
      supportPurposeSelect?.value ||
      "where-most-needed";


    /*
     * Everything the donor entered is now
     * stored. Show the Bitcoin payment
     * destination and the donation summary.
     */

    populatePaymentSummary();


    showDonationStep(
      "payment"
    );

  }
);


/* =========================================
   BACK TO AMOUNT
========================================= */

function returnToAmountStep() {

  clearDonorNameError();


  /*
   * Preserve entered information in case
   * the donor only wants to change amount.
   */

  donationState.donorName =
    donorNameInput
      ?.value
      .trim() || "";


  donationState.supportPurpose =
    supportPurposeSelect?.value ||
    "where-most-needed";


  showDonationStep(
    "amount"
  );

}


donorBackButton?.addEventListener(
  "click",
  returnToAmountStep
);


changeDonationAmount?.addEventListener(
  "click",
  returnToAmountStep
);


/* =========================================
   PAYMENT → DONOR INFORMATION
========================================= */

function returnToDonorInformation() {

  populateDonorInformation();


  showDonationStep(
    "donor"
  );

}


paymentBackButton?.addEventListener(
  "click",
  returnToDonorInformation
);


editDonationInformation?.addEventListener(
  "click",
  returnToDonorInformation
);


/* =========================================
   POPULATE DONOR INFORMATION
========================================= */

function populateDonorInformation() {

  if (donorNameInput) {

    donorNameInput.value =
      donationState.donorName;

  }


  if (supportPurposeSelect) {

    supportPurposeSelect.value =
      donationState.supportPurpose ||
      "where-most-needed";

  }


  refreshDonationSummary();

}


/* =========================================
   SUPPORT PURPOSE LABEL
========================================= */

function getSupportPurposeLabel(
  purpose
) {

  const purposeKeys = {

    "where-most-needed":
      "supportMostNeeded",

    education:
      "supportEducation",

    food:
      "supportFood",

    healthcare:
      "supportHealthcare",

    essentials:
      "supportEssentials",

    "child-protection":
      "supportProtection",

    community:
      "supportCommunity",

    emergency:
      "supportEmergency"

  };


  const translationKey =
    purposeKeys[purpose] ||
    "supportMostNeeded";


  return translations[
    currentLanguage
  ][translationKey];

}


/* =========================================
   POPULATE PAYMENT SUMMARY
========================================= */

function populatePaymentSummary() {

  if (paymentSummaryAmount) {

    paymentSummaryAmount.textContent =
      formatDonationAmount(
        donationState.amount
      );

  }


  if (paymentSummaryDonor) {

    paymentSummaryDonor.textContent =
      donationState.donorName ||
      "—";

  }


  if (paymentSummaryPurpose) {

    paymentSummaryPurpose.textContent =
      getSupportPurposeLabel(
        donationState.supportPurpose
      );

  }

}


/* =========================================
   RESET DONATION FLOW
========================================= */

function resetDonationFlow() {

  donationState.amount =
    null;

  donationState.customAmount =
    false;

  donationState.donorName =
    "";

  donationState.supportPurpose =
    "where-most-needed";


  clearPresetAmounts();

  clearDonationError();

  closeOtherAmount();

  clearDonorNameError();


  refreshDonationSummary();

  populatePaymentSummary();


  if (customDonationAmount) {

    customDonationAmount.value =
      "";

  }


  if (donorNameInput) {

    donorNameInput.value =
      "";

  }


  if (supportPurposeSelect) {

    supportPurposeSelect.value =
      "where-most-needed";

  }


  showDonationStep(
    "amount"
  );

}



/* =========================================
   HEADER
========================================= */

const siteHeader =
  document.getElementById(
    "siteHeader"
  );


function updateHeader() {

  if (window.scrollY > 10) {

    siteHeader.classList.add(
      "scrolled"
    );

  } else {

    siteHeader.classList.remove(
      "scrolled"
    );

  }

}


window.addEventListener(
  "scroll",
  updateHeader,
  {
    passive: true
  }
);


updateHeader();



/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuButton =
  document.getElementById(
    "menuButton"
  );

const mobileNav =
  document.getElementById(
    "mobileNav"
  );

const mobileLinks =
  mobileNav.querySelectorAll(
    "a"
  );


function openMenu() {

  mobileNav.classList.add(
    "active"
  );

  menuButton.classList.add(
    "active"
  );

  menuButton.setAttribute(
    "aria-expanded",
    "true"
  );

  document.body.classList.add(
    "menu-open"
  );

}


function closeMenu() {

  mobileNav.classList.remove(
    "active"
  );

  menuButton.classList.remove(
    "active"
  );

  menuButton.setAttribute(
    "aria-expanded",
    "false"
  );

  document.body.classList.remove(
    "menu-open"
  );

}


menuButton.addEventListener(
  "click",
  () => {

    const isOpen =
      mobileNav.classList.contains(
        "active"
      );


    if (isOpen) {

      closeMenu();

    } else {

      openMenu();

    }

  }
);


mobileLinks.forEach(
  (link) => {

    link.addEventListener(
      "click",
      closeMenu
    );

  }
);



/* =========================================
   DONATION ELEMENTS
========================================= */

const donationModal =
  document.getElementById(
    "donationModal"
  );

const donationDialog =
  donationModal.querySelector(
    ".donation-modal-dialog"
  );

const donationTriggers =
  document.querySelectorAll(
    ".donate-trigger"
  );

const donationCloseButton =
  document.getElementById(
    "donationModalClose"
  );

const donationBackdrop =
  donationModal.querySelector(
    "[data-donation-close]"
  );

const btcAddressElement =
  document.getElementById(
    "btcAddress"
  );

const copyWalletButton =
  document.getElementById(
    "copyWalletButton"
  );



/* =========================================
   LOAD WALLET ADDRESS
========================================= */

if (btcAddressElement) {

  btcAddressElement.textContent =
    DONATION_CONFIG.bitcoinAddress;

}



/* =========================================
   OPEN DONATION MODAL
========================================= */

function openDonationModal() {

  /*
   * Make sure mobile navigation
   * isn't sitting behind the modal.
   */

  closeMenu();


  resetDonationFlow();


  donationModal.classList.add(
    "active"
  );


  donationModal.setAttribute(
    "aria-hidden",
    "false"
  );


  document.body.classList.add(
    "donation-open"
  );


  setTimeout(
    () => {

      donationCloseButton.focus();

    },
    100
  );

}



/* =========================================
   CLOSE DONATION MODAL
========================================= */

function closeDonationModal() {

  donationModal.classList.remove(
    "active"
  );


  donationModal.setAttribute(
    "aria-hidden",
    "true"
  );


  document.body.classList.remove(
    "donation-open"
  );

}



/* =========================================
   CONNECT DONATE BUTTONS
========================================= */

donationTriggers.forEach(
  (button) => {

    button.addEventListener(
      "click",
      openDonationModal
    );

  }
);



/* =========================================
   CLOSE BUTTON
========================================= */

donationCloseButton.addEventListener(
  "click",
  closeDonationModal
);



/* =========================================
   BACKDROP CLOSE
========================================= */

donationBackdrop.addEventListener(
  "click",
  closeDonationModal
);



/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key !==
      "Escape"
    ) {

      return;

    }


    if (
      donationModal.classList.contains(
        "active"
      )
    ) {

      closeDonationModal();

      return;

    }


    if (
      mobileNav.classList.contains(
        "active"
      )
    ) {

      closeMenu();

    }

  }
);
/* =========================================
   COPY WALLET ADDRESS
========================================= */

if (copyWalletButton) {

  copyWalletButton.addEventListener(
    "click",
    copyBitcoinAddress
  );

}


async function copyBitcoinAddress() {

  const address =
    DONATION_CONFIG.bitcoinAddress;


  /*
   * Do not allow the placeholder
   * address to be copied.
   */

  if (
    !address ||
    address ===
      "12XtNe4KkAaipvk9aBgzWLL7mePugvGsfM"
  ) {

    showTemporaryCopyMessage(
      translations[currentLanguage].addressNotSet
    );

    return;

  }


  try {

    /*
     * Preferred modern browser method.
     */

    await navigator.clipboard.writeText(
      address
    );


    showCopiedState();

  } catch (error) {

    /*
     * Fallback for browsers where
     * Clipboard API isn't available.
     */

    fallbackCopy(
      address
    );

  }

}



/* =========================================
   COPY SUCCESS
========================================= */

function showCopiedState() {

  copyWalletButton.textContent =
    translations[currentLanguage].copied;


  copyWalletButton.classList.add(
    "copied"
  );


  setTimeout(
    () => {

      copyWalletButton.textContent =
        translations[currentLanguage].copy;


      copyWalletButton.classList.remove(
        "copied"
      );

    },
    2000
  );

}



/* =========================================
   TEMPORARY COPY MESSAGE
========================================= */

function showTemporaryCopyMessage(
  message
) {

  copyWalletButton.textContent =
    message;


  setTimeout(
    () => {

      copyWalletButton.textContent =
        translations[currentLanguage].copy;

    },
    1800
  );

}



/* =========================================
   FALLBACK COPY METHOD
========================================= */

function fallbackCopy(
  text
) {

  const textarea =
    document.createElement(
      "textarea"
    );


  textarea.value =
    text;


  textarea.setAttribute(
    "readonly",
    ""
  );


  textarea.style.position =
    "fixed";


  textarea.style.opacity =
    "0";


  textarea.style.pointerEvents =
    "none";


  document.body.appendChild(
    textarea
  );


  textarea.select();


  try {

    const successful =
      document.execCommand(
        "copy"
      );


    if (successful) {

      showCopiedState();

    } else {

      showTemporaryCopyMessage(
        translations[currentLanguage].copyFailed
      );

    }

  } catch (error) {

    showTemporaryCopyMessage(
      translations[currentLanguage].copyFailed
    );

  }


  document.body.removeChild(
    textarea
  );

}



/* =========================================
   MODAL INTERNAL CLICKS
========================================= */

donationDialog.addEventListener(
  "click",
  (event) => {

    event.stopPropagation();

  }
);


/* =========================================
   CURRENT YEAR
========================================= */

const currentYearElement =
  document.getElementById(
    "currentYear"
  );


if (currentYearElement) {

  currentYearElement.textContent =
    new Date().getFullYear();

}


/* =========================================
   STORY GALLERY SCROLLER
========================================= */

const storyGallery =
  document.getElementById(
    "storyGallery"
  );


const storyGalleryPrev =
  document.getElementById(
    "storyGalleryPrev"
  );


const storyGalleryNext =
  document.getElementById(
    "storyGalleryNext"
  );


const storyGalleryControls =
  document.querySelector(
    ".story-gallery-controls"
  );


/* Respect reduced-motion preferences. */

function storyGalleryScrollBehavior() {

  return window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches
    ? "auto"
    : "smooth";

}


/* How far one arrow click moves the strip. */

function storyGalleryScrollAmount() {

  if (!storyGallery) {

    return 0;

  }


  return Math.max(
    storyGallery.clientWidth * 0.8,
    260
  );

}


/*
 * Hide the arrows when everything already
 * fits and disable the arrow that points
 * past either end of the strip.
 */

function updateStoryGalleryControls() {

  if (
    !storyGallery ||
    !storyGalleryControls
  ) {

    return;

  }


  const maxScroll =
    storyGallery.scrollWidth -
    storyGallery.clientWidth;


  const hasOverflow =
    maxScroll > 4;


  storyGalleryControls.hidden =
    !hasOverflow;


  if (storyGalleryPrev) {

    storyGalleryPrev.disabled =
      !hasOverflow ||
      storyGallery.scrollLeft <= 4;

  }


  if (storyGalleryNext) {

    storyGalleryNext.disabled =
      !hasOverflow ||
      storyGallery.scrollLeft >=
        maxScroll - 4;

  }

}


/* =========================================
   GALLERY ARROWS
========================================= */

storyGalleryPrev?.addEventListener(
  "click",
  () => {

    storyGallery?.scrollBy({
      left: -storyGalleryScrollAmount(),
      behavior: storyGalleryScrollBehavior()
    });

  }
);


storyGalleryNext?.addEventListener(
  "click",
  () => {

    storyGallery?.scrollBy({
      left: storyGalleryScrollAmount(),
      behavior: storyGalleryScrollBehavior()
    });

  }
);


storyGallery?.addEventListener(
  "scroll",
  updateStoryGalleryControls,
  {
    passive: true
  }
);


window.addEventListener(
  "resize",
  updateStoryGalleryControls
);


updateStoryGalleryControls();