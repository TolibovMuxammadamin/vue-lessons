<template>
  <div class="mb-3">
    <slot name="label" :label="label">
      <label for="input" class="form-label">
        {{ label }}
      </label>
    </slot>
    <div class="input-group flex-nowrap">
      <span v-if="prepend" class="input-group-text">
        <slot name="prepend" :prepend="prepend">
          {{ prepend }}
        </slot>
      </span>
      <input
        :value="value"
        v-bind="$attrs"
        v-on="inputListeners"
        class="form-control"
      />
      <span v-if="append" class="input-group-text">
        <slot name="append" :append="append">
          {{ append }}
        </slot>
      </span>
    </div>
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
    prepend: String,
    append: String,
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
