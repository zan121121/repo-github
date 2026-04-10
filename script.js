function prosesCBT() {
    let s1 = document.getElementById("step1").value.toLowerCase();
    let s2 = document.getElementById("step2").value.toLowerCase();
    let s3 = document.getElementById("step3").value;
    let s4 = document.getElementById("step4").value;

    let hasil = "";

    if (s1 === "" || s2 === "" || s3 === "" || s4 === "") {
        hasil = "Mohon isi semua langkah terlebih dahulu.";
    } else {

        let respon = "";

        if (s2.includes("takut") || s2.includes("gagal")) {
            respon = "Perasaan takut gagal itu wajar, namun belum tentu akan terjadi. Fokus pada usaha yang sudah kamu lakukan.";
        } 
        else if (s2.includes("cemas") || s2.includes("stres")) {
            respon = "Kecemasan sering berasal dari pikiran berlebihan. Coba tarik napas dan fokus pada hal yang bisa kamu kontrol.";
        } 
        else if (s2.includes("tidak mampu") || s2.includes("tidak bisa")) {
            respon = "Pikiran bahwa kamu tidak mampu belum tentu benar. Ingat kembali pencapaian yang pernah kamu raih.";
        } 
        else {
            respon = "Setiap pikiran negatif bisa ditantang dengan logika dan bukti nyata. Kamu memiliki kendali atas cara berpikirmu.";
        }

        hasil += "<b>Perasaan:</b> " + s1 + "<br><br>";
        hasil += "<b>Pikiran Negatif:</b> " + s2 + "<br><br>";
        hasil += "<b>Bukti:</b> " + s3 + "<br><br>";
        hasil += "<b>Pemikiran Baru:</b> " + s4 + "<br><br>";
        hasil += "<b>Refleksi:</b> " + respon + "<br><br>";
        hasil += "✨ Tetap semangat, kamu sedang belajar mengelola pikiranmu dengan lebih baik.";

    }

    document.getElementById("output").innerHTML = hasil;
}