// =========================================
// TOYOTA CREDIT SIMULATION
// =========================================

// Daftar Harga OTR (ubah sesuai harga terbaru)

const hargaMobil = {
    agya: 180400000,
    calya: 191400000,
    avanza: 243000000,
    veloz: 303700000,
    raize: 246000000,
    rush: 288100000,
    yariscross: 362000000,
    zenix: 436000000,
    reborn: 391000000,
    fortuner: 581000000,
    rangga: 188700000,
    alphard: 1457000000,
    velfire: 1839000000
};

const bungaPerTahun = 0.05;

// =========================================

const mobil = document.getElementById("mobil");
const harga = document.getElementById("harga");
const dp = document.getElementById("dp");
const tenor = document.getElementById("tenor");
const angsuran = document.getElementById("angsuran");
const pinjaman = document.getElementById("pinjaman");
const bunga = document.getElementById("bunga");
const waButton = document.getElementById("waButton");

// =========================================

function rupiah(angka) {

    return "Rp " + Number(angka).toLocaleString("id-ID");

}

// =========================================

function updateHarga() {

    if (!mobil) return;

    const hargaOTR = hargaMobil[mobil.value] || 0;

    if (harga) {

        harga.value = rupiah(hargaOTR);

    }

}

if (mobil) {

    mobil.addEventListener("change", () => {

        updateHarga();

        hitungSimulasi();

    });

}

// =========================================

function hitungSimulasi() {

    if (!mobil) return;

    const hargaOTR = hargaMobil[mobil.value];

    const dpValue = Number(dp.value);

    const tenorValue = Number(tenor.value);

    if (!hargaOTR || dpValue <= 0 || tenorValue <= 0) {

        return;

    }

    const totalPinjaman = hargaOTR - dpValue;

    const totalBunga = totalPinjaman * bungaPerTahun * (tenorValue / 12);

    const totalBayar = totalPinjaman + totalBunga;

    const cicilan = Math.round(totalBayar / tenorValue);

    if (pinjaman) {

        pinjaman.innerHTML = rupiah(totalPinjaman);

    }

    if (bunga) {

        bunga.innerHTML = rupiah(totalBunga);

    }

    if (angsuran) {

        angsuran.innerHTML = rupiah(cicilan);

    }

    if (waButton) {

        const pesan =
`Halo Pak Anwar,

Saya ingin simulasi kredit Toyota.

Mobil : ${mobil.options[mobil.selectedIndex].text}
Harga : ${rupiah(hargaOTR)}
DP : ${rupiah(dpValue)}
Tenor : ${tenorValue} Bulan
Estimasi Angsuran : ${rupiah(cicilan)}/bulan

Mohon info promo terbaru ya.`;

        waButton.href =
            "https://wa.me/6281314161356?text=" +
            encodeURIComponent(pesan);

    }

}

// =========================================

if (dp) {

    dp.addEventListener("input", hitungSimulasi);

}

if (tenor) {

    tenor.addEventListener("change", hitungSimulasi);

}

// =========================================
// DP CEPAT
// =========================================

document.querySelectorAll(".dp-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        if (!mobil || !dp) return;

        const persen = Number(btn.dataset.dp);

        const hargaOTR = hargaMobil[mobil.value];

        dp.value = Math.round(hargaOTR * persen / 100);

        hitungSimulasi();

    });

});

// =========================================
// RESET
// =========================================

const resetButton = document.getElementById("resetSimulasi");

if (resetButton) {

    resetButton.addEventListener("click", () => {

        mobil.selectedIndex = 0;

        harga.value = "";

        dp.value = "";

        tenor.selectedIndex = 0;

        pinjaman.innerHTML = "-";

        bunga.innerHTML = "-";

        angsuran.innerHTML = "-";

    });

}

// =========================================
// LOAD
// =========================================

updateHarga();

hitungSimulasi();

console.log("Toyota Simulasi Kredit Loaded 🚗");
