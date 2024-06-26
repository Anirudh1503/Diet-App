import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
  return (
    <div>
    <div class="container">
    <footer class="py-3 my-4">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item"><a href="/home" class="nav-link px-2 text-muted">Home</a></li>
        <li class="nav-item"><a href="/diet" class="nav-link px-2 text-muted">Features</a></li>
        <li class="nav-item"><a href="/destination-page" class="nav-link px-2 text-muted">FAQs</a></li>
        <li class="nav-item"><a href="/destination-page" class="nav-link px-2 text-muted">About</a></li>
      </ul>
      <p class="text-center text-muted">© 2024 Fitfuel, Inc</p>
    </footer>
  </div>
  </div>
  )
}