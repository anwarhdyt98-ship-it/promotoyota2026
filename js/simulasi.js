// =========================================
// DATA HARGA MOBIL
// =========================================

const hargaMobil = {

    agya: 175900000,
    calya: 169600000,
    avanza: 242900000,
    veloz: 292800000,
    raize: 242200000,
    rush: 288100000,
    zenix: 430000000,
    alphard: 1477000000,
    hiace: 690000000

};

// =========================================
// FORMAT RUPIAH
// =========================================

function rupiah(angka){

    return "Rp " + angka.toLocaleString("id-ID");

}

// =========================================
// UPDATE HARGA
// =========================================

const mobil = document.getElementById("mobil");
const harga = document.getElementById("harga");

if(mobil){

    mobil.addEventListener("change",function(){

        harga.value = hargaMobil[this.value];

    });

}

// =========================================
// HITUNG SIMULASI
// =========================================

function hitungSimulasi(){

    let hargaMobilValue = Number(document.getElementById("harga").value);

    let dpPersen = Number(document.getElementById("dp").value);

    let tenor = Number(document.getElementById("tenor").value);

    let bunga = Number(document.getElementById("bunga").value);

    let dpNominal = hargaMobilValue * dpPersen / 100;

    let pinjaman = hargaMobilValue - dpNominal;

    let bungaTotal = pinjaman * (bunga / 100) * tenor;

    let totalPinjaman = pinjaman + bungaTotal;

    let angsuran = totalPinjaman / (tenor * 12);

    document.getElementById("hargaOutput").innerHTML = rupiah(hargaMobilValue);

    document.getElementById("dpOutput").innerHTML = rupiah(dpNominal);

    document.getElementById("pinjamanOutput").innerHTML = rupiah(pinjaman);

    document.getElementById("angsuranOutput").innerHTML = rupiah(Math.round(angsuran)) + " / bulan";

}

// =========================================
// BUTTON HITUNG
// =========================================

const btnHitung = document.getElementById("btnHitung");

if(btnHitung){

    btnHitung.addEventListener("click",hitungSimulasi);

}

// =========================================
// WHATSAPP
// =========================================

const btnWA = document.getElementById("btnWA");

if(btnWA){

    btnWA.addEventListener("click",()=>{

        let namaMobil = mobil.options[mobil.selectedIndex].text;

        let hargaMobilValue = document.getElementById("harga").value;

        let dp = document.getElementById("dp").value;

        let tenor = document.getElementById("tenor").value;

        let angsuran = document.getElementById("angsuranOutput").innerText;

        let pesan =
`Halo Pak Anwar,
Saya ingin konsultasi Toyota.

Mobil : ${namaMobil}
Harga : ${rupiah(Number(hargaMobilValue))}
DP : ${dp}%
Tenor : ${tenor} Tahun
Estimasi Angsuran : ${angsuran}`;

        window.open(

`https://wa.me/6281314161356?text=${encodeURIComponent(pesan)}`,

"_blank"

);

    });

}
