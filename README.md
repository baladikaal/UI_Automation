# API Automation

Testing API Automation


## Teknologi yang digunakan

- Node.js dan Npm
- Webdriver (Chrome)




## Testing

- Navigate to https://www.service.nsw.gov.au/ 
- Search for "Apply for a number plate" 
- Validate the navigation to appropriate page 
- Click on Locate us button 
- Enter suburb "Sydney 2000" 
- It should use service centre named as "Marrickville Service Centre" 



## Installing

- Install Node.Js dan Npm

- Download Webdriver dan tambahkan ke dalam PATH (user/system environment)

- Selanjutnya ketikkan perintah di bawah untuk periapan library yang akan di gunakan
  
  `npm init -y` atau secara default `npm init -y`
  
  `npm install selenium-webdriver`

- Jika semua persiapan sudah selesai, maka jalankan program dengan perintah dibawah

  Find query : `npm test`

  Find Location : `npm testLocation`

