<template>
    <!-- Using Bootstrap's Header template (starter code) -->
    <!-- https://getbootstrap.com/docs/5.0/examples/headers/ -->
    <div class="container">
      <header class="d-flex justify-content-center py-3">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <router-link to="/" class="nav-link" active-class="active" aria-current="page"
              >Home (Week 5)</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link" active-class="active">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link" active-class="active">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/addbook" class="nav-link" active-class="active">Add book</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/GetBookCount" class="nav-link" active-class="active"> Get book count</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Weather" class="nav-link" active-class="active"> Weather information </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/CountBookAPI" class="nav-link" active-class="active">Count Book API</router-link>
          </li>
          <li ckass="nav-item">
            <router-link to="/AllBookAPI" class="nav-link" active-class="active">All Book API</router-link>
          </li>
        </ul>
      </header>
    </div>
  </template>