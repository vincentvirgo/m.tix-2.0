# m.tix 2.0 - Movie Ticketing & Concessions App UI

A redesigned user interface for a movie ticketing and in-cinema concessions ordering application. It showcases the primary flows for browsing movies, viewing reviews, checking order history, managing account settings, and selecting payment methods.


### 🏠 Homepage

<img src="image/1.1.png" width="250" alt=image/1.1.png> <img src="image/1.2.png" width="250" alt=image/1.2.png> <img src="image/1.3.png" width="250" alt=image/1.3.png>

### 🍿 Food & Drinks Menu
<div style="display: flex; flex-direction: row; justify-content: start; gap: 10px; margin-bottom: 10px; flex-wrap: wrap;">
  <img src="image/3.png" width="250" alt="Promo Menu 1">
  <img src="image/3.2.png" width="250" alt="Promo Menu 2">
</div>

<div style="display: flex; flex-direction: row; justify-content: start; gap: 10px; flex-wrap: wrap;">
  <img src="image/3.3.png" width="250" alt="Promo Menu 3">
  <img src="image/3.4.png" width="250" alt="Promo Menu 4">
</div>

### 📝 Movie Reviews 
<img src="image/2.1.png" width="250" alt=image/1.1.png> <img src="image/2.2.png" width="250" alt=image/1.2.png> <img src="image/2.3.png" width="250" alt=image/1.3.png>

### 🧾 Order History 
<img src="image/4.1.png" width="250" alt=image/1.1.png> <img src="image/4.2.png" width="250" alt=image/1.2.png> <img src="image/4.3.png" width="250" alt=image/1.3.png>
<img src="image/5.1.png" width="250" alt=image/1.1.png> <img src="image/5.2.png" width="250" alt=image/1.2.png> 
### 👤 Account Management 
<img src="image/6.1.png" width="250" alt=image/1.1.png> <img src="image/6.2.png" width="250" alt=image/1.2.png> <img src="image/6.3.png" width="250" alt=image/1.3.png>


### 💳 Payment Methods 
<img src="image/7.1.png" width="250" alt=image/1.1.png> <img src="image/7.2.png" width="250" alt=image/1.2.png> 

## ✨ Features

The application interface covers the following key functionalities:
### Home Page
- Promotional Banner Carousel: Displays various current food and beverage promotions and discounts.   
- Now Playing Film Carousel: A horizontally scrollable list of current movies, providing information like the movie title and its rating.   
- Movie Review Integration: Tapping a movie poster redirects the user to the dedicated review page where they can read existing reviews and submit their own rating and review.   
- News Section: A scrollable section at the bottom of the page that displays news related to films that are current, upcoming, or have already aired.   
- Persistent Navigation Bar: A sticky bottom navigation bar allowing easy access to the Home, Food and Beverage, Order, and Settings pages.   

### Food Order Page
- Location Information: Displays the cinema location and its closing time.   
- Tabbed Menu Categories: The menu is organized into navigable tabs: Promo, Combo, Light Meal, and Drinks.   
- Product Details: Each menu item displays its name (e.g., Paket Promo A), description, price (Rp xxx.xxx), and a "Pesan" (Order) button.   

### Order History Page
- Tabbed History: Orders are separated into two distinct tabs:   
- Active Orders: Shows current, active, or pending orders, which can be movie tickets, food, or drinks.   
- Each active order includes a QR Code for quick retrieval or ticket scanning.   
- Recent Transactions: Displays the history of all completed transactions.   
- Detailed Order View: Users can view details for each transaction, including the order date, time, seat number (for movies), and cinema location.   

### My Account Page
- General Account Overview: Displays the user's name, phone number, and email upon entry.   
- Search Functionality: A dedicated input box for searching within the account menu.   



## 🛠️ Technologies Used

* **HTML5**
* **CSS3** (Custom stylesheets for all pages)
* **JavaScript** (Vanilla JS for interactive elements like carousels, tabs, and modals)
* **External Libraries:**
    * [Google Fonts](https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@400..800&display=swap) (`Baloo Bhai 2` font)
    * [Font Awesome](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css) (Icons for menus and buttons)
    * [SweetAlert2](https://cdn.jsdelivr.net/npm/sweetalert2@11) (For alert/confirmation messages in review submission)

