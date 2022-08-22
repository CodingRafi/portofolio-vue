<template>
    <ShowUser>
        <div class="container container-skill" style="width: 87%;min-height: 100vh;padding-top: 6rem;">
            <div class="container p-0" style="width: fit-content;">
                <h1 class="h1-skills">Skills</h1>
            </div>
            <div class="row row-skill">
                <div class="col-5 col-detail d-flex align-items-center justify-content-center">
                    <div class="card card-detail-skill"
                        style="width: 20rem;transition: 1s;box-shadow: 0 10px 20px 0 rgb(0 0 0 / 25%);background-color: rgb(46 46 46);border-radius: 3px;    border-radius: 5px;overflow: hidden;color: #f2f2f2;">
                        <div class="card-body">
                            <button style="position: absolute;right: 1rem;top: 1rem;border: none;background-color: transparent;"
                                @click.prevent="closeDetailSkill"><i class='bx bx-x icon-close-detail-skill'
                                    style="font-size: 1.5rem;"></i></button>
                            <div class="card"
                                style="width: 35%;padding: 1rem;box-sizing: border-box;border-radius: 50%;display: flex;justify-content: center;align-items: center;margin: auto;">
                                <img src="" alt="" style="width: 5rem;object-fit: cover;"
                                    class="img-logo-card">
                            </div>
                            <h5 class="card-title text-center mt-3 card-h5-skill-detail"
                                style="color:#FBAF0E;font-weight: 600;">HTML5</h5>
                            <p class="card-text text-center deskripsi-detail-skill">Some quick example text to build on
                                the card title and make up
                                the bulk of
                                the card's content.</p>
                            <!-- <div class="d-grid gap-2 mt-2">
                                <Link class="btn btn-warning link-skill" href="#">All Project With HTML5</Link>
                            </div> -->
                        </div>
                    </div>
                </div>
                <div class="col-7 col-bola-skill">
                    <div class="container-ball"></div>
                </div>
            </div>
        </div>
    </ShowUser>
</template>

<script setup>
import ShowUser from '@/Layouts/ShowUser.vue';
import { ref, onMounted, reactive } from 'vue';
import TagCloud from "TagCloud";
import axios from 'axios';

const texts = [];

onMounted(() => {
    const container = document.querySelector('.container-ball');
    var x = window.matchMedia("(max-width: 300px)");
    let radius = 240;

    if (x.matches) {
        radius = 200;
    }

    axios.get('https://codingrafiadmin.devlog.my.id/api/get-skills').then((response) => {
        for (let i = 0; i < response.data.length; i++) {
            texts.push(response.data[i].nama);
        }

        const options = {
            radius: radius,
            itemClass: "item",
        };

        TagCloud(container, texts, options);
        document.querySelector(".tagcloud").style.margin = "auto";

        //? Jika salah satu skill di click
        const skills = document.querySelectorAll('.tagcloud span');
        skills.forEach((e, i) => {
            e.addEventListener('click', function () {
                axios.get(`https://codingrafiadmin.devlog.my.id/api/skill/${i + 1}`).then((response) => {
                    document.querySelector('.img-logo-card').setAttribute('src', '');
                    document.querySelector('.img-logo-card').setAttribute('src', `https://codingrafiadmin.devlog.my.id/storage/${response.data.logo}`);
                    document.querySelector('.card-h5-skill-detail').innerHTML = '';
                    document.querySelector('.card-h5-skill-detail').innerHTML = response.data.nama;
                    document.querySelector('.deskripsi-detail-skill').innerHTML = '';
                    document.querySelector('.deskripsi-detail-skill').innerHTML = response.data.deskripsi;
                })
                const containerSkill = document.querySelector('.container-skill');
                containerSkill.classList.add('show');
            })
        });
    })  

     if (localStorage.getItem('mode') == 'light') {
        document.querySelector('body').classList.add('light');
    } else {
        document.querySelector('body').classList.remove('light');
    }
})

const closeDetailSkill = (e) => {
    const containerSkill = document.querySelector('.container-skill');
    containerSkill.classList.remove('show');
}
</script>