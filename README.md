# Gig Services – On-Demand Local Services & Gig Marketplace ⚡

**Gig Services** is a modern, premium, fully responsive hyperlocal services and gig-worker platform designed for customers and service professionals (Plumbers, Electricians, Cleaners, Technicians) across major Indian cities (Bengaluru, Mumbai, Delhi NCR, Hyderabad, Pune, Chennai).

---

## 🌟 Key Updates: Customer & Services Login + Plumber Portal

### 1. Dedicated Customer Login (`/customer-login.html`)
- **Resident & Customer Portal**: Sign in to browse 100+ home repairs and order daily essentials.
- **1-Click Demo Login**: Fast testing as **Rahul Sharma** (`rahul.customer@gigservices.in` / `demo123`).
- **Account Registration**: Create a free resident account with city & WhatsApp phone.
- **Direct Switcher**: Quick link to Service Partner Login for pros.

### 2. Dedicated Services Login / Partner Portal (`/services-login.html`)
- **Tradespeople & Gig Pro Portal**: Built specifically for Plumbers, Electricians, Cleaners, and Technicians.
- **1-Click Plumber Demo Login**: Fast testing as **Rajesh Kumar (Master Plumber)** (`rajesh.plumber@gigservices.in` / `demo123`).
- **1-Click Home Pro Demo Login**: Fast testing as **Vikram Vernekar (Home Services Pro)**.
- **Partner Registration**: Register trade specialty (Plumber, Electrician, Carpenter, Cleaning, AC Tech).

### 3. Service Provider / Plumber Dashboard:
- 📋 **My Orders & Bookings**:
  - Live customer requests with full delivery address, scheduled slot, and issue notes.
  - Direct 1-tap **WhatsApp customer chat link** pre-filled with order ID.
  - Quick status changer: `Confirmed`, `In Progress`, `Completed`, `Cancelled`.
  - Filter orders by: All, Active, Completed.
- 💰 **My Profit & Earnings ("my profitlo")**:
  - Transparent **90% Net Take-Home Profit** calculation (flat 10% platform facilitation fee).
  - Key KPI metrics: Total Net Profit (₹2,655+), Today's Net Profit, and Active Orders Pipeline.
  - **Order-by-Order Profit Breakdown table**: Gross Price, 10% Platform Fee, Net Profit, and Payout Settlement Status.
  - **Instant Payout to UPI**: Linked UPI ID (`rajesh.plumber@okaxis`) and verified bank account (`HDFC Bank •••• 4092`) with 1-click Express Payout request.
- ⭐ **My Ratings & Reviews ("my ratings")**:
  - **4.9 ★ Overall Rating** based on 86 verified customer reviews.
  - 5-Star distribution bar breakdown (92% 5-Star ratings).
  - Verified badges: Top Rated Partner, 99.4% On-Time Arrival, 100% ID Verified.
  - Full customer review feed with customer names, star ratings, and real feedback.
- 🛠️ **My Portfolio & Skills**:
  - Pro bio with 9+ years experience and Govt. Skill India certification.
  - Core trade skills tags: CPVC Pipe Fitting, Concealed Wall Diverters, Drain Snakes, Water Tank Systems.
  - Verified Tools Equipped: Digital Pressure Sensor, Rothenberger Drain Snake, Acoustic Leak Sensor.
  - **Work Showcase Gallery**: Before-and-after project photos (Concealed Diverter, Under-sink Pipe Trap, Overhead Tank Float Valve, Heavy Grease Drain Jetting).
- 🔧 **Services Catalog**:
  - Manage published services, pricing (Emergency Pipe Leakage ₹349, Wall Diverters ₹799, Tank Maintenance ₹899), and add new service packages.

---

## 🌟 Key Platform Features

### 1. Home Services
- **House Cleaning**: Full 1BHK/2BHK/3BHK deep cleaning, floor buffing, vacuuming.
- **Bathroom Cleaning**: Hard-water stain removal, descaling, sanitization.
- **Plumbing**: Tap leakage repair, pipe fitting, sanitary fixture installations.
- **Electrical Repairs**: Wiring, MCB tripping, fan, switchboard, and appliance fitting.
- **AC Repair**: High-pressure foam jet wash, cooling coil flush, gas refill.
- **Pest Control**: Odorless herbal cockroach gel, anti-termite and bed bug treatment.
- **Painting**: Interior wall painting, touch-ups, Asian Paints certified finish.
- **Carpentry**: Furniture assembly (IKEA, Urban Ladder), lock and hinge repairs.

### 2. Nearby Shops & Grocery Ordering
- **Local Supermarkets**: Provisions, rice, grains, pulses, and household cleaning supplies.
- **General Stores / Kirana**: Neighborhood daily spices, snacks, and toiletries.
- **24x7 Medical Pharmacies**: Prescription medicines, first aid, supplements, and wellness essentials.
- **Vegetable & Fruit Shops**: Farm-fresh greens, organic vegetables, and seasonal fruits.
- **Artisan Bakeries**: Fresh bread, morning buns, croissants, and celebration cakes.
- **Fresh Dairy Parlours**: Milk packets, malai paneer, thick curd, and ghee.
- **Shopping Cart & Checkout**: Slide-out cart drawer, dynamic delivery fee calculation, and order tracking.

### 3. Personal Services
- **Laundry & Dry Cleaning**: Doorstep pickup, steam ironing, and fold packaging.
- **Men's Salon & Grooming**: Haircut, beard styling, hot towel shave at home.
- **Women's Salon & Spa**: RICA waxing, radiant facials, pedicure, and head massage.
- **Custom Tailoring**: Doorstep measurement pickup, blouse stitching, alterations.
- **Mobile & Hardware Repair**: On-the-spot screen replacement and battery overhaul.

### 4. OpenStreetMap & Geolocation
- Interactive Leaflet.js map with custom high-contrast color pins:
  - Teal pins for neighborhood shops.
  - Navy pins for certified service providers.
  - Radar blue pin for user's GPS/current location.
- "Directions" button providing 1-click navigation routing.
- Geolocation "Locate Me" button to detect real GPS coordinates.

### 5. Multi-Persona Dashboards
- **Customer Dashboard**: Track active bookings, grocery delivery orders, saved delivery addresses, and leave verified reviews.
- **Business Owner Dashboard**: Register new stores, manage product inventory (add, edit price, toggle in-stock), and update incoming customer orders.
- **Service Provider Dashboard**: Publish service packages, update pricing, view assigned customer bookings, and update job status.
- **Admin Dashboard**: System-wide platform metrics, user directory, 1-click business verification badges, and demo data reset.

### 6. WhatsApp Direct Contact
- Every shop and service provider features 1-click WhatsApp chat pre-loaded with inquiry details or itemized grocery carts.

---

## 🛠️ Technology Stack

- **Frontend**: HTML5, Modern CSS3 (CSS Grid & Flexbox, Glassmorphism, CSS Custom Properties), Vanilla JavaScript (ES6+ Modules), Leaflet.js (OpenStreetMap), Font Awesome 6.
- **Backend**: Node.js, Express.js REST API, JSON Web Tokens (JWT), Bcrypt password hashing.
- **Database**: Dual-mode engine supporting:
  - MongoDB via Mongoose when `MONGODB_URI` is available.
  - Built-in Persistent JSON Store (`data/nearnest-db.json`) for zero-dependency execution out of the box!

---

## 🚀 Quick Start Guide

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Platform
```bash
npm start
```

### 3. Open in Browser
Navigate to [http://localhost:5000](http://localhost:5000)

---

## 👥 Demo Quick-Login Accounts

You can switch personas with **1 click** using the top banner in the website, or log in manually with:

| Persona | Email | Password | Role |
| :--- | :--- | :--- | :--- |
| **Customer** | `rahul.customer@nearnest.in` | `demo123` | Resident / Customer |
| **Shop Owner** | `suresh.groceries@nearnest.in` | `demo123` | Supermarket Owner |
| **Service Provider** | `vikram.services@nearnest.in` | `demo123` | Home Services Pro |
| **Admin** | `admin@nearnest.in` | `demo123` | Master Administrator |

---

## 🇮🇳 Covered Indian Cities

1. **Bengaluru**: Indiranagar, Koramangala, HSR Layout, Whitefield, Jayanagar
2. **Mumbai**: Bandra West, Powai, Andheri West, Dadar, Thane
3. **Delhi NCR**: Cyber City Gurugram, Indirapuram Noida, Connaught Place, South Extension
4. **Hyderabad**: Hitec City, Gachibowli, Jubilee Hills, Madhapur
5. **Pune**: Viman Nagar, Baner, Koregaon Park, Kothrud
6. **Chennai**: T. Nagar, Adyar, Velachery, Anna Nagar
