//rfc
import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div>
      <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-30 my-40 border-top">
          <div class="col-md-8 d-flex align-items-center">
            <Link to="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        
            </Link>
            <span class="mb-3 mb-md-3 text-muted">© 2024 QuickBite, Inc</span>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
           
          </ul>
        </footer>
      </div>
    </div>
  )
} 
