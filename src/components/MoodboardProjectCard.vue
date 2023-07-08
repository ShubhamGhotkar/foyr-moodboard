<template>
  <section class="card-section">
    <div class="create_new" v-if="index === 0" :key="data.id">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="37"
        height="36"
        viewBox="0 0 37 36"
        fill="none"
        class="create_new-svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.8288 35.552C16.7719 35.552 15.915 34.9423 15.915 34.1901V1.50823C15.915 0.75616 16.7719 0.146484 17.8288 0.146484C18.8858 0.146484 19.7427 0.75616 19.7427 1.50823V34.1901C19.7427 34.9423 18.8858 35.552 17.8288 35.552Z"
          fill="#E9BEB3"
        />
        <path
          opacity="0.8"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M36.01 18.3274C36.01 19.3843 35.4003 20.2412 34.6481 20.2412H1.96624C1.21417 20.2412 0.604492 19.3843 0.604492 18.3274C0.604492 17.2704 1.21417 16.4136 1.96624 16.4136H34.6481C35.4003 16.4136 36.01 17.2704 36.01 18.3274Z"
          fill="#E9BEB3"
        />
      </svg>
      <div class="create_new-tittle">Create New MoodBoard</div>
    </div>
    <div class="project" v-else>
      <div class="project_images">
        <img
          :src="data.properties.thumbnail"
          alt="project_img"
          class="project_images-img"
        />
        <div class="project_images-blur">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            class="project_images-blur-likeBtn"
            @click="handleLike"
            :style="{ 'likeBtn-active': isLikeCLick }"
          >
            <path
              d="M11.6707 4.81612C13.9185 2.798 17.3921 2.86499 19.5575 5.03429C21.722 7.20455 21.7967 10.6609 19.7834 12.9154L11.6688 21.0414L3.55617 12.9154C1.54284 10.6609 1.61843 7.19881 3.782 5.03429C5.94938 2.86786 9.41625 2.79513 11.6707 4.81612ZM18.2025 6.3864C16.7672 4.94913 14.4515 4.89075 12.9491 6.23999L11.6717 7.38636L10.3933 6.24095C8.88613 4.8898 6.5752 4.94913 5.13602 6.38831C3.71023 7.8141 3.63846 10.0963 4.95229 11.6044L11.6698 18.3324L18.3872 11.6054C19.702 10.0963 19.6303 7.81697 18.2025 6.3864Z"
              fill="white"
            />
          </svg>
          <button class="project_images-blur-btn">
            <svg
              width="9"
              height="9"
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="arrow-up"
            >
              <path
                d="M6.68067 2.76916L0.942667 8.50716L0 7.5645L5.73733 1.8265H0.680667V0.493164H8.014V7.8265H6.68067V2.76916Z"
                fill="#141B35"
              />
            </svg>
            <span>Open Moodboard</span>
          </button>
        </div>
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
          <span v-text="data.name"></span>
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
          <ul class="list top-layel" v-if="isListShow">
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
  </section>
</template>

<script>
export default {
  props: ["data", "index"],
  data() {
    return {
      isListShow: false,
      isEditing: false,
      isShowEditButton: false,
      projectTittle: "Project #1",
      listOption: ["Move", "Clone", "Share", "Delete"],
      isLikeCLick: false,
    };
  },
  created() {
    // console.log("DATA", this.data);
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
    handleLike() {
      this.isLikeCLick = true;
    },
  },
};
</script>

<style scoped lang="scss">
.card-section {
  z-index: 100000000 !important;
}
// PROJECT CARD
.project,
.create_new {
  height: 15.8rem;
  flex: 0 0 19%;

  border-radius: 1rem;
  border: 0.2rem solid #e8e8e8;
  background: #fff;
  // overflow: hidden;

  &:hover {
    box-shadow: 0px 4.784523963928223px 9.569047927856445px 0px
      rgba(0, 0, 0, 0.15);
  }
  //   position: relative;
  z-index: 99;
  &_images {
    height: 80%;
    width: 100%;
    border-radius: 0.5rem 0.5rem 0 0;
    // overflow: hidden;
    position: relative;
    z-index: 99;
    cursor: pointer;

    &-img {
      height: 100%;
      width: 100%;
      border-radius: 1rem 1rem 0 0;
    }

    &-blur {
      height: 100%;
      width: 100%;
      background-color: #0e0e0e52;
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;

      display: grid;
      place-items: center;
      transition: all 0.3s ease-in-out;

      &:hover {
        opacity: 1;
      }

      &-btn {
        padding: 1rem;
        font-size: 1.6rem;
        border: none;
        border-radius: 100rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background-color: #fff;
        text-align: center;
        font-size: 1.2rem;
        line-height: normal;
        font-weight: 500;
        &:hover {
          cursor: pointer;
        }
      }
      &-likeBtn {
        height: 2.5rem;
        width: 2.5rem;
        position: absolute;
        top: 1rem;
        right: 1rem;
        fill: #fff;
      }
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

// CREATE NEW CARD
.create_new {
  border-radius: 9.569px;
  border: 0.957px dashed #d19788;
  background: radial-gradient(
    139.03% 139.03% at 50% 174.74%,
    #e9beb3 0%,
    rgba(233, 190, 179, 0) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2.3rem;
  &-svg {
    height: 4rem;
    width: 4rem;
    stroke: #e9beb3;
  }
  &-tittle {
    color: #0e0e0e;
    text-align: center;
    font-family: Montserrat;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
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

.likeBtn-active {
  stroke: red;
}
</style>
