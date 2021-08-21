import { useEffect, useState } from 'react';
import { AchievementMessage, Container } from './styles';

interface ICakeAchievement {
  cakeCounter: number;
}

export const CakeAchievement = ({ cakeCounter }: ICakeAchievement) => {
  const [isShownCakeMessage, setIsShownCakeMessage] = useState(false);

  useEffect(() => {
    if (cakeCounter >= 19) {
      setIsShownCakeMessage(true);
      const timer = setTimeout(() => {
        setIsShownCakeMessage(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [cakeCounter]);

  if (!isShownCakeMessage) return <></>;

  return (
    <Container>
      <AchievementMessage>
        Well done, you clicked on the cake 19 times!
      </AchievementMessage>
    </Container>
  );
};
