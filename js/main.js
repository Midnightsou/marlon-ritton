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
  bitcoinAddress:
    "12XtNe4KkAaipvk9aBgzWLL7mePugvGSfM",

  network: "Bitcoin",

  symbol: "BTC",
};



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

btcAddressElement.textContent =
  DONATION_CONFIG.bitcoinAddress;



/* =========================================
   OPEN DONATION MODAL
========================================= */

function openDonationModal() {

  /*
   * Make sure mobile navigation
   * isn't sitting behind the modal.
   */

  closeMenu();


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

copyWalletButton.addEventListener(
  "click",
  copyBitcoinAddress
);


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
      "12XtNe4KkAaipvk9aBgzWLL7mePugvGSfM"
  ) {

    showTemporaryCopyMessage(
      "Address not set"
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
    "Copied";


  copyWalletButton.classList.add(
    "copied"
  );


  setTimeout(
    () => {

      copyWalletButton.textContent =
        "Copy";


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
        "Copy";

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
        "Copy failed"
      );

    }

  } catch (error) {

    showTemporaryCopyMessage(
      "Copy failed"
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