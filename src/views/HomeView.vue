<template>
  <main class="home-container">
    <div class="side-bar">
      <SideBar />
    </div>

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
          </div>
        </div>
        <div>
          <h3 class="header-2 moodboard-heading">MoodBoards</h3>
          <div class="moodboard">
            <div class="moodboard_imgs">
              <img
                src="../assets/images/moodBoard.svg"
                alt="moodboad image"
                class="moodboard_imgs-img"
              />
            </div>
            <div class="moodboard_info">
              <h3 class="moodboard_info-heading">
                You haven't created moodboard yet.
              </h3>
              <p class="moodboard_info-para">Make your first moodboard now!</p>
              <button class="main-btn">Create New MoodBoard</button>
            </div>
          </div>
        </div>
        <div>
          <div class="style_container-btn">
            <h3 class="header-2">Style</h3>
            <div class="style_container-btn-container">
              <button
                v-for="button in styleCardArray"
                :key="button.name"
                class="style-btn"
                @click="() => handleStyleClick(button.name, `styleSlider`)"
              >
                {{ button.name }}
              </button>
            </div>
            <p class="see-all">See all</p>
          </div>
          <div class="cardSlider-container">
            <CardSlider
              :sliderArray="inspirationData"
              name="styleSlider"
              @handleCard="handleStyleClick"
            />
          </div>
        </div>
        <div>
          <div class="room-container">
            <h3 class="header-2">Room Moodboard Templates <span>60+</span></h3>
            <p class="see-all">See all</p>
          </div>
          <div class="cardSlider-container">
            <CardSlider
              :sliderArray="roomArray"
              name="roomSlider"
              @handleCard="handleStyleClick"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import CardSlider from "@/components/CardSlider.vue";
import { roomData, inspirationTypeData } from "../data/demoData";

import uniqid from "uniqid";

export default {
  created() {
    this.styleCardSliders = this.styleCardArray;
    this.roomCardSliders = this.roomCardArray;
    this.roomArray = roomData;
    this.inspirationData = inspirationTypeData;
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
          id: uniqid(),
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
          id: uniqid(),
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
          id: uniqid(),
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
          id: uniqid(),
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
          id: uniqid(),
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
          id: uniqid(),
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
          id: uniqid(),
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
          id: uniqid(),
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
          id: uniqid(),
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
          id: uniqid(),
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
          id: uniqid(),
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
          id: uniqid(),
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
          id: uniqid(),
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
          id: uniqid(),
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
      //  UPDATED CODE BELOW
      roomArray: [],
      inspirationData: [],
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
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.cardSlider-container {
  width: 100%;
  // margin: 0 auto;
}
.home-container {
  width: 100vw;
  min-height: 100vh;
  height: auto;
  display: grid;
  grid-template-columns: 6.5vw 93.5vw;
}
.side-bar {
  grid-column: 1/2;
}
.slider-container {
  grid-column: 2/3;
  padding-top: 6.5rem;
  min-height: 100vh;
  background-color: #fff;
  padding: 8.5rem 4.8rem 2.8rem 2.6rem;
  // background: yellow;

  &-main {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
}

/*Moodboard style */
.moodboard-heading {
  margin-bottom: 1rem;
}
.moodboard {
  width: 100%;
  padding: 3rem 0;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  border: 2px solid #e8e8e8;
  background: #fdfdfd;
  border-radius: 0.4rem;
  &_info {
    &-heading {
      font-size: 2.2rem;
      font-weight: 700;
      line-height: normal;
      color: #222021;
    }
    &-para {
      font-size: 1.4rem;
      margin: 0.8rem 0;
      font-weight: 400;
    }
  }
}
/*TEMPLATES STYLE */
.templates {
  width: 100%;
  margin-bottom: 1rem;
  border: 1.5px solid #e8e8e8;
  border-radius: 0.4rem;
  background-image: url("../assets/images/Banner-img.jpg");
  background-size: cover;
  background-repeat: no-repeat;

  &_info {
    width: 45%;
    padding: 3.5rem;
    &-heading {
      font-size: 2.4rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      color: #0e0e0e;
    }
    &-para {
      font-size: 1.6rem;
      color: #222021;
      padding: 1.4rem 0;
      font-weight: 400;
    }
  }
}
/*STYLE BUTTON STYLE */
.style_container-btn {
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.6rem;

  &-container {
    display: flex;
    align-items: center;
    font-family: Montserrat;
    font-weight: 700;
    gap: 1rem;
  }
}

.button-con {
  display: flex;
  gap: 0.6rem;
}

.header-2 > span {
  font-size: 1.6rem;
  background-color: #e9beb3;
  border-radius: 0.6rem;
  padding: 0.6rem 1.2rem;
}

.see-all {
  color: #222021;
  margin: 0 3rem 0 auto;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
}

.room-container {
  width: 100%;
  display: flex;
  align-items: center;
}
</style>
