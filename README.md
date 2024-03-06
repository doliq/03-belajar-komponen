## Laporan Praktikum

|       | Pemrograman Berbasis Framework 2024 |
| ----- | ----------------------------------- |
| NIM   | 2141720222                          |
| Nama  | Diwa Arsyad Atthoriq                |
| Kelas | TI - 3A                             |

### Soal 1

Ubah isi kode Home() sehingga dapat tampil seperti berikut dengan memanfaatkan komponen Profile() yang tadi sudah dibuat dari langkah 1 tersebut!

Capture hasilnya dan buatlah laporan di README.md. Jelaskan apa yang telah Anda pelajari dan bagaimana Anda solve error tersebut?

Jangan lupa push dengan pesan commit: "W03: Jawaban soal 1".

### Jawaban Soal 1

![Screenshot](assets-report/01.png)

![Screenshot](assets-report/02.png)

Saya menambahkan domains asal gambar pada next.config.mjs. Serta merubah/mengatur posisi gambar dengan menggunakan css yang di inputkan pada containerImage.

### Soal 2

Capture hasilnya dan buatlah laporan di README.md. Jelaskan apa yang telah Anda pelajari dan bagaimana tampilannya saat ini?

Jangan lupa push dengan pesan commit: "W03: Jawaban soal 2"

### Jawaban Soal 2

![Screenshot](assets-report/05.png)

Saya dapat memindahkan galeri dari page ke dalam file gallery.tsx dengan memanggil function pada home

### Soal 3

Silakan perbaiki kode JSX berikut ini. Anda boleh menggunakan konverter atau perbaiki secara manual.

Capture hasilnya dan buatlah laporan di README.md. Jelaskan apa yang telah Anda pelajari dan mengapa error itu bisa terjadi?

Jangan lupa push dengan pesan commit: "W03: Jawaban soal 3".

### Jawaban Soal 3

![Screenshot](assets-report/06.png)
![Screenshot](assets-report/006.png)

Karena menetapkan kelas pada elemen HTML di react butuh className. Lalu menambahkan tag penutup dan meletakkan lokasi penutup tag dengan benar.

### Soal 4

Kode di atas masih terdapat error, silakan diperbaiki.

Jangan lupa push dengan pesan commit: "W03: Jawaban soal 4".

### Jawaban Soal 4

![Screenshot](assets-report/07.png)
![Screenshot](assets-report/007.png)

### Soal 5

Buka file src/components/todolist.tsx lakukan ekstrak URL gambar ke dalam objek person.

Capture hasilnya dan buatlah laporan di README.md. Apakah ada perbedaan pada tampilan web saat ini?

Jangan lupa push dengan pesan commit: "W03: Jawaban soal 5".

### Jawaban Soal 5

![Screenshot](assets-report/08.png)
![Screenshot](assets-report/008.png)
Terdapat perbedaan tampilan dikarenakan memanggil fungsi galeri sehingga muncul fungsi galeri diatas fungsi list

## Soal 6

Perbaiki kode tersebut pada bagian atribut src. Kode lainnya dapat Anda sesuaikan dari jawaban soal sebelumnya. Capture hasilnya dan buatlah laporan di README.md. Jelaskan apa yang telah Anda pelajari dan bagaimana tampilannya saat ini?

Jangan lupa push dengan pesan commit: "W03: Jawaban soal 6".

Catatan:

Untuk memeriksa apakah perbaikan Anda berhasil, coba ubah nilai dari imageSize menjadi 'b'. Gambar harus menyesuaikan ukuran setelah diubah.

### Jawaban Soal 6

![Screenshot](assets-report/09.png)
![Screenshot](assets-report/009.png)
Perbaikan berhasil karena saya dapat merubah imageSize dari 's' menjadi 'b' dan gambar berubah menjadi lebih besar

### Soal 7

Jika kode di atas terdapat error, silakan diperbaiki.

Komponen MyGallery ini berisi dua markup yang sama persis. Ekstraklah menjadi komponen MyProfile untuk mengurangi duplikasi. Anda perlu memilih props apa saja yang akan dikirimkan.

Capture hasilnya dan buatlah laporan di README.md. Jelaskan apa yang telah Anda pelajari dan bagaimana tampilannya saat ini?

Jangan lupa push dengan pesan commit: "W03: Jawaban soal 7".

### Jawaban Soal 7

![Screenshot](assets-report/10.png)
![Screenshot](assets-report/010.png)
Mengimplementasikan getImageUrl pada utils

### Soal 8

Jika kode di atas terdapat error, silakan diperbaiki.

Ubahlah komponen MyAvatar untuk diolah ukuran gambarnya berdasarkan prop size. Khususnya, jika size kurang dari 90, kirimkan 's' ("small") bukan 'b' ("big") pada fungsi getImageUrl. Pastikan bahwa perubahan yang Anda buat berjalan dengan cara me-render avatars dengan nilai prop size yang berbeda dan buka gambar pada tab baru di browser.

Capture hasilnya dan buatlah laporan di README.md. Jelaskan apa yang telah Anda pelajari dan bagaimana tampilannya saat ini?

Jangan lupa push dengan pesan commit: "W03: Jawaban soal 8".

### Jawaban Soal 8

![Screenshot](assets-report/11.png)
![Screenshot](assets-report/011.png)
Dengan mengubah ukuran yang awalnya 's' yang berarti small menjadi 'b' yang berarti big pada utils

### Soal 9

Jika kode di atas terdapat error, silakan diperbaiki.

Buatlah komponen Card dari kode di atas, lalu gunakan prop children untuk mengirimkan JSX yang berbeda.

Capture hasilnya dan buatlah laporan di README.md. Jelaskan apa yang telah Anda pelajari dan bagaimana tampilannya saat ini?

Jangan lupa push dengan pesan commit: "W03: Jawaban soal 9"

### Jawaban Soal 9

![Screenshot](assets-report/12.png)
![Screenshot](assets-report/012.png)
Menambahkan komponent Card dan memproses props children
