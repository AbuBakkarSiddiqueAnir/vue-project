<script setup>

import {ref, reactive, watchEffect} from 'vue'
const inputValue = ref('')

const props = defineProps(['field'])

</script>

<template>
    <div class="input--field_wrapper">
        <input class="input--field" placeholder="Enter text" type="text" v-model="inputValue">
        <span class="input--field_text">
            {{ props.field.name }}
        </span>
    </div>
</template>



<style lang="scss" scoped>
.input--field_wrapper{
    position: relative;
    margin-top:9px;
    .input--field_text{
        position:absolute;
        top:-14px;
        padding:2px 3px;
        left:10px;
        background:#fff;
        text-align: center;
        color: #636b6f;
    }
.input--field {
  color: #2e2f30;
  min-width: 260px;
  padding: 10px 20px 10px 10px;
  text-transform: none;
  font-weight: 300;
  margin-bottom: 7px;
  border: 1px solid rgb(197, 195, 195);
  border-radius: 4px;
  background-color: transparent;
  outline:none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

}
}

</style>