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

Peduli Gizi dibuat dengan 

* ![Laravel](https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white)
* ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

<p align="right">(<a href="#top">back to top</a>)</p>


## Installation

Clone Repository

```bash
  git clone https://github.com/Youth-Creative-Technology/project_sms.git
```

Masuk Direktori Folder API
```bash
  cd API_SMS
```
<p align="right">(<a href="#top">back to top</a>)</p>

Install Vendor
```bash
  composer install
```
## Migration and Seeder
Setelah itu buatlah database di phpmyadmin dengan nama sms, sesuaikan dengan yang ada di environment. Jika sudah buka lagi terminal lalu jalankan migrate dengan perintah berikut
```bash
  php artisan migrate
```

Lalu jalankan seeder dengan perintah berikut
```bash
  php artisan db:seed
```
<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

Setelah proses installasi dan migration selesai. jalankan server dengan perintah berikut
 
```bash
  php artisan serve
```
<p align="right">(<a href="#top">back to top</a>)</p>

## Endpoint API
Untuk melihat list endpoint api, ketikan url berikut di browser
```bash
  http://127.0.0.1:8000/api/documentation
```
Jika list endpoint tidak muncul, buka kembali terminal lalu jalankan perintah berikut, lalu buka kembali `http://127.0.0.1:8000/api/documentation`
```bash
  php artisan l5-swagger:generate
```
<p align="right">(<a href="#top">back to top</a>)</p>

