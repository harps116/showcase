
<template>
  <section-container title="Contact">
    <div slot="content">
      <contact-form/>
    </div>
  </section-container>
</template>

<script>
import ContactForm from "~/components/partials/ContactForm";
import SectionContainer from "~/components/containers/Section";
export default {
  components: {
    ContactForm,
    SectionContainer
  }
};
</script>
