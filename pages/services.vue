<template>
  <section-container title="My Services">
    <div slot="content">
      <info-diamonds :data="services"/>
      <stepper title="Work Flow" :data="process"/>
      <!-- <section-container title="What people are saying..">
        <div slot="content">
          <carousel :data="testimonials"/>
        </div>
      </section-container>-->
      <!-- <section-container title="Get in Touch">
        <div slot="content">
          <contact-form/>
        </div>
      </section-container> -->
    </div>
  </section-container>
</template>

<script>
import Carousel from "~/components/sections/Carousel";
import ContactForm from "~/components/partials/ContactForm";
import InfoDiamonds from "~/components/sections/InfoDiamonds";
import Stepper from "~/components/sections/Stepper";
import SectionContainer from "~/components/containers/Section";

import process from "~/data/process";
import services from "~/data/services";
import testimonials from "~/data/testimonials";
export default {
  data: function() {
    return {
      process,
      services,
      testimonials
    };
  },
  components: {
    Carousel,
    ContactForm,
    InfoDiamonds,
    SectionContainer,
    Stepper
  }
};
</script>

