
import { HeroText } from "../components";

export default {
    title: 'React Components/HeroText',
    component: HeroText,
    tags: ['autodocs'],
    argTypes: {
        color: {control: 'color'}
    },
}


export const GreenHero = {
    args: {
        text: 'Green Hero',
        color: 'green',
        size: 'large',
    }
}

export const LargeHero = {
  args: {
    size: 'large',
    text: 'Large Hero',
  },
};

export const BlackHero = {
    args: {
        text: 'Black Hero',
        color: 'black'
    }
}

export const FontHero = {
  args: {
      fontFamily: 'sans-serif',
      text: 'Font Hero'
  }
}

export const SmallHero = {
  args: {
    size: 'small',
    text: 'Small Hero',
  },
};

