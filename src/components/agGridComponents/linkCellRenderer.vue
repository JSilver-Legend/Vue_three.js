<template>
    <div>
      <button @click="alertClick('edit')">edit</button>
      <button @click="alertClick('dublicate')">duplicate</button>
      <button @click="alertClick('delete')">delete</button>
    </div>
</template>
<script>
export default {
  setup(props) {
    function alertClick(arg) {
      props.params.clicked(arg);
    }
    return { alertClick, props }
  },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div {
    display: flex;
  }

  button {
      color: #777777;
      margin: 0;
      margin-top: 10px;
      padding: 6px;
      line-height: 1.5;
  }
</style>
