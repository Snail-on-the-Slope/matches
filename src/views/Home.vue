<template>
  <div class="home">
    <h2 class="home__title">Selected matches</h2>
    <div class="home__content">
      <div class="home__current match">
        <div class="match__header">
          <div class="match__time">
            <div class="match__time-icon"></div>
            <div class="match__text">90 mins</div>
          </div>
          <div class="match__text match__current-time">70:10</div>
          <div class="match__text">2nd Half</div>
        </div>
        <div class="match__content">
          <div class="match__team match__team_home">
            <div class="match__name">
              {{ selected_matches[0].team.home }}
            </div>
            <div class="match__logo">
              <img src="../assets/logo.png" alt="logo" />
            </div>
            <div class="match__score">
              {{ selected_matches[0].scores.home }}
            </div>
          </div>
          <span>:</span>
          <div class="match__team match__team_away">
            <div class="match__score">
              {{ selected_matches[0].scores.away }}
            </div>
            <div class="match__logo">
              <img src="../assets/logo.png" alt="logo" />
            </div>
            <div class="match__name">
              {{ selected_matches[0].team.away }}
            </div>
          </div>
        </div>
      </div>

      <div class="home__more selected" v-show="more">
        <div
          class="selected__text selected__text_default"
          v-if="selected_matches.length < 2"
        >
          no previous matches
        </div>
        <div
          class="selected__item"
          v-for="match in showSelected"
          :key="match.id"
          v-else
          @click="newCurrentMatch(match.id)"
        >
          <div class="selected__icon"></div>
          <div class="selected__block">
            <div class="selected__info">
              <div class="selected__title">
                {{ match.team.home }} - {{ match.team.away }}
              </div>
              <div class="selected__score">
                {{ match.scores.home }} : {{ match.scores.away }}
              </div>
            </div>
            <div class="selected__text">3 minutes ago</div>
          </div>
          <div class="selected__text selected__text_ml">11`</div>
        </div>
        <!-- / -->
        <div class="home__btn" @click="goToAll">all matches</div>
      </div>
      <div
        class="home__icon-more"
        :class="{ 'home__icon-more_reverse': more }"
        @click="more = !more"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      more: false,
      selected_matches: null,
    };
  },
  computed: {
    showSelected() {
      console.log(
        this.selected_matches.length,
        this.selected_matches.length < 3
      );
      return this.selected_matches.length < 3
        ? [this.selected_matches[1]]
        : this.selected_matches.slice(1, 3);
    },
  },
  created() {
    if (this.$store.getters.selected_matches)
      this.$store.commit("addSelectedMatches", 1);

    this.selected_matches = this.$store.getters.selected_matches;
    console.log("created", this.selected_matches);
  },
  methods: {
    newCurrentMatch(id) {
      this.$store.commit("updateSelectedMatches", id);
      this.selected_matches = this.$store.getters.selected_matches;
    },
    goToAll() {
      this.$router.push("/all");
    },
  },
};
</script>


<style lang="scss" scoped>
.home {
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
  &__content {
    width: 100%;
    max-width: 700px;
    padding: 10px 20px;
    background-color: #27414d;
    border-radius: 5px;
  }
  &__current {
  }
  &__more {
  }
  &__btn {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    margin: 10px 0;
    color: #c4bbac;
    cursor: pointer;
  }
  &__icon-more {
    margin: 0 auto;
    width: 15px;
    height: 15px;
    background: url("../assets/next.svg") no-repeat center;
    background-size: contain;
    cursor: pointer;
    &_reverse {
      transform: scaleY(-1);
    }
  }
}

.match {
  min-height: 50px;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    position: relative;
  }
  &__time {
    display: flex;
    align-items: center;
  }
  &__time-icon {
    width: 15px;
    height: 15px;
    background: url("../assets/stopwatch.svg") no-repeat center;
    background-size: contain;
    margin-right: 10px;
  }
  &__current-time {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  &__name {
    font-weight: bold;
    font-size: 16px;
    color: #c4bbac;
  }
  &__logo {
    width: 50px;
    height: 50px;
    img {
      width: 100%;
      object-fit: contain;
    }
  }
  &__score {
    font-weight: bold;
    font-size: 16px;
  }
  &__text {
    color: #c1c1c1;
    font-size: 14px;
  }
  &__content {
    display: flex;
    align-items: center;
  }
  &__team {
    display: flex;
    align-items: center;
    width: 50%;

    &_home {
      justify-content: flex-end;
      div {
        margin-right: 20px;
      }
    }
    &_away {
      div {
        &:first-child {
          margin-left: 20px;
        }
        &:not(:last-child) {
          margin-right: 20px;
        }
      }
    }
  }

  @media (max-width: 640px) {
    &__content {
      padding: 10px 10px;
    }
    &__name {
      max-width: 65px;
      word-wrap: break-word;
    }
    &__logo {
      width: 40px;
      height: 40px;
    }
    &__team {
      &_home {
        div {
          margin-right: 10px;
        }
      }
      &_away {
        div {
          &:first-child {
            margin-left: 10px;
          }
          &:not(:last-child) {
            margin-right: 10px;
          }
        }
      }
    }
  }

  @media (max-width: 330px) {
    &__team {
      justify-content: space-around;
      width: 50%;
      &_home {
        div {
          margin-right: 0;
        }
      }
      &_away {
        div {
          &:first-child {
            margin-left: 0;
          }
          &:not(:last-child) {
            margin-right: 0;
          }
        }
      }
    }
  }
}

.selected {
  margin-top: 20px;

  &__item {
    padding: 10px 20px;
    border-radius: 5px;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    cursor: pointer;

    &:hover {
      background-color: #1f333c;
    }
  }
  &__icon {
    width: 15px;
    height: 15px;
    background: url("../assets/football-ball.svg") no-repeat center;
    background-size: contain;
    margin-right: 20px;
  }
  &__block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;
  }
  &__info {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 10px;
  }
  &__title {
    font-weight: bold;
  }
  &__score {
    font-weight: bold;
    color: #c1c1c1;
  }
  &__text {
    color: #c1c1c1;
    &_ml {
      margin-left: 20px;
    }
    &_default {
      text-align: center;
      font-style: italic;
    }
  }

  @media (max-width: 640px) {
    &__item {
      padding: 10px 0;
    }
    &__icon {
      margin-right: 10px;
    }
    &__text_ml {
      margin-left: 10px;
    }
  }
}
</style>