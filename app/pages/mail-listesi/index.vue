<script setup lang="ts">
const email = ref('')
const firstName = ref('')
const lastName = ref('')

const loading = ref(false)
const success = ref(false)
const error = ref('')

const handleSubmit = async () => {
    loading.value = true
    error.value = ''
    success.value = false

    try {
        await $fetch('/api/subscribe', {
            method: 'POST',
            body: {
                email: email.value,
                name: firstName.value,
                last_name: lastName.value
            }
        })

        success.value = true
        email.value = ''
        firstName.value = ''
        lastName.value = ''

        setTimeout(() => {
            success.value = false
        }, 5000)
    } catch (err: any) {
        error.value = err.data?.message || 'Bir hata oluştu'
    } finally {
        loading.value = false
    }
}
</script>
<template>
    <main class="o-page-grid o-grid o-grid--flush" role="main" id="site-main" tabindex="-1">
        <div class="o-page-grid__header" id="page-header">
            <header class="c-page-header o-grid">
                <div class="c-page-header__wrapper">
                    <div class="c-page-header__text">
                        <h1 class="c-page-header__title">E-Posta Listesi</h1>
                    </div>
                </div>
            </header>
        </div>
        <div class="o-page-grid__content" id="page-content">
            <div class="o-block">
                <div class="o-grid o-grid__item o-grid__item--full">
                    <section class="o-grid__item o-grid__item--full o-grid">

                    </section>
                    <div class="o-grid__item h-colstart--1 h-colend--7 h-tablet-colend--10 h-phone-colend--13">
                        <form @submit.prevent="handleSubmit" id="mailing-list-form" class="o-form">
                            <fieldset class="o-form__fieldset">
                                <legend class="h-accessibility">Bilgileriniz</legend>
                                <div class="c-form-field--text">
                                    <label for="firstName" class="c-form-field__legend">Ad <span
                                            class="c-form-field__required">
                                            *
                                        </span></label>
                                    <div class="c-form-field__input">
                                        <input type="text" id="firstName" v-model="firstName" placeholder="Adınız"
                                            :disabled="loading">
                                    </div>
                                </div>
                                <div class="c-form-field--text">
                                    <label for="firstName" class="c-form-field__legend">Soyad <span
                                            class="c-form-field__required">
                                            *
                                        </span></label>
                                    <div class="c-form-field__input">
                                        <input type="text" id="lastName" v-model="lastName" placeholder="Soyadınız"
                                            :disabled="loading">
                                    </div>
                                </div>
                                <div class="c-form-field--text">
                                    <label for="firstName" class="c-form-field__legend">E-Posta <span
                                            class="c-form-field__required">
                                            *
                                        </span></label>
                                    <div class="c-form-field__input">
                                        <input type="text" id="firstName" v-model="email" placeholder="E-Posta"
                                            :disabled="loading">
                                    </div>
                                </div>
                            </fieldset>
                            <button class="o-form__submit o-button o-button--regular o-button--submit" type="submit"
                                :disabled="loading">{{ loading ? 'Gönderiliyor...' : 'Gönder' }}</button>
                            <p v-if="success" class="h-text--success">E-Posta listemize kaydedildi.</p>
                            <p v-if="error" class="h-text--error">{{ error }}</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>