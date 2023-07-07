<template>
  <header class="header">
    <nav>
      <h2 class="header_logo">NEO</h2>
      <ul class="header_list">
        <li class="header_list-item1">
          <input
            type="text"
            class="header_list-item1-input"
            placeholder="search"
          />
        </li>
        <li class="header_list-item2">
          <button class="header_list-item2-btn">Switch To Neo</button>
        </li>
        <li class="header_list-item3">
          <img
            src="../assets/images/profile-pic.jpg"
            alt="user-img"
            class="header_list-item3-logo"
          />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  width: 100vw;
  height: 6rem;
  background: linear-gradient(to right, #4d4c4d, #201f20);
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  z-index: 9999;

  &_logo {
    font-size: 2.4rem;
    color: #e9beb3;
    font-family: Montserrat;
    font-weight: 700;
    text-transform: uppercase;
    margin-left: 2.2rem;
  }

  &_list {
    flex: 0 0 40%;
    height: 100%;
    display: flex;
    list-style: none;
    justify-content: space-between;
    align-items: center;

    &-item1 {
      flex: 0 0 60%;
      display: grid;
      place-items: center;
      &-input {
        width: 100%;
        padding: 1rem 2rem;
        width: 31.1rem;
        height: 3.4rem;
        border-radius: 0.4rem;
        border: none;
        background-color: #fff;

        &::placeholder {
          display: flex;
          align-items: center;

          padding-left: 2.6rem;
          font-size: 1.6rem;
          background-image: url("../assets/images/search-2-line.png");
          background-repeat: no-repeat;
        }
        &:focus {
          outline: none;
        }
      }
    }

    &-item2 {
      flex: 0 0 25%;
      height: 100%;
      transform: translateX(-7%);
      box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.4);

      &-btn {
        border-radius: 0.4rem;
        background-color: #e9beb3;
        border: none;
        cursor: pointer;
        color: #232121;
        text-align: center;
        font-family: Montserrat, sans-serif;
        font-style: normal;
        font-weight: 700;
        line-height: normal;

        padding: 1.2rem 1.3rem;
      }
    }
    &-item3 {
      flex: 0 0 15%;
      transform: translateX(-12%);
      &-logo {
        width: 3.6rem;
        height: 3.6rem;
        border-radius: 50%;
      }
    }
  }
}
nav {
  flex: 0 0 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
