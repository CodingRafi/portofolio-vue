<template>
    <ShowUser>
        <div class="container" style="width: 87%;min-height: 100vh;padding-top: 6rem;">
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
</template>

<script setup>
import ShowUser from '@/Layouts/ShowUser.vue';
import { ref, onMounted, reactive } from 'vue';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';
import axios from 'axios';

const dataMessage = reactive({
    name: null,
    email: null,
    subject: null,
    message: null
});

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

onMounted(() => {
    if (localStorage.getItem('mode') == 'light') {
        document.querySelector('body').classList.add('light');
    } else {
        document.querySelector('body').classList.remove('light');
    }
})
</script>