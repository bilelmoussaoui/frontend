import { GetStaticProps } from 'next'

import ApplicationCollection from '../../../src/components/application/Collection'
import fetchCollection from '../../../src/fetchers'
import Collections from '../../../src/types/Collection'
import Appstream from '../../../src/types/Appstream'

export default function EditorChoiceGames({ applications }) {
  return (
    <ApplicationCollection
      title="Editor's Choice Games"
      applications={applications}
    />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const applications: Appstream[] = await fetchCollection(
    Collections.editorsGames
  )
  applications.sort((a, b) => a.name.localeCompare(b.name))

  return {
    props: {
      applications,
    },
  }
}
