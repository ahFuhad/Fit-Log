# FitLog — Workout Library

FitLog is a modern workout library and workout planning web application built with Next.js. It allows users to browse workouts, view detailed exercise information, add workouts to a daily plan, save workouts for later, and track completed exercises.

## 🌐 Live Demo

[View FitLog Live](fit-log-rust-kappa.vercel.app)

## 📦 GitHub Repository

[View Source Code](https://github.com/ahFuhad/Fit-Log)

---

## 📖 About the Project

FitLog is designed as a simple, dark-themed gym companion for discovering and organizing workouts.

Users can explore a collection of exercises, sort workouts based on different criteria, open individual workout details, add exercises to their daily plan, save workouts for later, and mark planned workouts as completed.

The application is fully responsive and works across desktop, tablet, and mobile screens.

---

## ✨ Features

-  Browse a workout library with detailed exercise cards
-  View individual workout details using dynamic routes
-  Add workouts to today's plan
-  Save workouts for later
-  View total exercises, workout minutes, and calories
-  Mark planned workouts as completed
-  Remove workouts from the plan or saved list
-  Maximum of 5 workouts allowed in today's plan
-  Sort workouts by duration, calories, or rating
-  Loading animation while workout data is being fetched
-  Toast notifications for workout actions
-  Fully responsive design for mobile, tablet, and desktop
-  Custom 404 page for invalid workout routes

---

## 🛠️ Technologies Used

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Context API**
- **REST API**
- **Next.js App Router**

---

## 🔌 API

FitLog uses a workout API to load workout information dynamically.

### All Workouts

```text
https://api.api-store.workers.dev/api/fitlog
