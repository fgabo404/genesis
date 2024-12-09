<template>
  <div class="paper-dash genesis" >
    <div class="container-in">
      <img src="../assets/bgTexture.png" class="bgDash" id="bgDash" alt="">
      <div v-if="loginMode == 0" class="wrap login" id="login">
        <img src="./assets/logo-color-completo-fg.png" alt="" class="logo">
        <div class="input-wrap" style="margin:0 0 20px 0;">
          <label for="">DPI</label>
          <input type="text" >
        </div>
        <div class="input-wrap" style="margin:0 0 20px 0;">
          <label for="">Contraseña</label>
          <input type="text" >
        </div>
        <a class="btn-g" style="margin: 40px 0 0 0;" v-on:click="loginMode = 1">
          Ingresar
        </a>
      </div>
      <div v-if="loginMode == 1" class="wrap confirm" id="confirm">
        <img src="./assets/logo-color-completo-fg.png" alt="" class="logo">
        <div class="input-wrap" style="margin:0 0 20px 0;">
          <label for="">Código de Verificación</label>
          <div class="inputs">
            <input type="text" >
            <input type="text" >
            <input type="text" >
            <input type="text" >
          </div>
        </div>
        <RouterLink  class="btn-g" style="margin: 40px 0 0 0;" to="/genesis/inicio">
          Continuar
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>    


export default {
  name: 'login-genesis',
  components:{
  },
  data() {
    return {
      loginMode: 0
    }
  },
  created(){
    document.getElementById('bgDash').style.display = 'none';
  },
  mounted(){
  },
  methods:{
    
  },
  computed:{

  }
}
</script>
