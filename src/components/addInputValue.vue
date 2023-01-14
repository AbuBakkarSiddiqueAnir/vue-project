<script setup>

import { ref, reactive, watchEffect } from 'vue'
const inputValue = ref('');
const ips = ref(['192.23.12.213'])

watchEffect(() => {
    console.log(inputValue.value)
}
)

const addIp = () => {
    ips.value.push(inputValue.value)
    inputValue.value = ''
}

</script>

<template>
    <div class="input--field_wrapper">
        <div class="add--value">
            <input class="input--field" placeholder="IPS" type="text" v-model="inputValue">
            <div @click="addIp()" class="add--value__btn">
                <img src="../assets/Image/add.png" alt="">
            </div>

        </div>

        <span class="input--field_text">
            field name
        </span>

        <ul>
            <li v-for="(ip, idx) in ips" :key="idx">
                {{ ip }}
            </li>
        </ul>
    </div>
</template>



<style lang="scss" scoped>
.input--field_wrapper {
    position: relative;

    .input--field_text {
        position: absolute;
        top: -14px;
        padding: 2px 3px;
        left: 10px;
        background: #fff;
        text-align: center;
        color: #636b6f;
    }

    ul {
        margin-top: 7px;

        li {
            list-style: none;
            margin-top: 3px;
            font-size: 12px;
            line-height: 12px;
            color: #626364;
            font-weight: 400;
        }
    }

    .add--value {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 6px;

        .add--value__btn {
            cursor: pointer;
        }
    }

    .input--field {
        color: #2e2f30;
        min-width: 160px;
        padding: 10px 20px 10px 10px;
        text-transform: none;
        font-weight: 300;

        border: 1px solid rgb(197, 195, 195);
        border-radius: 4px;
        background-color: transparent;
        outline: none;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;

    }
}
</style>