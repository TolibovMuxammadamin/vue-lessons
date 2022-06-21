<template>
  <div class="mb-3">
    <slot>
      <label for="input" class="form-label">
        {{ label }}
      </label>
    </slot>
    <input
      :value="value"
      v-bind="$attrs"
      v-on="inputListeners"
      class="form-control"
    />
    <div v-if="helperText" class="form-text">
      {{ helperText }}
    </div>
  </div>
</template>

<script>
export default {
  name: "InputField",
  //   model: {
  //     prop: "modelValue",
  //     event: "kirit",
  //   },
  props: {
    label: String,
    value: [String, Number, Boolean],
    helperText: String,
  },
  methods: {},
  computed: {
    inputListeners() {
      var vm = this;
      return Object.assign({}, this.$listeners, {
        input: function (event) {
          vm.$emit("input", event.target.value);
        },
      });
    },
  },
};
</script>

<style></style>
