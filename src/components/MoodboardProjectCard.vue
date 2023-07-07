<template>
  <div class="project">
    <div class="project_images">
      <img
        src="../assets/images/sample-img.jpg"
        alt="project_img"
        class="project_images-img"
      />
    </div>
    <div class="project_info">
      <div
        class="project_info-tittle"
        @click="handleProjectInput"
        v-if="isEditing"
      >
        <input
          type="text"
          class="project_info-tittle-input"
          @blur="handleBlur"
          v-if="isEditing"
          autofocus
          @input="handletext"
        />
      </div>
      <div
        class="project_info-tittle"
        @click="handleEdit"
        v-else-if="!isEditing"
      >
        <span v-text="projectTittle"></span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          class="edit-svg"
          @click="handleUserInput"
          v-if="isShowEditButton"
        >
          <path
            d="M10.7556 6.72545L9.81293 5.78279L3.6036 11.9921V12.9348H4.54626L10.7556 6.72545ZM11.6983 5.78279L12.6409 4.84012L11.6983 3.89746L10.7556 4.84012L11.6983 5.78279ZM5.09826 14.2681H2.27026V11.4395L11.2269 2.48279C11.3519 2.35781 11.5215 2.2876 11.6983 2.2876C11.875 2.2876 12.0446 2.35781 12.1696 2.48279L14.0556 4.36879C14.1806 4.49381 14.2508 4.66335 14.2508 4.84012C14.2508 5.0169 14.1806 5.18644 14.0556 5.31146L5.09826 14.2681Z"
            fill="#222021"
          />
        </svg>
      </div>
      <div class="project_info_dot-container" @mouseover="showList">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="4"
          height="13"
          viewBox="0 0 4 13"
          fill="none"
          class="project_info_dot-container-svg"
        >
          <circle cx="1.84649" cy="1.43536" r="1.43536" fill="#222021" />
          <circle cx="1.84649" cy="6.22003" r="1.43536" fill="#222021" />
          <circle cx="1.84649" cy="11.0042" r="1.43536" fill="#222021" />
        </svg>
        <ul class="list" v-if="isListShow">
          <li
            class="list-item"
            v-for="list in listOption"
            :key="list"
            @click="handleListItem(list)"
          >
            {{ list }}
          </li>
        </ul>
      </div>
    </div>
    <div class="unshowList" @click="hideList"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isListShow: false,
      isEditing: false,
      isShowEditButton: false,
      projectTittle: "Project #1",
      listOption: ["Move", "Clone", "Share", "Delete"],
    };
  },
  methods: {
    handleEdit() {
      this.isShowEditButton = true;
    },
    handleUserInput() {
      this.isEditing = true;
    },
    handletext(e) {
      this.projectTittle = e.target.value;
    },
    handleBlur() {
      this.isEditing = false;
      this.isShowEditButton = false;
    },
    showList() {
      this.isListShow = true;
    },
    hideList() {
      this.isListShow = false;
    },
    handleListItem(listData) {
      window.alert(listData);
    },
  },
};
</script>

<style scoped lang="scss">
.project {
  height: 15.8rem;
  width: 22.8rem;

  border-radius: 1rem;
  border: 0.1rem solid #e8e8e8;
  background: #fff;
  //   box-shadow: 0px 4.784523963928223px 9.569047927856445px 0px
  //     rgba(0, 0, 0, 0.15);
  //   position: relative;
  z-index: 99;
  &_images {
    height: 80%;
    width: 100%;
    border-radius: 0.5rem 0.5rem 0 0;
    overflow: hidden;

    &-img {
      height: 100%;
      width: 100%;
      border-radius: 0.5rem 0.5rem 0 0;
    }
  }

  &_info {
    height: 20%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 1rem;
    &-tittle {
      flex: 0 0 90%;
      font-size: 1.4rem;
      color: #0e0e0e;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      z-index: 99 !important;
      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: space-between;
      &-input {
        width: 100%;
        border: none;
        color: #0e0e0e;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        padding: 0.2rem 0.5rem;
        &:focus {
          outline: none;
          border-bottom: 2px dotted #172b4d;
        }
      }
    }
    &_dot-container {
      flex: 0 0 10%;
      height: 100%;
      display: grid;
      place-items: center;
      position: relative;
      z-index: 999;

      &:hover {
        cursor: pointer;
      }
      &-svg {
        stroke: #222021;
        stroke-width: 0;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}

.list {
  width: 8.6rem;
  height: auto;
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(2.5rem);
  list-style: none;
  z-index: 9999;

  border-radius: 5px;
  border: 1px solid #d8e1f3;
  background: #fff;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.05);
  &-item {
    color: #172b4d;
    font-family: Montserrat;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    padding: 0.6rem 0;
    text-align: center;

    &:not(:last-child) {
      border-bottom: 1px solid #d8e1f3;
    }

    &:hover {
      cursor: pointer;
    }
  }
}

.unshowList {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: transparent;
}
.edit-svg {
  height: 1.8rem;
  width: 1.8rem;
  stroke: #0e0e0e;
  stroke-width: 0;
  margin: 0 auto 0 1rem;

  &:hover {
    cursor: pointer;
  }
}
</style>
