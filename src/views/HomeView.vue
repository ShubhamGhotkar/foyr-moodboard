<template>
  <main class="home-container">
    <SideBar class="side-bar" />
    <div class="slider-container">
      <div class="slider-container-main">
        <div>
          <div class="templates">
            <div class="templates_info">
              <h2 class="templates_info-heading">
                Get your project off toa great start with our expertly curated
                templates!
              </h2>
              <p class="templates_info-para">
                start with hand picked moodboard templates for your project
              </p>
              <button class="main-btn">Try Templates</button>
            </div>
            <div class="templates_imgs">
              <img
                src="../assets/img-1.png"
                alt="templates photo"
                class="templates_imgs-img"
              />
            </div>
          </div>
        </div>
        <div>
          <div class="style_container-btn">
            <h3 class="header-2">Style</h3>
            <button
              v-for="button in styleCardArray"
              :key="button.name"
              class="style-btn"
              @click="handleStyleClick(button.name, `styleSlider`)"
            >
              {{ button.name }}
            </button>
          </div>
          <CardSlider
            :sliderArray="styleCardSliders"
            name="styleSlider"
            @handleCard="handleStyleClick"
          />
        </div>
        <div>
          <h3 class="header-2">Room Moodboard Templates <span>60+</span></h3>
          <CardSlider
            :sliderArray="roomCardSliders"
            name="roomSlider"
            @handleCard="handleStyleClick"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import CardSlider from "@/components/CardSlider.vue";

export default {
  created() {
    this.styleCardSliders = this.styleCardArray;
    this.roomCardSliders = this.roomCardArray;
  },
  components: {
    SideBar,
    CardSlider,
  },
  data() {
    return {
      styleCardArray: [
        {
          name: "Minimilist",
          item: 10,
          src: `https://images.unsplash.com/photo-1571898223382-0aa3499f0f2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
          templatesList: [
            {
              name: "Minimilist",
              src: "https://images.unsplash.com/photo-1571898223382-0aa3499f0f2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
              item: 10,
            },
            {
              name: "Minimilist",
              src: "https://images.unsplash.com/photo-1571898223382-0aa3499f0f2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
              item: 10,
            },
            {
              name: "Minimilist",
              src: "https://images.unsplash.com/photo-1571898223382-0aa3499f0f2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
              item: 10,
            },
            {
              name: "Minimilist",
              src: "https://images.unsplash.com/photo-1571898223382-0aa3499f0f2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
              item: 10,
            },
            {
              name: "Minimilist",
              src: "https://images.unsplash.com/photo-1571898223382-0aa3499f0f2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
              item: 10,
            },
            {
              name: "Minimilist",
              src: "https://images.unsplash.com/photo-1571898223382-0aa3499f0f2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
              item: 10,
            },
            {
              name: "Minimilist",
              src: "https://images.unsplash.com/photo-1571898223382-0aa3499f0f2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
              item: 10,
            },
          ],
        },
        {
          name: "Exlectic",
          item: 10,
          src: `https://plus.unsplash.com/premium_photo-1664699099351-4364a337288c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
          templatesList: [
            {
              name: "Exlectic",
              src: `https://plus.unsplash.com/premium_photo-1664699099351-4364a337288c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "Exlectic",
              src: `https://plus.unsplash.com/premium_photo-1664699099351-4364a337288c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "Exlectic",
              src: `https://plus.unsplash.com/premium_photo-1664699099351-4364a337288c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "Exlectic",
              src: `https://plus.unsplash.com/premium_photo-1664699099351-4364a337288c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "Exlectic",
              src: `https://plus.unsplash.com/premium_photo-1664699099351-4364a337288c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "Exlectic",
              src: `https://plus.unsplash.com/premium_photo-1664699099351-4364a337288c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "Exlectic",
              src: `https://plus.unsplash.com/premium_photo-1664699099351-4364a337288c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
          ],
        },
        {
          name: "Japandi",
          item: 10,
          src: `https://images.unsplash.com/photo-1685790474502-fa665337538c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
          templatesList: [
            {
              name: "Japandi",
              src: `https://images.unsplash.com/photo-1685790474502-fa665337538c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "Japandi",
              src: `https://images.unsplash.com/photo-1685790474502-fa665337538c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "Japandi",
              src: `https://images.unsplash.com/photo-1685790474502-fa665337538c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "Japandi",
              src: `https://images.unsplash.com/photo-1685790474502-fa665337538c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "Japandi",
              src: `https://images.unsplash.com/photo-1685790474502-fa665337538c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "Japandi",
              src: `https://images.unsplash.com/photo-1685790474502-fa665337538c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "Japandi",
              src: `https://images.unsplash.com/photo-1685790474502-fa665337538c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
          ],
        },
        {
          name: "Bohemian",
          item: 10,
          src: `https://images.unsplash.com/photo-1532103054090-3491f1a05d0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
          templatesList: [
            {
              name: "Bohemian",
              src: `https://images.unsplash.com/photo-1532103054090-3491f1a05d0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "Bohemian",
              src: `https://images.unsplash.com/photo-1532103054090-3491f1a05d0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "Bohemian",
              src: `https://images.unsplash.com/photo-1532103054090-3491f1a05d0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "Bohemian",
              src: `https://images.unsplash.com/photo-1532103054090-3491f1a05d0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "Bohemian",
              src: `https://images.unsplash.com/photo-1532103054090-3491f1a05d0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "Bohemian",
              src: `https://images.unsplash.com/photo-1532103054090-3491f1a05d0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "Bohemian",
              src: `https://images.unsplash.com/photo-1532103054090-3491f1a05d0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
          ],
        },
        {
          name: "Mid-Century",
          item: 10,
          src: `https://images.unsplash.com/photo-1685475512320-eede8aea2b95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
          templatesList: [
            {
              name: "Mid-Century",
              src: `https://images.unsplash.com/photo-1685475512320-eede8aea2b95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "Mid-Century",
              src: `https://images.unsplash.com/photo-1685475512320-eede8aea2b95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "Mid-Century",
              src: `https://images.unsplash.com/photo-1685475512320-eede8aea2b95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "Mid-Century",
              src: `https://images.unsplash.com/photo-1685475512320-eede8aea2b95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "Mid-Century",
              src: `https://images.unsplash.com/photo-1685475512320-eede8aea2b95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "Mid-Century",
              src: `https://images.unsplash.com/photo-1685475512320-eede8aea2b95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "Mid-Century",
              src: `https://images.unsplash.com/photo-1685475512320-eede8aea2b95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
          ],
        },
        {
          name: "Rustic",
          item: 10,
          src: `https://images.unsplash.com/photo-1547057560-0180a6521dfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
          templatesList: [
            {
              name: "Rustic",
              src: `https://images.unsplash.com/photo-1547057560-0180a6521dfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "Rustic",
              src: `https://images.unsplash.com/photo-1547057560-0180a6521dfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "Rustic",
              src: `https://images.unsplash.com/photo-1547057560-0180a6521dfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "Rustic",
              src: `https://images.unsplash.com/photo-1547057560-0180a6521dfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "Rustic",
              src: `https://images.unsplash.com/photo-1547057560-0180a6521dfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "Rustic",
              src: `https://images.unsplash.com/photo-1547057560-0180a6521dfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "Rustic",
              src: `https://images.unsplash.com/photo-1547057560-0180a6521dfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
          ],
        },
        {
          name: "Transitional",
          item: 10,
          src: `https://images.unsplash.com/photo-1686943812586-65d1d30ab40f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
          templatesList: [
            {
              name: "Transitional",
              src: `https://images.unsplash.com/photo-1686943812586-65d1d30ab40f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "Transitional",
              src: `https://images.unsplash.com/photo-1686943812586-65d1d30ab40f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "Transitional",
              src: `https://images.unsplash.com/photo-1686943812586-65d1d30ab40f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "Transitional",
              src: `https://images.unsplash.com/photo-1686943812586-65d1d30ab40f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "Transitional",
              src: `https://images.unsplash.com/photo-1686943812586-65d1d30ab40f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "Transitional",
              src: `https://images.unsplash.com/photo-1686943812586-65d1d30ab40f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "Transitional",
              src: `https://images.unsplash.com/photo-1686943812586-65d1d30ab40f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
          ],
        },
      ],
      roomCardArray: [
        {
          name: "room Templates 1",
          item: 10,
          src: `https://images.unsplash.com/photo-1687851711955-156c984e7f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8aVVJc25WdGpCMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
          templatesList: [
            {
              name: "room Templates 1",
              src: `https://images.unsplash.com/photo-1687851711955-156c984e7f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8aVVJc25WdGpCMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "room Templates 1",
              src: `https://images.unsplash.com/photo-1687851711955-156c984e7f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8aVVJc25WdGpCMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "room Templates 1",
              src: `https://images.unsplash.com/photo-1687851711955-156c984e7f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8aVVJc25WdGpCMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "room Templates 1",
              src: `https://images.unsplash.com/photo-1687851711955-156c984e7f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8aVVJc25WdGpCMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "room Templates 1",
              src: `https://images.unsplash.com/photo-1687851711955-156c984e7f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8aVVJc25WdGpCMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "room Templates 1",
              src: `https://images.unsplash.com/photo-1687851711955-156c984e7f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8aVVJc25WdGpCMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "room Templates 1",
              src: "https://images.unsplash.com/photo-1571898223382-0aa3499f0f2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
              item: 10,
            },
          ],
        },
        {
          name: "room Templates 2",
          item: 10,
          src: `https://images.unsplash.com/photo-1688435527195-a74720ee6da7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
          templatesList: [
            {
              name: "templates2",
              src: `https://images.unsplash.com/photo-1688435527195-a74720ee6da7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "templates2",
              src: `https://images.unsplash.com/photo-1688435527195-a74720ee6da7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "templates2",
              src: `https://images.unsplash.com/photo-1688435527195-a74720ee6da7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "templates2",
              src: `https://images.unsplash.com/photo-1688435527195-a74720ee6da7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "templates2",
              src: `https://images.unsplash.com/photo-1688435527195-a74720ee6da7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "templates2",
              src: `https://images.unsplash.com/photo-1688435527195-a74720ee6da7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "templates2",
              src: `https://images.unsplash.com/photo-1688435527195-a74720ee6da7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
          ],
        },
        {
          name: "room Templates 3",
          item: 10,
          src: `https://images.unsplash.com/photo-1687822397910-e7b0b016cf7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8aVVJc25WdGpCMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
          templatesList: [
            {
              name: "templates3",
              src: `https://images.unsplash.com/photo-1687822397910-e7b0b016cf7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8aVVJc25WdGpCMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "templates3",
              src: `https://images.unsplash.com/photo-1687822397910-e7b0b016cf7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8aVVJc25WdGpCMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "templates3",
              src: `https://images.unsplash.com/photo-1687822397910-e7b0b016cf7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8aVVJc25WdGpCMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "templates3",
              src: `https://images.unsplash.com/photo-1687822397910-e7b0b016cf7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8aVVJc25WdGpCMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "templates3",
              src: `https://images.unsplash.com/photo-1687822397910-e7b0b016cf7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8aVVJc25WdGpCMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "templates3",
              src: `https://images.unsplash.com/photo-1687822397910-e7b0b016cf7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8aVVJc25WdGpCMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "templates3",
              src: `https://images.unsplash.com/photo-1687822397910-e7b0b016cf7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8aVVJc25WdGpCMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
          ],
        },
        {
          name: "room Templates 4",
          item: 10,
          src: `https://images.unsplash.com/photo-1687912089861-9d208efd7d5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
          templatesList: [
            {
              name: "templates4",
              src: `https://images.unsplash.com/photo-1687912089861-9d208efd7d5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "templates4",
              src: `https://images.unsplash.com/photo-1687912089861-9d208efd7d5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "templates4",
              src: `https://images.unsplash.com/photo-1687912089861-9d208efd7d5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "templates4",
              src: `https://images.unsplash.com/photo-1687912089861-9d208efd7d5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "templates4",
              src: `https://images.unsplash.com/photo-1687912089861-9d208efd7d5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "templates4",
              src: `https://images.unsplash.com/photo-1687912089861-9d208efd7d5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "templates4",
              src: `https://images.unsplash.com/photo-1687912089861-9d208efd7d5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
          ],
        },
        {
          name: "room Templates 5",
          item: 10,
          src: `https://images.unsplash.com/photo-1685113227373-37eceacc5985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
          templatesList: [
            {
              name: "templates5",
              src: `https://images.unsplash.com/photo-1685113227373-37eceacc5985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "templates5",
              src: `https://images.unsplash.com/photo-1685113227373-37eceacc5985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "templates5",
              src: `https://images.unsplash.com/photo-1685113227373-37eceacc5985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "templates5",
              src: `https://images.unsplash.com/photo-1685113227373-37eceacc5985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "templates5",
              src: `https://images.unsplash.com/photo-1685113227373-37eceacc5985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "templates5",
              src: `https://images.unsplash.com/photo-1685113227373-37eceacc5985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "templates5",
              src: `https://images.unsplash.com/photo-1685113227373-37eceacc5985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
          ],
        },
        {
          name: "room Templates 6",
          item: 10,
          src: `https://images.unsplash.com/photo-1687761478797-4c178d4289de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
          templatesList: [
            {
              name: "templates6",
              src: `https://images.unsplash.com/photo-1687761478797-4c178d4289de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "templates6",
              src: `https://images.unsplash.com/photo-1687761478797-4c178d4289de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "templates6",
              src: `https://images.unsplash.com/photo-1687761478797-4c178d4289de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "templates6",
              src: `https://images.unsplash.com/photo-1687761478797-4c178d4289de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "templates6",
              src: `https://images.unsplash.com/photo-1687761478797-4c178d4289de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "templates6",
              src: `https://images.unsplash.com/photo-1687761478797-4c178d4289de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "templates6",
              src: `https://images.unsplash.com/photo-1687761478797-4c178d4289de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
          ],
        },
        {
          name: "room Templates 7",
          item: 10,
          src: `https://images.unsplash.com/photo-1688208092684-6400730f325f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ5fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
          templatesList: [
            {
              name: "templates7",
              src: `https://images.unsplash.com/photo-1688208092684-6400730f325f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ5fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "templates7",
              src: `https://images.unsplash.com/photo-1688208092684-6400730f325f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ5fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "templates7",
              src: `https://images.unsplash.com/photo-1688208092684-6400730f325f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ5fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "templates7",
              src: `https://images.unsplash.com/photo-1688208092684-6400730f325f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ5fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "templates7",
              src: `https://images.unsplash.com/photo-1688208092684-6400730f325f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ5fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "templates7",
              src: `https://images.unsplash.com/photo-1688208092684-6400730f325f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ5fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
            {
              name: "templates7",
              src: `https://images.unsplash.com/photo-1688208092684-6400730f325f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ5fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
              item: 10,
            },
          ],
        },
      ],
      styleButton: [
        "Minimilist",
        "Eclectic",
        "Japandi",
        "Bohemian",
        "Mid-Century",
        "Rustic",
        "Transitional",
      ],
      style: [
        {
          name: "minimilist",
          id: "xyz",
          templatesList: [],
        },
      ],
      styleCardSliders: [],
      roomCardSliders: [],
    };
  },
  methods: {
    handleStyleClick(data, name) {
      if (name === "styleSlider") {
        let cards = this.styleCardArray.find((card) => card.name === data);
        this.styleCardSliders = cards.templatesList;
      } else if (name === "roomSlider") {
        let cards = this.roomCardArray.find((card) => card.name === data);
        console.log("CARDS", cards);
        this.roomCardSliders = cards.templatesList;
        //
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.home-container {
  width: 100vw;
  height: auto;
  display: grid;
  grid-template-columns: 7vw 93vw;
  // overflow: hidden;
}
.slider-container {
  width: 100%;
  grid-column: 2/3;
  padding-top: 7rem;
  min-height: 100vh;
  margin: 0 auto;
  background-color: whitesmoke;

  &-main {
    width: 96%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}
.side-bar {
  grid-column: 1/2;
}
/*TEMPLATES STYLE */
.templates {
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid rgb(216, 214, 214);
  border-radius: 0.6rem;
  &_info {
    flex: 0 0 35%;
    padding: 3rem;
    &-heading {
      font-size: 2.4rem;
    }
    &-para {
      font-size: 1.6rem;
      color: gray;
      padding: 1rem 0;
    }
  }
  &_imgs {
    flex: 0 0 65%;
    overflow: hidden;
    height: 20rem;

    &-img {
      height: 100%;
      width: 100%;
    }
  }
}
/*STYLE BUTTON STYLE */
.style_container-btn {
  width: 50%;
  height: fit-content;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.button-con {
  display: flex;
  gap: 0.6rem;
}

.header-2 > span {
  font-size: 1.6rem;
  background-color: rgba(247, 128, 107, 0.749);
  border-radius: 0.6rem;
  padding: 0.6rem 1.2rem;
}
</style>
