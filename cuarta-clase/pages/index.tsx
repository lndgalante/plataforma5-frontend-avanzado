import Link from 'next/link'
import { useQuery } from 'urql';
import random from 'lodash.random';
import { Fragment, useMemo } from 'react';
import { Stack, Text, Image, Spinner } from '@chakra-ui/react';


type CardProps = {
  id: string;
  imageLink: string;
  name: string;
  specie: string;
  status: 'Alive' | 'Dead';
  lastLocation: string;
  firstSeenIn: string;
};

function Card({ id, imageLink, name, specie, status, lastLocation, firstSeenIn }: CardProps) {
  {/* TODO: Solve minWidth to flexBasis */ }

  return (
    <Link href={`/character/${id}`}>
      <Stack
        height={230}
        as='article'
        flexDirection='row'
        cursor='pointer'
        width={600}
        boxShadow='lg'
        transition='all 400ms ease'
        _hover={{ boxShadow: 'xl', transform: 'translateY(-1px)' }}
        spacing={0}
      >
        <Stack flexBasis={230}>
          <Image src={imageLink} alt={name} borderTopLeftRadius={8} borderBottomLeftRadius={8} />
        </Stack>
        <Stack
          paddingX={4}
          paddingY={2}
          backgroundColor='gray.700'
          flex={1}
          borderBottomRightRadius={8}
          borderTopRightRadius={8}
        >
          <Stack spacing={0}>
            <Text color='white' fontSize='3xl' fontWeight='extrabold'>
              {name}
            </Text>

            <Stack flexDirection='row' spacing={0} alignItems='center'>
              <Stack width={3} height={3} marginRight={2} backgroundColor='green.200' borderRadius='50%'></Stack>
              <Text color='white'>
                {status} - {specie}
              </Text>
            </Stack>
          </Stack>

          <Stack spacing={0}>
            <Text color='gray.400'>Last known location:</Text>
            <Text color='white'>{lastLocation}</Text>
          </Stack>

          <Stack spacing={0}>
            <Text color='gray.400'>First seen in:</Text>
            <Text color='white'>{firstSeenIn}</Text>
          </Stack>
        </Stack>
      </Stack>
    </Link>
  );
}

// Generar un array de seis números aleatorios entre 1 y 671
function createRandomCharacterIds(length: number) {
  const TOTAL_CHARACTERS = 671;
  const generatedIds = [];

  function generateRandomNumber() {
    const randomId = random(1, TOTAL_CHARACTERS);

    if (generatedIds.includes(randomId)) {
      generateRandomNumber();
    }

    return randomId;
  }

  return Array.from({ length }, generateRandomNumber);
}

const RandomCharactersQuery = `
  query ($randomCharactersIds: [ID!]!) {
    charactersByIds(ids: $randomCharactersIds) {
      id
      image
      name
      status
      species
      location {
        name
      }
      episode {
        name
      }
    }
  }
`;

export default function Home() {
  // constants
  const randomCharactersIds = useMemo(() => createRandomCharacterIds(6), []);

  // urql hooks
  const [result] = useQuery({
    query: RandomCharactersQuery,
    variables: { randomCharactersIds },
  });

  const { data, fetching: isLoading, error } = result;

  return (
    <Fragment>
      {isLoading && <Spinner size='xl' color='white' />}

      {error && <Text>Ups we've an error</Text>}

      {!isLoading && data &&
        data.charactersByIds.map((character) => (
          <Card
            key={character.id}
            id={character.id}
            imageLink={character.image}
            name={character.name}
            status={character.status}
            specie={character.species}
            lastLocation={character.location.name}
            firstSeenIn={character.episode[0].name}
          />
        ))
      }
    </Fragment>
  );
}
