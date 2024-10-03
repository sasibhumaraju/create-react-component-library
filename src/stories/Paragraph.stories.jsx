import { Paragraph } from "../components";


export default {
    title: 'React Components/paragraph',
    component: Paragraph,
    tags: ['autodocs'],
    argTypes: {
        color: { control: 'color' }
    }
}

const paragraphs = 
   [ 'Just now you created this whole template by using started commad "npx create-react-component-library" for building and deploying React Components to NPM For more detailed documention check out storybook.js.org/tutorials/intro-to-storybook/react/en/get-started and react pakage builder docs']

const paragraphs2 = paragraphs.concat("This is secondary paragraph used to test list types for pragraphs.")

export const ParagraphLeft = {
    args: {
        paragraphList: paragraphs
    }
}

export const ParagraphRight = {
    args: {
        paragraphList: paragraphs,
        textAlign: "end"
    }
}

export const ParagraphCenter = {
    args: {
        paragraphList: paragraphs,
        textAlign: "cente"
    }
}

export const ParagraphList = {
    args: {
        paragraphList: paragraphs2,
    }
}

export const ParagraphListDecimal = {
    args: {
        paragraphList: paragraphs2,
        listStyleType: "decimal"
    }
}

export const ParagraphListCircle = {
    args: {
        paragraphList: paragraphs2,
        listStyleType: "circle"
    }
}

