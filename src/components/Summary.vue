<template>
  <div class="Summary">
    <h1>Summary</h1>
    <ol class="Summary__list">
      <li class="Summary__item" v-for="(item, index) in list" :key="index" :class="{ 'Summary__item--odd': isOdd(index) }">
        <div>
          <h2>Query from {{ item.first_name }} {{ item.surname }}</h2>
          <p>Email: <a :href="`mailto:${item.email_address}`">{{ item.email_address }}</a></p>
          <p>Message: {{ item.customer_query }} </p>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'Summary',
  props: {
    list: {
      type: Array
    }
  },
  methods: {
    isOdd (index) {
      return index % 2 == 0
    }
  }
}
</script>

<style lang="scss">

  @import '../scss/_variables.scss';

  .Summary {
    &__list {
      list-style: none;
      text-align: left;
      margin: 0;
    }
    &__item {
      background-color: #ddd;
      padding: $padding / 2 $padding;
      margin-bottom: $padding;
      &--odd {
        background-color: #eee;
      }
    }
  }

</style>
