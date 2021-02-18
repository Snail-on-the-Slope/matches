<template>
  <div class="all">
    <h2 class="all__title">All matches</h2>
    <div class="all__list">
      <div
        class="all__item"
        v-for="match in matches"
        :key="match.id"
        @click="addMatch(match.id)"
      >
        <span>{{ match.team.home }}</span> <span>-</span>
        <span>{{ match.team.away }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "all",
  data() {
    return {
      matches: null,
    };
  },
  mounted() {
    this.matches = this.$store.getters.matches;
  },
  methods: {
    addMatch(id) {
      this.$store.commit("addSelectedMatches", id);
      this.$router.push("/");
    },
  },
};
</script>


<style lang="scss" scoped>
.all {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;

  &__title {
    font-weight: bold;
    font-size: 24px;
    text-align: center;
  }
  &__list {
    width: 100%;
    max-width: 700px;
  }
  &__item {
    padding: 10px 20px;
    min-height: 50px;
    background-color: #27414d;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    cursor: pointer;

    span {
      font-size: 18px;
      &:not(:last-child) {
        margin-right: 15px;
      }
    }
  }
}
</style>