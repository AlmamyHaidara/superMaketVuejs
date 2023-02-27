<template>
  <div class="card alert" @click="closer()">
    <i class="fa-solid fa-xmark" id="close" @click="closer()"></i>
    <p>Connection is successful</p>
    {{ timeCLose() }}
    
  </div>
</template>
<script>
export default {

    props:{},
  data() {
    return {
      close: false,
    };
  },
  methods: {
    timeCLose(){
        setTimeout(()=>{
        console.log(document.querySelector(".alert").style.display = "none");
        },2000)
    },
    closer() {
      this.close = false;
      if (!this.close) {
        console.log(document.querySelector(".alert").style.display = "none");
        console.log(this.close);
      }
    },
  },
};
</script>

<style scoped>
.alert {
  background: #1cf614;
  width: 15rem;
  height: 4rem;
  position: absolute;
  right: 1rem;
  top: 2rem;
  z-index: 100;
}
p {
  color: #f1f1f1;
  font-size: 18px;
}
#close {
  position: absolute;
  top: 4px;
  right: 8px;
  color: #f1f1f1;
}
</style>
