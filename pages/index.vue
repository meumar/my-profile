<template>
  <div class="container">
    <el-card class="box-card" v-for="user in allUsers" :key="user.id">
      <template #header>
        <div class="card-header">
          {{user.id}}<span>Name: {{user.name}}</span>
          <p>
            ({{user.username}})
        </p>
        </div>
      </template>
      <p>Address:</p>
      <div v-for="(ad, index) in user.address" :key="index">
        <p>{{ad}}</p>
        </div>
    </el-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      allUsers: []
    };
  },
  created() {
    this.loadUSers();
  },
  computed: {
    ...mapGetters("users", ["getUsers"])
  },
  methods: {
    async loadUSers() {
      await this.$store.dispatch("users/fetchusers");
      this.allUsers = [...this.getUsers];
    },
    async mounted() {}
  }
};
</script>

<style>
.card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  .item {
    margin-bottom: 18px;
  }

  .box-card {
    width: 480px;
  }

.text {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 20px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
