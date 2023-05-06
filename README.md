<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->




<!-- ABOUT THE PROJECT -->
## Documentation

### Built With

dibuat dengan 

* ![Laravel](https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white)
* ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

<p align="right">(<a href="#top">back to top</a>)</p>


## Installation Frontend

Clone Repository using git bash

```bash
  git clone https://github.com/jasanya-tech/binar-project-ali.git
```

Masuk Kedalam Derektori Repo
```bash
  cd binar-project-ali
```

Masuk Direktori Folder Client
```bash
  cd client
```

Install Packages
```bash
  npm install
```

<p align="right">(<a href="#top">back to top</a>)</p>

## Installation Backend
Setelah proses installasi package frontend selesai, buka kembali terminal lalu masuk ke folder server
```bash
  cd ../server
```

setelah itu install package yang dibutuhkan backend dengan cara mengetikan perintah berikut di terminal
```bash
  composer install
```

setelah itu jalankan xampp, lalu buat 1 database baru di phpmyadmin dengan nama bebas lalu cantumkan pada `.env`, kemudian ketikan perintah berikut di terminal untuk membuat struktur database
```bash
  php artisan migrate
```

setelah itu kita buat secret JWT nya dengan ketikan perintah di terminal
```bash
  php artisan jwt:secret
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE -->
## Usage

Setelah masuk vscode buka 2 terminal sebagai berikut
![Screenshot (1)](https://user-images.githubusercontent.com/79908759/236600289-920950ed-07af-4683-b0fb-320ed742cefa.png)

kemudian jalankan perintah berikut pada terminal 1
```bash
  cd server
```
Kemudian jalankan server Laravel
```bash
  php artisan serve
```

Selanjutnya jalankan perintah berikut pada terminal 2
```bash
  cd client
```
Kemudian jalankan react js nya
```bash
  npm run start
```

<p align="right">(<a href="#top">back to top</a>)</p>
