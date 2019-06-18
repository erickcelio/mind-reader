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
      <div
        :class="`${enterAnimation && 'enter-animation'}
          ${flipCardsAnimation && 'change-cards'}`"
        @animationend="resetAnimations"
        class="cards-container">
        <img
          :class="`${hover === columnIndex
          ? 'card active'
          : 'card'}`"
          v-for="(card, index) in column"
          :key="index"
          :src="card.image"
          alt="Card Image"
        />
      </div>
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
      flipCardsAnimation: false,
      enterAnimation: true,
      stage: 0
    }
  },
  methods: {
    ...mapActions(['changeCards']),
    resetAnimations () {
      this.flipCardsAnimation = false
      this.enterAnimation = false
    },
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
      this.hover = null
      this.flipCardsAnimation = true
      const [leftColumn, middleColumn, rightColumn] = this.columns
      let mixedColumns = []
      switch (number) {
        case 0:
          mixedColumns = [...middleColumn, ...leftColumn, ...rightColumn]
          break
        case 1:
          mixedColumns = [...leftColumn, ...middleColumn, ...rightColumn]
          break
        case 2:
          mixedColumns = [...leftColumn, ...rightColumn, ...middleColumn]
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

  @keyframes enter-cards {
    from {
      transform: translate3d(-800px,0,0) scale(1.5);
    } to {
      transform: translate3d(0,0,0);
    }
  }

  @keyframes change-cards {
    from {
      transform: scale(-1);
    } to {
      transform: scale(1);
    }
  }

  #cards {
    @include column;
    flex: 1;
    width: 100%;
    align-items: center;
    @include responsive("m") {
      @include row;
    }

    .column {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;

      @include responsive("m") {
        flex-direction: column;
      }

      .btn {
        font-weight: bold;
        font-size: 1.2rem;
        padding: 20px;
        margin: 10px;
      }

      .cards-container {
        @include row;
        @include responsive("m") {
          flex-direction: column;
        }

        .card {
          @include box-shadow-default;
          margin: 0 10px;
          max-width: 120px;
          min-width: 100px;
          transition: all .5s;
          @include responsive("m") {
            max-width: 100%;
            margin: 10px 5px;
          }
        }
      }

      .enter-animation img {
        animation: enter-cards 1s both;
      }

      .change-cards img {
        animation: change-cards 1s;
      }

      .active {
        transform: scale(1.1);
      }
    }
  }
</style>
