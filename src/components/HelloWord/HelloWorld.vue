<template>
  <div class="container-fluid">
    <h1>{{ msg }}</h1>

    <div class="input-group mb-3">
      <input  class="form-control" type="text" placeholder="Nome" v-model="name">
      <button class="btn btn-outline-secondary" v-on:click="adicionar()">+</button>
    </div>

    <table class="table table-striped">
      <thead>
        <tr>
          <td>#</td>
          <td>Nome</td>
          <td></td>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(usuario, index) in usuarios" v-bind:key="usuario.id">
          <td>{{usuario.id}}</td>
          <td>{{usuario.name}}</td>
          <td>
            <button class="btn btn-danger" v-on:click="remover(index)">Remover</button>
          </td>
        </tr>

      </tbody>

    </table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      title: "Teste",
      usuarios: [
        {id:1, name:"teste1"},
        {id:2, name:"teste2"},
        {id:3, name:"teste3"},
        {id:4, name:"teste4"},
        {id:5, name:"teste5"}
      ]
    }
  },
  methods: {
    remover(index){
        this.usuarios.splice(index, 1)
    },
    adicionar() {
      this.usuarios.push(
        {id:this.usuarios.length + 1, name:this.name}
      )

      this.name = ""
    } 
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
