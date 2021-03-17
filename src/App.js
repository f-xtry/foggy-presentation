import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryChart, VictoryLine } from 'victory';
import getData from './data';

import {
  FlexBox,
  Heading,
  UnorderedList,
  CodeSpan,
  OrderedList,
  ListItem,
  FullScreen,
  Progress,
  Appear,
  Slide,
  Deck,
  Text,
  Grid,
  Box,
  Quote,
  Image,
  CodePane,
  MarkdownSlide,
  MarkdownSlideSet,
  Notes
} from 'spectacle';

const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif'
  },
  colors: {
    primary: '#D3DAE3',
    secondary: '#93B7E3',
    dark: '#353B47',
    background: '#3D4351',
    main: '#486C9A',
    highlight: '#5294E2',
    pale: '#93B7E3',
    foreground: '#D3DAE3'
  },
  fontSizes: {
    header: '64px',
    paragraph: '16px'
  }
};

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);

const Presentation = () => (
  <Deck theme={theme} template={template}>
    <Slide backgroundColor="background">
      <Heading>FoggyOS</Heading>
      <FlexBox direction="row" justifyContent="center">
        <Text>ОС Налаштована бути налаштовуваною</Text>
      </FlexBox>
      <Notes>
        <ul>
          <li>Ми - двоє програмістів, у яких забагато вільного часу</li>
          <li>Ми вирішили будувати ос</li>
          <li>Ми поважаємо свободу дій користувача, але і його комфорт</li>
        </ul>
      </Notes>
    </Slide>
    <Slide backgroundColor="background">
      <Heading>Будуємо на: GNU/Linux</Heading>
      <UnorderedList>
        <ListItem>
          Linux - операційні системи на основі однойменного ядра. Це - один із найвидатніших прикладів розробки вільного та відкритого програмного забезпечення
        </ListItem>
        <ListItem>
          GNU - операційна система, що є <i>вільним</i> програмним забезпеченням, тобто поважає свободу користувача
        </ListItem>
        <ListItem>
          Дистрибутив Linux (часто скорочується як distro) - це операційна система, створена з колекції програмного забезпечення, яка базується на ядрі Linux і, часто, системі управління пакетами
        </ListItem>
        <small>Визначення: вікіпедія, вебсайт gnu.org</small>
      </UnorderedList>
      <Notes>
        <a style={{ color: theme.colors.main }} href="https://www.howtogeek.com/132624/htg-explains-whats-a-linux-distro-and-how-are-they-different/">What is a linux distro</a>
        <ul>
          <li>Складно будувати усе від початку</li>
          <li>Ми вирішили будувати на основі GNU/linux - наборі вільного програмного забезпечення</li>
          <li>Linux - швидкодія, універсальність, стабільність. 75% серверів та 90% суперкомп'ютерів використовують його. Телефони android11+ - також технічно linux, хоч і не GNU</li>
          <li>GNU/Linux працює не як віндовс. У віндовс є окремі версії, які регулярно випускає компанія Microsoft. Тут - ні. Кожен дистрибутив складається з окремих частин. У всіх спільною є ядро linux та програмне забезпечення GNU. Кожен може взяти дві їхні сумісні версії, додати до них своє улюблене ПЗ (як-от менеджер пакетів і графічне середовище). Утворена операційна система буде називатися дистрибутивом</li>
          <li>Дистрибутиви можуть бути збазовані один на одному. Приклад: Debian -> Kali, Ubuntu -> PopOs, Mint -> Peppermint</li>
          <li>Ми, скоріше за все, будуватимемо на існуючому дистрибутиві Ubuntu. Він - ідеальний для цього, оскільки ор'єнтований на користувача-початківця, і просто працює</li>
        </ul>
      </Notes>
    </Slide>
    <Slide backgroundColor="background">
      <FlexBox direction="column" alignItems="center">
        <Text>Ubuntu 20.10, "Groovy Gorilla", GNOME desktop</Text>
      </FlexBox>
      <FlexBox direction="column" alignItems="center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/97/Ubuntu_20.10_2880p_EN_31_12_2020_13_51_50.png" width="50%" />
        <Quote><small>Ubuntu - операційна система, найпопулярніший у світі дистрибутив Linux. Серед основних цілей Ubuntu - надання сучасного й водночас стабільного програмного забезпечення для пересічного користувача із сильним акцентом на простоту встановлення та користування</small></Quote>
      </FlexBox>
      <Notes>
        <ul>
          <li>Дистрибутиви можуть бути збазовані один на одному. Приклад: Debian -> Kali, Ubuntu -> PopOs, Mint -> Peppermint</li>
          <li>Ми, скоріше за все, будуватимемо на існуючому дистрибутиві Ubuntu. Він - ідеальний для цього, оскільки ор'єнтований на користувача-початківця, і просто працює</li>
          <li>Ubuntu - операційна система, найпопулярніший у світі дистрибутив Linux. Серед основних цілей Ubuntu - надання сучасного й водночас стабільного програмного забезпечення для пересічного користувача із сильним акцентом на простоту встановлення та користування</li>
        </ul>
      </Notes>
    </Slide>
    <Slide backgroundColor="background">
      <Heading>Падіння Windows</Heading>
      <VictoryChart width={600} height={250}>
        <VictoryLine data={getData()} x="date" y="windows"></VictoryLine>
        <VictoryLine data={getData()} x="date" y="osx"></VictoryLine>
        <VictoryLine data={getData()} x="date" y="linux"></VictoryLine>
      </VictoryChart>
      <small><a href="https://gs.statcounter.com/os-market-share/desktop/worldwide/#quarterly-200901-202004" style={{ color: theme.colors.pale, position: "absolute", bottom: "3rem", right: "8rem" }}>Джерело: GlobalStats Statcounter</a></small>
      <Notes>
        <ul>
          <li>В 2010 віндовс покривав 93% ринку, а зараз - 76%. Головним конкурентом є macOs - продукт компанії apple, що за цей період зріс з 5 до 18%. Linux ж зріс від ⅔ до 3.5% - більш, ніж у п'ять разів. В Україні ж віндовс опустився з 98% до 85%, а частка лінукс за деякими даними сягає 4.5%. Більшості вибір простий - або віндовс, або мак. Мак - система, яка не по кишені багатьом. Тому ми будуємо систему, яка, будучи такою ж зручною, є цілком безкоштовною</li>
          <li>Важливою ознакою нашої системи є та, що вартість не повинна бути головною перевагою. Ми цілимося на таку швидкодію, зручність і акуратність, щоб до нас переходили навіть за втричі більшу вартість</li>
        </ul>
      </Notes>
    </Slide>
  </Deck >
);

export default function App(props) {
  return (
    <Presentation />
  )
}