<template>
  <section class="sidebar">
    <div class="sidebar_items">
      <div
        class="sidebar_item"
        v-for="item in getSidebarItems()"
        :key="item.name"
      >
        <div v-html="item.svg" class="sidebar_item-svg"></div>
        <p class="sidebar_item-tittle">{{ item.name }}</p>
      </div>
    </div>
    <!-- logout icon -->
    <div class="sidebar_logout">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="sidebar-svg"
      >
        <path
          d="M5 5H12V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H12V19H5V5ZM21 12L17 8V11H9V13H17V16L21 12Z"
          fill="#F8F8F8"
        />
      </svg>
      <p class="sidebar_logout-tittle">Logout</p>
    </div>
  </section>
</template>

<script>
import Dashboard from "../assets/icons/dashboard-icon.svg";
import accountIcon from "../assets/icons/account-icon.svg";
import folderIcon from "../assets/icons/folder-icon.svg";
import templatesIcon from "../assets/icons/templates-icon.svg";
import tutorialIcon from "../assets/icons/tutorial-icon.svg";
// console.log(Dashboard);
export default {
  data() {
    return {
      sideBarItems: [
        {
          name: "Dashboard",
          svg: Dashboard,
        },
        {
          name: "Folder",
          svg: folderIcon,
        },
        {
          name: "Templates",
          svg: templatesIcon,
        },
        {
          name: "Totorial",
          svg: tutorialIcon,
        },
        {
          name: "Accounts",
          svg: accountIcon,
        },
      ],
      sideBarItems1: [
        {
          name: "Dashboard",
          svg: `<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="sidebar-svg">
          <path d="M11.3142 6.66667V0H20.2031V6.66667H11.3142ZM0.203125 11.1111V0H9.09201V11.1111H0.203125ZM11.3142 20V8.88889H20.2031V20H11.3142ZM0.203125 20V13.3333H9.09201V20H0.203125Z" fill="#E8E8E8"/>
          </svg>

`,
        },
        {
          name: "Folder",
          svg: `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="sidebar-svg">
          <path d="M4.04651 20.5772C3.48372 20.5772 3.00177 20.3766 2.60065 19.9755C2.19954 19.5744 1.99932 19.0928 2 18.5307V6.25159C2 5.6888 2.20056 5.20685 2.60168 4.80573C3.00279 4.40461 3.4844 4.2044 4.04651 4.20508H10.186L12.2326 6.25159H20.4186C20.9814 6.25159 21.4633 6.45215 21.8645 6.85327C22.2656 7.25438 22.4658 7.73599 22.4651 8.2981H11.3884L9.34186 6.25159H4.04651V18.5307L6.50233 10.3446H24L21.3651 19.119C21.2287 19.5624 20.977 19.9165 20.61 20.1812C20.2429 20.4459 19.8381 20.5779 19.3953 20.5772H4.04651ZM6.19535 18.5307H19.3953L21.2372 12.3911H8.03721L6.19535 18.5307Z" fill="#B5B5B5"/>
          </svg>
          `,
        },
        {
          name: "Templates",
          svg: `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="sidebar-svg">
          <path d="M1 19.166V5.16602H15V19.166H1ZM17 11.166V5.16602H23V11.166H17ZM19 9.16602H21V7.16602H19V9.16602ZM3 17.166H13V7.16602H3V17.166ZM4 15.166H12L9.375 11.666L7.5 14.166L6.125 12.341L4 15.166ZM17 19.166V13.166H23V19.166H17ZM19 17.166H21V15.166H19V17.166Z" fill="#B5B5B5"/>
          </svg>
          `,
        },
        {
          name: "Totorial",
          svg: `<svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="sidebar-svg">
          <path d="M3.66659 7.66504H1.83325V18.665C1.83325 19.1513 2.02641 19.6176 2.37022 19.9614C2.71404 20.3052 3.18035 20.4984 3.66659 20.4984H14.6666V18.665H3.66659V7.66504Z" fill="#B5B5B5"/>
          <path d="M18.3333 2.16504H7.33333C6.8471 2.16504 6.38079 2.35819 6.03697 2.70201C5.69315 3.04583 5.5 3.51214 5.5 3.99837V14.9984C5.5 15.4846 5.69315 15.9509 6.03697 16.2947C6.38079 16.6386 6.8471 16.8317 7.33333 16.8317H18.3333C18.8196 16.8317 19.2859 16.6386 19.6297 16.2947C19.9735 15.9509 20.1667 15.4846 20.1667 14.9984V3.99837C20.1667 3.51214 19.9735 3.04583 19.6297 2.70201C19.2859 2.35819 18.8196 2.16504 18.3333 2.16504ZM10.0833 13.165V5.83171L16.5 9.49837L10.0833 13.165Z" fill="#B5B5B5"/>
          </svg>
          `,
        },
        {
          name: "Accounts",
          svg: `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="sidebar-svg">
          <path d="M12 2.05078C17.52 2.05078 22 6.53078 22 12.0508C22 17.5708 17.52 22.0508 12 22.0508C6.48 22.0508 2 17.5708 2 12.0508C2 6.53078 6.48 2.05078 12 2.05078ZM6.02332 15.4671C7.49083 17.6577 9.69511 19.0508 12.1597 19.0508C14.6243 19.0508 16.8286 17.6577 18.2961 15.4671C16.6885 13.968 14.5312 13.0508 12.1597 13.0508C9.78821 13.0508 7.63095 13.968 6.02332 15.4671ZM12 11.0508C13.6569 11.0508 15 9.70763 15 8.05078C15 6.39393 13.6569 5.05078 12 5.05078C10.3431 5.05078 9 6.39393 9 8.05078C9 9.70763 10.3431 11.0508 12 11.0508Z" fill="#B5B5B5"/>
          </svg>
          `,
        },
      ],
      sideBarItems2: [
        {
          name: "Home",
          svg: `<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="sidebar-svg">
          <path d="M11.3142 6.66667V0H20.2031V6.66667H11.3142ZM0.203125 11.1111V0H9.09201V11.1111H0.203125ZM11.3142 20V8.88889H20.2031V20H11.3142ZM0.203125 20V13.3333H9.09201V20H0.203125Z" fill="#E8E8E8"/>
          </svg>

`,
        },
        {
          name: "Project",
          svg: `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="sidebar-svg">
          <path d="M4.04651 20.5772C3.48372 20.5772 3.00177 20.3766 2.60065 19.9755C2.19954 19.5744 1.99932 19.0928 2 18.5307V6.25159C2 5.6888 2.20056 5.20685 2.60168 4.80573C3.00279 4.40461 3.4844 4.2044 4.04651 4.20508H10.186L12.2326 6.25159H20.4186C20.9814 6.25159 21.4633 6.45215 21.8645 6.85327C22.2656 7.25438 22.4658 7.73599 22.4651 8.2981H11.3884L9.34186 6.25159H4.04651V18.5307L6.50233 10.3446H24L21.3651 19.119C21.2287 19.5624 20.977 19.9165 20.61 20.1812C20.2429 20.4459 19.8381 20.5779 19.3953 20.5772H4.04651ZM6.19535 18.5307H19.3953L21.2372 12.3911H8.03721L6.19535 18.5307Z" fill="#B5B5B5"/>
          </svg>
          `,
        },
        {
          name: "Templates",
          svg: `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="sidebar-svg">
          <path d="M1 19.166V5.16602H15V19.166H1ZM17 11.166V5.16602H23V11.166H17ZM19 9.16602H21V7.16602H19V9.16602ZM3 17.166H13V7.16602H3V17.166ZM4 15.166H12L9.375 11.666L7.5 14.166L6.125 12.341L4 15.166ZM17 19.166V13.166H23V19.166H17ZM19 17.166H21V15.166H19V17.166Z" fill="#B5B5B5"/>
          </svg>
          `,
        },
        {
          name: "Accounts",
          svg: `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="sidebar-svg">
          <path d="M12 2.05078C17.52 2.05078 22 6.53078 22 12.0508C22 17.5708 17.52 22.0508 12 22.0508C6.48 22.0508 2 17.5708 2 12.0508C2 6.53078 6.48 2.05078 12 2.05078ZM6.02332 15.4671C7.49083 17.6577 9.69511 19.0508 12.1597 19.0508C14.6243 19.0508 16.8286 17.6577 18.2961 15.4671C16.6885 13.968 14.5312 13.0508 12.1597 13.0508C9.78821 13.0508 7.63095 13.968 6.02332 15.4671ZM12 11.0508C13.6569 11.0508 15 9.70763 15 8.05078C15 6.39393 13.6569 5.05078 12 5.05078C10.3431 5.05078 9 6.39393 9 8.05078C9 9.70763 10.3431 11.0508 12 11.0508Z" fill="#B5B5B5"/>
          </svg>
          `,
        },
      ],
    };
  },
  methods: {
    getSidebarItems() {
      if (this.$store.state.moodboardArray.length > 0) {
        return this.sideBarItems2;
      } else {
        return this.sideBarItems1;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  width: 10rem;
  background-color: #292829;
  height: 92.8vh;

  position: fixed;
  left: 0;
  top: 5.2rem;
  bottom: 0;
  z-index: 10000;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &_items {
    width: 100%;
    height: 40%;
    color: #b5b5b5;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
  }
  &_item {
    width: 100%;
    height: 25%;
    display: grid;
    place-items: center;
    padding: 0.6rem 0;

    &:first-child {
      padding-top: 2rem;
    }
    &:hover {
      background: rgba(233, 190, 179, 0.2);
      cursor: pointer;
      transition: all 0.1s ease-in;
      color: #fff;
    }
    &-svg {
      margin: 0 auto;
      width: 2.4rem;
      height: 2.4rem;
    }
    &-tittle {
      font-size: 1.2rem;
      font-weight: 500 !important;
      font-family: sans-serif;
      line-height: normal;
      font-style: normal;
      font-family: Montserrat, sans-serif;
      padding: 0.3rem 0 0 0;
      margin-top: 0.3rem;
    }
  }

  &_logout {
    width: 100%;
    height: 8%;
    display: grid;
    place-items: center;
    color: #b5b5b5;
    margin-bottom: 3rem;

    &:hover {
      background: rgba(233, 190, 179, 0.2);
      cursor: pointer;
      transition: all 0.1s ease-in;
      color: #fff;
    }

    &-tittle {
      font-size: 1.2rem;
      font-weight: 500 !important;
      font-family: sans-serif;
      line-height: normal;
      font-style: normal;
      font-family: Montserrat, sans-serif;

      margin-top: 0.3rem;
    }
  }
}
</style>
