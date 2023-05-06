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

Clone Repository

```bash
  git clone https://github.com/jasanya-tech/binar-project-ali.git
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
  cd server
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

<!-- USAGE EXAMPLES -->
## Usage

Setelah proses installasi dan migration selesai. jalankan server dengan perintah berikut
 
```bash
  php artisan serve
```
<p align="right">(<a href="#top">back to top</a>)</p>
