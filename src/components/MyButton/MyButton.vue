<template>
  <button :class="'btn ' + variant" class="reddish" @click="onClick">
    <slot>Default Button</slot>
  </button>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    variant: {
      type: String,
      default: 'primary',
    },
  },
  methods: {
    onClick() {
      console.log('click event is not sent')
    },
  },
};
</script>

<style scoped>
.btn {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
}
.primary {
  background-color: #007bff;
  color: white;
}
.secondary {
  background-color: #6c757d;
  color: white;
}
.reddish {
  color: red;
}
</style>