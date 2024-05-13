<div align="center">
  <br />
    <img src="https://i.imgur.com/46Q3GPv.png" alt="Project Banner">
  <br />
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue&color=FFFFFF" alt="framer" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">Modern UI/UX Website/Landing page</h3>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets](#snippets)
6. 🔗 [Links](#links)
7. 💡 [Final Considerations](#final-considerations)

## <a name="introduction">🤖 Introduction</a>

Metaversus - Modern UI/UX website, developed using Next.js, Framer Motion and Tailwind CSS, exemplifies modern UI/UX principles. Its sleek design, seamless animations, and overall user experience set a high standard, serving as a reference or inspiration for future modern applications or websites in general.

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- Framer Motion
- Tailwind CSS

## <a name="features">🔋 Features</a>

👉 **Beautiful Sections**: Includes hero, about, explore, features, get started, what's new, world, insights, feedback, footer, and navbar.

👉 **Parallax Animations**: Engaging effects triggered by mouse movement and scrolling

👉 **Latest UI Trends**: Incorporates modern design elements such as bento grids.

👉 **Cool Gradients**: Enhances visuals with stylish gradients using Tailwind CSS for cards, buttons, etc.

👉 **Responsive**: Ensures seamless functionality and aesthetics across all devices

*And many more, including code architecture and reusability*

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

*Make sure you have the following installed on your machine:*

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) *(Node Package Manager)*

**Cloning the Repository**

```bash
git clone https://github.com/andiondavi/metaversus.git
cd metaversus
```

**Installation**

*Install the project dependencies using npm:*

```bash
npm install
```

**Running the Project**

```bash
npm run dev
```

*Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.*

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>globals.css</code></summary>

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Eudoxus Sans", sans-serif;
  scroll-behavior: smooth;
}

.gradient-01 {
  background-image: linear-gradient(
    270deg,
    hsl(295deg 76% 51%) 0%,
    hsl(284deg 70% 73%) 26%,
    hsl(257deg 70% 86%) 39%,
    hsl(202deg 92% 90%) 50%,
    hsl(215deg 77% 81%) 61%,
    hsl(221deg 73% 70%) 74%,
    hsl(220deg 76% 51%) 100%
  );
  filter: blur(125px);
}

.hero-gradient {
  background: linear-gradient(
    97.86deg,
    #a509ff 0%,
    #34acc7 53.65%,
    #a134c7 100%
  );
}

.gradient-02 {
  position: absolute;
  width: 200px;
  height: 438px;
  top: 0px;
  right: 0px;

  background: #7aebfb;
  filter: blur(190px);
}

.glassmorphism {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.gradient-03 {
  position: absolute;
  width: 404px;
  height: 800px;
  left: 20%;
  top: 5%;

  background: rgba(149, 66, 232, 0.35);
  filter: blur(175px);
  transform: rotate(-114.2deg);
}

.gradient-04 {
  position: absolute;
  width: 304px;
  height: 100vh;
  left: 30%;
  top: 10%;

  background: rgba(45, 72, 152, 0.75);
  filter: blur(200px);
  transform: rotate(-53.13deg);
}

.gradient-05 {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.04) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}

.feedback-gradient {
  position: absolute;
  width: 200px;
  height: 316px;
  left: 0px;
  top: 0px;

  background: #8d39a3;
  filter: blur(175px);
}

.footer-gradient {
  position: absolute;
  width: 500px;
  height: 100px;
  left: 37%;
  bottom: 0;

  background: #65c4fa;
  filter: blur(150px);
}
```

</details>

<details>
<summary><code>styles/index.js</code></summary>

```javascript
const styles = {
  innerWidth: '2xl:max-w-[1280px] w-full',
  interWidth: 'lg:w-[80%] w-[100%]',

  paddings: 'sm:p-16 xs:p-8 px-6 py-12',
  yPaddings: 'sm:py-16 xs:py-8 py-12',
  xPaddings: 'sm:px-16 px-6',
  topPaddings: 'sm:pt-16 xs:pt-8 pt-12',
  bottomPaddings: 'sm:pb-16 xs:pb-8 pb-12',

  flexCenter: 'flex justify-center items-center',
  flexStart: 'flex justify-start items-start',
  flexEnd: 'flex justify-end',
  navPadding: 'pt-[98px]',

  // hero section
  heroHeading:
      'font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white',
  heroDText:
      'md:w-[212px] sm:w-[80px] w-[60px] md:h-[108px] sm:h-[48px] h-[38px] md:border-[18px] border-[9px] rounded-r-[50px] border-white sm:mx-2 mx-[6px]',
};

export default styles;
```

</details>

<details>
<summary><code>tailwind.config.js</code></summary>

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
    './sections/**/*.{html,js,jsx}',
    './styles/**/*.{js,jsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
    },
  },
  plugins: [],
};
```

</details>

<details>
<summary><code>constants/index.js</code></summary>

```javascript
export const exploreWorlds = [
  {
    id: 'world-1',
    imgUrl: '/planet-01.png',
    title: 'The Hogwarts',
  },
  {
    id: 'world-2',
    imgUrl: '/planet-02.png',
    title: 'The Upside Down',
  },
  {
    id: 'world-3',
    imgUrl: '/planet-03.png',
    title: 'Kadirojo Permai',
  },
  {
    id: 'world-4',
    imgUrl: '/planet-04.png',
    title: 'Paradise Island',
  },
  {
    id: 'world-5',
    imgUrl: '/planet-05.png',
    title: 'Hawkins Labs',
  },
];

export const startingFeatures = [
  'Find a world that suits you and you want to enter',
  'Enter the world by reading basmalah to be safe',
  'No need to beat around the bush, just stay on the gas and have fun',
];

export const newFeatures = [
  {
    imgUrl: '/vrpano.svg',
    title: 'A new world',
    subtitle:
        'we have the latest update with new world for you to try never mind',
  },
  {
    imgUrl: '/headset.svg',
    title: 'More realistic',
    subtitle:
        'In the latest update, your eyes are narrow, making the world more realistic than ever',
  },
];

export const insights = [
  {
    imgUrl: '/planet-06.png',
    title: 'The launch of the Metaverse makes Elon musk ketar-ketir',
    subtitle:
        'Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.',
  },
  {
    imgUrl: '/planet-07.png',
    title: '7 tips to easily master the madness of the Metaverse',
    subtitle:
        'Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum',
  },
  {
    imgUrl: '/planet-08.png',
    title: 'With one platform you can explore the whole world virtually',
    subtitle:
        'Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem',
  },
];

export const socials = [
  {
    name: 'twitter',
    url: '/twitter.svg',
    href: 'https://twitter.com',
  },
  {
    name: 'linkedin',
    url: '/linkedin.svg',
    href: 'https://linkedin.com',
  },
  {
    name: 'instagram',
    url: '/instagram.svg',
    href: 'https://instagram.com',
  },
  {
    name: 'facebook',
    url: '/facebook.svg',
    href: 'https://facebook.com',
  },
];
```

</details>

<details>
<summary><code>utils/motion.js</code></summary>

```javascript
export const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 0.8,
    },
  },
};

export const slideIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
    y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const textVariant = (delay) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
      delay,
    },
  },
});

export const textContainer = {
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
};

export const textVariant2 = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeIn',
    },
  },
};

export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const planetVariants = (direction) => ({
  hidden: {
    x: direction === 'left' ? '-100%' : '100%',
    rotate: 120,
  },
  show: {
    x: 0,
    rotate: 0,
    transition: {
      type: 'spring',
      duration: 1.8,
      delay: 0.5,
    },
  },
});

export const zoomIn = (delay, duration) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'tween',
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const footerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 0.5,
    },
  },
};
```

</details>

## <a name="links">🔗 Links</a>

- [Live Website](https://metaversus-davi-andions-projects.vercel.app/)

## <a name="final-considerations">💡 Final Considerations</a>

- Developed by: Davi Andion.
- Github: [@andiondavi](https://github.com/andiondavi)
- Linked in: [https://www.linkedin.com/in/davi-andion/](https://www.linkedin.com/in/davi-andion/)

#