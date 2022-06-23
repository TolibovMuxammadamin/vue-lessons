<template>
  <div>
    <input v-focus type="text" />

    <div v-click-outside="onClickOutside" class="card">
      <div class="card-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nobis
        reprehenderit ad reiciendis dolores, eius consequatur numquam ab ratione
        ipsam animi, sequi vero veniam placeat odio ex odit fugit consequuntur.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
    clickOutside: {
      bind(el, binding) {
        el.clickOutsideEvent = (evt) => {
          evt.stopPropagation();
          console.log(binding);
          if (!(el === evt.target || el.contains(evt.target))) {
            binding.value(evt, el);
          }
        };
        window.requestAnimationFrame(() => {
          document.addEventListener("click", el.clickOutsideEvent);
        });
      },
      unbind(el) {
        document.removeEventListener("click", el.clickOutsideEvent);
      },
    },
  },
  methods: {
    onClickOutside() {
      console.log("outside clicked");
    },
  },
};
</script>

<style></style>
