<template>
  <form>
    <div class="form-header">Sign in to IMSazon</div>

    <div class="form-inner">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" />
      </div>

      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" />
      </div>

      <div class="form-group">
        <input type="button" class="btn-signin" value="Sign in" />
      </div>
    </div>
  </form>
</template>

<script>

</script>

<style scoped>
  form {
    width: 50%;
    background-color: #d2d2d2;
    padding: 1.2em .6em;
    margin-top: 2em;
    margin-left: 25%;
  }

  .form-header {
    font-weight: bold;
    font-size: 1.35em;
    margin-bottom: 1.5em;
  }

  .form-inner {
    width: 100%;
    margin-left: 25%;
  }

  .form-group {
    margin-bottom: 1.5em;
    text-align: left;
  }

  .form-group > label, .form-group > input {
    display: block;
  }

  .btn-signin {
    font-size: 1.2em;
  }

  label {
    color: #444;
    text-transform: uppercase;
    font-size: .95em;
    margin-bottom: .25em;
  }

  input {
    width: 50%;
    height: 2em;
    padding: 0 .5em;
  }

  input[type=button] {
    width: 54%;
  }
</style>
