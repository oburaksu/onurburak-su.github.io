document.addEventListener("DOMContentLoaded", function () {
    const basvuruFormu = document.getElementById("basvuruFormu");
    const sonucAlani = document.getElementById("sonucAlani");
    const temaButonu = document.getElementById("temaButonu");

    // Tema Değiştirme
    if (temaButonu) {
        temaButonu.addEventListener("click", function (e) {
            e.preventDefault();
            document.body.classList.toggle("dark-mode");
            
            if (document.body.classList.contains("dark-mode")) {
                temaButonu.textContent = "Açık Temaya Geç";
                temaButonu.classList.remove("btn-outline-dark");
                temaButonu.classList.add("btn-outline-light");
            } else {
                temaButonu.textContent = "Koyu Temaya Geç";
                temaButonu.classList.remove("btn-outline-light");
                temaButonu.classList.add("btn-outline-dark");
            }
        });
    }

    // Form Gönderim Yakalama
    if (basvuruFormu) {
        basvuruFormu.addEventListener("submit", function (e) {
            e.preventDefault(); // Sayfanın yenilenmesini durdur

            // Alanların değerlerini al
            const adSoyad = document.getElementById("adSoyad").value.trim();
            const eposta = document.getElementById("eposta").value.trim();
            const bolum = document.getElementById("bolum").value.trim();
            const sinif = document.getElementById("sinif").value;
            const oturum = document.getElementById("oturum").value;
            const katilimTuru = document.getElementById("katilimTuru").value;
            const kisamesaj = document.getElementById("kisamesaj").value.trim();
            const onayKutusu = document.getElementById("onayKutusu").checked;

            // Eksik alan kontrolü
            if (!adSoyad || !eposta || !bolum || !sinif || !oturum || !katilimTuru || !onayKutusu) {
                alert("Lütfen zorunlu tüm alanları doldurun ve katılım şartlarını kabul edin.");
                return;
            }

            // Başarılı durumda özet kartı oluşturma
            const ozetHTML = `
                <div class="card shadow-sm border-success mt-4">
                    <div class="card-header bg-success text-white">
                        <i class="bi bi-check-circle-fill me-2"></i><strong>Başvuru Başarılı - Özet</strong>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6 mb-2">
                                <span class="text-secondary">Ad Soyad:</span><br>
                                <strong>${adSoyad}</strong>
                            </div>
                            <div class="col-md-6 mb-2">
                                <span class="text-secondary">E-posta:</span><br>
                                <strong>${eposta}</strong>
                            </div>
                            <div class="col-md-6 mb-2">
                                <span class="text-secondary">Bölüm:</span><br>
                                <strong>${bolum}</strong>
                            </div>
                            <div class="col-md-6 mb-2">
                                <span class="text-secondary">Sınıf:</span><br>
                                <strong>${sinif}</strong>
                            </div>
                            <div class="col-md-6 mb-2">
                                <span class="text-secondary">Seçilen Oturum:</span><br>
                                <strong>${oturum}</strong>
                            </div>
                            <div class="col-md-6 mb-2">
                                <span class="text-secondary">Katılım Türü:</span><br>
                                <strong>${katilimTuru}</strong>
                            </div>
                            <div class="col-12 mt-2">
                                <span class="text-secondary">Kısa Mesaj:</span>
                                <p class="mb-0 mt-1 p-2 bg-light rounded border">${kisamesaj || '<em class="text-muted">Mesaj bırakılmadı.</em>'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            // Sonuç alanına yeni içeriği basma
            sonucAlani.innerHTML = ozetHTML;
        });

        // Formu Temizle butonuna tıklandığında sonucu da sıfırla
        basvuruFormu.addEventListener("reset", function () {
            sonucAlani.innerHTML = `<div class="alert alert-info mt-4" role="alert">Henüz başvuru özeti oluşturulmadı. Formu doldurduktan sonra sonuç burada görünecek.</div>`;
        });
    }
});
