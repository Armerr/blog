const path = require("path");

module.exports = {
  title: "Bedshaped",
  description: "Front end project and tips sharing",
  lang: "cn-ZH",
  base: "/",
  themeConfig: {
    siteTitle: "Bedshaped",
    logo: "/logo.jpg",
    //顶部
    nav: [
      {
        text: "前端",
        items: [
          { text: "基础", link: "/articles/basic/index" },
        ],
      },
      { text: "算法", link: "/leetcode/LEET_CODE题解/47. 全排列 II" },
      { text: "项目", link: "/intent/" },
    ],
    //社交
    socialLinks: [{ icon: "github", link: "https://github.com/Armerr" }],
  },
};
