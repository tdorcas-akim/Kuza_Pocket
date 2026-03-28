// Stores all text for the app in three languages
const translations = {
    en: {
        title: "Kuza Pocket", regTitle: "Welcome! Please Register",
        btnStart: "Start Using Kuza", vendor: "Vendor",
        btnGen: "1. Get Security Code", code: "Code",
        btnVerify: "2. Verify & Save", notebook: " Digital Notebook",
        dateCol: "Date", itemCol: "Item", typeCol: "Type", amtCol: "Amount",
        btnReport: "Download Bank Report", smsSent: "SMS Sent to Client:",
        // New translations for inputs and options
        itemPlace: "Item Name (e.g. Rice)",
        amtPlace: "Amount (RWF)",
        optCash: "Cash Sale",
        optCredit: "Credit Sale",
        optStock: "Restock "
    },
    fr: {
        title: "Kuza Pocket", regTitle: "Bienvenue! Enregistrez-vous",
        btnStart: "Commencer avec Kuza", vendor: "Vendeur",
        btnGen: "1. Obtenir Code", code: "Code",
        btnVerify: "2. Vérifier & Sauver", notebook: " Carnet Numérique",
        dateCol: "Date", itemCol: "Article", typeCol: "Type", amtCol: "Montant",
        btnReport: "Télécharger Rapport ", smsSent: "SMS envoyé au client :",
        itemPlace: "Nom de l'article (ex: Riz)",
        amtPlace: "Montant (RWF)",
        optCash: "Vente au comptant",
        optCredit: "Vente à crédit",
        optStock: "Réapprovisionnement"
    },
    rw: {
        title: "Kuza Pocket", regTitle: "Murakaza neza! Mwiyandikishe",
        btnStart: "Tangira na Kuza", vendor: "Umucuruzi",
        btnGen: "1. Kora Kode", code: "Kode",
        btnVerify: "2. Emeza & Bika", notebook: "Ikaye y'Ubucuruzi",
        dateCol: "Itariki", itemCol: "Igicuruzwa", typeCol: "Ubwoko", amtCol: "Amafaranga",
        btnReport: "Kuramo Raporo", smsSent: "Ubutumwa bwohererejwe umukiriya :",
        itemPlace: "Izina ry'igicuruzwa (urug: Umuceri)",
        amtPlace: "Amafaranga (RWF)",
        optCash: "Kugurisha Kashi",
        optCredit: "Kugurisha ku ideni",
        optStock: "Kongeramo ibicuruzwa"
    }
};

// This function updates all text on the screen
function changeLanguage() {
    const lang = document.getElementById('langSelect').value;
    const t = translations[lang];

    // Update Titles and Buttons
    document.getElementById('txtTitle').innerText = t.title;
    document.getElementById('txtRegTitle').innerText = t.regTitle;
    document.getElementById('btnStart').innerText = t.btnStart;
    document.getElementById('txtVendor').innerText = t.vendor;
    document.getElementById('btnGenCode').innerText = t.btnGen;
    document.getElementById('txtCode').innerText = t.code;
    document.getElementById('btnVerify').innerText = t.btnVerify;
    document.getElementById('txtNotebook').innerText = t.notebook;
    document.getElementById('txtDateCol').innerText = t.dateCol;
    document.getElementById('txtItemCol').innerText = t.itemCol;
    document.getElementById('txtTypeCol').innerText = t.typeCol;
    document.getElementById('txtAmtCol').innerText = t.amtCol;
    document.getElementById('btnReport').innerText = t.btnReport;
    document.getElementById('txtSmsLabel').innerText = t.smsSent;

    // UPDATE INPUT PLACEHOLDERS (The grey text inside the box)
    document.getElementById('itemName').placeholder = t.itemPlace;
    document.getElementById('saleAmount').placeholder = t.amtPlace;

    // UPDATE DROPDOWN OPTIONS (Cash, Credit, Stock)
    const select = document.getElementById('transactionType');
    select.options[0].text = t.optCash;
    select.options[1].text = t.optCredit;
    select.options[2].text = t.optStock;
    
    localStorage.setItem('kuza_lang', lang);
}

// --- SMS SIMULATION ---
function showSMS(code, amt) {
    const item = document.getElementById('itemName').value || "Item";
    const smsBox = document.getElementById('smsSimulation');
    const smsText = document.getElementById('smsContent');
    smsText.innerText = `KUZA: Your receipt for ${item} (${amt} RWF) is ${code}. Valid for 4 mins.`;
    smsBox.style.display = 'block';
    setTimeout(() => { smsBox.style.display = 'none'; }, 8000);
}

// --- SECURITY & SALES ---
async function askForCode() {
    const amt = document.getElementById('saleAmount').value;
    if(!amt) return alert("Enter amount!");
    const resp = await fetch('/api/get-code', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ amount: amt })
    });
    const data = await resp.json();
    document.getElementById('displayCode').innerText = data.code;
    document.getElementById('verifyBox').style.display = 'block';
    showSMS(data.code, amt);
}

async function confirmSale() {
    const amt = document.getElementById('saleAmount').value;
    const code = document.getElementById('buyerCode').value;
    const resp = await fetch('/api/check-code', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ amount: amt, code: code })
    });
    const result = await resp.json();
    if(result.success) {
        saveTransaction(amt);
        alert("Success!");
        document.getElementById('verifyBox').style.display = 'none';
        document.getElementById('saleAmount').value = "";
        document.getElementById('itemName').value = "";
    } else {
        alert("Wrong code, try again.");
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
    const type = document.getElementById('transactionType').value;
    notebook.push({
        day: new Date().toLocaleString(),
        item: item,
        type: type,
        cash: amt
    });
    localStorage.setItem('my_sales', JSON.stringify(notebook));
    showNotebook();
}

function showNotebook() {
    let notebook = JSON.parse(localStorage.getItem('my_sales') || "[]");
    let rows = "";
    notebook.forEach((s, index) => {
        let color = s.type === "Credit Sale" ? "red" : (s.type === "Restock" ? "blue" : "green");
        rows += `<tr>
            <td>${s.day}</td>
            <td>${s.item}</td>
            <td style="color:${color}; font-weight:bold;">${s.type}</td>
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
    if (!name || !nif) return alert("Please fill all fields!");
    localStorage.setItem('kuza_name', name);
    localStorage.setItem('kuza_nif', nif);
    checkRegistration();
}

function checkRegistration() {
    const name = localStorage.getItem('kuza_name');
    const nif = localStorage.getItem('kuza_nif');
    if (!name || !nif) {
        document.getElementById('registrationForm').style.display = 'block';
        document.getElementById('mainApp').style.display = 'none';
    } else {
        document.getElementById('registrationForm').style.display = 'none';
        document.getElementById('mainApp').style.display = 'block';
        document.getElementById('displayVendorName').innerText = name;
        document.getElementById('displayVendorID').innerText = "VND-" + nif;
    }
}

function getBankReport() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const name = localStorage.getItem('kuza_name');
    const nif = localStorage.getItem('kuza_nif');
    let notebook = JSON.parse(localStorage.getItem('my_sales') || "[]");
    doc.setFontSize(18);
    doc.text("KUZA POCKET - SALES REPORT", 14, 20);
    doc.setFontSize(11);
    doc.text(`Vendor: ${name} | ID: VND-${nif} | NIF: ${nif}`, 14, 30);
    doc.text(`Date: ${new Date().toLocaleString()}`, 14, 37);
    doc.autoTable({
        startY: 45,
        head: [['Date', 'Item', 'Type', 'Amount']],
        body: notebook.map(s => [s.day, s.item, s.type, s.cash + " RWF"]),
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
    showNotebook();
};