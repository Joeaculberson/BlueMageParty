<template>
    <div class="bottom-navbar">
      <div>
        Created by Pave Theway of Excalibur | 
        Powered by <a href="https://ffxivcollect.com/spells">FFXIV Collect</a> and <a href="https://github.com/xivapi/NetStone">NetStone</a> | 
        <a href="https://github.com/Joeaculberson/BlueMageParty" target="_blank">
            <img width="15px" src="@/assets/github-logo.png" alt="Github Logo" class="github-logo" />
        </a>
        <a href="https://buymeacoffee.com/joeaculberh" target="_blank">
            <img width="15px" src="@/assets/buymeacoffee-logo.svg" alt="Buy Me a Coffee Logo" class="coffee-logo" />
        </a>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    data() {
      return {
        navItems: [
          { text: 'Home' },
          { text: 'Search' },
          { text: 'Profile' },
          { text: 'Settings' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .bottom-navbar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.774);
    display: flex;
    justify-content: space-around;
    padding: 5px 0;
    font-size: 12px;
    color: rgb(255, 255, 255);
  }
  
  .nav-item {
    text-align: center;
    cursor: pointer;
  }

  .github-logo {
    margin-bottom: -4px;
  }

  .coffee-logo {
    margin-bottom: -4px;
  }

  </style>