const readline = require("readline-sync");

let urunler = [
"1 - Elma | 10 TL | Stok: 20",
"2 - Muz | 15 TL | Stok 20",
"3 - Süt | 25 TL | Stok 10",
"4 - Ekmek | 8 TL | Stok 30"
];

console.log("==== MARKET OTOMASYONU ====");

console.log("1 - Ürünleri Gör");
console.log("2 - Sepete Ürün Ekle");
console.log("3 - Sepeti Gör");
console.log("4 - Sepetten Ürün Sil");
console.log("5 - Toplam Tutari Göster");
console.log("6 - Ödeme Yap");
console.log("7 - Stok Ekle (Yönetici)");
console.log("8 - Çikiş");

let sayfalar = readline.question("Secim yap: ");

switch (sayfalar) {
    case "1":
        console.log("Ürünler:");
        console.log(urunler);
        break;
    case "2":
        console.log("Sepete Ürün Ekle");
        let urunNO = readline.question("urun Numarasi Gir: ");
        console.log("Urun Sepete Eklendi");
        if (urunNO <1 > 4){
            console.log("Geçersiz Urun Girdiniz Tekrar Deneyin");
            return;
        }
        break;
    case "3":
        console.log("Sepeti Gör");
        break;
    case "4":
        console.log("Sepetten Ürün sil");
        break;
    case "5":
        console.log("Toplam Tutari Göster");
        break;
    case "6":
        console.log("Ödeme Yap");
        break;
    case "7":
        console.log("Stok Ekle (Yönetici)");
        break;
    case "8":
        console.log("Çikiş");
        break;
    default:
        console.log("Geçersiz seçim");
        break;
}