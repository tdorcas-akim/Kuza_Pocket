// Stores all text for the app in three languages
const translations = {
    en: {
        title: "Kuza Pocket", regTitle: "Welcome! Please Register",
        btnStart: "Start Using Kuza", vendor: "Vendor",
        btnGen: "1. Get Security Code", code: "Code",
        btnVerify: "2. Verify & Save", notebook: " Digital Notebook",
        tabTx: "Transaction",
        tabNotebook: "Digital Notebook",
        saveTx: "Save Transaction",
        pinGateTitle: "Enter PIN to Access Account",
        pinCreate: "Create PIN (4 digits)",
        pinEnter: "Enter your PIN",
        pinFormatHint: "4 digits",
        showPin: "Show PIN",
        hidePin: "Hide PIN",
        unlockBtn: "Unlock",
        flowCredit: "Credit Sale: generate and verify code with client.",
        flowInstant: "Instant sale: no code needed.",
        dateCol: "Date", itemCol: "Item", typeCol: "Type", amtCol: "Amount",
        btnReport: "Download Bank Report", smsSent: "SMS Sent to Client:",
        // translations for inputs and options
        itemPlace: "Item Name (e.g. Rice)",
        qtyPlace: "Quantity (Qty)",
        amtPlace: "Amount (RWF)",
        optCash: "Cash Sale",
        optCredit: "Credit Sale",
        optStock: "Restock ",
        btnMomo: "Pay with MoMo"
    },
    fr: {

        title: "Kuza Pocket", regTitle: "Bienvenue! Enregistrez-vous",
        btnStart: "Commencer avec Kuza", vendor: "Vendeur",
        btnGen: "1. Obtenir Code", code: "Code",
        btnVerify: "2. Vérifier & Enregistrer", notebook: " Carnet Numérique",
        tabTx: "Transaction",
        tabNotebook: "Carnet Numérique",
        saveTx: "Enregistrer Transaction",
        pinGateTitle: "Entrez le PIN pour accéder au compte",
        pinCreate: "Créer PIN (4 chiffres)",
        pinEnter: "Entrez votre PIN",
        pinFormatHint: "4 chiffres",
        showPin: "Afficher PIN",
        hidePin: "Masquer PIN",
        unlockBtn: "Déverrouiller",
        flowCredit: "Vente à crédit: générer et vérifier le code avec le client.",
        flowInstant: "Vente instantanée: pas besoin de code.",
        dateCol: "Date", itemCol: "Article", typeCol: "Type", amtCol: "Montant",
        btnReport: "Télécharger Rapport ", smsSent: "SMS envoyé au client :",
        itemPlace: "Nom de l'article (ex: Riz)",
        qtyPlace: "Quantité (Qté)",
        amtPlace: "Montant (RWF)",
        optCash: "Vente au comptant",
        optCredit: "Vente à crédit",
        optStock: "Réapprovisionnement",
        btnMomo: "Payer avec MoMo"
    },
    rw: {
        title: "Kuza Pocket", regTitle: "Murakaza neza! Mwiyandikishe",
        btnStart: "Tangira na Kuza", vendor: "Umucuruzi",
        btnGen: "1. Kora Kode", code: "Kode",
        btnVerify: "2. Emeza & Bika", notebook: "Ikaye y'Ubucuruzi",
        tabTx: "Icuruza",
        tabNotebook: "Ikaye y'Ubucuruzi",
        saveTx: "Bika Icuruzwa",
        pinGateTitle: "Andika PIN kugirango winjire kuri konti",
        pinCreate: "Kora PIN (imibare 4)",
        pinEnter: "Andika PIN yawe",
        pinFormatHint: "imibare 4",
        showPin: "Erekana PIN",
        hidePin: "Hisha PIN",
        unlockBtn: "Fungura",
        flowCredit: "Kugurisha ku ideni: kora kandi wemeze kode hamwe n'umukiriya.",
        flowInstant: "Igurisha rikorwa ako kanya: nta kode ikenewe.",
        dateCol: "Itariki", itemCol: "Igicuruzwa", typeCol: "Ubwoko", amtCol: "Amafaranga",
        btnReport: "Kuramo Raporo", smsSent: "Ubutumwa bwohererejwe umukiriya :",
        itemPlace: "Izina ry'igicuruzwa (urug: Umuceri)",
        qtyPlace: "Umubare (Qty)",
        amtPlace: "Amafaranga (RWF)",
        optCash: "Kugurisha Kashi",
        optCredit: "Kugurisha ku ideni",
        optStock: "Kongeramo ibicuruzwa",
        btnMomo: "Kwishyura na MoMo"
    }
};

// This function updates all text on the screen
function changeLanguage() {
    const lang = document.getElementById('langSelect').value;
    const t = translations[lang];

    // Update titles and buttons
    document.getElementById('txtTitle').innerText = t.title;
    document.getElementById('txtRegTitle').innerText = t.regTitle;
    document.getElementById('btnStart').innerText = t.btnStart;
    document.getElementById('txtVendor').innerText = t.vendor;
    document.getElementById('btnGenCode').innerText = t.btnGen;
    document.getElementById('btnMomo').innerText = t.btnMomo;
    document.getElementById('txtCode').innerText = t.code;
    document.getElementById('btnVerify').innerText = t.btnVerify;
    document.getElementById('txtNotebook').innerText = t.notebook;
    document.getElementById('tabTxBtn').innerText = t.tabTx;
    document.getElementById('tabNotebookBtn').innerText = t.tabNotebook;
    document.getElementById('txtPinGateTitle').innerText = t.pinGateTitle;
    document.getElementById('btnUnlock').innerText = t.unlockBtn;
    document.getElementById('txtDateCol').innerText = t.dateCol;
    document.getElementById('txtItemCol').innerText = t.itemCol;
    document.getElementById('txtTypeCol').innerText = t.typeCol;
    document.getElementById('txtAmtCol').innerText = t.amtCol;
    document.getElementById('btnReport').innerText = t.btnReport;
    document.getElementById('txtSmsLabel').innerText = t.smsSent;

    // Update input placeholders
    document.getElementById('itemName').placeholder = t.itemPlace;
    document.getElementById('saleAmount').placeholder = t.amtPlace;
    document.getElementById('itemQty').placeholder = t.qtyPlace;
    document.getElementById('inputPIN').placeholder = t.pinCreate;
    document.getElementById('loginPIN').placeholder = t.pinEnter;
    setPinToggleLabel('btnToggleSignPin', 'inputPIN');
    setPinToggleLabel('btnToggleLoginPin', 'loginPIN');

    // Update select options
    const select = document.getElementById('transactionType');
    select.options[0].text = t.optCash;
    select.options[1].text = t.optCredit;
    select.options[2].text = t.optStock;
    updateTransactionFlowUI();
    showNotebook();
    
    localStorage.setItem('kuza_lang', lang);
}

function switchTab(tabName) {
    const txSection = document.getElementById('txSection');
    const notebookSection = document.getElementById('notebookSection');
    const txBtn = document.getElementById('tabTxBtn');
    const notebookBtn = document.getElementById('tabNotebookBtn');

    if (tabName === 'notebook') {
        txSection.classList.add('hidden');
        notebookSection.classList.remove('hidden');
        txBtn.classList.remove('active');
        notebookBtn.classList.add('active');
    } else {
        notebookSection.classList.add('hidden');
        txSection.classList.remove('hidden');
        notebookBtn.classList.remove('active');
        txBtn.classList.add('active');
    }
}

function setPinToggleLabel(buttonId, inputId) {
    const lang = document.getElementById('langSelect').value;
    const t = translations[lang];
    const input = document.getElementById(inputId);
    const btn = document.getElementById(buttonId);
    if (!input || !btn) return;
    btn.innerText = input.type === 'password' ? t.showPin : t.hidePin;
}

function togglePinVisibility(inputId, buttonId) {
    const input = document.getElementById(inputId);
    if (!input) return;
    input.type = input.type === 'password' ? 'text' : 'password';
    setPinToggleLabel(buttonId, inputId);
}

function updateTransactionFlowUI() {
    const lang = document.getElementById('langSelect').value;
    const t = translations[lang];
    const typeValue = document.getElementById('transactionType').value;
    const btnGenCode = document.getElementById('btnGenCode');
    const flowHint = document.getElementById('flowHint');

    if (typeValue === "optCredit") {
        btnGenCode.innerText = t.btnGen;
        flowHint.innerText = t.flowCredit;
        btnGenCode.classList.remove('btn-gray');
        btnGenCode.classList.add('btn-black');
    } else {
        btnGenCode.innerText = t.saveTx;
        flowHint.innerText = t.flowInstant;
        document.getElementById('verifyBox').style.display = 'none';
        btnGenCode.classList.remove('btn-black');
        btnGenCode.classList.add('btn-gray');
    }
}

// --- SMS SIMULATION ---
function showSMS(code, amt) {
    const item = document.getElementById('itemName').value || "Item";
    const qty = document.getElementById('itemQty').value || "1";
    const smsBox = document.getElementById('smsSimulation');
    const smsText = document.getElementById('smsContent');
    // a simple message format for the simulated SMS
    smsText.innerText = `KUZA: Your receipt for ${item} (x${qty}) (${amt} RWF) is ${code}. Valid for 4 mins.`;
    smsBox.style.display = 'block';
    setTimeout(() => { smsBox.style.display = 'none'; }, 8000);
}

// --- SECURITY & SALES ---
async function askForCode() {
    const amt = document.getElementById('saleAmount').value;
    const item = document.getElementById('itemName').value;
    const typeValue = document.getElementById('transactionType').value;
    if(!amt || !item) return alert("Please enter item name and amount!");

    // Cash/Restock are instant: no security code required.
    if (typeValue !== "optCredit") {
        saveTransaction(amt);
        alert("Transaction saved.");
        document.getElementById('saleAmount').value = "";
        document.getElementById('itemName').value = "";
        return;
    }

    try {
        const resp = await fetch('/api/get-code', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ amount: amt })
        });
        if (!resp.ok) throw new Error("Failed to generate code");
        const data = await resp.json();
        document.getElementById('displayCode').innerText = data.code;
        document.getElementById('verifyBox').style.display = 'block';
        showSMS(data.code, amt);
    } catch (err) {
        alert("Unable to generate code. Please try again.");
    }
}

async function confirmSale() {
    const amt = document.getElementById('saleAmount').value;
    const code = document.getElementById('buyerCode').value;
    if (!code) return alert("Enter client code first.");
    try {
        const resp = await fetch('/api/check-code', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ amount: amt, code: code })
        });
        if (!resp.ok) throw new Error("Failed verification");
        const result = await resp.json();
        if(result.success) {
            saveTransaction(amt);
            alert("Success!");
            document.getElementById('verifyBox').style.display = 'none';
            document.getElementById('saleAmount').value = "";
            document.getElementById('itemName').value = "";
            document.getElementById('buyerCode').value = "";
        } else {
            alert("Wrong code, try again.");
        }
    } catch (err) {
        alert("Unable to verify code. Try again.");
    }
}

function simulateMoMo() {
    const amt = document.getElementById('saleAmount').value;
    if(!amt) return alert("Enter amount!");
    alert("Initiating MoMo Transfer...");
    setTimeout(() => {
        alert("MTN MoMo: Payment Successful!");
        saveTransaction(amt);
    }, 2000);
}

// --- DATA STORAGE ---
function saveTransaction(amt) {
    let notebook = JSON.parse(localStorage.getItem('my_sales') || "[]");
    const item = document.getElementById('itemName').value || "General";
    const qty = document.getElementById('itemQty').value || "1";
    const typeValue = document.getElementById('transactionType').value;
    const typeKey = normalizeTypeKey(typeValue);
    notebook.push({
        day: new Date().toLocaleString(),
        item: `${item} (x${qty})`,
        typeKey: typeKey,
        cash: amt
    });
    localStorage.setItem('my_sales', JSON.stringify(notebook));
    document.getElementById('itemQty').value = "";
    showNotebook();
}

function normalizeTypeKey(rawType) {
    if (rawType === "optCash" || rawType === "Cash Sale") return "optCash";
    if (rawType === "optCredit" || rawType === "Credit Sale") return "optCredit";
    if (rawType === "optStock" || rawType === "Restock") return "optStock";
    return "optCash";
}

function showNotebook() {
    const lang = document.getElementById('langSelect').value;
    let notebook = JSON.parse(localStorage.getItem('my_sales') || "[]");
    let rows = "";
    
    notebook.forEach((s, index) => {
        const normalizedKey = normalizeTypeKey(s.typeKey || s.type);
        // get translated type for display
        const translatedType = translations[lang][normalizedKey] || normalizedKey;

        // set row color based on type
        let rowColor = "green"; 
        if (normalizedKey === "optCredit") rowColor = "red";
        if (normalizedKey === "optStock") rowColor = "blue";

        rows += `<tr>
            <td>${s.day}</td>
            <td>${s.item}</td>
            <td style="color:${rowColor}; font-weight:bold;">${translatedType}</td>
            <td style="text-align:right;">${s.cash} RWF</td>
            <td><button onclick="deleteSale(${index})" style="background:none; border:none; color:red; cursor:pointer;">X</button></td>
        </tr>`;
    });
    document.getElementById('journalBody').innerHTML = rows;
}

function deleteSale(index) {
    if(confirm("Delete this record?")) {
        let notebook = JSON.parse(localStorage.getItem('my_sales') || "[]");
        notebook.splice(index, 1);
        localStorage.setItem('my_sales', JSON.stringify(notebook));
        showNotebook();
    }
}

// --- REGISTRATION & PDF ---
function registerUser() {
    const name = document.getElementById('inputName').value;
    const nif = document.getElementById('inputNIF').value;
    const pin = document.getElementById('inputPIN').value;
    if (!name || !nif || !pin) return alert("Please fill all fields!");
    const lang = document.getElementById('langSelect').value;
    const t = translations[lang];
    if (!/^\d{4}$/.test(pin)) return alert(`PIN must be ${t.pinFormatHint}.`);
    localStorage.setItem('kuza_name', name);
    localStorage.setItem('kuza_nif', nif);
    localStorage.setItem('kuza_pin', pin);
    checkRegistration();
}

function checkRegistration() {
    const name = localStorage.getItem('kuza_name');
    const nif = localStorage.getItem('kuza_nif');
    const pin = localStorage.getItem('kuza_pin');
    if (!name || !nif || !pin) {
        document.getElementById('registrationForm').style.display = 'block';
        document.getElementById('pinGate').style.display = 'none';
        document.getElementById('mainApp').style.display = 'none';
        document.getElementById('inputPIN').type = "password";
        setPinToggleLabel('btnToggleSignPin', 'inputPIN');
    } else {
        document.getElementById('registrationForm').style.display = 'none';
        document.getElementById('pinGate').style.display = 'block';
        document.getElementById('mainApp').style.display = 'none';
        document.getElementById('displayVendorName').innerText = name;
        document.getElementById('displayVendorID').innerText = "VND-" + nif;
        document.getElementById('loginPIN').value = "";
        document.getElementById('loginPIN').type = "password";
        setPinToggleLabel('btnToggleLoginPin', 'loginPIN');
    }
}

function unlockVendor() {
    const enteredPin = document.getElementById('loginPIN').value;
    const savedPin = localStorage.getItem('kuza_pin');
    if (enteredPin === savedPin) {
        document.getElementById('pinGate').style.display = 'none';
        document.getElementById('mainApp').style.display = 'block';
    } else {
        alert("Wrong PIN.");
    }
}

function getBankReport() {
    if (!window.jspdf) {
        alert("PDF library not loaded. For offline demo, include jsPDF files locally in /static.");
        return;
    }
    const { jsPDF } = window.jspdf; 
    const doc = new jsPDF();
    
    const lang = document.getElementById('langSelect').value;
    const t = translations[lang];
    const name = localStorage.getItem('kuza_name');
    const nif = localStorage.getItem('kuza_nif');
    let notebook = JSON.parse(localStorage.getItem('my_sales') || "[]");

    doc.setFontSize(18);
    doc.text("KUZA POCKET - REPORT", 14, 20);
    doc.setFontSize(11);
    doc.text(`Vendor: ${name} | NIF: ${nif}`, 14, 30);

    doc.autoTable({
        startY: 40,
        head: [[t.dateCol, t.itemCol, t.typeCol, t.amtCol]], 
        body: notebook.map(s => [
            s.day, 
            s.item, 
            translations[lang][normalizeTypeKey(s.typeKey || s.type)] || normalizeTypeKey(s.typeKey || s.type), 
            s.cash + " RWF"
        ]),
        theme: 'grid',
        headStyles: { fillColor: [0, 0, 0] }
    });
    doc.save(`Kuza_Report_${nif}.pdf`);
}

// --- START APP ---
window.onload = function() {
    const savedLang = localStorage.getItem('kuza_lang') || 'en';
    document.getElementById('langSelect').value = savedLang;
    changeLanguage();
    checkRegistration();
    switchTab('tx');
    updateTransactionFlowUI();
    showNotebook();
}