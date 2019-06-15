<template>
  <div id="trick">
    <div class="instructions">
      Select a card and please tell me which column it is in
    </div>
    <Cards />
  </div>
</template>

<script>
import Cards from '@/components/Trick/Cards'
import { getDeck } from '@/services/Deck'

export default {
  name: 'Trick',
  data () {
    return {
      cards: []
    }
  },
  components: { Cards },
  methods: {
    async catchCards () {
      this.cards = await getDeck(21)
    }
  },
  mounted () {
    this.catchCards()
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/scss/colors";
  @import "../assets/scss/mixins";
  #trick {
    @include column;
    flex: 1;
    align-items: center;

    .instructions {
      padding: 20px 0;
      color: $primary-color;
      font-weight: 600;
      font-size: 1.5rem;
    }
  }
</style>
