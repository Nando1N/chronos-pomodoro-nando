import { Container } from "./components/Container";
import { CountDown } from "./components/Countdown";
import { DefaultInput } from "./components/DefaultInput";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";

import "./styles/global.css";
import "./styles/theme.css";

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput
              labelText='task'
              id='meuInput'
              type='number'
              placeholder='Digite algo'
              disabled
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit, amet.</p>
          </div>

          <div className='formRow'>
            <p>Ciclos</p>
            <p>0 0 0 0 0</p>
          </div>

          <div className='formRow'>
            <button>enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
