<script setup>
import { watchEffect } from '@vue/runtime-core';
import AddInputValue from './addInputValue.vue';
import DropDown from './dropDown.vue';
import InputField from './inputField.vue';

const props = defineProps(['field'])


</script>


<template>
    <div>

        <DropDown :field="props.field" v-if="props.field.type === 'dropdown'"/>

        <InputField  :field="props.field" v-if="props.field.type === 'input'"/>

        <AddInputValue  :field="props.field" v-if="props.field.type === 'add-input'"/>

    </div>
</template>


<style lang="scss" scoped>

</style>