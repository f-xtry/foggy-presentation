import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryChart, VictoryLine, VictoryPie, VoctoryTooltip, VictoryLabel, VictoryTooltip, VictoryVoronoiContainer, VictoryGroup, VictoryScatter } from 'victory';
import getData from './data';
import screenshot_1 from "./screenshots/1_ubuntu.png";
import screenshot_2 from "./screenshots/2_lake.png";

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

const anote = { color: theme.colors.pale, position: "absolute", bottom: "4rem", right: "8rem" };
const Presentation = () => (
  <Deck theme={theme} template={template}>
    <Slide backgroundColor="background">
      <Heading>FoggyOS</Heading>
      <FlexBox flexDirection="row" justifyContent="center">
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
        <ListItem style={{ fontSize: 28 }}>
          Linux - операційні системи на основі однойменного ядра. Це - один із найвидатніших прикладів розробки вільного та відкритого програмного забезпечення
          </ListItem>
        <ListItem style={{ fontSize: 28 }}>
          GNU - операційна система, що є <i>вільним</i> програмним забезпеченням, тобто поважає свободу користувача
          </ListItem>
        <ListItem style={{ fontSize: 28 }}>
          Дистрибутив Linux (часто скорочується як distro) - це операційна система, створена з колекції програмного забезпечення, яка базується на ядрі Linux і, часто, системі управління пакетами
        </ListItem>
      </UnorderedList>
      <small><a style={anote}>Визначення: вікіпедія, вебсайт gnu.org</a></small>
      <Notes>
        <a href="https://www.howtogeek.com/132624/htg-explains-whats-a-linux-distro-and-how-are-they-different/">What is a linux distro</a>
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
      <FlexBox flexDirection="column" alignItems="center">
        <Text>Ubuntu, GNOME desktop</Text>
      </FlexBox>
      <FlexBox flexDirection="row" alignItems="center">
        <img src={screenshot_1} width="50%" />
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
      <FlexBox flexDirection="column" alignItems="center">
        <Heading>Падіння Windows</Heading>
        <FlexBox flexDirection="row" alignItems="center">
          <Box style={{ width: "800px", height: "500px" }}>
            <VictoryChart width={800} height={500} containerComponent={<VictoryVoronoiContainer />}>
              <VictoryGroup color="#3a31c4" data={getData().map((e) => ({ x: e.date, y: e.windows }))} labels={({ datum }) => `windows: ${datum.y}`} labelComponent={<VictoryTooltip style={{ fontSize: 10 }} />}><VictoryLine /><VictoryScatter size={({ active }) => active ? 8 : 3} /></VictoryGroup>
              <VictoryGroup color="#3ac431" data={getData().map((e) => ({ x: e.date, y: e.other }))} labels={({ datum }) => `інші: ${datum.y}`} labelComponent={<VictoryTooltip style={{ fontSize: 10 }} />}><VictoryLine /><VictoryScatter size={({ active }) => active ? 8 : 3} /></VictoryGroup>
            </VictoryChart>
          </Box>
          <Box style={{ width: "500px", height: "400px" }}>
            <FlexBox flexDirection="column" height="100%">
              <Text>Розподіл інших ос</Text>
              <VictoryPie
                style={{ labels: { fill: "white" } }}
                innerRadius={100}
                labelRadius={110}
                labels={({ datum }) => `${datum.name}\n${datum.relative}%`}
                labelComponent={<VictoryLabel />}
                data={[
                  { x: 1, y: 1.98, name: "chrome os", relative: 9.6 },
                  { x: 2, y: 16.74, name: "osx", relative: 80.8 },
                  { x: 3, y: 1.99, name: "linux", relative: 9.60 },
                ]}
              />
            </FlexBox>
          </Box>
        </FlexBox>
      </FlexBox>
      <small><a href="https://gs.statcounter.com/os-market-share/desktop/worldwide/#quarterly-200901-202004" style={anote}>Джерело: GlobalStats Statcounter</a></small>
      <Notes>
        <ul>
          <li>В 2010 віндовс покривав 93% ринку, а зараз - 76%. Головним конкурентом є macOs - продукт компанії apple, що за цей період зріс з 5 до 18%. Linux ж зріс від ⅔ до 3.5% - більш, ніж у п'ять разів. В Україні ж віндовс опустився з 98% до 85%, а частка лінукс за деякими даними сягає 4.5%. Більшості вибір простий - або віндовс, або мак. Мак - система, яка не по кишені багатьом. Тому ми будуємо систему, яка, будучи такою ж зручною, є цілком безкоштовною</li>
          <li>Важливою ознакою нашої системи є та, що вартість не повинна бути головною перевагою. Ми цілимося на таку швидкодію, зручність і акуратність, щоб до нас переходили навіть за втричі більшу вартість</li>
        </ul>
      </Notes>
    </Slide>
    <Slide backgroundColor="background">
      <Heading>Переваги linux: Безпека</Heading>
      <UnorderedList>
        <ListItem>Відкритий код дозволяє забезпечити значно кращу безпеку</ListItem>
        <ListItem>Окремі інструменти запускають програми цілком ізольовано</ListItem>
        <ListItem>Значної шкоди системі не можливо завдати без пароля адміністратора</ListItem>
        <ListItem>Linux не потребує антивіруса</ListItem>
      </UnorderedList>
      <Notes>
        Наслідок - 70% серверів використовують linux
    </Notes>
    </Slide>
    <Slide backgroundColor="background">
      <Heading>Переваги linux: Швидкість, стабільність</Heading>
      <UnorderedList>
        <ListItem>Windows має розмір інсталяції 25-40 GB. Більшість дистрибутивів потребують 4 GB, а деякі серверні - менше 100 MB</ListItem>
        <ListItem>Оперативної пам'яті linux використовує менше - 100-750 MB Linux, 2.4-2.8 GB Windows у стані спокою</ListItem>
        <ListItem>Швидкість linux більша, запускається у 2-5 разів швидше</ListItem>
        <ListItem>Linux стабільніший за інші операційні системи</ListItem>
      </UnorderedList>
      <Notes>
        <ul>
          <li>Швидкість linux більша, бо на фоні менше сервісів</li>
          <li>Linux не вимагає перезавантаження для підтримки рівня продуктивності</li>
          <li>Multitasking is much smoother on linux</li>
        </ul>
        Наслідок - 90% суперкомп'ютерів та андроїд використовують linux
    </Notes>
    </Slide>
    <Slide backgroundColor="background">
      <Heading>Переваги linux: легкість інсталяції</Heading>
      <UnorderedList>
        <ListItem>Інсталяція значно автоматизованіша ніж у інших систем</ListItem>
        <ListItem>Live CD/USB дозволяє спробувати операційну систему Linux, не встановлюючи її</ListItem>
        <ListItem>Працює незалежно від обладнання, часто використовується для "відродження" старих комп’ютерів</ListItem>
      </UnorderedList>
    </Slide>
    <Slide backgroundColor="background">
      <Heading>Переваги linux: Ricing</Heading>
      <Text>Nothing here yet</Text>
    </Slide>
    <Slide backgroundColor="background">
      <Heading>Що ми створюємо: центр "lake"</Heading>
      <FlexBox flexDirection="row">
        <img src={screenshot_2} width="50%" />
        <Quote fontSize="36px">
          Ви можете налаштувати свою систему як завгодно.
          Однак для цього потрібно змінити багато файлів конфігурації, подібних до коду.
          Ми пропонуємо центр налаштувань, який дозволяє зробити це простіше.
          Він буде мати вбудовану функцію встановлення програм та інші подібні
        </Quote>
      </FlexBox>
    </Slide>
  </Deck >
);

export default function App(props) {
  return (
    <Presentation />
  )
}