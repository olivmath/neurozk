import { useCallback, useState } from 'react';
import { TonConnectButton, useTonWallet } from '@tonconnect/ui-react';
import {
  Button,
  Input,
  Placeholder,
  Text,
} from '@telegram-apps/telegram-ui';
import { useNavigate } from 'react-router-dom';

import { Page } from '@/components/Page';
import { bem } from '@/css/bem';

import './GameStartPage.css';

const [block, element] = bem('game-start-page');

export const GameStartPage = () => {
  const wallet = useTonWallet();
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleStartGame = useCallback(() => {
    if (wallet && username.trim()) {
      // TODO: Save username and navigate to game
      navigate('/game');
    }
  }, [wallet, username, navigate]);

  if (!wallet) {
    return (
      <Page>
        <Placeholder
          className={element('placeholder')}
          header="Welcome to the Maze Game!"
          description={
            <>
              <Text>Connect your wallet to start playing</Text>
              <TonConnectButton className={element('button')} />
            </>
          }
        />
      </Page>
    );
  }

  return (
    <Page>
      <div className={block()}>
        <Text className={element('title')}>Almost there!</Text>
        <div className={element('input-container')}>
          <Text>Enter your name</Text>
          <Input
            className={element('input')}
            placeholder="Lucas Oliveira"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <Button
          className={element('start-button')}
          disabled={!username.trim()}
          onClick={handleStartGame}
        >
          Start Game
        </Button>
      </div>
    </Page>
  );
};