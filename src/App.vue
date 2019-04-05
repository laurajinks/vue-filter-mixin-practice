<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <!-- Exercise 1 -->
        <!-- Build a local Filter which reverses the Text it is applied on -->
        <h3>{{ text | reverseText }}</h3>
        <!-- Exercise 2 -->
        <!-- Build a global Filter which counts the length of a word and it appends it -->
        <h3>{{text | appendCount}}</h3>
        <!-- Like this: "test" => Gets filtered to => "Test (4)" -->
        <!-- Exercise 3 -->
        <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
        <h3>{{reversedText}}</h3>
        <h3>{{appendedText}}</h3>
        <!-- Exercise 4 -->
        <!-- Share the Computed Property rebuilding Ecercise 2 via a Mixin -->
      </div>
    </div>
  </div>
</template>

<script>
import { TextMixin } from "./TextMixin.js";
export default {
  name: "app",
  mixins: [TextMixin],
  filters: {
    reverseText(value) {
      return value
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
