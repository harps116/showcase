<template>
  <div>
    <section class="section-container active fadeIn">
      <div class="section-block">
        <div class="container">
          <section-title v-if="title" :title="title"></section-title>
        </div>
      </div>
      <slot name="content"></slot>
    </section>
  </div>
</template>

<script>
import SectionTitle from "~/components/layout/SectionTitle";
export default {
  props: {
    title: String
  },
  components: {
    SectionTitle
  }
};
</script>

<style scoped>
</style>