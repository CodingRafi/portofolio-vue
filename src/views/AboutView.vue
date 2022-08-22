<template>
    <ShowUser>
        <div class="container m-auto container-about" style="width: 82%;padding: 10.1rem 3rem 4rem 3rem;">
            <div class="row row-about">
                <div class="col-5 about-image">
                    <div class="card card-about-me"
                        style="width: 18rem;background: transparent;border: 7px solid #fbaf0e;">
                        <img src="" class="card-img-top image-about-page" alt="..."
                            style="translate: 2rem -2.2rem;border-radius: 6px;border: 6px solid #5150509c;">
                    </div>
                </div>
                <div class="col-7 text-about" style="padding: 1.5rem 0;">
                    <div class="bungkus-h1-about">
                        <h1 class="h1-aboutme">About Me</h1>
                    </div>

                    <div class="deskripsi-about">
                        <p style="padding: .5rem 0;" class="p-about-me"></p>

                        <div class="container p-0">
                            <div class="row">
                                <div class="col-1 ms-3 p-0 ml-0 col-sosmed" v-if="facebook">
                                    <a :href="facebook" target="_blank">
                                        <div class="icon-sosmed">
                                            <div class="tooltip">Facebook</div>
                                            <span><i class='bx bxl-facebook'></i></span>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-1 ms-3 p-0 col-sosmed" v-if="instagram">
                                    <a :href="instagram" target="_blank">
                                        <div class="icon-sosmed">
                                            <div class="tooltip">Instagram</div>
                                            <span><i class='bx bxl-instagram-alt'></i></span>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-1 ms-3 p-0 col-sosmed" v-if="linkedin">
                                    <a :href="linkedin" target="_blank">
                                        <div class="icon-sosmed">
                                            <div class="tooltip">Linkedin</div>
                                            <span><i class='bx bxl-linkedin-square'></i></span>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-1 ms-3 p-0 col-sosmed" v-if="github">
                                    <a :href="github" target="_blank">
                                        <div class="icon-sosmed">
                                            <div class="tooltip">Github</div>
                                            <span><i class='bx bxl-github'></i></span>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-1 ms-3 p-0 col-sosmed" v-if="twitter">
                                    <a :href="twitter" target="_blank">
                                        <div class="icon-sosmed">
                                            <div class="tooltip">Twitter</div>
                                            <span><i class='bx bxl-twitter'></i></span>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-1 ms-3 p-0 col-sosmed" v-if="youtube">
                                    <a :href="youtube" target="_blank">
                                        <div class="icon-sosmed">
                                            <div class="tooltip">Youtube</div>
                                            <span><i class='bx bxl-youtube'></i></span>
                                        </div>
                                    </a>
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
import aboutPng from '@/assets/image/about.png'

let facebook = ref();
let instagram = ref();
let linkedin = ref();
let github = ref();
let twitter = ref();
let youtube = ref();

onMounted(() => {
    document.querySelector('.image-about-page').src = aboutPng;

    axios.get('https://codingrafiadmin.devlog.my.id/api/get_configurasi').then((response) => {
        document.querySelector('.p-about-me').innerHTML = response.data.configurasis[0].value;
        facebook.value = response.data.configurasis[1].value;
        linkedin.value = response.data.configurasis[3].value;
        instagram.value = response.data.configurasis[2].value;
        github.value = response.data.configurasis[4].value;
        twitter.value = response.data.configurasis[5].value;
        youtube.value = response.data.configurasis[6].value;
    })
    
    if (localStorage.getItem('mode') == 'light') {
        document.querySelector('body').classList.add('light');
    } else {
        document.querySelector('body').classList.remove('light');
    }
})
</script>