import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';

import { Media } from '../../types';
import styles from '../../styles/Cards.module.scss';

const Cards = dynamic(import('./Cards'));


interface ListProps {
  defaultCard?: boolean;
  heading: string;
  endpoint: string;
}

export default function List({
  defaultCard = true,
  heading,
  endpoint
}: ListProps): React.ReactElement {
  const [media, setMedia] = useState<Media[]>([]);
 
  async function getEndpoint() {
    try {
      const result = await axios.get(endpoint);
      setMedia(result.data.data);
    } catch (error) {}
  }

  useEffect(() => {
    getEndpoint();
  }, []);

  return (
    <div className={styles.listContainer}>
      <strong className={styles.category}>{heading}</strong>
      <div className={styles.cardRow}>
        {media?.map((item, index) => {
          {
            return (
              <Cards
                key={index}
                defaultCard={defaultCard}
                item={item}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
