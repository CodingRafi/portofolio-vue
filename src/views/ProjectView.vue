<template>
    <ShowUser>
        <div class="container container-project" style="width: 87%;min-height: 100vh;padding-top: 6rem;">
            <div class="container p-0">
                <div class="row">
                    <div class="col-10">
                        <h1 class="h1-achivement">Projects</h1>
                    </div>
                    <div class="col col-button-project">
                        <!-- <Link class="btn btn-warning" href="#">All Projects</Link> -->
                    </div>
                </div>
            </div>
            <div class="container p-0">
                <div class="row row-project-all">
                    <router-link class="p-0" :to="`/project/${projects[no - 1].id}`" v-for="no in projects.length"
                        style="width: 31rem;margin: 0 1.3rem;">
                        <div class="card mb-3 mt-3 card-project" style="background-color: rgb(46 46 46);color: #fff;">
                            <img :src="`https://codingrafiadmin.devlog.my.id/storage/${fotoProject[no - 1][0].nama}`"
                                class="card-img-top" alt="...">
                            <div class="card-body card-body-card-project" style="height: 6rem;">
                                <h5 class="mb-2" style="color: #cf9419;font-weight: 700;font-size: 1.2rem;">{{
                                        projects[no - 1].nama
                                }}</h5>
                                <p class="card-text text-truncate">{{ projects[no - 1].deskripsi }}</p>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </ShowUser>
</template>

<script setup>
import ShowUser from '@/Layouts/ShowUser.vue';
import axios from 'axios';
import { ref, onMounted, reactive } from 'vue';

let projects = ref([]);
let skilProject = ref([]);
let fotoProject = ref([]);

onMounted(() => {
    axios.get('https://codingrafiadmin.devlog.my.id/api/get-all-projects').then((response) => {
        for (let i = 0; i < response.data.projects.length; i++) {
            projects.value.push(response.data.projects[i]);
        }
        for (let x = 0; x < response.data.skills.length; x++) {
            skilProject.value.push(response.data.skills[x]);
        }
        for (let y = 0; y < response.data.fotos.length; y++) {
            fotoProject.value.push(response.data.fotos[y]);
        }
    })

    if (localStorage.getItem('mode') == 'light') {
        document.querySelector('body').classList.add('light');
    } else {
        document.querySelector('body').classList.remove('light');
    }
})
</script>