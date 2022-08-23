<template>
    <div class="container-nav container-fluid mt-4 position-fixed d-flex justify-content-center"
        style="padding: 0 3rem;z-index: 999;">
        <nav class="navbar navbar-expand-lg nav-portofolio" style="border-radius: 3px; width: 90%;">
            <div class="container ps-4">
                <div class="nav-logo">
                    <router-link class="navbar-brand link-brand" to="/">CodingRafi</router-link>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i class='bx bx-menu' style="font-size: 2rem;position: absolute;top: .9rem;right: 1rem;"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/about-me">About Me</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/skills">Skills</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/appreciation">Appreciation</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/project">Project</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/contact">Contact</router-link>
                        </li>
                    </ul>
                </div>
                <div class="nav-contact d-flex">
                    <button type="button"
                        style="display:block; width: 2rem;height: 2rem;border-radius: 50%;display: flex;justify-content: center;align-items: center;background-color: #f2f2f2;border: none;"
                        @click.prevent="mode">
                        <span class="icon-moon" style="display: none;"><i class='bx bxs-moon'
                                style="color: #8e9baa;"></i></span>
                        <span class="icon-sun"><i class='bx bxs-sun' style="color: #8e9baa;"></i></span>
                    </button>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue';
const modeNow = ref();

const mode = () => {
    if (localStorage.getItem('mode')) {
        if (localStorage.getItem('mode') == 'dark') {
            localStorage.setItem('mode', 'light');
            document.querySelector('.icon-sun').style.display = 'none';
            document.querySelector('.icon-moon').style.display = 'block';
        } else {
            localStorage.setItem('mode', 'dark');
            document.querySelector('.icon-moon').style.display = 'none';
            document.querySelector('.icon-sun').style.display = 'block';
        }
    } else {
        localStorage.setItem('mode', 'light');
        document.querySelector('.icon-sun').style.display = 'none';
        document.querySelector('.icon-moon').style.display = 'block';
    }

    if (localStorage.getItem('mode') == 'light') {
        document.querySelector('body').classList.add('light');
        modeNow.value = 'light';
    } else {
        document.querySelector('body').classList.remove('light');
        modeNow.value = 'dark';
    }
}
</script>