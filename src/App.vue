<script>
import MyHeader from './components/MyHeader.vue';

export default {
  components: {
    MyHeader
  }
}
</script>

<template>
  <header>
    <div>
      <!-- <my-header>
        <template #title>
          Test Title
        </template>
        <template #sub-title>
          Test subtitle
        </template>
      </my-header> -->
      <MyHeader>
        <template #title>
          Test Title
        </template>
        <template #sub-title>
          Test subtitle
        </template>
      </MyHeader>
    </div>
  </header>
</template>

