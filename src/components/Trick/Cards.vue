<template>
  <div id="cards">
    <div class="column" v-for="(column, columnIndex) in columns" :key="columnIndex">
      <button
        @mouseenter="hover = columnIndex"
        @mouseleave="hover = null"
        @click="selectColumn(columnIndex)"
        class="btn">
        {{ columnIndex + 1 }}
      </button>
      <transition-group appear tag="div" class="cards-container" name="list">
        <img
          :class="`${hover === columnIndex ? 'card active' : 'card'}`"
          v-for="(card, index) in column"
          :key="index"
          :src="card.images['png']"
        />
      </transition-group>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Cards',
  props: {
    cards: Array,
    onSelect: Function
  },
  data () {
    return {
      hover: null,
      stage: 0
    }
  },
  methods: {
    ...mapActions(['changeCards']),
    putCardsOnColumns (cards) {
      const leftColumn = []
      const middleColumn = []
      const rightColumn = []

      cards.forEach((card) => {
        const leftColumnHasMoreCardsThanMiddle = leftColumn.length > middleColumn.length
        const middleColumnHasMoreCardsThanRight = middleColumn.length > rightColumn.length

        if (leftColumnHasMoreCardsThanMiddle) {
          middleColumn.push(card)
        } else if (middleColumnHasMoreCardsThanRight) {
          rightColumn.push(card)
        } else {
          leftColumn.push(card)
        }
      })

      return [leftColumn, middleColumn, rightColumn]
    },
    selectColumn (number) {
      const [leftColumn, middleColumn, rightCollumn] = this.columns
      let mixedColumns = []
      switch (number) {
        case 0:
          mixedColumns = [...middleColumn, ...leftColumn, ...rightCollumn]
          break
        case 1:
          mixedColumns = [...leftColumn, ...middleColumn, ...rightCollumn]
          break
        case 2:
          mixedColumns = [...leftColumn, ...rightCollumn, ...middleColumn]
          break
      }
      this.changeCards(mixedColumns)
      this.stage++
      this.onSelect(this.stage)
    }
  },
  computed: {
    columns () {
      return this.putCardsOnColumns(this.cards)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/mixins";

  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(60px);
  }

  #cards {
    @include column;
    flex: 1;
    width: 100%;
    align-items: center;

    .column {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;

      .btn {
        font-weight: bold;
        font-size: 1.2rem;
        padding: 20px;
        margin: 10px;
      }

      .cards-container {
        @include row;

        .card {
          @include box-shadow-default;
          margin: 0 10px;
          width: 120px;
          transition: all .3s;
        }
      }

      .active {
        transform: scale(1.05);
      }
    }
  }
</style>
