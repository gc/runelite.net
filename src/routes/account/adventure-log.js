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
  CLUE: ({ drops, difficulty }) => {
    const scrollName = `${difficulty.toTitleCase()} Clue Scroll`
    if (drops.length === 1) {
      return [
        `I received an item from a ${scrollName}.`,
        `https://static.runelite.net/cache/item/icon/${drops[0].id}.png`
      ]
    }
    return [` I completed a ${scrollName} and received...`]
  },
  MINIGAME: log => {
    if (log.minigame === 'Castle Wars') {
      return [`I ${log.didWin ? 'won' : 'lost'} a game of Castle Wars.`]
    }

    if (log.minigame === 'Inferno') {
      return [`I completed the Inferno.`]
    }
  },
  RAID: ({ drops }) => {
    if (drops.length === 1) {
      return [
        `I received an item from the Chambers of Xeric.`,
        `https://static.runelite.net/cache/item/icon/${drops[0].id}.png`
      ]
    }
    return [' I completed the Chambers of Xeric and received...']
  },
  PET: ({ itemID }) => [
    `I got the Pet Name pet!`,
    `https://static.runelite.net/cache/item/icon/${itemID}.png`
  ],
  DIARY_COMPLETION: ({ difficulty, region }) => [
    `I completed the ${difficulty.toTitleCase()} ${region} diary.`
  ],
  QUEST_COMPLETION: ({ quest }) => [`I finished the ${quest} quest.`],
  SLAYER_TASK: ({ amount, task }) => [`I slayed ${amount} ${task}.`],
  RARE_DROPS: ({ itemID, monster }) => [
    `I received a Item Name from ${monster}`,
    `https://static.runelite.net/cache/item/icon/${itemID}.png`
  ],
  LEVEL_UP: ({ level, skill }) => [
    `I leveled up to ${level} ${skill.toLowerCase().toTitleCase()}.`,
    `/img/skillicons/${skill}.png`
  ],
  BOSS_KILLS: ({ monster, amount }) => [`I killed ${monster} ${amount} times.`]
}

const buildLogCard = log => {
  const renderLog = LogTypes[log.logType]
  if (!renderLog) {
    console.error(`Invalid type: ${log.logType}`)
    return
  }

  const [component, image] = renderLog(log.logData)

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

      {log.logData.drops && log.logData.drops.length > 1 && (
        <div class="card-footer">
          {log.logData.drops.map(drop => (
            <img
              src={`https://static.runelite.net/cache/item/icon/${drop.id}.png`}
              alt=""
            />
          ))}
        </div>
      )}
    </div>
  )
}

const handleChange = (event, setLootFilter) =>
  setLootFilter({
    name: event.target.value
  })

const LootTracker = ({ loot, lootFilter, setLootFilter }) => (
  <Fragment>
    {/*<SearchBar
      value={lootFilter.name}
      onInput={e => handleChange(e, setLootFilter)}
    />*/}
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
