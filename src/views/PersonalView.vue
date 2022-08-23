<template>
    <ShowUser>
        <div class="container container-profile-1" style="padding: 9rem 7rem 5rem 7rem;">
            <div class="row row-profile">
                <div class="col-6 text">
                    <div class="container-fluid p-0" style="min-height: 20rem;">
                        <h1 class="h1nya">
                            Hi,
                            <br>
                            I'M Rafi
                            <br>
                            <span class="typed-text">{{ typeValue }}</span>
                            <span class="cursor" :class="{ 'typing': typeStatus }">&nbsp;</span>
                        </h1>
                    </div>
                    <div class="container p-0 container-button-home-cv">
                        <button class="button button--hyperion">
                            <a href="https://codingrafiadmin.devlog.my.id/download" target="_blank" style="text-decoration: none;">
                                <span>
                                    <span>Download CV</span>
                                </span>
                            </a>
                        </button>
                    </div>
                </div>
                <div class="col-6 image">
                    <div class="container d-flex justify-content-center position-relative">
                        <img src="" alt="" class="position-absolute myimg"
                            style="width: 23rem;top: -2rem;">
                    </div>
                </div>
            </div>
        </div>

        <div class="container m-auto container-about" style="width: 82%;padding: 5rem 3rem;">
            <div class="row row-about">
                <div class="col-5 about-image">
                    <div class="card card-about-me"
                        style="width: 18rem;background: transparent;border: 7px solid #fbaf0e;">
                        <img src="" class="card-img-top about-png-home" alt="..."
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

        <div class="container container-skill mb-3" style="width: 87%;">
            <div class="container p-0" style="width: fit-content;">
                <h1 class="h1-skills">Skills</h1>
            </div>
            <div class="container container-skill-2">
                <div class="row row-skill">
                    <div class="col-5 col-detail d-flex align-items-center justify-content-center">
                        <div class="card card-detail-skill"
                            style="width: 20rem;transition: 1s;box-shadow: 0 10px 20px 0 rgb(0 0 0 / 25%);background-color: rgb(46 46 46);border-radius: 3px;    border-radius: 5px;overflow: hidden;color: #f2f2f2;">
                            <div class="card-body">
                                <button style="position: absolute;right: 1rem;top: 1rem;border: none;background-color: transparent;"
                                    @click.prevent="closeDetailSkill"><i class='bx bx-x icon-close-detail-skill'
                                        style="font-size: 1.5rem;"></i></button>
                                <div class="card"
                                    style="width: 6rem;padding: 1rem;box-sizing: border-box;border-radius: 50%;display: flex;justify-content: center;align-items: center;margin: auto;overflow: hidden;height: 6rem;">
                                    <img src="" alt="" style="width: 4rem;object-fit: cover;"
                                        class="img-logo-card">
                                </div>
                                <h5 class="card-title text-center mt-3 card-h5-skill-detail"
                                    style="color:#FBAF0E;font-weight: 600;">HTML5</h5>
                                <p class="card-text text-center deskripsi-detail-skill">Some quick example text to build on
                                    the card title and make up
                                    the bulk of
                                    the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-7 col-bola-skill">
                        <div class="container-ball"></div>
                    </div>
                </div>    
            </div>
        </div>

        <div class="container container-penghargaan" style="width: 87%;">
            <h1 class="h1-achivement">Appreciation</h1>
            <div class="container p-0">
                <div class="card text-center" style="background-color: transparent;box-shadow: none;border: none;">
                    <div class="card-header" style="padding: 1rem;background-color: transparent;border: none;">
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
                                                    style="width:20.5rem;height:13rem;object-fit: cover;">
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
                                                style="width:20.5rem;height:13rem;object-fit: cover;">
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

        <div class="container mt-5 container-project" style="width: 87%;min-height: 90vh;" v-if="projects.length > 0">
            <div class="container p-0">
                <div class="row">
                    <div class="col-10">
                        <h1 class="h1-achivement">Projects</h1>
                    </div>
                    <div class="col">
                        <router-link to="/project" class="btn btn-warning col-button-project">All Projects</router-link>
                    </div>
                </div>
            </div>
            <div class="container mt-3 p-0">
                <div class="row row-project-all">
                    <router-link class="p-0 link-project" :to="`/project/${projects[no - 1].id}`" v-for="no in projects.length"
                        style="width: 31rem;text-decoration: none;margin: .5rem;">
                        <div class="card mb-3 mt-3 card-project" style="background-color: rgb(46 46 46);color: #fff;">
                            <img :src="`https://codingrafiadmin.devlog.my.id/storage/${fotoProject[no - 1][0].nama}`" class="card-img-top" alt="...">
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

        <div class="container" style="width: 87%;min-height: 85vh;">
            <div class="container-h1-contact-me" style="width: fit-content;margin: auto;">
                <h1 class="h1-achivement h1-contact-me">Contact Me</h1>
            </div>
            <div class="container mt-2 container-contact-me-2">
                <div class="row justify-content-center align-items-center">
                    <div class="card card-contact" style="width: 35rem;">
                        <div class="card-body">
                            <div class="alert alert-warning alert-dismissible fade show alert-message" role="alert"
                                style="display: none;">
                                <p class="message m-0"></p>
                                <button type="button" class="btn-close" data-bs-dismiss="alert"
                                    aria-label="Close"></button>
                            </div>
                            <div class="container p-0">
                                <div class="row">
                                    <div class="col-6 col-input-contact">
                                        <InputText class="input-contact input-gabungan" type="text" placeholder="Name"
                                            v-model="dataMessage.name" />
                                    </div>
                                    <div class="col-6 col-input-contact">
                                        <InputText class="input-contact input-gabungan" type="email" placeholder="Email"
                                            v-model="dataMessage.email" />
                                    </div>
                                </div>
                            </div>
                            <InputText class="input-contact mt-3 input-gabungan" type="text" placeholder="Subject"
                                v-model="dataMessage.subject" />
                            <Textarea class="mt-3 input-gabungan" placeholder="Message"
                                style="width: 100%;border: none;" v-model="dataMessage.message" rows="5" />
                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <Button @click.prevent="sendMessage" label="Send" class="p-button-warning text-white"
                                    style="font-weight: 600;" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ShowUser>

    <!-- <ring-loader  :color="color" :size="size"></ring-loader> -->
</template>

<script setup>
import ShowUser from '@/Layouts/ShowUser.vue';
import { ref, onMounted, reactive } from 'vue';
import TagCloud from "TagCloud";
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';
import axios from 'axios';
import { RouterLink, RouterView } from 'vue-router'
import profilBg from '@/assets/image/profilBg.png'
import aboutPng from '@/assets/image/about.png'
// import RingLoader from 'vue-spinner/src/RingLoader.vue'

let typeValue = ref('');
let typeStatus = false;
let typeArray = ['Frontend Web Developer', 'Backend Web Developer', 'Wordpress Developer', 'Mobile Developer', 'UI / UX Designer'];
let typingSpeed = 200;
let erasingSpeed = 100;
let newTextDelay = 2000;
let typeArrayIndex = 0;
let charIndex = 0;

// const color = '#fbaf0e';
// const size = '45px';
// const margin = '2px';
// const radius = '2px';

const dataMessage = reactive({
    name: null,
    email: null,
    subject: null,
    message: null
});

const texts = [];
let achievements = ref([]);
let sertifikats = ref([]);
let projects = ref([]);
let skilProject = ref([]);
let fotoProject = ref([]);

const typeText = () => {
    if (charIndex < typeArray[typeArrayIndex].length) {
        if (!typeStatus) {
            typeStatus = true;
        }

        typeValue.value += typeArray[typeArrayIndex].charAt(charIndex);
        charIndex++;

        setTimeout(typeText, typingSpeed);
    } else {
        typeStatus = false;
        setTimeout(eraseText, newTextDelay);
    }
}

const eraseText = () => {
    if (charIndex > 0) {
        if (!typeStatus) {
            typeStatus = true;
        }

        typeValue.value = typeArray[typeArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, erasingSpeed);
    } else {
        typeStatus = false;
        typeArrayIndex++;
        if (typeArrayIndex >= typeArray.length) {
            typeArrayIndex = 0;
        }

        setTimeout(typeText, typingSpeed + 1000);
    }
}

const closeDetailSkill = (e) => {
    const containerSkill = document.querySelector('.container-skill');
    containerSkill.classList.remove('show');
}

const sendMessage = () => {
    axios.post('https://codingrafiadmin.devlog.my.id/api/message', {
        name: dataMessage.name,
        email: dataMessage.email,
        subject: dataMessage.subject,
        message: dataMessage.message,
    }).then((response) => {
        document.querySelector('.message').innerHTML = response.data.message;
        document.querySelector('.alert-message').style.display = 'block';
        dataMessage.name = '';
        dataMessage.email = '';
        dataMessage.subject = '';
        dataMessage.message = '';
    })
}

let facebook = ref();
let instagram = ref();
let linkedin = ref();
let github = ref();
let twitter = ref();
let youtube = ref();

onMounted(() => {
    document.querySelector('.myimg').src = profilBg;
    document.querySelector('.about-png-home').src = aboutPng;

    typeText();

    // window.addEventListener('load', function(){
    //     document.querySelector('.v-spinner').style.opacity = '1';
    // })

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

    axios.get('https://codingrafiadmin.devlog.my.id/api/get-achivement').then((response) => {
        achievements.value.push(response.data.data)
    })

    axios.get('https://codingrafiadmin.devlog.my.id/api/get-sertifikat').then((response) => {
        sertifikats.value.push(response.data.data)
    })

    axios.get('https://codingrafiadmin.devlog.my.id/api/get-projects').then((response) => {
        for (let i = 0; i < response.data.projects.data.length; i++) {
            projects.value.push(response.data.projects.data[i]);
        }
        for (let x = 0; x < response.data.skills.length; x++) {
            skilProject.value.push(response.data.skills[x]);
        }
        for (let y = 0; y < response.data.fotos.length; y++) {
            fotoProject.value.push(response.data.fotos[y]);
        }

    })

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