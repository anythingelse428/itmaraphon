<template>
  <div class="history" v-if="history[0]?.info.length > 0">
    <div class="history__pagination">
      <PaginationNav :pagesQty="history.length" />
    </div>
    <div class="history__row">
      <HistoryItem v-for="item in history" :key="item.id" :year="item.year" :short-descripton="item.shortDescription"
        :info="item.info" :id="'page_' + item.id" :aria-label="item.year" :currentArea="currentYear" ref="historyitems"
        :isReversed="item.id % 2 > 0" />
    </div>
  </div>
</template>

<script lang="ts">
const HistoryItem = () => import(/* webpackChunkName: "HistoryItem" */'./HistoryItem.vue')
const PaginationNav = () => import('../Pagination/PaginationNav.vue')
export default {
  name: "HistoryLine",
  components: { HistoryItem, PaginationNav },
  data() {
    return {
      history: [
        {
          id: 0,
          year: 1985,
          shortDescription: 'Дата создания образовательной организации',
          info: 'Ульяновский авиационный колледж ведет свою историю с 9 июля 1985 года, с даты, когда приказом Министра авиационной промышленности СССР №200 на базе строящегося гиганта авиационной промышленности страны Ульяновского авиационного промышленного комплекса им. Д. Ф. Устинова был образован Ульяновский авиационный техникум.'
        },
        {
          id: 1,
          year: 1988,
          shortDescription: 'Первые выпускники нового учебного заведения',
          info: 'За сравнительно короткое время было создано многопрофильное учебное заведение с современной материально-технической базой и высококвалифицированным педагогическим коллективом.'
        },
        {
          id: 2,
          year: 1989,
          shortDescription: 'Первые выпускники нового учебного заведения',
          info: 'За сравнительно короткое время было создано многопрофильное учебное заведение с современной материально-технической базой и высококвалифицированным педагогическим коллективом.'
        },
        {
          id: 3,
          year: 1990,
          shortDescription: 'Первые выпускники нового учебного заведения',
          info: 'За сравнительно короткое время было создано многопрофильное учебное заведение с современной материально-технической базой и высококвалифицированным педагогическим коллективом.'
        },
        {
          id: 4,
          year: 1996,
          shortDescription: 'Первые выпускники нового учебного заведения',
          info: 'За сравнительно короткое время было создано многопрофильное учебное заведение с современной материально-технической базой и высококвалифицированным педагогическим коллективом.'
        },
        {
          id: 5,
          year: 1999,
          shortDescription: 'Первые выпускники нового учебного заведения',
          info: 'За сравнительно короткое время было создано многопрофильное учебное заведение с современной материально-технической базой и высококвалифицированным педагогическим коллективом.'
        },
        {
          id: 6,
          year: 2000,
          shortDescription: 'Первые выпускники нового учебного заведения',
          info: 'За сравнительно короткое время было создано многопрофильное учебное заведение с современной материально-технической базой и высококвалифицированным педагогическим коллективом.'
        }
      ],
      currentYear: 1985,
      currentPage: 0,
    }
  },
  methods: {
    changeCurrentHistoryItem() {
      const options: IntersectionObserverInit = {
        threshold: [0.9],
        rootMargin: "-15% 0% -15% 0%",
      };
      const updateCurrent = (
        entries: IntersectionObserverEntry[],
        observer: IntersectionObserver
      ) => {
        entries.forEach((entry) => {
          const target = entry.target;
          if (entry.isIntersecting) {
            debounce(() => {
              this.currentYear = Number(target.getAttribute("aria-label"));
              this.currentPage = Number(
                target.id.replace("page_", "")
              );
              useRouter().replace({ hash: "#" + target.id.replace("_", "") });
            })()
          }
        });
      };

      const observer: IntersectionObserver = new IntersectionObserver(
        updateCurrent, options
      );
      const boxes: NodeListOf<HTMLDivElement> =
        document.querySelectorAll("section.history-item");

      boxes.forEach((box) => {
        observer.observe(box);
      });
    }
  },
  mounted() {
    this.changeCurrentHistoryItem();
  },

}
</script>

<style lang="scss" scoped>
.history {
  padding-bottom: 30vh;
  display: flex;
  position: relative;
  flex-wrap: nowrap;
  z-index: 5;

  &__row {
    position: relative;
    width: 100%;
  }

  &__pagination {
    display: flex;
    position: fixed;
    left: 60px;
    z-index: 100;
    top: 0;
    bottom: 0;
    align-items: center;
    height: 100vh;

    @media screen and (max-width:1350px) {
      display: none;

    }
  }
}
</style>