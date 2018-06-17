<template>
  <div
      class="field__group"
      :class="{ active: isActive }"
      @click="onClick">
    <div class="field__group__header">
      <label class="field__group__label">
        {{ name }}
        <span class="required" v-if="required">*</span>
      </label>
    </div>
    <textarea
        v-if="type === 'textarea'"
        class="field__group__input"
        :placeholder="placeholder"
        :value="value"
        @input="onInput($event.target.value)"
        @focus="isActive = true"
        @blur="isActive = false"
        spellcheck="false"
        rows="5"
    />
    <input
        v-else
        class="field__group__input"
        :placeholder="placeholder"
        :autofocus="autofocus"
        :value="value"
        @input="onInput($event.target.value)"
        @focus="isActive = true"
        @blur="isActive = false"
        type="text"
        spellcheck="false">
  </div>
</template>

<script>
  export default {
    name: 'field',

    props: [
      'name',
      'value',
      'type',
      'placeholder',
      'autofocus',
      'maxLength',
      'showCharacters',
      'disabled',
      'required'
    ],

    data: () => ({
      isActive: false
    }),

    methods: {
      onClick() {
        const input = this.$el.children[1]
        input.focus()
      },

      onInput(value) {
        this.$emit('input', value)
      }

    }

  }
</script>

<style lang="scss">
  @import '../../../scss/_variables.scss';

  .field {
    &__group {
      display: flex;
      flex-direction: column;
      flex: 1;
      margin-bottom: 10px;
      background-color: #FFF;
      border: 1px solid #000;
      padding: {
        bottom: 10px;
        right: 10px;
        left: 10px;
        top: 10px;
      }
      transition: border-color $transition;

      &.active {
        border-color: palette(orange);
      }

      &__header {
        display: flex;
        margin-bottom: $padding / 4;
      }

      &__label {
        color: #000;
        font: {
          size: .8rem;
          weight: 500;
        }
        margin-bottom: 5px;
        text-transform: uppercase;
        transition: color $transition;
      }

      &__limiter {
        margin-bottom: $padding / 4;
        display: block;
        font-size: 0.75em;
        text-align: right;
        margin-left: auto;
        color: #999;
      }

      &__input {
        border: 0;
        padding: 0;
        color: #000;
        background-color: transparent;
        font: {
          size: 1rem;
        }
        outline: 0;
        font-family: $serifFont;
        font-weight: 300;

        &::placeholder {
          color: grey;
          transition: color $transition;
        }
      }
    }
  }

</style>
