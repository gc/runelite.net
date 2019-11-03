import { h, Fragment } from 'preact'
import '@gouch/to-title-case'
import '../../components/tooltip.css'
import './adventure-log.scss'
import { connect } from 'react-redux'
import {
  fetchLoot,
  getGroupedLoot,
  getLootFilter,
  setLootFilter
} from '../../modules/loot'
import { bindActionCreators } from 'redux'
import prepare from '../../components/prepare'
import SearchBar from '../../components/search-bar'
import { fetchBootstrap } from '../../modules/bootstrap'
import { fetchPrices } from '../../modules/prices'
import ago from 's-ago'
import adventureLogData from './data'

// this should be moved to its own file
const LogTypes = {
  CLUE: {
    title: 'Clue Scroll',
    card: ({ logData: { drops, difficulty } }) => {
      const scrollName = `${difficulty.toTitleCase()} Clue Scroll`
      if (drops.length === 1) {
        return [
          `I received an item from a ${scrollName}.`,
          `https://static.runelite.net/cache/item/icon/${drops[0].id}.png`
        ]
      }
      return [
        <div>
          I completed a {scrollName} and received...
          <br />
          <br />
          {drops.map(drop => (
            <img
              src={`https://static.runelite.net/cache/item/icon/${drop.id}.png`}
              alt=""
            />
          ))}
        </div>
      ]
    }
  },
  MINIGAME: {
    title: 'Minigame',
    card: log => {
      if (log.logData.minigame === 'Castle Wars') {
        return [
          `I ${log.logData.didWin ? 'won' : 'lost'} a game of Castle Wars.`
        ]
      }

      if (log.logData.minigame === 'Inferno') {
        return [`I completed the Inferno.`]
      }
    }
  },
  RAID: {
    title: 'Chambers of Xeric',
    card: ({ logData: { drops } }) => {
      if (drops.length === 1) {
        return [
          `I received an item from the Chambers of Xeric.`,
          `https://static.runelite.net/cache/item/icon/${drops[0].id}.png`
        ]
      }
      return [
        <div>
          I completed the Chambers of Xeric and received...
          <br />
          <br />
          {drops.map(drop => (
            <img
              src={`https://static.runelite.net/cache/item/icon/${drop.id}.png`}
              alt=""
            />
          ))}
        </div>
      ]
    }
  },
  PET: {
    title: 'Pet',
    card: ({ logData: { itemID } }) => [
      `I got the Pet Name pet!`,
      `https://static.runelite.net/cache/item/icon/${itemID}.png`
    ]
  },
  DIARY_COMPLETION: {
    title: 'Achievement Diary',
    card: ({ logData: { difficulty, region } }) => [
      `I completed the ${difficulty.toTitleCase()} ${region} diary.`
    ]
  },
  QUEST_COMPLETION: {
    title: 'Quest',
    card: ({ logData: { quest } }) => [`I finished the ${quest} quest.`]
  },
  SLAYER_TASK: {
    title: 'Slayer Task',
    card: ({ logData: { amount, task } }) => [`I slayed ${amount} ${task}.`]
  },
  RARE_DROPS: {
    title: 'Rare Drop',
    card: ({ logData: { itemID, monster } }) => [
      `I received a Item Name from ${monster}`,
      `https://static.runelite.net/cache/item/icon/${itemID}.png`
    ]
  },
  LEVEL_UP: {
    title: 'Level Up',
    card: ({ logData: { level, skill } }) => [
      `I leveled up to ${level} ${skill.toLowerCase().toTitleCase()}.`,
      `/img/skillicons/${skill}.png`
    ]
  }
}

const buildLogCard = log => {
  const logType = LogTypes[log.logType]
  if (!logType) return null

  const { title, card } = logType

  const [component, image] = card(log)

  return (
    <div class="adventure-log card mb-2">
      <div class="card-body">
        <div class="left-side">
          {image && (
            <div class="thumbnail">
              <img src={image} alt="" />
            </div>
          )}
          {component}
        </div>
        <small class="time-ago">{ago(new Date(log.time * 1000))}</small>
      </div>
    </div>
  )
}

const handleChange = (event, setLootFilter) =>
  setLootFilter({
    name: event.target.value
  })

const LootTracker = ({ loot, lootFilter, setLootFilter }) => (
  <Fragment>
    <SearchBar
      value={lootFilter.name}
      onInput={e => handleChange(e, setLootFilter)}
    />
    <div>{adventureLogData.map(buildLogCard)}</div>
  </Fragment>
)

const mapStateToProps = (state, props) => ({
  ...props,
  loot: getGroupedLoot(state),
  lootFilter: getLootFilter(state)
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchBootstrap,
      fetchPrices,
      fetchLoot,
      setLootFilter
    },
    dispatch
  )

const prepareComponentData = async ({
  fetchBootstrap,
  fetchPrices,
  fetchLoot
}) => {
  await fetchBootstrap()
  await fetchPrices()
  await fetchLoot()
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(prepare(prepareComponentData)(LootTracker))
