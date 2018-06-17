<template>
  <button
      :class="cssClasses"
      :type="type"
      @click="onClick">
    <slot/>
  </button>
</template>

<script>
  export default {
    name: 'button',

    props: {
      text: {
        type: String
      },
      type: {
        type: String,
        default: 'button'
      },
      full: {
        type: Boolean,
        default: false
      }
    },

    data: () => ({}),

    computed: {
      cssClasses() {
        return `${this.type}${this.full ? ' button--full' : ''}`
      }
    },

    methods: {
      onClick(event) {
        this.$emit('click', event)
      }
    }

  }
</script>

<style lang="scss">
  @import '../../scss/_variables.scss';

  .button {
    text-transform: uppercase;
    display: inline-flex;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    padding: 0.75rem;
    letter-spacing: 0.094em;
    font-size: 1em;
    text-decoration: none;
    color: #FFF;
    background-color: #000;
    cursor: pointer;
    transition: all $transition;
    border-radius: 0;
    box-sizing: border-box;
    text-align: center;
    font-family: $serifFont;
    &--full {
      width: 100%;
    }
  }
</style>
