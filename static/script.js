(function bootstrapKuzaCodeConfig() {
    try {
        var raw = localStorage.getItem("kuza_code_config");
        if (raw) {
            var parsed = JSON.parse(raw);
            if (parsed && parsed.vendorId != null && parsed.secretKey != null) {
                if (!window.KUZA_CODE_CONFIG || window.KUZA_CODE_CONFIG.secretKey == null) {
                    window.KUZA_CODE_CONFIG = parsed;
                }
            }
        }
        if (window.KUZA_CODE_CONFIG && window.KUZA_CODE_CONFIG.vendorId != null) {
            localStorage.setItem("kuza_code_config", JSON.stringify(window.KUZA_CODE_CONFIG));
        }
    } catch (e) {}
})();

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
        btnReport: "Download Report",
        smsSent: "SMS",
        itemPlace: "Item Name (e.g. Rice)",
        qtyPlace: "Quantity (Qty)",
        amtPlace: "Amount (RWF)",
        optCash: "Cash Sale",
        optCredit: "Credit Sale",
        optStock: "Restock ",
        btnMomo: "Pay with MoMo",
        lblClientPhone: "Client phone number",
        clientPhonePlace: "e.g. +250 7XX XXX XXX",
        creditPhoneHint:
            "After you generate the code, an SMS with the verification code is sent to this number.",
        smsToClientTitle: "SMS to client",
        alertNeedPhone: "Enter the client's phone number for credit sale.",
        smsVendorBody: "KUZA: {item} (x{qty}) — {amt} RWF. Code: {code}. Valid 4 min.",
        smsClientBody: "KUZA: Credit sale {amt} RWF. Verification code: {code}. Valid 4 min.",
        alertNeedItemAmt: "Please enter item name and amount.",
        alertTxSaved: "Transaction saved.",
        alertUnableCode:
            "Unable to generate code. Open the app once while online so settings are saved, then try again offline.",
        alertEnterCode: "Enter the code from the client.",
        alertSuccess: "Success!",
        alertWrongCode: "Wrong code, try again.",
        alertEnterAmt: "Enter amount.",
        momoInit: "Initiating MoMo transfer…",
        momoOk: "MTN MoMo: payment successful.",
        alertFillAll: "Please fill all fields.",
        alertPinInvalid: "PIN must be {hint}.",
        alertWrongPin: "Wrong PIN.",
        alertPdfMissing: "PDF export could not be loaded.",
        deleteConfirm: "Delete this record?"
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
        btnReport: "Télécharger le rapport",
        smsSent: "SMS",
        itemPlace: "Nom de l'article (ex: Riz)",
        qtyPlace: "Quantité (Qté)",
        amtPlace: "Montant (RWF)",
        optCash: "Vente au comptant",
        optCredit: "Vente à crédit",
        optStock: "Réapprovisionnement",
        btnMomo: "Payer avec MoMo",
        lblClientPhone: "Téléphone du client",
        clientPhonePlace: "ex. +250 7XX XXX XXX",
        creditPhoneHint:
            "Après génération du code, un SMS contenant le code de vérification est envoyé à ce numéro.",
        smsToClientTitle: "SMS au client",
        alertNeedPhone: "Entrez le numéro du client pour la vente à crédit.",
        smsVendorBody: "KUZA : {item} (x{qty}) — {amt} RWF. Code : {code}. Valide 4 min.",
        smsClientBody:
            "KUZA : Vente à crédit {amt} RWF. Code de vérification : {code}. Valide 4 min.",
        alertNeedItemAmt: "Veuillez saisir l'article et le montant.",
        alertTxSaved: "Transaction enregistrée.",
        alertUnableCode:
            "Impossible de générer le code. Ouvrez l'application une fois en ligne pour enregistrer les paramètres, puis réessayez hors ligne.",
        alertEnterCode: "Saisissez le code communiqué par le client.",
        alertSuccess: "Réussi !",
        alertWrongCode: "Code incorrect, réessayez.",
        alertEnterAmt: "Saisissez le montant.",
        momoInit: "Lancement du paiement MoMo…",
        momoOk: "MTN MoMo : paiement réussi.",
        alertFillAll: "Veuillez remplir tous les champs.",
        alertPinInvalid: "Le PIN doit être {hint}.",
        alertWrongPin: "PIN incorrect.",
        alertPdfMissing: "L'export PDF n'a pas pu être chargé.",
        deleteConfirm: "Supprimer cette ligne ?"
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
        btnReport: "Kuramo Raporo",
        smsSent: "SMS",
        itemPlace: "Izina ry'igicuruzwa (urug: Umuceri)",
        qtyPlace: "Umubare (Qty)",
        amtPlace: "Amafaranga (RWF)",
        optCash: "Kugurisha Kashi",
        optCredit: "Kugurisha ku ideni",
        optStock: "Kongeramo ibicuruzwa",
        btnMomo: "Kwishyura na MoMo",
        lblClientPhone: "Telefone y'umukiriya",
        clientPhonePlace: "urug. +250 7XX XXX XXX",
        creditPhoneHint:
            "Nyuma yo gukora kode, SMS irimo kode yo kwemeza ihita yoherezwa kuri iyi telefone.",
        smsToClientTitle: "SMS ku mukiriya",
        alertNeedPhone: "Andika telefone y'umukiriya ku kugurisha ku ideni.",
        smsVendorBody: "KUZA: {item} (x{qty}) — {amt} RWF. Kode: {code}. Imara iminota 4.",
        smsClientBody:
            "KUZA: Kugurisha ku ideni {amt} RWF. Kode yo kwemeza: {code}. Imara iminota 4.",
        alertNeedItemAmt: "Andika izina ry'igicuruzwa n'amafaranga.",
        alertTxSaved: "Icuruza ryabitswe.",
        alertUnableCode:
            "Ntibishoboye gukora kode. Fungura porogaramu rimwe uri online kugirango ubikore, ongera ugerageze offline.",
        alertEnterCode: "Andika kode umukiriya yaguha.",
        alertSuccess: "Byagenze neza!",
        alertWrongCode: "Kode itari yo, ongera ugerageze.",
        alertEnterAmt: "Andika amafaranga.",
        momoInit: "Gutangiza kwishyura na MoMo…",
        momoOk: "MTN MoMo: kwishyura byagenze neza.",
        alertFillAll: "Uzuza imirima yose.",
        alertPinInvalid: "PIN igomba kuba {hint}.",
        alertWrongPin: "PIN itari yo.",
        alertPdfMissing: "PDF ntiyashoboye gutangizwa.",
        deleteConfirm: "Gusiba iyi ndangakintu?"
    }
};

function tLang() {
    return translations[document.getElementById("langSelect").value];
}

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
    document.getElementById('lblClientPhone').innerText = t.lblClientPhone;
    document.getElementById('txtSmsClientLabel').innerText = t.smsToClientTitle;
    document.getElementById('creditPhoneHint').innerText = t.creditPhoneHint;

    // Update input placeholders
    document.getElementById('itemName').placeholder = t.itemPlace;
    document.getElementById('saleAmount').placeholder = t.amtPlace;
    document.getElementById('itemQty').placeholder = t.qtyPlace;
    document.getElementById('clientPhone').placeholder = t.clientPhonePlace;
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

    const creditRow = document.getElementById("creditPhoneRow");
    const smsClientBox = document.getElementById("smsClientSimulation");

    if (typeValue === "optCredit") {
        creditRow.classList.remove("hidden");
        btnGenCode.innerText = t.btnGen;
        flowHint.innerText = t.flowCredit;
        btnGenCode.classList.remove('btn-gray');
        btnGenCode.classList.add('btn-black');
    } else {
        creditRow.classList.add("hidden");
        smsClientBox.style.display = "none";
        btnGenCode.innerText = t.saveTx;
        flowHint.innerText = t.flowInstant;
        document.getElementById('verifyBox').style.display = 'none';
        btnGenCode.classList.remove('btn-black');
        btnGenCode.classList.add('btn-gray');
    }
}

// --- OFFLINE SECURITY CODE (same algorithm as pocket.py make_secure_code) ---
function canGenerateCodeClientSide() {
    const cfg = window.KUZA_CODE_CONFIG;
    const hasHash =
        typeof sha256 === "function" ||
        (typeof crypto !== "undefined" && crypto.subtle);
    return (
        hasHash &&
        cfg &&
        cfg.vendorId != null &&
        String(cfg.vendorId).length > 0 &&
        cfg.secretKey != null
    );
}

async function sha256HexUtf8Subtle(str) {
    const data = new TextEncoder().encode(str);
    const buf = await crypto.subtle.digest("SHA-256", data);
    const bytes = new Uint8Array(buf);
    let hex = "";
    for (let i = 0; i < bytes.length; i++) {
        hex += bytes[i].toString(16).padStart(2, "0");
    }
    return hex;
}

async function makeSecureCodeClient(amount) {
    const cfg = window.KUZA_CODE_CONFIG;
    if (!cfg || cfg.vendorId == null || cfg.secretKey == null) {
        throw new Error("missing config");
    }
    const timeBlock = Math.floor(Date.now() / 1000 / 240);
    const rawStr = `${amount}${cfg.vendorId}${cfg.secretKey}${timeBlock}`;
    let hashHex;
    if (typeof sha256 === "function") {
        hashHex = sha256(rawStr);
    } else if (typeof crypto !== "undefined" && crypto.subtle) {
        hashHex = await sha256HexUtf8Subtle(rawStr);
    } else {
        throw new Error("no sha256");
    }
    const last4 = hashHex.slice(-4);
    const n = parseInt(last4, 16);
    return String(n).slice(-4).padStart(4, "0");
}

/** Matches server/client time block (240s) — SMS previews stay visible this long */
const CODE_VALID_MS = 4 * 60 * 1000;
let smsHideTimerVendor = null;
let smsHideTimerClient = null;

function clearSmsHideTimers() {
    if (smsHideTimerVendor) {
        clearTimeout(smsHideTimerVendor);
        smsHideTimerVendor = null;
    }
    if (smsHideTimerClient) {
        clearTimeout(smsHideTimerClient);
        smsHideTimerClient = null;
    }
}

async function fetchPostJson(path, body, timeoutMs) {
    const ctrl = new AbortController();
    const id = setTimeout(function () {
        ctrl.abort();
    }, timeoutMs || 4000);
    try {
        return await fetch(path, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
            signal: ctrl.signal,
        });
    } finally {
        clearTimeout(id);
    }
}

// --- SMS preview (vendor device + client number) ---
function showSMS(code, amt) {
    const t = tLang();
    const item = document.getElementById("itemName").value || t.itemPlace;
    const qty = document.getElementById("itemQty").value || "1";
    const smsBox = document.getElementById("smsSimulation");
    const smsText = document.getElementById("smsContent");
    smsText.innerText = t.smsVendorBody
        .replace("{item}", item)
        .replace("{qty}", qty)
        .replace("{amt}", amt)
        .replace("{code}", code);
    smsBox.style.display = "block";
    smsHideTimerVendor = setTimeout(function () {
        smsBox.style.display = "none";
        smsHideTimerVendor = null;
    }, CODE_VALID_MS);
}

function showClientSMS(phone, code, amt) {
    const t = tLang();
    const box = document.getElementById("smsClientSimulation");
    const body = document.getElementById("smsClientContent");
    const msg = t.smsClientBody
        .replace("{amt}", amt)
        .replace("{code}", code);
    body.innerText = `→ ${phone}\n${msg}`;
    box.style.display = "block";
    smsHideTimerClient = setTimeout(function () {
        box.style.display = "none";
        smsHideTimerClient = null;
    }, CODE_VALID_MS);
}

// --- SECURITY & SALES ---
async function askForCode() {
    const amt = document.getElementById('saleAmount').value;
    const item = document.getElementById('itemName').value;
    const typeValue = document.getElementById('transactionType').value;
    const t = tLang();
    if (!amt || !item) return alert(t.alertNeedItemAmt);

    // Cash/Restock are instant: no security code required.
    if (typeValue !== "optCredit") {
        saveTransaction(amt);
        alert(t.alertTxSaved);
        document.getElementById('saleAmount').value = "";
        document.getElementById('itemName').value = "";
        return;
    }

    const clientPhone = document.getElementById("clientPhone").value.trim();
    if (!clientPhone) {
        alert(t.alertNeedPhone);
        return;
    }

    let code = null;
    if (navigator.onLine) {
        try {
            const resp = await fetchPostJson("/api/get-code", { amount: amt }, 3500);
            if (resp.ok) {
                const data = await resp.json();
                code = data.code;
            }
        } catch (e) {
            /* timeout / offline → client below */
        }
    }
    if (code == null && canGenerateCodeClientSide()) {
        try {
            code = await makeSecureCodeClient(amt);
        } catch (e) {
            code = null;
        }
    }
    if (code == null) {
        alert(t.alertUnableCode);
        return;
    }
    clearSmsHideTimers();
    document.getElementById("displayCode").innerText = code;
    document.getElementById("verifyBox").style.display = "block";
    showSMS(code, amt);
    showClientSMS(clientPhone, code, amt);
}

async function confirmSale() {
    const amt = document.getElementById("saleAmount").value;
    const typed = document.getElementById("buyerCode").value.trim();
    if (!typed) return alert(tLang().alertEnterCode);

    let verdict = null;
    if (navigator.onLine) {
        try {
            const resp = await fetchPostJson(
                "/api/check-code",
                { amount: amt, code: typed },
                3500
            );
            if (resp.ok) {
                const result = await resp.json();
                verdict = result.success === true;
            }
        } catch (e) {
            verdict = null;
        }
    }
    let success = false;
    if (verdict === true) {
        success = true;
    } else if (verdict === false) {
        success = false;
    } else if (canGenerateCodeClientSide()) {
        try {
            const expected = await makeSecureCodeClient(amt);
            success = typed === expected;
        } catch (e) {
            success = false;
        }
    }
    if (success) {
        saveTransaction(amt);
        alert(tLang().alertSuccess);
        clearSmsHideTimers();
        document.getElementById("verifyBox").style.display = "none";
        document.getElementById("smsSimulation").style.display = "none";
        document.getElementById("smsClientSimulation").style.display = "none";
        document.getElementById("saleAmount").value = "";
        document.getElementById("itemName").value = "";
        document.getElementById("buyerCode").value = "";
        document.getElementById("clientPhone").value = "";
    } else {
        alert(tLang().alertWrongCode);
    }
}

function simulateMoMo() {
    const t = tLang();
    const amt = document.getElementById('saleAmount').value;
    if (!amt) return alert(t.alertEnterAmt);
    alert(t.momoInit);
    setTimeout(() => {
        alert(t.momoOk);
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
    if (confirm(tLang().deleteConfirm)) {
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
    const t = tLang();
    if (!name || !nif || !pin) return alert(t.alertFillAll);
    if (!/^\d{4}$/.test(pin)) return alert(t.alertPinInvalid.replace("{hint}", t.pinFormatHint));
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
        alert(tLang().alertWrongPin);
    }
}

function getBankReport() {
    if (!window.jspdf) {
        alert(tLang().alertPdfMissing);
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