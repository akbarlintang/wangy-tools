function wangy(){
    const submit = document.getElementById('submit');
    submit.onclick = function(){
        const namaId = document.getElementById('nama');
        const nama = namaId.value;
        const template = document.getElementById('template');
        const hasil = document.getElementById('hasil');
        hasil.innerHTML = hasilValidation(template, nama);
    }
}

function hasilValidation(template, nama){
    let hasil = '';

    switch (template.value){
        case '1':
            hasil += ``+nama+` `+nama+` `+nama+`  ❤️ ❤️ ❤️ WANGI WANGI WANGI WANGI HU HA HU HA HU HA, aaaah baunya rambut `+nama+`wangi aku mau nyiumin aroma wanginya `+nama+` AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH `+nama+` keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH `+nama+` AAAAA LUCCUUUUUUUUUUUUUUU............`+nama+` AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? `+nama+` itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ `+nama+` gw ...`+nama+` di laptop ngeliatin gw, `+nama+` .. kamu percaya sama aku ? aaaaaaaaaaah syukur `+nama+` aku gak mau merelakan `+nama+` aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA `+nama+` SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`;
            break;
        case '2':
            hasil += `Bro, gue gemeteran. GUE GEMETERAN ANJING Gue gak pernah mau berkembangbiak dengan siapapun lebih daripada seorang `+nama+`. Badannya yang cakep, TETE GEDE, pinggul seksi dari seorang BIDADARI. Jujur aja, sakit hati kalau tau KENYATAANNYA gue GAK AKAN PERNAH BISA BUAT KAWIN SAMA DIA, ngewarisin gen gue lewat dia, dan ngebiarin dia ngelahirin anak yang sempurna dari gue.Gue rela ngelakuin APAPUN demi kesempatan buat bikin `+nama+` hamil. A P A P U N. Dan gue bener-bener gk bisa terima kenyataan. Kenapa Tuhan rela bikin suatu hal yang sempurna kyk dia? Buat ngegoda kita? NGETAWAIN KITA DI DEPAN MUKA?SUMPAH BRO, GUE UDAH BENER BENER GAK TAHAN. ANJING.`;
            break;
        case '3':
            hasil += `NENEN NENEN KEPENGEN NENEN SAMA `+nama+`. TETEK GEDE NAN KENCANG MILIK `+nama+` MEMBUATKU KEPENGEN NENEN. DIBALUT PAKAIAN KETAT YANG ADUHAI CROOOOTOTOTOTOTOT ANJING SANGE GUA BANGSAT. `+nama+`, PLIS DENGERIN BAIK BAIK. TOLONG BUKA BAJU SEBENTAR SAJA PLISSS TOLOOONG BANGET, BIARKAN MULUT KERINGKU BISA MENGECAP NENEN `+nama+`. BIARKAN AKU MENGENYOT NENENMU `+nama+`. AKU RELA NGASIH SESEMBAHAN APA AJA BERAPAPUN ITU DUIT YANG AKU BAKAR KHUSUS TERKHUSUS BUATMU. TAPI TOLOOOONG BANGET BUKA BAJUMU AKU MAU NENEN. NENEN NENEEEEN NENEN `+nama+` WANGIIII`;
            break;
        default:
            hasil += 'ERROR'
    }

    return hasil;
}

wangy();

const copy = document.getElementById('copy');
copy.onclick = function(){
    document.querySelector('textarea').select();
    document.execCommand('copy');
}