# m.tix 2.0 - Movie Ticketing & Concessions App UI

This repository contains the front-end source code for **m.tix 2.0**, a redesigned user interface for a movie ticketing and in-cinema concessions ordering application. It showcases the primary flows for browsing movies, viewing reviews, checking order history, managing account settings, and selecting payment methods.

## ✨ Features

The application interface covers the following key functionalities:

### 🏠 Homepage
* **Dynamic Banner Carousel:** Displays promotional offers and discounts (e.g., up to 50%, Buy 1 Get 1) with automatic sliding and touch/drag functionality.
* **Now Playing Carousel:** Horizontal scrollable list of current movies, including:
    * *DESPICABLE ME 4*
    * *THE BEEKEEPER*
    * *VINA: SEBELUM 7 HARI*
    * *KINGDOM OF THE PLANET OF THE APES*
    * *Avengers: End Game*
* **News Section:** Displays recent cinema-related news articles.
* **Persistent Navigation Bar:** Links to Home, Food, Order History, and Account sections.
![Home Page](image/1.1.png)
![Home Page](image/1.2.png)
![Home Page](image/1.3.png)

<img src="image/1.1.png" width="250" alt=image/1.1.png>
<img src="image/1.2.png" width="250" alt=image/1.2.png>
<img src="image/1.3.png" width="250" alt=image/1.3.png>

### 🍿 Food & Drinks Menu (`food.html`)
* **Tabbed Navigation:** Easily switch between different product categories:
    * **Promo** (e.g., Paket Promo A-G)
    * **Combo** (e.g., Paket Combo A-G)
    * **Light Meal** (e.g., Paket Light Meal A-G)
    * **Drinks** (e.g., Paket Minuman A-G)
* Each item includes a placeholder price and a "Pesan" (Order) button.

### 📝 Movie Reviews (e.g., `reviewPage.html`)
* Allows users to **"Tambah Ulasan"** (Add Review) via a modal window, which includes a 5-star rating system (displaying a final score out of 10) and a text area for the review body.
* Displays a list of user reviews with ratings and engagement icons (comments and shares).

### 🧾 Order History (`orderhistory.html`)
* **Tabbed View:** Separates orders into:
    * **Active Orders:** Current valid bookings (e.g., *Vina: Sebelum 7 Hari* movie ticket, *Paket Promo B* food order).
    * **Recent Transactions:** Past orders (e.g., *Avangers: End Game* movie ticket).
* **Order Detail Screens:** Dedicated pages for viewing detailed ticket/order information and QR codes (`detailOrderVina.html`, `detailOrderPaketB.html`).

### 👤 Account Management (`account.html`)
* **User Overview:** Displays logged-in user details (Name: User27022, Phone: +6281212345678, Email: User27022@gmail.com).
* **General Settings:**
    * Account Information (`accountInformation.html`)
    * Inbox (`inbox.html`)
    * Vouchers (`voucher.html`)
* **Payment Settings:**
    * Add Payment Method (`paymentMethod.html`)
    * M.Points
* **Privacy:**
    * Security
    * Two Factor Authentication
    * Delete Account

### 💳 Payment Methods (`paymentMethod.html`)
* Lists supported payment categories:
    * **E-Money:** Gopay, OVO, DANA, SeaBank.
    * **Bank:** BCA, BNI, Mandiri.
    * **Card:** Credit Card, Debit Card.

## 🛠️ Technologies Used

* **HTML5**
* **CSS3** (Custom stylesheets for all pages)
* **JavaScript** (Vanilla JS for interactive elements like carousels, tabs, and modals)
* **External Libraries:**
    * [Google Fonts](https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@400..800&display=swap) (`Baloo Bhai 2` font)
    * [Font Awesome](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css) (Icons for menus and buttons)
    * [SweetAlert2](https://cdn.jsdelivr.net/npm/sweetalert2@11) (For alert/confirmation messages in review submission)

## 📁 File Structure Overview
