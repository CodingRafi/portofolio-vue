<template>
    <ShowUser>

        <div class="container container-penghargaan" style="width: 87%;min-height: 100vh;padding-top: 6rem !important;">
            <h1 class="h1-achivement">Appreciation</h1>
            <div class="container p-0">
                <div class="card text-center" style="background-color: transparent;box-shadow: none;">
                    <div class="card-header" style="padding: 1rem;">
                        <ul class="nav nav-pills card-header-pills">
                            <li class="nav-item">
                                <a class="nav-link active appreciation-link" data-bs-toggle="tab"
                                    href="#certificate">Certificate</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link appreciation-link" data-bs-toggle="tab"
                                    href="#achievement">Achievement</a>
                            </li>
                        </ul>
                    </div>
                    <div class="card-body tab-content p-0" style="min-height: 26rem;">
                        <div class="tab-pane" id="achievement">
                            <div class="container p-0">
                                <div class="row">
                                    <div class="flip-card" v-for="penghargaan in achievements[0]">
                                        <div class="flip-card-inner">
                                            <div class="flip-card-front">
                                                <img :src="`https://codingrafiadmin.devlog.my.id/storage/${penghargaan.image}`" alt="Avatar"
                                                    style="width:22rem;height:13rem;object-fit: cover;">
                                            </div>
                                            <div class="flip-card-back">
                                                <h1 class="flip-card-h1">{{ penghargaan.nama }}</h1>
                                                <p class="mt-2 card-text">{{ penghargaan.deskripsi }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane active" id="certificate">
                            <div class="row">
                                <div class="flip-card" v-for="sertifikat in sertifikats[0]">
                                    <div class="flip-card-inner">
                                        <div class="flip-card-front">
                                            <img :src="`https://codingrafiadmin.devlog.my.id/storage/${sertifikat.image}`" alt="Avatar"
                                                style="width:22rem;height:13rem;object-fit: cover;">
                                        </div>
                                        <div class="flip-card-back">
                                            <h1 class="flip-card-h1" style="font-size: 1.1rem;">{{ sertifikat.nama }}</h1>
                                            <p class="mt-3 card-text">{{ sertifikat.deskripsi }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ShowUser>
</template>

<script setup>
import ShowUser from '@/Layouts/ShowUser.vue';
import axios from 'axios';
import { ref, onMounted, reactive } from 'vue';

let achievements = ref([]);
let sertifikats = ref([]);

onMounted(() => {
    axios.get('https://codingrafiadmin.devlog.my.id/api/get-achivement').then((response) => {
        achievements.value.push(response.data.data)
    })

    axios.get('https://codingrafiadmin.devlog.my.id/api/get-sertifikat').then((response) => {
        sertifikats.value.push(response.data.data)
    })

    if (localStorage.getItem('mode') == 'light') {
        document.querySelector('body').classList.add('light');
    } else {
        document.querySelector('body').classList.remove('light');
    }
})

</script>