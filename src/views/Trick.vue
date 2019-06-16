<template>
  <div id="trick">
    <Loading  v-if="loadingCards" class="loading-cards" />
    <div v-else class="container">
      <div id="selectColumn" v-if="stageType === 'selectColumn'">
        <p class="instructions">
          {{ stageInstructions[currentStage] }}
        </p>
        <Cards :cards="cards" :onSelect="onSelectColumn"/>
      </div>
      <div id="result" v-else>
        <p class="instructions">
          That's is your card!
        </p>
        <img :src="selectedCard.image" alt="">
        <button class="btn" @click="resetTrick">
          Play Again
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Cards from '@/components/Trick/Cards'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Trick',
  components: { Cards },
  data () {
    return {
      stageType: 'selectColumn',
      currentStage: 0,
      stageInstructions: [
        'Select a card and please tell me which column it is in',
        'Select which column it is in now',
        'Select once again which column she is for the last time'
      ]
    }
  },
  methods: {
    ...mapActions(['fetchCards']),
    onSelectColumn (stage) {
      stage < 3
        ? this.currentStage = stage
        : this.stageType = 'showResult'
    },
    async resetTrick () {
      await this.fetchCards()
      this.stageType = 0
      this.stageType = 'selectColumn'
    }
  },
  computed: {
    ...mapGetters(['cards', 'loadingCards']),
    selectedCard () {
      return this.cards[10]
    }
  },
  mounted () {
    this.fetchCards()
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/scss/colors";
  @import "../assets/scss/mixins";
  #trick, .container {
    @include column;
    flex: 1;
    justify-content: center;
    align-items: center;

    #selectColumn, #result {
      @include column;
      flex: 1;
      align-items: center;
    }

    .instructions {
      padding: 20px 0;
      color: $primary-color;
      font-weight: 600;
      font-size: 1.5rem;
    }

    .btn {
      margin: 10px;
    }
  }
</style>
