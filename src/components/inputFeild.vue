<script setup>

import {ref, reactive, watchEffect} from 'vue'
const inputValue = ref('')

watchEffect(()=>{
    console.log(inputValue.value)
}
)

</script>

<template>
    <div class="input--feild_wrapper">
        <input class="input--field" placeholder="Customer SBC Name" type="text" v-model="inputValue">
    </div>
</template>



<style lang="scss" scoped>
.input--feild_wrapper{
    position: relative;
    .input--field {
  color: #636b6f;
  min-width: 160px;
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