<template>
  <div>
    <button @click="show = !show">Toggle</button>
    <transition name="fade">
      <p v-if="show">Lorem, ipsum dolor.</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: "TransitionLearn",
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style lang="scss">
.fade {
  &-enter {
    opacity: 0;
    transform: translateY(100px);
  }

  &-enter-active,
  &-leave-active {
    transition: all 4.2s;
  }

  &-enter-to,
  &-leave {
    opacity: 1;
    transform: translateY(0);
  }

  &-leave-to {
    opacity: 0;
    transform: translateX(100px);
  }
}
</style>
