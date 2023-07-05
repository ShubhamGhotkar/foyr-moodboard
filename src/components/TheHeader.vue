<template>
  <header class="header">
    <nav>
      <h2 class="header_logo">NEO</h2>
      <ul class="header_list">
        <li class="header_list-item1">
          <input type="text" class="header_list-item1-input" />
        </li>
        <li class="header_list-item2">
          <button class="header_list-item2-btn">Switch to Neo</button>
        </li>
        <li class="header_list-item3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
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
  width: 100%;
  background: linear-gradient(to right, #575656, #2f2f2f);
  display: flex;

  padding: 0.6rem 4rem 0.6rem 2rem;

  position: fixed;
  z-index: 9999;
  &_logo {
    font-size: 3.2rem;
    color: antiquewhite;
  }

  &_list {
    flex: 0 0 40%;
    display: flex;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    gap: 1.2rem;

    &-item1 {
      flex: 0 0 60%;
      &-input {
        width: 100%;
        padding: 1.1rem 1rem;
        border-radius: 0.6rem;
        border: none;

        &:focus {
          outline: none;
        }
      }
    }

    &-item2 {
      flex: 0 0 20%;
      &-btn {
        padding: 1.1rem;
        border-radius: 0.6rem;
        background-color: antiquewhite;
        border: none;
      }
    }
    &-item3 {
      flex: 0 0 20%;
      flex: 0 0 20%;
      &-logo {
        width: 4rem;
        height: 4rem;
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
