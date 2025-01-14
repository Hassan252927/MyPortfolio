import portfolio from "../assets/images/portfolio.png";
import fan_merch from "../assets/images/fan_merch.jpg";
import image_ai from "../assets/images/image-ai.png";
import scroll from "../assets/images/scroll.jpg";
import edtech from "../assets/images/edtech.png";
import homepage from "../assets/images/homepage.png";

export const projects = [
  {
    title: "EdTech Website",
    image: edtech,
    link: "https://hassan-edtech.vercel.app/",
    github: "https://github.com/Hassan252927/EdTech",
    description:
      "CodersZonee is an edtech platform designed to facilitate learning and course management.",
  },
  {
    title: "Text-to-Image AI",
    image: image_ai,
    link: "https://hassan-gen-ai.vercel.app/",
    github: "https://github.com/Hassan252927/Gen-AI-master",
    description:
      "Gen AI is a web application that has a range of features, including text to image generation and many more.",
  },
  {
    title: "Fan Merch",
    image: fan_merch,
    github: "https://github.com/Hassan252927/FanMerch-master",
    description:
      "A conceptual website for social media influencers to sell their merch to their fans.",
  },
  {
    title: "Online Ecommerce Platform",
    description: "A comprehensive platform for buying and selling products online.",
    image: homepage,
    link: "https://meal-hut.netlify.app/",
    github: "https://github.com/Hassan252927/Online-Ecommerce-Store",
  },
  {
    title: "React Infinite scroll",
    description: "Infinite scrolling using custom hook and ObservableAPI.",
    image: scroll,
    link: "https://hassan-infinite-quotes.vercel.app",
    github: "https://github.com/Hassan252927/Infinite-Quotes",
  },
  {
    title: "Portfolio v1",
    description: "Built using ReactJS, ThreeJS, CSS3 and lots of ❤️ love.",
    image: portfolio,
    link: "https://hassan-portfolio.vercel.app",
  },
];
