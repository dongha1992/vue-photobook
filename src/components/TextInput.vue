<template>
  <div>
    <label
      class="block text-gray-700 text-sm font-bold mb-2"
      :for="modelValue"
      >{{ name }}</label
    >
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      :type="type"
      :id="modelValue"
      :for="modelValue"
      :value="modelValue"
      @input="updateValue($event.target.value)"
    />
  </div>
</template>

<script>
  export default {
    name: 'TextInput',
    props: {
      name: String,
      modelValue: String,
      type: String,
    },
    methods: {
      updateValue(modelValue) {
        this.$emit('input', modelValue);
      },
    },
  };
</script>

<style scoped></style>
