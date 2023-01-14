

<script setup>

import { onMounted, reactive, ref, watchEffect } from 'vue'

const selectedOption = ref( '')
const showMenu = ref(false)
const props = defineProps(['field'])


watchEffect(()=>{
  console.log(props.field)
})
function toggleMenu(){
    console.log(showMenu.value)
    showMenu.value = !showMenu.value
}
function updateOption(option){
    selectedOption.value = option.name
    showMenu.value = false;
}

onMounted(() => {
  selectedOption.value = props.field.name
})

</script>


<template>
    <div class="btn-group" >
        <li @click="toggleMenu()" class="dropdown-toggle" v-if="selectedOption !== undefined">
          {{ selectedOption }}

          <span class="caret"></span>
        </li>
        <span class="input--field_text">
            {{ props.field.name }}
        </span>

        <li @click="toggleMenu()" class="dropdown-toggle dropdown-toggle-placeholder" v-if="selectedOption === undefined">
          <!-- {{placeholderText}} -->
          placeholderText
          <span class="caret"></span>
        </li>

        <ul class="dropdown-menu" v-if="showMenu">
            <li v-for="(option, idx) in props.field.options" :key="idx">
                <a href="javascript:void(0)" @click="updateOption(option)">
                    {{ option.name }}
                </a>
            </li>
        </ul>
    </div>
</template>



<style scoped lang="scss">
.btn-group {
  min-width: 260px;
  height: 40px;
  position: relative;
  margin: 10px 1px;
  display: inline-block;
  vertical-align: middle;
}

.input--field_text{
        position:absolute;
        top:-14px;
        padding:2px 3px;
        left:10px;
        background:#fff;
        text-align: center;
        color: #636b6f;
    }
.btn-group a:hover {
  text-decoration: none;
}
.dropdown-toggle {
  color: #101111;

  min-width: 260px;
  padding: 10px 20px 10px 10px;
  text-transform: none;
  font-weight: 600;
  margin-bottom: 7px;
  border: 1px solid rgb(197, 195, 195);
  border-radius: 4px;
  background-image: linear-gradient(#009688, #009688), linear-gradient(#D2D2D2, #D2D2D2);
  background-size: 0 2px, 100% 1px;
  background-repeat: no-repeat;
  background-position: center bottom, center calc(100% - 1px);
  background-color: transparent;
  transition: background 0s ease-out;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dropdown-toggle:hover {
//   background: #e1e1e1;
  cursor: pointer;
}
.dropdown-menu {
  position: absolute;
  top: 48px;
  left: 0;
  z-index: 1000;
  float: left;
  min-width: 260px;
  padding: 5px 0;
  margin: 2px 0 0;
  list-style: none;
  font-size: 14px;
  text-align: left;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  background-clip: padding-box;
}
.dropdown-menu > li > a {
  padding: 10px 30px;
  display: block;
  clear: both;
  font-weight: normal;
  line-height: 1.6;
  color: #333333;
  white-space: nowrap;
  text-decoration: none;
}
.dropdown-menu > li > a:hover {
  background: #efefef;
  color: #409FCB;
}
.dropdown-menu > li {
  overflow: hidden;
  width: 100%;
  position: relative;
  margin: 0;
}
.caret {
  width: 0;
  position: absolute;
  top: 19px;
  height: 0;
  margin-left: -24px;
  vertical-align: middle;
  border-top: 4px dashed;
  border-top: 4px solid black;
  border-right: 4px solid black;
  border-left: 4px solid black;
  right: 10px;
}
li {
    list-style: none;
}
</style>