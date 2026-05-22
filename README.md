# ShopZone - E-Commerce SPA

A fully functional Single Page Application built with React, React Router v6, and Context API.

---

## Tech Stack

- React + Vite
- React Router DOM v6 (createBrowserRouter)
- Context API + useReducer
- Plain CSS
- React Icons
- LocalStorage for persistence

---

## Setup Commands

Step 1 - Create the Vite project:

    npm create vite@latest .



Step 2 - Install default dependencies:

    npm install

Step 3- Install project dependencies:

    npm install react-router-dom react-icons

Step 5 - Run on localhost:

    npm run dev

Step 6 - Build for production:

    npm run build

---

## Commands to Create All Folders and Files

Run these commands one by one in your terminal after Step 4 above.

Create folders:

    mkdir src\context
    mkdir src\components
    mkdir src\pages
    mkdir src\styles

Create context file:

    echo. > src\context\CartContext.jsx

Create component files:

    echo. > src\components\Layout.jsx
    echo. > src\components\Navbar.jsx
    echo. > src\components\Footer.jsx
    echo. > src\components\ProtectedRoute.jsx

Create page files:

    echo. > src\pages\Home.jsx
    echo. > src\pages\Shop.jsx
    echo. > src\pages\ProductDetail.jsx
    echo. > src\pages\Contact.jsx
    echo. > src\pages\Cart.jsx
    echo. > src\pages\Login.jsx
    echo. > src\pages\Checkout.jsx

Create CSS files:

    echo. > src\styles\global.css
    echo. > src\styles\navbar.css
    echo. > src\styles\footer.css
    echo. > src\styles\home.css
    echo. > src\styles\shop.css
    echo. > src\styles\pages.css

Replace App.jsx and main.jsx with provided code (already exist from Vite).

Create root files:

    echo. > Prompts.md
    echo "/* /index.html 200" > public\_redirects

---

## Final Folder Structure

This is exactly what your project should look like:

    shopzone/
      public/
        _redirects
      src/
        components/
          Footer.jsx
          Layout.jsx
          Navbar.jsx
          ProtectedRoute.jsx
        context/
          CartContext.jsx
        pages/
          Cart.jsx
          Checkout.jsx
          Contact.jsx
          Home.jsx
          Login.jsx
          ProductDetail.jsx
          Shop.jsx
        styles/
          footer.css
          global.css
          home.css
          navbar.css
          pages.css
          shop.css
        App.jsx
        main.jsx
      Prompts.md
      README.md

---

## Which Code Goes in Which File

    App.jsx         -> paste App.jsx code
    main.jsx        -> paste main.jsx code

    context/
      CartContext.jsx   -> paste CartContext.jsx code

    components/
      Layout.jsx        -> paste Layout.jsx code
      Navbar.jsx        -> paste Navbar.jsx code
      Footer.jsx        -> paste Footer.jsx code
      ProtectedRoute.jsx -> paste ProtectedRoute.jsx code

    pages/
      Home.jsx          -> paste Home.jsx code
      Shop.jsx          -> paste Shop.jsx code
      ProductDetail.jsx -> paste ProductDetail.jsx code
      Contact.jsx       -> paste Contact.jsx code
      Cart.jsx          -> paste Cart.jsx code
      Login.jsx         -> paste Login.jsx code
      Checkout.jsx      -> paste Checkout.jsx code

    styles/
      global.css        -> paste global.css code
      navbar.css        -> paste navbar.css code
      footer.css        -> paste footer.css code
      home.css          -> paste home.css code
      shop.css          -> paste shop.css code
      pages.css         -> paste pages.css code (contains contact, cart, login, checkout, productdetail styles)

    public/
      _redirects        -> paste _redirects code

---

## Delete These Default Vite Files

After creating the project delete these — they conflict with our CSS:

    src/App.css
    src/index.css
    src/assets/react.svg

---

## Netlify Deployment

1. Push your code to a public GitHub repository
2. Go to netlify.com and click "Add new site"
3. Connect your GitHub repo
4. Build command: npm run build
5. Publish directory: dist
6. Click Deploy

The _redirects file in public folder handles SPA routing on Netlify automatically.

---

## Routes

    Route           Page              Protected
    /               Home              No
    /shop           Shop              No
    /product/:id    Product Detail    No
    /contact        Contact           No
    /cart           Cart              No
    /login          Login             No
    /checkout       Checkout          Yes (redirects to /login if not logged in)

---

## Hooks Used

    useState        - local state in pages
    useEffect       - fetch API data
    useReducer      - cart add, remove, quantity logic
    useContext      - read global cart from anywhere
    useRef          - form field values
    useParams       - get :id from URL in ProductDetail
    useNavigate     - go to another page programmatically
    useCallback     - optimize functions in Navbar

---

## Features

- Multi-route SPA with no page reloads
- Product listing from dummyjson API
- Dynamic product detail pages
- Global cart with Context API and useReducer
- Cart badge in Navbar updates live
- Cart persists on page refresh via localStorage
- Guest login mock authentication
- Protected checkout route
- Fully responsive for mobile

---

## Submitted By

Sprint 6 - ShopZone SPA Module
Prodesk IT Engineering Residency