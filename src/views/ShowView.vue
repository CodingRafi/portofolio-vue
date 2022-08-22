<template>
    <ShowUser>
        <div class="container" style="padding-top: 6rem;min-height: 100vh;width: 87%;">
            <h2 style="font-size: 1.75rem;color: #CF9419;font-weight: 600;" class="mb-3">Detail Project</h2>
            <div class="row">
                <div class="col-7">
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div v-for="no in fotos.length" :class="`carousel-item ${(no == 1) ? 'active' : ''}`">
                                <img :src="`https://codingrafiadmin.devlog.my.id/storage/${fotos[no - 1].nama}`" class="d-block w-100" alt="...">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div class="col-5">
                    <h5 class="mb-3" style="color: #cf9419;font-weight: 600;font-size: 1.4rem;">{{ project.nama }}</h5>
                    <p class="card-text mb-2"><span style="color: #cf9419;font-weight: 600;">Role : </span>{{
                            project.role
                    }}</p>

                    <h5 class="mt-3 mb-2" style="color: #cf9419;font-weight: 600;font-size: 1rem;">Skills</h5>
                    <div class="container p-0 d-flex flex-wrap" style="gap: .5rem;">
                        <div class="card ms-2" style="padding: .7rem;" v-for="skil in skills">
                            <img :src="`https://codingrafiadmin.devlog.my.id/storage/${skil.logo}`" alt="" style="width: 1.7rem;object-fit: cover;">
                        </div>
                    </div>

                    <h5 class="mb-2 mt-3" style="color: #cf9419;font-weight: 600;font-size: 1rem;">Deskripsi</h5>
                    <p class="card-text">{{ project.deskripsi }}</p>

                    <div class="d-grid gap-2 d-md-block mt-3">
                        <a class="btn btn-warning me-md-2 text-white" :href="project.link_github" target="_blank"
                            type="button" style="background-color: #ffab00;" v-if="project.link_github">Link Github</a>
                        <a class="btn btn-warning text-white" :href="project.link_website" target="_blank" type="button"
                            style="background-color: #ffab00;" v-if="project.link_website">Link Website</a>
                        <a class="btn btn-warning text-white" :href="project.link_figma" target="_blank" type="button"
                            style="background-color: #ffab00;" v-if="project.link_figma">Link Figma</a>
                        <a class="btn btn-warning text-white" :href="project.link_trello" target="_blank" type="button"
                            style="background-color: #ffab00;" v-if="project.link_trello">Link Trello</a>
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
import { useRoute } from 'vue-router';

const project = ref([]);
const skills = ref([]);
const fotos = ref([]);
const route = useRoute();

onMounted(() => {
    axios.get(`https://codingrafiadmin.devlog.my.id/api/project/${route.params.id}`).then((response)=>{
        project.value = response.data.project[0];
        fotos.value = response.data.fotos[0];
        skills.value = response.data.skills[0];
    })

    if (localStorage.getItem('mode') == 'light') {
        document.querySelector('body').classList.add('light');
    } else {
        document.querySelector('body').classList.remove('light');
    }
})

</script>