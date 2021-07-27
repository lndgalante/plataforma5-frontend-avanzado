import { useQuery } from 'urql';
import { useRouter } from 'next/router'
import { Stack, Text } from '@chakra-ui/react';


const SingleCharacterQuery = `
  query ($characterId: ID!) {
    character(id: $characterId) {
      id
      image
      name
      status
      species
      created
      gender
      origin {
        name
      }
      location {
        name
      }
      episode {
        name
      }
    }
  }
`;


function CharacterPage() {
  // next hooks
  const { query } = useRouter()

  // constants
  const { id } = query
  console.log('\n ~ CharacterPage ~ id', id)


  // urql hooks
  const [result] = useQuery({
    query: SingleCharacterQuery,
    variables: { characterId: id },
  });

  const { data, fetching: isLoading, error } = result;
  console.log('\n ~ CharacterPage ~ error', error)
  console.log('\n ~ CharacterPage ~ isLoading', isLoading)
  console.log('\n ~ CharacterPage ~ data', data)

  if (isLoading || error) {
    return null
  }

  return (
    <Stack>
      <Text color="white" fontSize="2xl">{data.character.name}</Text>
    </Stack>
  );
}

export default CharacterPage;
