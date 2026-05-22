# Prompts.md - AI Debugging Sessions Log

Sprint 6 - ShopZone SPA Module
Engineer: [Your Name]
Residency: Prodesk IT Engineering Residency

---

## Purpose

This file documents all AI-assisted learning and debugging sessions during Sprint 6.
AI was used strictly for understanding concepts and unblocking errors — not for copying code.

---

## Session 1 - Understanding createBrowserRouter

Date: Sprint Week 6

Prompt asked:
"Explain how createBrowserRouter is different from BrowserRouter in React Router v6. What is the RouterProvider and where does it go?"

What I learned:
createBrowserRouter is the modern way to define routes as a data structure (array of objects).
RouterProvider wraps the whole app instead of BrowserRouter.
It supports loaders and actions which the older BrowserRouter does not.
I used this knowledge to write my own App.jsx route configuration.

---

## Session 2 - Understanding useParams

Date: Sprint Week 6

Prompt asked:
"How does useParams work in React Router? If my URL is /product/5, how do I get the number 5 inside my component?"

What I learned:
useParams returns an object with the dynamic segments of the URL.
If the route is defined as /product/:id, then useParams gives { id: "5" }.
I wrote my own fetch call inside ProductDetail.jsx using this id value.

---

## Session 3 - Context API with useReducer

Date: Sprint Week 6

Prompt asked:
"What is the difference between useState and useReducer for managing cart state? When should I use useReducer?"

What I learned:
useReducer is better when state has multiple actions like ADD, REMOVE, INCREMENT, DECREMENT.
It keeps the logic in one place (the reducer function) instead of scattered across components.
I wrote my own reducer with switch cases for each cart action.

---

## Session 4 - localStorage Sync with Context

Date: Sprint Week 6

Prompt asked:
"How do I sync my React Context state with localStorage so the cart survives a page refresh?"

What I learned:
On initial state, read from localStorage using JSON.parse.
After every dispatch, use useEffect to write updated state to localStorage using JSON.stringify.
I implemented this pattern myself in CartContext.jsx.

---

## Session 5 - Protected Routes in React Router v6

Date: Sprint Week 6

Prompt asked:
"How do I make a protected route in React Router v6 that redirects to /login if the user is not authenticated?"

What I learned:
Create a wrapper component called ProtectedRoute.
Inside it, check the auth state from context.
If not logged in, return Navigate to="/login".
If logged in, return the Outlet component so child routes render.
I wrote my own ProtectedRoute.jsx using this concept.

---

## Session 6 - useEffect Firing Twice

Date: Sprint Week 6

Prompt asked:
"Why is my useEffect running twice when the page loads? I am fetching products and getting two API calls in the console."

What I learned:
This happens because of React.StrictMode in main.jsx.
In development it mounts, unmounts, and remounts to catch bugs.
In production build (npm run build) it will only run once.
I kept StrictMode as it is good practice and the API handles duplicate calls fine.

---

## Session 7 - Netlify 404 on Route Refresh

Date: Sprint Week 6

Prompt asked:
"When I deploy to Netlify and refresh a page on /shop, I get a 404 error. How do I fix this?"

What I learned:
Netlify looks for a physical file when the URL changes.
Since it is an SPA, only index.html exists.
Fix is to create a _redirects file in the public folder with: /* /index.html 200
This tells Netlify to always serve index.html and let React Router handle the URL.

---

## Session 8 - Outlet in React Router

Date: Sprint Week 6

Prompt asked:
"What is Outlet in React Router v6? How do I use it to keep Navbar and Footer fixed while only the page content changes?"

What I learned:
Outlet is a placeholder inside a layout component.
The parent route renders the layout (Navbar + Footer + Outlet).
Child routes render their content inside the Outlet.
This is how I built my Layout.jsx so Navbar and Footer stay fixed.

---

End of AI Session Log
All code was written independently after understanding the concepts above.